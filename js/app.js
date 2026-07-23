
// Estado en memoria (simula lo que hoy resolvería el servidor)

const estado = {
  coleccion: new Map(), // id de carta -> cantidad que tengo (0, 1, 2, 3...)
  sobresDisponibles: 3,
  ofertas: [
    {
      id: "OF-1",
      grupo: "Grupo 4",
      ofrece: "BRA-09",
      pide: "ARG-10",
    },
    {
      id: "OF-2",
      grupo: "Grupo 7",
      ofrece: "JPN-ESC",
      pide: "MEX-01",
    },
  ],
};

// inicializa todas las cartas en 0
ALBUM_DATA.forEach((pais) => {
  pais.cartas.forEach((c) => estado.coleccion.set(c.id, 0));
});

const TOTAL_CARTAS = ALBUM_DATA.reduce((acc, p) => acc + p.cartas.length, 0);

// ---------------------------------------------------------------------
// Íconos por rol (SVG inline, sin dependencias externas)
// ---------------------------------------------------------------------
const ICONOS = {
  "Federación": `<svg viewBox="0 0 24 24"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm0 2.2 7 3.1v4.7c0 3.9-2.9 6.9-7 8-4.1-1.1-7-4.1-7-8V7.3l7-3.1Z"/></svg>`,
  "Portero": `<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Zm-7 18c0-3.3 3.1-6 7-6s7 2.7 7 6v1H5v-1Zm2-9h1v2H7v-2Zm10 0h1v2h-1v-2Z"/></svg>`,
  "Defensa": `<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.2 3.4 9 8 11 4.6-2 8-5.8 8-11V5l-8-3Zm0 4 4 1.5v3.6c0 3.1-1.9 5.4-4 6.4-2.1-1-4-3.3-4-6.4V7.5L12 6Z"/></svg>`,
  "Centrocampista": `<svg viewBox="0 0 24 24"><path d="M12 2 2 12l10 10 10-10L12 2Zm0 3.6 6.4 6.4L12 18.4 5.6 12 12 5.6Z"/></svg>`,
  "Delantero": `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 2.2 2.6 1.9-1 3h-3.2l-1-3L12 4.2ZM5 9.6l2.9-.9 1.9 2.3-1.2 2.9-3 .4L5 9.6Zm2.6 8.6 1-2.9 3-.1 1 2.9-2.2 2A8 8 0 0 1 7.6 18.2Zm9.9-5.3-1.2-2.9 1.9-2.3 2.9.9-.6 4.7-3 .4Zm-1.1 5.3 1-2.9 3 .1 1 2.9a8 8 0 0 1-3 2Z"/></svg>`,
};

function iconoDeCarta(carta) {
  return ICONOS[carta.rol] || ICONOS["Delantero"];
}

// Algunas barajitas todavía no tienen foto real: el equipo dejó cargado un
// placeholder genérico de Wikimedia para esos casos. Mientras no se
// reemplace por una foto real, mostramos el ícono por rol en su lugar.
function tieneFotoReal(carta) {
  return Boolean(carta.foto) && !carta.foto.includes("No-image-placeholder");
}

// Se llama desde el atributo onerror del <img> si la URL de la foto real
// falla al cargar (link roto, etc.): cae al ícono por rol sin romper el layout.
function manejarErrorFoto(img, rol) {
  const contenedor = img.parentElement;
  img.remove();
  if (contenedor) contenedor.innerHTML = ICONOS[rol] || ICONOS["Delantero"];
}

// Contenido visual de una carta: foto real si existe, si no el ícono por rol.
function mediaDeCarta(carta) {
  if (tieneFotoReal(carta)) {
    return `<img class="carta__foto" src="${carta.foto}" alt="${carta.nombre}" loading="lazy" onerror="manejarErrorFoto(this, '${carta.rol}')" />`;
  }
  return iconoDeCarta(carta);
}


