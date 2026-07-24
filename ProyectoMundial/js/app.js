import { GROUPS, ALBUM_DATA, CATALOGO_COMPLETO, FLAG_CODES } from "./data.js";

const estado = {
  coleccion: new Map(),
  sobresDisponibles: 3,
  paginaActual: 0,
  ofertas: [
    { id: "OF-1", grupo: "Grupo 4", ofrece: "BRA-09", pide: "ARG-10" },
    { id: "OF-2", grupo: "Grupo 7", ofrece: "JPN-ESC", pide: "MEX-01" }
  ]
};

const countryArr = CATALOGO_COMPLETO.countries;

countryArr.forEach((country) => {
  country.cards.forEach((c) => estado.coleccion.set(c.id, 0));
});

const TOTAL_CARTAS = CATALOGO_COMPLETO.totalCards;

const ICONOS = {
  "Escudo": '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Zm0 2.2 7 3.1v4.7c0 3.9-2.9 6.9-7 8-4.1-1.1-7-4.1-7-8V7.3l7-3.1Z"/></svg>',
  "Arquero": '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6v2H4z"/></svg>',
  "Defensa": '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6v2H4z"/></svg>',
  "Mediocampista": '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6v2H4z"/></svg>',
  "Delantero": '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6v2H4z"/></svg>'
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

function abreviarPosicion(role) {
  if (role === "Arquero") return "POR";
  if (role === "Defensa") return "DEF";
  if (role === "Mediocampista") return "MED";
  if (role === "Delantero") return "DEL";
  if (role === "Escudo") return "ESC";
  return "";
}

function fotoDeCarta(carta, pais) {
  const fotoAPI = carta.photo || carta.photoUrl || carta.image || carta.imageUrl || null;
  let fotoLocal;
  if (carta.role === "Escudo") {
    const codeBandera = FLAG_CODES[pais.countryCode] || pais.countryCode.toLowerCase();
    fotoLocal = `img/escudos/${codeBandera}.png`;
  } else {
    fotoLocal = `img/jugadores/${carta.id}.jpg`;
  }
  return { fotoAPI, fotoLocal };
}

function banderaDePais(pais) {
  const code = FLAG_CODES[pais.countryCode] || "xx";
  return `https://flagcdn.com/w320/${code}.png`;
}

function renderCarta(carta, pais) {
  if (!pais) {
    const info = buscarCartaPorId(carta.id);
    if (info) pais = info.pais;
  }

  const cantidad = estado.coleccion.get(carta.id) || 0;
  const obtenida = cantidad > 0;

  if (!obtenida) {
    return `
      <div class="carta carta--faltante" data-id="${carta.id}">
        <div class="carta__media"><span class="carta__signo">?</span></div>
        <p class="carta__nombre">${carta.id}</p>
      </div>`;
  }

  const { fotoAPI, fotoLocal } = fotoDeCarta(carta, pais);
  const bandera = pais ? banderaDePais(pais) : "";
  const badge = cantidad > 1 ? `<span class="carta__badge">x${cantidad}</span>` : "";
  const dorsal = (carta.jerseyNumber || carta.dorsal || carta.number)
    ? `<span class="carta__dorsal">${carta.jerseyNumber || carta.dorsal || carta.number}</span>`
    : "";
  const pos = abreviarPosicion(carta.role);
  const club = carta.club || carta.team || "";
  const claseEscudo = carta.role === "Escudo" ? "carta--escudo" : "";

  const primeraFoto = fotoLocal;
  const respaldoAPI = fotoAPI || "";
  const respaldoBandera = bandera;

  const onerror = "if(this.dataset.stage==='0'&&this.dataset.foto2){this.dataset.stage='1';this.src=this.dataset.foto2;}else if(this.dataset.stage!=='2'&&this.dataset.bandera){this.dataset.stage='2';this.src=this.dataset.bandera;this.classList.add('carta__foto--respaldo');}else{this.style.display='none';this.nextElementSibling.style.display='flex';}";

  return `
    <div class="carta ${claseEscudo}" data-id="${carta.id}" title="${carta.name} - ${carta.role}">
      ${badge}
      <div class="carta__media">
        ${dorsal}
        <img src="${primeraFoto}" alt="${carta.name}" class="carta__foto"
             data-stage="0"
             data-foto2="${respaldoAPI}"
             data-bandera="${respaldoBandera}"
             onerror="${onerror}" />
        <div class="carta__icono" style="display:none">${iconoDeCarta(carta)}</div>
      </div>
      <p class="carta__nombre">${carta.name}</p>
      <div class="carta__info">
        ${pos ? `<span class="carta__pos">${pos}</span>` : ""}
        ${club ? `<span class="carta__club">${club}</span>` : `<span class="carta__club">${carta.role}</span>`}
      </div>
    </div>`;
}

function renderPaginaPais(pais) {
  const obtenidas = cantidadObtenidaPais(pais);
  const total = pais.cards.length;
  const code2 = FLAG_CODES[pais.countryCode] || "xx";

  const html = `
    <article class="pagina-pais" id="pais-${sigla3(pais.country)}" data-nombre="${pais.country.toLowerCase()}">
      <div class="pagina-pais__header">
        <img class="pagina-pais__bandera" src="https://flagcdn.com/w80/${code2}.png" alt="Bandera de ${pais.country}" loading="lazy" />
        <div style="flex:1">
          <h3 class="pagina-pais__nombre">${pais.country}</h3>
          <span class="pagina-pais__grupo">${pais.wcGroup || ""}</span>
        </div>
        <span class="pagina-pais__progreso">${obtenidas} / ${total}</span>
      </div>
      <div class="cartas-grid">
        ${pais.cards.map((c) => renderCarta(c, pais)).join("")}
      </div>
    </article>`;

  return html;
}

function renderLibroPagina() {
  const pais = countryArr[estado.paginaActual];
  document.getElementById("libro-pagina").innerHTML = renderPaginaPais(pais);
  document.getElementById("libro-indicador").textContent =
    `${pais.wcGroup || ""} - Pagina ${estado.paginaActual + 1} de ${countryArr.length}`;

  document.getElementById("btn-pagina-prev").disabled = estado.paginaActual === 0;
  document.getElementById("btn-pagina-next").disabled = estado.paginaActual === countryArr.length - 1;

  marcarGrupoActivo();
  agregarClicsACartas();
}

function irAPagina(indice) {
  if (indice < 0) indice = 0;
  if (indice >= countryArr.length) indice = countryArr.length - 1;
  estado.paginaActual = indice;
  renderLibroPagina();
  document.getElementById("album-main").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initLibro() {
  document.getElementById("btn-pagina-prev").addEventListener("click", () => irAPagina(estado.paginaActual - 1));
  document.getElementById("btn-pagina-next").addEventListener("click", () => irAPagina(estado.paginaActual + 1));
}

function renderNav() {
  const ul = document.getElementById("confed-nav-list");
  const gruposLetra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
  ul.innerHTML = gruposLetra.map((letra) => {
    return `<li><button class="confed-nav__link" type="button" data-grupo="${letra}">Grupo ${letra}</button></li>`;
  }).join("");

  ul.querySelectorAll(".confed-nav__link").forEach((btn) => {
    btn.addEventListener("click", () => {
      const letra = btn.dataset.grupo;
      const idx = countryArr.findIndex((p) => p.wcGroup === `Grupo ${letra}`);
      if (idx >= 0) irAPagina(idx);
    });
  });
}

function marcarGrupoActivo() {
  const paisActual = countryArr[estado.paginaActual];
  if (!paisActual) return;
  const letra = (paisActual.wcGroup || "").replace("Grupo ", "");
  document.querySelectorAll(".confed-nav__link").forEach((btn) => {
    if (btn.dataset.grupo === letra) btn.classList.add("is-active");
    else btn.classList.remove("is-active");
  });
}

function abrirModalCarta(id) {
  const info = buscarCartaPorId(id);
  if (!info) return;
  if ((estado.coleccion.get(id) || 0) <= 0) return;

  document.getElementById("carta-modal-wrap").innerHTML = renderCarta(info.carta, info.pais);
  document.getElementById("carta-modal-pais").textContent = info.pais.country;
  document.getElementById("carta-modal-nombre").textContent = info.carta.name;
  document.getElementById("carta-modal-rol").textContent = info.carta.role;

  const chipClub = document.getElementById("carta-modal-club");
  const club = info.carta.club || info.carta.team;
  if (club) {
    chipClub.textContent = club;
    chipClub.hidden = false;
  } else {
    chipClub.hidden = true;
  }

  const cantidad = estado.coleccion.get(id);
  document.getElementById("carta-modal-cantidad").textContent = `Tienes: ${cantidad}`;

  document.getElementById("carta-overlay").hidden = false;
}

function initModalCarta() {
  const overlay = document.getElementById("carta-overlay");
  document.getElementById("btn-cerrar-carta").addEventListener("click", () => (overlay.hidden = true));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.hidden = true;
  });
}

