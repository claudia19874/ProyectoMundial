import { GROUPS, ALBUM_DATA, CATALOGO_COMPLETO, FLAG_CODES, CANT_SOBRES, BuscarIntercambios, GRUPO_PROY_ID, TODOS_LOS_GRUPOS } from "./data.js"; import { io } from "socket.io-client"; const APIKEY = import.meta.env.VITE_APIKEY; const APIURL = import.meta.env.VITE_API_URL;
const socket = io(APIURL, {
  auth: { apiKey: APIKEY }
})

var intercambios = await BuscarIntercambios();

const estado = {
  coleccion: new Map(), // id de carta -> cantidad que tengo (0, 1, 2, 3...)
  sobresDisponibles: CANT_SOBRES,
};


function initAlbum() {

  const countryArr = CATALOGO_COMPLETO.countries;

  // Inicializa todas las cartas en 0 primero
  countryArr.forEach((country) => {
    country.cards.forEach((c) => estado.coleccion.set(c.id, 0));
  });

  // Sobreescribe con el estado real del álbum desde la API:
  // - isStuck: true  → la carta está pegada (cuenta como 1 en el álbum)
  // - duplicatesCount → cuántas repetidas hay en el inventario
  // La colección local representa: 0=missing, 1=pegada, 2+=pegada+repetidas
  if (ALBUM_DATA && ALBUM_DATA.pages) {
    ALBUM_DATA.pages.forEach((page) => {
      page.stickers.forEach((sticker) => {
        let count = 0;
        if (sticker.isStuck) count = 1 + (sticker.duplicatesCount || 0);
        else if (sticker.duplicatesCount > 0) count = sticker.duplicatesCount;
        estado.coleccion.set(sticker.id, count);
      });
    });
  }
}

// WebSocket

socket.on("connect", () => {
  console.log("WebSocket connected successfully")
  console.log("Connected:", socket.connected)
})

socket.on("connect_error", (error) => {
  console.log("Connection failed:", error.message)
})

socket.on("disconnect", (reason) => {
  console.log("Disconnected:", reason)
  console.log("Connected:", socket.connected)
})

socket.on("trade:proposed", () => cargarIntercambios())
socket.on("trade:accepted", () => cargarIntercambios())
socket.on("trade:rejected", () => cargarIntercambios())
socket.on("trade:cancelled", () => cargarIntercambios())
socket.on("market:new_offer", () => cargarIntercambios())



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
  const ul = document.getElementById("group-nav-list");
  ul.innerHTML = GROUPS.map(
    (c) => `
      <li>
        <a class="group-nav__link" href="#group-${c.wcGroup.slice(-1)}">${c.wcGroup}</a>
      </li>`
  ).join("") + `
      <li><a class="group-nav__link" href="#seccion-mercado">Mercado</a></li>`;
}


function renderCarta(carta) {
  const cantidad = estado.coleccion.get(carta.id) || 0;
  const obtenida = cantidad > 0;
  const claseEstado = obtenida ? "carta--obtenida" : "carta--faltante";
  const claseTipo = carta.role === "Escudo" ? "carta--escudo" : "";
  const badge = cantidad > 1 ? `<span class="carta__badge">x${cantidad - 1}</span>` : "";

  return `
    <div class="carta ${claseEstado} ${claseTipo}" data-id="${carta.id}" title="${carta.name} · ${carta.role}">
      ${badge}
      <div class="carta__icono">${iconoDeCarta(carta)}</div>
      <p class="carta__nombre">${obtenida ? carta.name : "¿?"}</p>
      <p class="carta__id">${carta.id}</p>
      <p class="carta__rol">${carta.role}</p>
    </div>`;
}




function renderPaginaPais(pais) {
  const obtenidas = cantidadObtenidaPais(pais);
  const total = pais.cards.length;
  // Usamos el diccionario para mapear la sigla de 3 letras al código de flagcdn
  const code2 = FLAG_CODES[pais.countryCode] || "xx";
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

  GROUPS.forEach((group) => {
    const groupName = group.wcGroup;
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
  const TOTAL_CARTAS = CATALOGO_COMPLETO.totalCards;
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
    // oculta secciones de grouperación que quedaron sin resultados
    document.querySelectorAll(".group-section").forEach((sec) => {
      if (sec.id === "seccion-mercado") return;
      const visibles = sec.querySelectorAll('.pagina-pais:not([style*="display: none"])').length;
      sec.style.display = visibles === 0 ? "none" : "";
    });
  });
}

async function abrirSobreAPI() {
  const apiKey = import.meta.env.VITE_APIKEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  const response = await fetch(`${apiUrl}/api/packs/open`, {
    method: "GET",
    headers: { "x-api-key": apiKey }
  });

  if (!response.ok) {
    throw new Error("No tienes sobres disponibles o hubo un error en el servidor.");
  }

  return await response.json();
}

