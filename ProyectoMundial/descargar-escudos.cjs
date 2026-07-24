/**
 * Descarga automáticamente los escudos (logos) de las 48 federaciones
 * de fútbol desde Wikipedia/Wikimedia Commons.
 *
 * CÓMO USARLO (igual que descargar-fotos.cjs):
 *   node descargar-escudos.cjs
 *
 * Deja los archivos en img/escudos/<code>.png (ej: img/escudos/jp.png para Japón)
 * y un reporte de los que no encontró en img/escudos/faltantes.json
 */

const fs = require("fs");
const path = require("path");

const CARPETA_DESTINO = path.join(__dirname, "img", "escudos");
const PAISES = JSON.parse(
  fs.readFileSync(path.join(CARPETA_DESTINO, "paises.json"), "utf-8")
);

const WIKI_APIS = [
  "https://es.wikipedia.org/w/api.php",
  "https://en.wikipedia.org/w/api.php",
];
const PAUSA_MS = 350;
const HEADERS = {
  "User-Agent":
    "ProyectoMundial2026-Escolar/1.0 (proyecto de clase; contacto: estudiante@ejemplo.com)",
};

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function buscarTituloWikipedia(nombrePais) {
  const intentos = [
    `Federación de fútbol de ${nombrePais}`,
    `Asociación de fútbol de ${nombrePais}`,
    `${nombrePais} Football Association`,
    `${nombrePais} Football Federation`,
    `Selección de fútbol de ${nombrePais}`,
    `${nombrePais} national football team`,
  ];

  for (const wikiApi of WIKI_APIS) {
    for (const query of intentos) {
      const url = `${wikiApi}?action=query&list=search&srsearch=${encodeURIComponent(
        query
      )}&format=json&srlimit=1`;
      try {
        const res = await fetch(url, { headers: HEADERS });
        if (!res.ok) continue;
        const data = await res.json();
        const resultado = data?.query?.search?.[0];
        if (resultado) return { titulo: resultado.title, wikiApi };
      } catch {
        // sigue con el próximo intento
      }
    }
  }
  return null;
}

async function obtenerUrlImagen(titulo, wikiApi) {
  const url = `${wikiApi}?action=query&prop=pageimages&piprop=original&titles=${encodeURIComponent(
    titulo
  )}&format=json`;
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) return null;
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

async function procesarPais(pais) {
  const destino = path.join(CARPETA_DESTINO, `${pais.code}.png`);

  if (fs.existsSync(destino)) {
    return { ...pais, estado: "ya-existia" };
  }

  try {
    const encontrado = await buscarTituloWikipedia(pais.nombre);
    if (!encontrado) return { ...pais, estado: "sin-resultado-busqueda" };

    const urlImagen = await obtenerUrlImagen(encontrado.titulo, encontrado.wikiApi);
    if (!urlImagen) return { ...pais, estado: "sin-imagen-en-articulo", titulo: encontrado.titulo };

    await descargarImagen(urlImagen, destino);
    return { ...pais, estado: "descargada", titulo: encontrado.titulo, urlImagen };
  } catch (err) {
    return { ...pais, estado: "error", error: err.message };
  }
}

async function main() {
  console.log(`Descargando escudos para ${PAISES.length} federaciones...\n`);

  const resultados = [];
  for (let i = 0; i < PAISES.length; i++) {
    const pais = PAISES[i];
    const r = await procesarPais(pais);
    resultados.push(r);

    const icono =
      r.estado === "descargada" ? "✅" : r.estado === "ya-existia" ? "⏭️ " : "⚠️ ";
    console.log(`${icono} [${i + 1}/${PAISES.length}] ${pais.code} · ${pais.nombre} → ${r.estado}`);

    await esperar(PAUSA_MS);
  }

  const exitosas = resultados.filter((r) => r.estado === "descargada").length;
  const yaExistian = resultados.filter((r) => r.estado === "ya-existia").length;
  const fallidas = resultados.filter(
    (r) => r.estado !== "descargada" && r.estado !== "ya-existia"
  );

  console.log("\n========== RESUMEN ==========");
  console.log(`Descargados ahora: ${exitosas}`);
  console.log(`Ya existían:       ${yaExistian}`);
  console.log(`Sin escudo:        ${fallidas.length}`);

  if (fallidas.length) {
    const reporte = path.join(CARPETA_DESTINO, "faltantes.json");
    fs.writeFileSync(reporte, JSON.stringify(fallidas, null, 2));
    console.log(`\nRevisen el detalle en: img/escudos/faltantes.json`);
    console.log(
      "IMPORTANTE: si no encuentra el escudo real, la carta cae automáticamente en la bandera (ya la tienen puesta como respaldo), así que no se rompe nada aunque falten algunos."
    );
  }
}

main();