function agregarClicsACartas() {
  document.querySelectorAll("#libro-pagina .carta:not(.carta--faltante)").forEach((nodo) => {
    nodo.addEventListener("click", () => abrirModalCarta(nodo.dataset.id));
  });
}

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

    const coincidencias = [];
    for (let i = 0; i < countryArr.length; i++) {
      if (countryArr[i].country.toLowerCase().includes(q)) {
        coincidencias.push({ pais: countryArr[i], idx: i });
      }
    }

    if (coincidencias.length === 0) {
      resultados.innerHTML = `<li>Sin resultados</li>`;
      resultados.hidden = false;
      return;
    }

    resultados.innerHTML = coincidencias.slice(0, 8).map(({ pais, idx }) => {
      return `<li data-idx="${idx}">${pais.country}</li>`;
    }).join("");
    resultados.hidden = false;

    resultados.querySelectorAll("li[data-idx]").forEach((li) => {
      li.addEventListener("click", () => {
        irAPagina(Number(li.dataset.idx));
        resultados.hidden = true;
        input.value = "";
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (e.target !== input) resultados.hidden = true;
  });
}

function actualizarStats() {
  const obtenidas = [...estado.coleccion.values()].filter((v) => v > 0).length;
  const repetidas = [...estado.coleccion.values()].filter((v) => v > 1).length;

  document.getElementById("stat-coleccion").textContent = `${obtenidas} / ${TOTAL_CARTAS}`;
  document.getElementById("stat-sobres").textContent = `Sobres: ${estado.sobresDisponibles}`;
  document.getElementById("progreso-global-fill").style.width = `${(obtenidas / TOTAL_CARTAS) * 100}%`;

  const paisActual = countryArr[estado.paginaActual];
  if (paisActual) {
    const art = document.getElementById(`pais-${sigla3(paisActual.country)}`);
    if (art) {
      const badge = art.querySelector(".pagina-pais__progreso");
      if (badge) badge.textContent = `${cantidadObtenidaPais(paisActual)} / ${paisActual.cards.length}`;
    }
  }

  const badge = document.getElementById("mercado-badge");
  const total = repetidas + estado.ofertas.length;
  if (total > 0) {
    badge.textContent = total;
    badge.hidden = false;
  } else {
    badge.hidden = true;
  }

  const tabCount = document.getElementById("mercado-tab-count");
  if (tabCount) tabCount.textContent = estado.ofertas.length;
}

function refrescarCartaEnDOM(id) {
  const nodo = document.querySelector(`.carta[data-id="${id}"]`);
  if (!nodo) return;
  const info = buscarCartaPorId(id);
  if (!info) return;
  nodo.outerHTML = renderCarta(info.carta, info.pais);
  const nuevoNodo = document.querySelector(`.carta[data-id="${id}"]`);
  if (nuevoNodo && !nuevoNodo.classList.contains("carta--faltante")) {
    nuevoNodo.addEventListener("click", () => abrirModalCarta(id));
  }
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

  function pantallaInicial() {
    contenido.innerHTML = `
      <div class="sobre-inicial">
        <p>Tu sobre trae <strong>7 barajitas</strong> al azar de cualquier seleccion clasificada.</p>
        <button class="btn-revelar" id="btn-revelar">Abrir sobre</button>
      </div>`;
    document.getElementById("btn-revelar").addEventListener("click", revelarSobre);
  }

  function abrirModal() {
    if (estado.sobresDisponibles <= 0) {
      alert("No te quedan sobres disponibles por ahora.");
      return;
    }
    pantallaInicial();
    overlay.hidden = false;
  }

  function revelarSobre() {
    estado.sobresDisponibles -= 1;
    const sobre = generarSobreLocal();
    let nuevas = 0;
    let repetidas = 0;

    const wasNew = [];
    sobre.forEach((carta) => {
      const teniaAntes = estado.coleccion.get(carta.id) || 0;
      wasNew.push(teniaAntes === 0);
      estado.coleccion.set(carta.id, teniaAntes + 1);
      if (teniaAntes === 0) nuevas++;
      else repetidas++;
    });

    const html = sobre
      .map((carta, i) => {
        const info = buscarCartaPorId(carta.id);
        const paisDeCarta = info ? info.pais : null;
        const esNueva = wasNew[i];
        return `
          <div class="reveal-carta ${esNueva ? "reveal-carta--nueva" : "reveal-carta--repetida"}">
            ${renderCarta(carta, paisDeCarta)}
            <div class="reveal-carta__tag">${esNueva ? "NUEVA" : "REPETIDA"}</div>
          </div>`;
      })
      .join("");

    contenido.innerHTML = `
      <div class="reveal-grid">${html}</div>
      <p class="sobre-resumen"><strong>${nuevas}</strong> nuevas - <strong>${repetidas}</strong> repetidas</p>
    `;

    sobre.forEach((c) => refrescarCartaEnDOM(c.id));
    actualizarStats();
    renderRepetidas();
    renderOfertas();
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
    cont.innerHTML = `<p class="vacio">Todavia no tienes barajitas repetidas. Abre sobres para conseguir.</p>`;
    if (select) select.innerHTML = `<option value="">-- sin repetidas --</option>`;
    const btnProp = document.getElementById("btn-proponer");
    if (btnProp) btnProp.disabled = true;
    return;
  }

  const btnProp = document.getElementById("btn-proponer");
  if (btnProp) btnProp.disabled = false;

  cont.innerHTML = repetidas
    .map(({ id }) => {
      const info = buscarCartaPorId(id);
      return renderCarta(info.carta, info.pais);
    })
    .join("");

  if (select) {
    select.innerHTML = repetidas
      .map(({ id, cant }) => {
        const info = buscarCartaPorId(id);
        return `<option value="${id}">${id} - ${info.carta.name} (x${cant})</option>`;
      })
      .join("");
  }
}

function renderOfertas() {
  const ul = document.getElementById("ofertas-lista");
  if (estado.ofertas.length === 0) {
    ul.innerHTML = `<p class="vacio">No hay ofertas activas en este momento.</p>`;
    actualizarStats();
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
      actualizarStats();
    });
  });
}

function initMercado() {
  const overlay = document.getElementById("mercado-overlay");
  const btnAbrir = document.getElementById("btn-mercado");
  const btnCerrar = document.getElementById("btn-cerrar-mercado");

  btnAbrir.addEventListener("click", () => {
    renderRepetidas();
    renderOfertas();
    overlay.hidden = false;
  });

  btnCerrar.addEventListener("click", () => (overlay.hidden = true));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.hidden = true;
  });

  const tabs = overlay.querySelectorAll(".tab");
  const paneles = overlay.querySelectorAll(".panel");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.toggle("activo", t === tab));
      paneles.forEach((p) => p.classList.toggle("activo", p.dataset.panel === tab.dataset.tab));
    });
  });

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
      pide: pedido || "?"
    });
    renderOfertas();
    actualizarStats();
    e.target.reset();

    tabs.forEach((t) => t.classList.toggle("activo", t.dataset.tab === "ofertas"));
    paneles.forEach((p) => p.classList.toggle("activo", p.dataset.panel === "ofertas"));
  });
}

renderNav();
renderLibroPagina();
actualizarStats();
initLibro();
initBuscador();
initSobre();
initMercado();
initModalCarta();