function sigla3(nombre) {
  const partes = nombre.toUpperCase().split(/\s+/);
  return partes.length === 1 ? partes[0].slice(0, 3) : partes.map((p) => p[0]).join("").slice(0, 3);
}

function buscarCartaPorId(id) {
  for (const pais of ALBUM_DATA) {
    const carta = pais.cartas.find((c) => c.id === id);
    if (carta) return { carta, pais };
  }
  return null;
}

function cantidadObtenidaPais(pais) {
  return pais.cartas.filter((c) => estado.coleccion.get(c.id) > 0).length;
}


function renderNav() {
  const ul = document.getElementById("confed-nav-list");
  ul.innerHTML = CONFEDERACIONES.map(
    (c) => `
      <li>
        <a class="confed-nav__link" href="#confed-${c.codigo}">${c.nombre}</a>
      </li>`
  ).join("") + `
      <li><a class="confed-nav__link" href="#seccion-mercado">Mercado</a></li>`;
}


function renderCarta(carta) {
  const cantidad = estado.coleccion.get(carta.id) || 0;
  const obtenida = cantidad > 0;
  const claseEstado = obtenida ? "carta--obtenida" : "carta--faltante";
  const claseTipo = carta.tipo === "escudo" ? "carta--escudo" : "";
  const badge = cantidad > 1 ? `<span class="carta__badge">x${cantidad}</span>` : "";

  // La foto real solo se muestra si ya la conseguiste; si todavía no la
  // tenés, la carta queda como silueta (no revela quién es).
  const media = obtenida ? mediaDeCarta(carta) : iconoDeCarta(carta);

  return `
    <div class="carta ${claseEstado} ${claseTipo}" data-id="${carta.id}" title="${carta.nombre} · ${carta.rol}">
      ${badge}
      <div class="carta__icono">${media}</div>
      <p class="carta__nombre">${obtenida ? carta.nombre : "¿?"}</p>
      <p class="carta__rol">${carta.rol}</p>
    </div>`;
}


function renderPaginaPais(pais) {
  const obtenidas = cantidadObtenidaPais(pais);
  const total = pais.cartas.length;
  return `
    <article class="pagina-pais" id="pais-${sigla3(pais.pais)}" data-nombre="${pais.pais.toLowerCase()}">
      <div class="pagina-pais__header">
        <img class="pagina-pais__bandera" src="https://flagcdn.com/w80/${pais.code}.png" alt="Bandera de ${pais.pais}" loading="lazy" />
        <h3 class="pagina-pais__nombre">${pais.pais}</h3>
        <span class="pagina-pais__progreso">${obtenidas}/${total}</span>
      </div>
      <div class="cartas-grid">
        ${pais.cartas.map(renderCarta).join("")}
      </div>
    </article>`;
}


function renderAlbum() {
  const main = document.getElementById("album-main");
  const mercadoSection = document.getElementById("seccion-mercado");

  CONFEDERACIONES.forEach((conf) => {
    const paisesConf = ALBUM_DATA.filter((p) => p.confederacion === conf.codigo);
    const seccion = document.createElement("section");
    seccion.className = "confed-section";
    seccion.id = `confed-${conf.codigo}`;
    seccion.setAttribute("aria-labelledby", `heading-${conf.codigo}`);
    seccion.innerHTML = `
      <div class="confed-section__heading">
        <h2 id="heading-${conf.codigo}">${conf.nombre}</h2>
        <span class="confed-section__count">${paisesConf.length} selecciones</span>
      </div>
      <div class="paises-grid">
        ${paisesConf.map(renderPaginaPais).join("")}
      </div>
    `;
    main.insertBefore(seccion, mercadoSection);
  });
}