async function pegarCartaAPI(cardCode) {
  const apiKey = import.meta.env.VITE_APIKEY;
  const apiUrl = import.meta.env.VITE_API_URL;

  await fetch(`${apiUrl}/api/album/stick`, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cardCode })
  });
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

  async function revelarSobre() {
    const btnRevelar = document.getElementById("btn-revelar");
    btnRevelar.disabled = true;
    btnRevelar.textContent = "Abriendo...";

    try {
      const data = await abrirSobreAPI();

      estado.sobresDisponibles = data.unopenedPacks;

      let nuevas = 0;
      let repetidas = 0;
      const contenido = document.getElementById("sobre-contenido");

      const html = data.pack.map((carta, i) => {
        const esNueva = carta.isNewInAlbum;
        if (esNueva) nuevas++; else repetidas++;

        return `
          <div class="reveal-carta ${esNueva ? "reveal-carta--nueva" : "reveal-carta--repetida"}" style="animation-delay:${i * 0.08}s">
            <div class="reveal-carta__icono">${iconoDeCarta(carta)}</div>
            <p class="reveal-carta__nombre">${carta.name}</p>
            <p class="reveal-carta__tag">${esNueva ? "¡Nueva!" : "Repetida"}</p>
          </div>`;
      }).join("");

      contenido.innerHTML = `
        <div class="reveal-grid">${html}</div>
        <p class="sobre-resumen">${nuevas} nuevas · ${repetidas} repetidas</p>
      `;

      for (const carta of data.pack) {
        if (carta.isNewInAlbum) {
          await pegarCartaAPI(carta.code);

          estado.coleccion.set(carta.id, (estado.coleccion.get(carta.id) || 0) + 1);
          refrescarCartaEnDOM(carta.id);
        } else {
          estado.coleccion.set(carta.id, (estado.coleccion.get(carta.id) || 0) + 1);
        }
      }

      actualizarStats();
      renderRepetidas();

    } catch (error) {
      alert(error.message);
    } finally {
      if (document.getElementById("btn-revelar")) {
        const btn = document.getElementById("btn-revelar");
        btn.disabled = false;
        btn.textContent = "Abrir";
      }
    }
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
    cont.innerHTML = `<p class="mercado__vacio">Todavía no tienes figuritas repetidas. Abre sobres para conseguir.</p>`;
    select.innerHTML = `<option value="">— sin repetidas —</option>`;
    document.getElementById("btn-proponer").disabled = true;
    return;
  }

  document.getElementById("btn-proponer").disabled = false;

  cont.innerHTML = repetidas
    .map(({ id, cant }) => {
      const info = buscarCartaPorId(id);
      return `<div class="carta carta--obtenida" style="aspect-ratio:3/4">
        <span class="carta__badge">x${cant - 1}</span>
        <div class="carta__icono">${iconoDeCarta(info.carta)}</div>
        <p class="carta__nombre">${info.carta.name}</p>
        <p class="carta__rol">${info.pais.country}</p>
      </div>`;
    })
    .join("");

  select.innerHTML = repetidas
    .map(({ id, cant }) => {
      const info = buscarCartaPorId(id);
      return `<option value="${id}">${id} · ${info.carta.name} (x${cant - 1})</option>`;
    })
    .join("");
}

// -----------------------------------------------------------------------
// API DE INTERCAMBIOS
// -----------------------------------------------------------------------

