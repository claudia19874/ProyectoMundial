
// Estado en memoria (simula lo que hoy resolvería el servidor)

const estado = {
  coleccion: new Map(), // id de carta -> cantidad que tengo (0, 1, 2, 3...)
  sobresDisponibles: 3,
  vista: "album", // "album" | "mercado"
  paginaActual: 0, // índice dentro de ALBUM_DATA (orden = confederaciones en orden)
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
  "Arquero": `<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Zm-7 18c0-3.3 3.1-6 7-6s7 2.7 7 6v1H5v-1Zm2-9h1v2H7v-2Zm10 0h1v2h-1v-2Z"/></svg>`,
  "Defensa": `<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.2 3.4 9 8 11 4.6-2 8-5.8 8-11V5l-8-3Zm0 4 4 1.5v3.6c0 3.1-1.9 5.4-4 6.4-2.1-1-4-3.3-4-6.4V7.5L12 6Z"/></svg>`,
  "Mediocampista": `<svg viewBox="0 0 24 24"><path d="M12 2 2 12l10 10 10-10L12 2Zm0 3.6 6.4 6.4L12 18.4 5.6 12 12 5.6Z"/></svg>`,
  "Delantero": `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 2.2 2.6 1.9-1 3h-3.2l-1-3L12 4.2ZM5 9.6l2.9-.9 1.9 2.3-1.2 2.9-3 .4L5 9.6Zm2.6 8.6 1-2.9 3-.1 1 2.9-2.2 2A8 8 0 0 1 7.6 18.2Zm9.9-5.3-1.2-2.9 1.9-2.3 2.9.9-.6 4.7-3 .4Zm-1.1 5.3 1-2.9 3 .1 1 2.9a8 8 0 0 1-3 2Z"/></svg>`,
};

function iconoDeCarta(carta) {
  return ICONOS[carta.rol] || ICONOS["Delantero"];
}

/**
 * Asocia una barajita con su imagen (carta.foto, ver data.js) y hace
 * fallback automático al ícono SVG si la imagen todavía no existe en
 * /img/jugadores (esto es lo que pide el punto 4 del enunciado:
 * "Gestión de Imágenes en el Cliente" — el servidor solo manda { id, nombre, rol }
 * y el cliente decide cómo dibujarlo).
 */
