import { GROUPS, ALBUM_DATA, CATALOGO_COMPLETO } from "./data.js";


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


const countryArr = CATALOGO_COMPLETO.countries

// inicializa todas las cartas en 0
countryArr.forEach((country) => {
  country.cards.forEach((c) => estado.coleccion.set(c.id, 0));
});

const TOTAL_CARTAS = CATALOGO_COMPLETO.totalCards;

// ---------------------------------------------------------------------
// Íconos por rol (SVG inline, sin dependencias externas)
// ---------------------------------------------------------------------
const ICONOS = {
  "Escudo": `<svg viewBox="0 0 24 24"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm0 2.2 7 3.1v4.7c0 3.9-2.9 6.9-7 8-4.1-1.1-7-4.1-7-8V7.3l7-3.1Z"/></svg>`,
  "Arquero": `<svg viewBox="0 0 24 24"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5Zm-7 18c0-3.3 3.1-6 7-6s7 2.7 7 6v1H5v-1Zm2-9h1v2H7v-2Zm10 0h1v2h-1v-2Z"/></svg>`,
  "Defensa": `<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.2 3.4 9 8 11 4.6-2 8-5.8 8-11V5l-8-3Zm0 4 4 1.5v3.6c0 3.1-1.9 5.4-4 6.4-2.1-1-4-3.3-4-6.4V7.5L12 6Z"/></svg>`,
  "Mediocampista": `<svg viewBox="0 0 24 24"><path d="M12 2 2 12l10 10 10-10L12 2Zm0 3.6 6.4 6.4L12 18.4 5.6 12 12 5.6Z"/></svg>`,
  "Delantero": `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 2.2 2.6 1.9-1 3h-3.2l-1-3L12 4.2ZM5 9.6l2.9-.9 1.9 2.3-1.2 2.9-3 .4L5 9.6Zm2.6 8.6 1-2.9 3-.1 1 2.9-2.2 2A8 8 0 0 1 7.6 18.2Zm9.9-5.3-1.2-2.9 1.9-2.3 2.9.9-.6 4.7-3 .4Zm-1.1 5.3 1-2.9 3 .1 1 2.9a8 8 0 0 1-3 2Z"/></svg>`,
};

function iconoDeCarta(carta) {
  return ICONOS[carta.role] || ICONOS["Delantero"];
}


function sigla3(nombre) {
  const partes = nombre.toUpperCase().split(/\s+/);
  return partes.length === 1 ? partes[0].slice(0, 3) : partes.map((p) => p[0]).join("").slice(0, 3);
}

function buscarCartaPorId(id) {
  for (const pais of CATALOGO_COMPLETO.countries) {
    const carta = pais.cards.find((c) => c.id === id);
    if (carta) return { carta, pais };
  }
  return null;
}

function cantidadObtenidaPais(pais) {
  return pais.cards.filter((c) => estado.coleccion.get(c.id) > 0).length;
}


function renderNav() {
  const ul = document.getElementById("confed-nav-list");
  ul.innerHTML = GROUPS.map(
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
  const claseTipo = carta.role === "Escudo" ? "carta--escudo" : "";
  const badge = cantidad > 1 ? `<span class="carta__badge">x${cantidad}</span>` : "";

  return `
    <div class="carta ${claseEstado} ${claseTipo}" data-id="${carta.id}" title="${carta.name} · ${carta.role}">
      ${badge}
      <div class="carta__icono">${iconoDeCarta(carta)}</div>
      <p class="carta__nombre">${obtenida ? carta.name : "¿?"}</p>
      <p class="carta__rol">${carta.role}</p>
    </div>`;
}


function renderPaginaPais(pais) {
  const obtenidas = cantidadObtenidaPais(pais);
  const total = pais.cards.length;
  // flagcdn requiere 2 letras, usamos los primeros 2 caracteres del countryCode como workaround rápido
  const code2 = pais.countryCode ? pais.countryCode.substring(0, 2).toLowerCase() : "xx";
  return `
    <article class="pagina-pais" id="pais-${sigla3(pais.country)}" data-nombre="${pais.country.toLowerCase()}">
      <div class="pagina-pais__header">
        <img class="pagina-pais__bandera" src="https://flagcdn.com/w80/${code2}.png" alt="Bandera de ${pais.country}" loading="lazy" />
        <h3 class="pagina-pais__nombre">${pais.country}</h3>
        <span class="pagina-pais__progreso">${obtenidas}/${total}</span>
      </div>
      <div class="cartas-grid">
        ${pais.cards.map(renderCarta).join("")}
      </div>
    </article>`;
}


function renderAlbum() {
  const main = document.getElementById("album-main");
  const mercadoSection = document.getElementById("seccion-mercado");

  const groups = ["Grupo A", "Grupo B", "Grupo C", "Grupo D", "Grupo E", "Grupo F", "Grupo G", "Grupo H", "Grupo I", "Grupo J", "Grupo K", "Grupo L"];

  groups.forEach((groupName) => {
    const countryGroup = CATALOGO_COMPLETO.countries.filter((p) => p.wcGroup === groupName);
    if (countryGroup.length === 0) return;
    const seccion = document.createElement("section");
    const groupLetter = groupName.slice(-1)
    seccion.className = "group-section";
    seccion.id = `group-${groupLetter}`;
    seccion.setAttribute("aria-labelledby", `heading-${groupLetter}`);
    seccion.innerHTML = `
      <div class="group-section__heading">
        <h2 id="heading-${groupLetter}">${groupName}</h2>
        <span class="group-section__count">${countryGroup.length} selecciones</span>
      </div>
      <div class="paises-grid">
        ${countryGroup.map(renderPaginaPais).join("")}
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
  CATALOGO_COMPLETO.countries.forEach((pais) => {
    const art = document.getElementById(`pais-${sigla3(pais.country)}`);
    if (!art) return;
    const badge = art.querySelector(".pagina-pais__progreso");
    if (badge) badge.textContent = `${cantidadObtenidaPais(pais)}/${pais.cards.length}`;
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
  const todasLasCartas = CATALOGO_COMPLETO.countries.flatMap((p) => p.cards);
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
            <div class="reveal-carta__icono">${iconoDeCarta(carta)}</div>
            <p class="reveal-carta__nombre">${carta.name}</p>
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
        <div class="carta__icono">${iconoDeCarta(info.carta)}</div>
        <p class="carta__nombre">${info.carta.name}</p>
        <p class="carta__rol">${info.pais.country}</p>
      </div>`;
    })
    .join("");

  select.innerHTML = repetidas
    .map(({ id, cant }) => {
      const info = buscarCartaPorId(id);
      return `<option value="${id}">${id} · ${info.carta.name} (x${cant})</option>`;
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

// Ya que usamos top-level await en data.js, el DOM ya está cargado cuando este código se ejecuta.
// No necesitamos DOMContentLoaded.
renderNav();
renderAlbum();
actualizarStats();
initBuscador();
initSobre();
initMercado();
initScrollSpy();