async function apiCall(path, options = {}) {
  const res = await fetch(`${APIURL}${path}`, {
    ...options,
    headers: {
      "x-api-key": APIKEY,
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
  return data;
}

async function cargarIntercambios() {
  try {
    const data = await apiCall("/api/trades");
    renderOfertas(data.trades || []);
  } catch (err) {
    console.error("Error cargando intercambios:", err.message);
  }
}

async function proponerIntercambio(targetGroupId, offeredCardCode, requestedCardCode) {
  return await apiCall("/api/trades", {
    method: "POST",
    body: JSON.stringify({ targetGroupId, offeredCardCode, requestedCardCode })
  });
}

async function aceptarIntercambio(tradeId) {
  return await apiCall(`/api/trades/${tradeId}/accept`, { method: "POST" });
}

async function rechazarIntercambio(tradeId) {
  return await apiCall(`/api/trades/${tradeId}/reject`, { method: "POST" });
}

async function cancelarIntercambio(tradeId) {
  return await apiCall(`/api/trades/${tradeId}`, { method: "DELETE" });
}

// -----------------------------------------------------------------------
// RENDER INTERCAMBIOS
// -----------------------------------------------------------------------

function estadoBadge(status) {
  const map = {
    PENDING: { label: "Pendiente", cls: "badge--pendiente" },
    ACCEPTED: { label: "Aceptado", cls: "badge--aceptado" },
    REJECTED: { label: "Rechazado", cls: "badge--rechazado" },
    CANCELLED: { label: "Cancelado", cls: "badge--cancelado" },
  };
  const s = map[status] || { label: status, cls: "" };
  return `<span class="oferta-badge ${s.cls}">${s.label}</span>`;
}

function renderOfertas(trades) {
  const ul = document.getElementById("ofertas-lista");

  if (!trades || trades.length === 0) {
    ul.innerHTML = `<p class="mercado__vacio">No hay intercambios activos en este momento.</p>`;
    return;
  }

  ul.innerHTML = trades.map(trade => {
    const soyProponente = trade.proposerGroup._id === GRUPO_PROY_ID;
    const otroGrupo = soyProponente ? trade.targetGroup.name : trade.proposerGroup.name;
    const esPendiente = trade.status === "PENDING";

    const accionesSoyProponente = esPendiente
      ? `<button class="btn-cancelar" data-id="${trade._id}">Cancelar</button>`
      : "";

    const accionesSoyTarget = (!soyProponente && esPendiente)
      ? `<button class="btn-aceptar" data-id="${trade._id}">Aceptar</button>
         <button class="btn-rechazar" data-id="${trade._id}">Rechazar</button>`
      : "";

    return `
    <li class="oferta-item" data-oferta="${trade._id}">
      <div class="oferta-item__info">
        <strong>${estadoBadge(trade.status)}:</strong>
        <span class="oferta-item__grupos">
          ${soyProponente ? 'Tú' : `<strong>${otroGrupo}</strong>`}
          ${soyProponente ? 'ofreces' : 'ofrece'} <code>${trade.offeredCardCode}</code>
          a cambio de <code>${trade.requestedCardCode}</code>
          ${soyProponente ? `→ <strong>${otroGrupo}</strong>` : ""}
        </span>
      </div>
      <span class="oferta-item__acciones">
        ${accionesSoyProponente}
        ${accionesSoyTarget}
      </span>
    </li>`;
  }).join("");

  // Delegación de eventos
  ul.querySelectorAll(".btn-aceptar").forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        btn.disabled = true;
        btn.textContent = "Aceptando...";
        await aceptarIntercambio(btn.dataset.id);
        await cargarIntercambios();
      } catch (err) {
        alert(err.message);
        btn.disabled = false;
        btn.textContent = "Aceptar";
      }
    });
  });

  ul.querySelectorAll(".btn-rechazar").forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        btn.disabled = true;
        btn.textContent = "Rechazando...";
        await rechazarIntercambio(btn.dataset.id);
        await cargarIntercambios();
      } catch (err) {
        alert(err.message);
        btn.disabled = false;
        btn.textContent = "Rechazar";
      }
    });
  });

  ul.querySelectorAll(".btn-cancelar").forEach(btn => {
    btn.addEventListener("click", async () => {
      try {
        btn.disabled = true;
        btn.textContent = "Cancelando...";
        await cancelarIntercambio(btn.dataset.id);
        await cargarIntercambios();
      } catch (err) {
        alert(err.message);
        btn.disabled = false;
        btn.textContent = "Cancelar";
      }
    });
  });
}

function initMercado() {
  renderRepetidas();
  cargarIntercambios();

  // Llenar selector de grupos destino
  const selectGrupo = document.getElementById("input-grupo");
  if (selectGrupo && TODOS_LOS_GRUPOS) {
    selectGrupo.innerHTML = TODOS_LOS_GRUPOS
      .filter(g => g._id !== GRUPO_PROY_ID && g.id !== GRUPO_PROY_ID)
      .map(g => `<option value="${g._id || g.id}">${g.name}</option>`)
      .join("");
  }

  document.getElementById("form-propuesta").addEventListener("submit", async (e) => {
    e.preventDefault();
    const targetGroupId = document.getElementById("input-grupo").value;
    const requestedCardCode = document.getElementById("input-pedido").value.trim().toUpperCase();
    const offeredCardCode = document.getElementById("select-repetida").value;

    if (!offeredCardCode) {
      alert("Selecciona una barajita repetida para ofrecer.");
      return;
    }
    if (!requestedCardCode) {
      alert("Ingresa el código de la barajita que pides (ej: ARG-5).");
      return;
    }
    if (!targetGroupId) {
      alert("Selecciona el grupo al que le propones el intercambio.");
      return;
    }

    const btnSubmit = e.target.querySelector("button[type=submit]");
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Enviando...";

    try {
      await proponerIntercambio(targetGroupId, offeredCardCode, requestedCardCode);
      e.target.reset();
      await cargarIntercambios();
    } catch (err) {
      alert("Error al proponer intercambio: " + err.message);
    } finally {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "Proponer";
    }
  });
}


function initScrollSpy() {
  const links = document.querySelectorAll(".group-nav__link");
  const secciones = document.querySelectorAll(".group-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove("is-active"));
        const activo = document.querySelector(`.group-nav__link[href="#${entry.target.id}"]`);
        if (activo) activo.classList.add("is-active");
      });
    },
    { rootMargin: "-140px 0px -70% 0px" }
  );

  secciones.forEach((s) => observer.observe(s));
}

// Ya que usamos top-level await en data.js, el DOM ya está cargado cuando este código se ejecuta.
// No necesitamos DOMContentLoaded.
initAlbum();
renderNav();
renderAlbum();
actualizarStats();
initBuscador();
initSobre();
initMercado();
initScrollSpy();