function mediaCarta(carta) {
  const iconoSVG = iconoDeCarta(carta);
  // Si la carta tiene "bandera" (solo el escudo la tiene), la usamos como
  // respaldo cuando todavía no suben el logo real de la federación.
  const fallback = carta.bandera ? `data-fallback="${carta.bandera}"` : "";
  return `
    <div class="carta__media">
      <img
        src="${carta.foto}"
        alt="${carta.nombre}"
        loading="lazy"
        class="carta__foto"
        ${fallback}
        onerror="
          if (this.dataset.fallback && this.src !== this.dataset.fallback) {
            this.src = this.dataset.fallback;
            this.classList.add('carta__foto--respaldo');
          } else {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'flex';
          }
        "
      />
      <div class="carta__icono" style="display:none">${iconoSVG}</div>
    </div>`;
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
        <button class="confed-nav__link" type="button" data-confed="${c.codigo}">${c.nombre}</button>
      </li>`
  ).join("");

  ul.querySelectorAll(".confed-nav__link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const codigo = btn.dataset.confed;
      const idx = ALBUM_DATA.findIndex((p) => p.confederacion === codigo);
      if (idx >= 0) irAPagina(idx);
    });
  });
}

function marcarConfedActiva() {
  const paisActual = ALBUM_DATA[estado.paginaActual];
  document.querySelectorAll(".confed-nav__link").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.confed === paisActual.confederacion);
  });
}

function renderCarta(carta) {
  const cantidad = estado.coleccion.get(carta.id) || 0;
  const obtenida = cantidad > 0;
  const claseEstado = obtenida ? "carta--obtenida" : "carta--faltante";
  const claseTipo = carta.tipo === "escudo" ? "carta--escudo" : "";
  const claseClic = obtenida ? "carta--clicable" : "";
  const badge = cantidad > 1 ? `<span class="carta__badge">x${cantidad}</span>` : "";

  return `
    <div class="carta ${claseEstado} ${claseTipo} ${claseClic}" data-id="${carta.id}" title="${carta.nombre} · ${carta.rol}">
      ${badge}
      ${obtenida ? mediaCarta(carta) : `<div class="carta__icono">${iconoDeCarta(carta)}</div>`}
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

// ---------------------------------------------------------------------
// Álbum tipo libro: una selección a la vez, con flechas prev/next
// ---------------------------------------------------------------------
function renderLibroPagina() {
  const cont = document.getElementById("libro-pagina");
  const pais = ALBUM_DATA[estado.paginaActual];
  cont.innerHTML = renderPaginaPais(pais);

  const conf = CONFEDERACIONES.find((c) => c.codigo === pais.confederacion);
  document.getElementById("libro-indicador").textContent =
    `${conf ? conf.nombre : ""} · Selección ${estado.paginaActual + 1} de ${ALBUM_DATA.length}`;

  document.getElementById("btn-pagina-prev").disabled = estado.paginaActual === 0;
  document.getElementById("btn-pagina-next").disabled = estado.paginaActual === ALBUM_DATA.length - 1;

  marcarConfedActiva();
  attachClicksEnCartas();
}

function irAPagina(indice) {
  const max = ALBUM_DATA.length - 1;
  estado.paginaActual = Math.min(Math.max(indice, 0), max);
  renderLibroPagina();
}

function initLibro() {
  document.getElementById("btn-pagina-prev").addEventListener("click", () => irAPagina(estado.paginaActual - 1));
  document.getElementById("btn-pagina-next").addEventListener("click", () => irAPagina(estado.paginaActual + 1));
}

// ---------------------------------------------------------------------
// Pestañas fijas: Álbum / Mercado (siempre accesible, no depende de scroll)
// ---------------------------------------------------------------------
function initTabs() {
  const tabAlbum = document.getElementById("tab-album");
  const tabMercado = document.getElementById("tab-mercado");
  const vistaAlbum = document.getElementById("vista-album");
  const vistaMercado = document.getElementById("seccion-mercado");

  function mostrar(vista) {
    estado.vista = vista;
    vistaAlbum.hidden = vista !== "album";
    vistaMercado.hidden = vista !== "mercado";
    tabAlbum.classList.toggle("is-active", vista === "album");
    tabMercado.classList.toggle("is-active", vista === "mercado");
  }

  tabAlbum.addEventListener("click", () => mostrar("album"));
  tabMercado.addEventListener("click", () => mostrar("mercado"));
}

// ---------------------------------------------------------------------
// Modal de detalle de carta: foto grande arriba, info abajo
// ---------------------------------------------------------------------
function abrirModalCarta(id) {
  const info = buscarCartaPorId(id);
  if (!info) return;
  const cantidad = estado.coleccion.get(id) || 0;
  if (cantidad <= 0) return; // no mostramos detalle de algo que no tienen

  document.getElementById("carta-modal-media").innerHTML = mediaCarta(info.carta);
  document.getElementById("carta-modal-pais").textContent = info.pais.pais;
  document.getElementById("carta-modal-nombre").textContent = info.carta.nombre;
  document.getElementById("carta-modal-rol").textContent = info.carta.rol;
  document.getElementById("carta-modal-cantidad").textContent =
    cantidad > 1 ? `Tenés ${cantidad}` : "Tenés 1";

  document.getElementById("carta-overlay").hidden = false;
}

function initModalCarta() {
  const overlay = document.getElementById("carta-overlay");
  document.getElementById("btn-cerrar-carta").addEventListener("click", () => (overlay.hidden = true));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.hidden = true;
  });
}

function attachClicksEnCartas() {
  document.querySelectorAll("#libro-pagina .carta--clicable").forEach((nodo) => {
    nodo.addEventListener("click", () => abrirModalCarta(nodo.dataset.id));
  });
}

// ---------------------------------------------------------------------
// Buscador: salta directo a la página de la selección elegida
// ---------------------------------------------------------------------
function initBuscador() {
  const input = document.getElementById("buscador-pais");
  const resultados = document.getElementById("search-resultados");

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      resultados.hidden = true;
      resultados.innerHTML = "";
      return;
    }
    const coincidencias = ALBUM_DATA
      .map((pais, idx) => ({ pais, idx }))
      .filter(({ pais }) => pais.pais.toLowerCase().includes(q))
      .slice(0, 8);

    if (coincidencias.length === 0) {
      resultados.innerHTML = `<li class="search-bar__vacio">Sin resultados</li>`;
      resultados.hidden = false;
      return;
    }

    resultados.innerHTML = coincidencias
      .map(
        ({ pais, idx }) => `
        <li>
          <button type="button" data-idx="${idx}">
            <img src="https://flagcdn.com/w40/${pais.code}.png" alt="" />
            ${pais.pais}
          </button>
        </li>`
      )
      .join("");
    resultados.hidden = false;

    resultados.querySelectorAll("button[data-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        irAPagina(Number(btn.dataset.idx));
        resultados.hidden = true;
        input.value = "";
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-bar")) resultados.hidden = true;
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
  const nuevoNodo = document.querySelector(`.carta[data-id="${id}"]`);
  if (nuevoNodo && nuevoNodo.classList.contains("carta--clicable")) {
    nuevoNodo.addEventListener("click", () => abrirModalCarta(id));
  }
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
            ${mediaCarta(carta)}
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
        ${mediaCarta(info.carta)}
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


document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderLibroPagina();
  actualizarStats();
  initLibro();
  initTabs();
  initModalCarta();
  initBuscador();
  initSobre();
  initMercado();
});
