/**
 * Descarga automáticamente las fotos de los 528 jugadores del álbum
 * desde Wikipedia (Wikimedia Commons, imágenes de licencia libre).
 *
 * CÓMO USARLO:
 *   1. Necesitas Node 18 o más nuevo (trae fetch nativo). Si no sabes tu versión: node -v
 *   2. Corre desde la raíz del proyecto:  node descargar-fotos.js
 *   3. Esperá, va a tardar unos minutos (528 jugadores, con pausa entre cada uno
 *      para no saturar la API de Wikipedia).
 *   4. Al final va a dejar un reporte de qué jugadores NO encontró foto
 *      (nombres muy comunes, jugadores poco conocidos, etc.) para que esos
 *      pocos los busquen ustedes a mano.
 *
 * NOTA DE LICENCIA: las fotos de Wikipedia/Commons son de uso libre (CC BY-SA
 * en su mayoría), perfectas para un proyecto académico. Si en algún momento
 * publican el proyecto fuera de la clase, lo correcto es dejar créditos a
 * Wikimedia Commons.
 */

const fs = require("fs");
const path = require("path");

const CARPETA_DESTINO = path.join(__dirname, "img", "jugadores");
const ROSTER = JSON.parse(
  fs.readFileSync(path.join(CARPETA_DESTINO, "roster-ids.json"), "utf-8")
);

const WIKI_APIS = [
  "https://es.wikipedia.org/w/api.php",
  "https://en.wikipedia.org/w/api.php",
];
const PAUSA_MS = 350; // para no golpear la API de Wikipedia demasiado rápido

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buscarTituloWikipedia(nombre, pais) {
  const intentos = [
    `${nombre} futbolista`,
    `${nombre} footballer`,
    `${nombre} soccer player`,
    `${nombre} selección de fútbol de ${pais}`,
    `${nombre} national football team`,
    nombre,
  ];

  const PALABRAS_CLAVE = [
    "futbolista",
    "footballer",
    "soccer",
    "association football",
    "selección",
    "national team",
    pais.toLowerCase(),
  ];

  for (const wikiApi of WIKI_APIS) {
    for (const query of intentos) {
      const url = `${wikiApi}?action=query&list=search&srsearch=${encodeURIComponent(
        query
      )}&format=json&srlimit=3`;
      try {
        const res = await fetchConReintentos(url);
        if (!res || !res.ok) continue;
        const data = await res.json();
        const candidatos = data?.query?.search || [];
        if (candidatos.length === 0) continue;

        // preferimos el candidato cuyo snippet menciona que es futbolista/de ese país
        const mejor =
          candidatos.find((c) => {
            const texto = `${c.title} ${c.snippet}`.toLowerCase().replace(/<[^>]+>/g, "");
            return PALABRAS_CLAVE.some((k) => texto.includes(k));
          }) || candidatos[0];

        return { titulo: mejor.title, wikiApi };
      } catch {
        // sigue con el próximo intento
      }
    }
  }
  return null;
}

async function fetchConReintentos(url, intentosMax = 2) {
  for (let i = 0; i <= intentosMax; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "ProyectoMundial2026-Escolar/1.0 (proyecto de clase; contacto: estudiante@ejemplo.com)",
        },
      });
      return res;
    } catch (err) {
      if (i === intentosMax) return null;
      await esperar(500 * (i + 1));
    }
  }
  return null;
}

async function obtenerUrlImagen(titulo, wikiApi) {
  const url = `${wikiApi}?action=query&prop=pageimages&piprop=original&titles=${encodeURIComponent(
    titulo
  )}&format=json`;
  const res = await fetchConReintentos(url);
  if (!res || !res.ok) return null;
  const data = await res.json();
  const paginas = data?.query?.pages;
  if (!paginas) return null;
  const pagina = Object.values(paginas)[0];
  return pagina?.original?.source || null;
}

async function descargarImagen(url, destino) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destino, buffer);
}

async function procesarJugador(jugador) {
  const extension = ".jpg";
  const destino = path.join(CARPETA_DESTINO, `${jugador.id}${extension}`);

  if (fs.existsSync(destino)) {
    return { ...jugador, estado: "ya-existia" };
  }

  try {
    const encontrado = await buscarTituloWikipedia(jugador.nombre, jugador.pais);
    if (!encontrado) return { ...jugador, estado: "sin-resultado-busqueda" };

    const urlImagen = await obtenerUrlImagen(encontrado.titulo, encontrado.wikiApi);
    if (!urlImagen) return { ...jugador, estado: "sin-imagen-en-articulo", titulo: encontrado.titulo };

    await descargarImagen(urlImagen, destino);
    return { ...jugador, estado: "descargada", titulo: encontrado.titulo, urlImagen };
  } catch (err) {
    return { ...jugador, estado: "error", error: err.message };
  }
}

async function main() {
  console.log(`Descargando fotos para ${ROSTER.length} jugadores...\n`);

  const resultados = [];
  for (let i = 0; i < ROSTER.length; i++) {
    const jugador = ROSTER[i];
    const r = await procesarJugador(jugador);
    resultados.push(r);

    const icono =
      r.estado === "descargada" ? "✅" : r.estado === "ya-existia" ? "⏭️ " : "⚠️ ";
    console.log(
      `${icono} [${i + 1}/${ROSTER.length}] ${jugador.id} · ${jugador.nombre} (${jugador.pais}) → ${r.estado}`
    );

    await esperar(PAUSA_MS);
  }

  const exitosas = resultados.filter((r) => r.estado === "descargada").length;
  const yaExistian = resultados.filter((r) => r.estado === "ya-existia").length;
  const fallidas = resultados.filter(
    (r) => r.estado !== "descargada" && r.estado !== "ya-existia"
  );

  console.log("\n========== RESUMEN ==========");
  console.log(`Descargadas ahora: ${exitosas}`);
  console.log(`Ya existían:       ${yaExistian}`);
  console.log(`Sin foto:          ${fallidas.length}`);

  if (fallidas.length) {
    const reporte = path.join(CARPETA_DESTINO, "faltantes.json");
    fs.writeFileSync(reporte, JSON.stringify(fallidas, null, 2));
    console.log(`\nRevisen el detalle de las que faltaron en: img/jugadores/faltantes.json`);
    console.log("Para esas, busquen la foto a mano y guárdenla como <ID>.jpg en img/jugadores/");
  }
}

main();