function actualizarStats() {
  const obtenidas = [...estado.coleccion.values()].filter((v) => v > 0).length;
  document.getElementById("stat-coleccion").textContent = `${obtenidas} / ${TOTAL_CARTAS}`;
  document.getElementById("stat-sobres").textContent = `Sobres: ${estado.sobresDisponibles}`;
  document.getElementById("progreso-global-fill").style.width = `${(obtenidas / TOTAL_CARTAS) * 100}%`;

  // refresca los contadores de cada país sin volver a montar todo el DOM
  ALBUM_DATA.forEach((pais) => {
    const art = document.getElementById(`pais-${sigla3(pais.pais)}`);
    if (!art) return;
    const badge = art.querySelector(".pagina-pais__progreso");
    if (badge) badge.textContent = `${cantidadObtenidaPais(pais)}/${pais.cartas.length}`;
  });
}


function refrescarCartaEnDOM(id) {
  const nodo = document.querySelector(`.carta[data-id="${id}"]`);
  if (!nodo) return;
  const info = buscarCartaPorId(id);
  if (!info) return;
  nodo.outerHTML = renderCarta(info.carta);
}


function initBuscador() {
  const input = document.getElementById("buscador-pais");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(".pagina-pais").forEach((art) => {
      const coincide = art.dataset.nombre.includes(q);
      art.style.display = coincide ? "" : "none";
    });
    // oculta secciones de confederación que quedaron sin resultados
    document.querySelectorAll(".confed-section").forEach((sec) => {
      if (sec.id === "seccion-mercado") return;
      const visibles = sec.querySelectorAll('.pagina-pais:not([style*="display: none"])').length;
      sec.style.display = visibles === 0 ? "none" : "";
    });
  });
}

function generarSobreLocal() {
  const todasLasCartas = ALBUM_DATA.flatMap((p) => p.cartas);
  const sobre = [];
  for (let i = 0; i < 7; i++) {
    const carta = todasLasCartas[Math.floor(Math.random() * todasLasCartas.length)];
    sobre.push(carta);
  }
  return sobre;
}

function initSobre() {
  const overlay = document.getElementById("sobre-overlay");
  const contenido = document.getElementById("sobre-contenido");
  const btnAbrir = document.getElementById("btn-abrir-sobre");
  const btnCerrar = document.getElementById("btn-cerrar-sobre");

  function abrirModal() {
    if (estado.sobresDisponibles <= 0) {
      alert("No te quedan sobres disponibles por ahora.");
      return;
    }
    contenido.innerHTML = `
      <div class="sobre-inicial">
        <div class="sobre-inicial__icono" aria-hidden="true">✉️</div>
        <p>Tu sobre trae 7 figuritas al azar de cualquier selección clasificada.</p>
        <button class="btn-revelar" id="btn-revelar">Abrir</button>
      </div>`;
    overlay.hidden = false;
    document.getElementById("btn-revelar").addEventListener("click", revelarSobre);
  }

  function revelarSobre() {
    estado.sobresDisponibles -= 1;
    const sobre = generarSobreLocal();
    let nuevas = 0;
    let repetidas = 0;

    const html = sobre
      .map((carta, i) => {
        const teniaAntes = estado.coleccion.get(carta.id) || 0;
        estado.coleccion.set(carta.id, teniaAntes + 1);
        const esNueva = teniaAntes === 0;
        if (esNueva) nuevas++;
        else repetidas++;
        return `
          <div class="reveal-carta ${esNueva ? "reveal-carta--nueva" : "reveal-carta--repetida"}" style="animation-delay:${i * 0.08}s">
            <div class="reveal-carta__icono">${mediaDeCarta(carta)}</div>
            <p class="reveal-carta__nombre">${carta.nombre}</p>
            <p class="reveal-carta__tag">${esNueva ? "¡Nueva!" : "Repetida"}</p>
          </div>`;
      })
      .join("");

    contenido.innerHTML = `
      <div class="reveal-grid">${html}</div>
      <p class="sobre-resumen">${nuevas} nuevas · ${repetidas} repetidas</p>
    `;

    sobre.forEach((c) => refrescarCartaEnDOM(c.id));
    actualizarStats();
    renderRepetidas();
  }

  btnAbrir.addEventListener("click", abrirModal);
  btnCerrar.addEventListener("click", () => (overlay.hidden = true));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.hidden = true;
  });
}


function renderRepetidas() {
  const cont = document.getElementById("repetidas-lista");
  const select = document.getElementById("select-repetida");

  const repetidas = [];
  estado.coleccion.forEach((cant, id) => {
    if (cant > 1) repetidas.push({ id, cant });
  });

  if (repetidas.length === 0) {
    cont.innerHTML = `<p class="mercado__vacio">Todavía no tenés figuritas repetidas. Abrí sobres para conseguir.</p>`;
    select.innerHTML = `<option value="">— sin repetidas —</option>`;
    document.getElementById("btn-proponer").disabled = true;
    return;
  }

  document.getElementById("btn-proponer").disabled = false;

  cont.innerHTML = repetidas
    .map(({ id, cant }) => {
      const info = buscarCartaPorId(id);
      return `<div class="carta carta--obtenida" style="aspect-ratio:3/4">
        <span class="carta__badge">x${cant}</span>
        <div class="carta__icono">${mediaDeCarta(info.carta)}</div>
        <p class="carta__nombre">${info.carta.nombre}</p>
        <p class="carta__rol">${info.pais.pais}</p>
      </div>`;
    })
    .join("");

  select.innerHTML = repetidas
    .map(({ id, cant }) => {
      const info = buscarCartaPorId(id);
      return `<option value="${id}">${id} · ${info.carta.nombre} (x${cant})</option>`;
    })
    .join("");
}

function renderOfertas() {
  const ul = document.getElementById("ofertas-lista");
  if (estado.ofertas.length === 0) {
    ul.innerHTML = `<p class="mercado__vacio">No hay ofertas activas en este momento.</p>`;
    return;
  }
  ul.innerHTML = estado.ofertas
    .map(
      (of) => `
      <li class="oferta-item" data-oferta="${of.id}">
        <span><strong>${of.grupo}</strong> ofrece ${of.ofrece} por tu ${of.pide}</span>
        <span class="oferta-item__acciones">
          <button class="btn-aceptar" data-accion="aceptar">Aceptar</button>
          <button class="btn-rechazar" data-accion="rechazar">Rechazar</button>
        </span>
      </li>`
    )
    .join("");

  ul.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const li = btn.closest(".oferta-item");
      const id = li.dataset.oferta;
      estado.ofertas = estado.ofertas.filter((o) => o.id !== id);
      renderOfertas();
    });
  });
}

function initMercado() {
  renderRepetidas();
  renderOfertas();

  document.getElementById("form-propuesta").addEventListener("submit", (e) => {
    e.preventDefault();
    const grupo = document.getElementById("input-grupo").value.trim();
    const pedido = document.getElementById("input-pedido").value.trim();
    const ofrecida = document.getElementById("select-repetida").value;
    if (!ofrecida) return;

    estado.ofertas.push({
      id: `OF-${Date.now()}`,
      grupo: grupo || "Tu grupo",
      ofrece: ofrecida,
      pide: pedido || "?",
    });
    renderOfertas();
    e.target.reset();
    alert("Propuesta guardada localmente. Cuando la API esté lista, esto se enviará por Socket.IO al otro grupo.");
  });
}


function initScrollSpy() {
  const links = document.querySelectorAll(".confed-nav__link");
  const secciones = document.querySelectorAll(".confed-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-active"));
        const activo = document.querySelector(`.confed-nav__link[href="#${entry.target.id}"]`);
        if (activo) activo.classList.add("is-active");
      });
    },
    { rootMargin: "-140px 0px -70% 0px" }
  );

  secciones.forEach((s) => observer.observe(s));
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderAlbum();
  actualizarStats();
  initBuscador();
  initSobre();
  initMercado();
  initScrollSpy();
});
