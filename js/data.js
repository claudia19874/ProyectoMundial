
const APIKEY = import.meta.env.VITE_APIKEY
const APIURL = import.meta.env.VITE_API_URL

/**

 * Datos simulados q en teoria da la apikey
 */

const FLAG_CODES = {
  "MEX": "mx", "RSA": "za", "KOR": "kr", "CZE": "cz",
  "CAN": "ca", "BIH": "ba", "QAT": "qa", "SUI": "ch",
  "BRA": "br", "MAR": "ma", "HAI": "ht", "SCO": "gb-sct",
  "USA": "us", "PAR": "py", "AUS": "au", "TUR": "tr",
  "GER": "de", "CUW": "cw", "CIV": "ci", "ECU": "ec",
  "NED": "nl", "JPN": "jp", "SWE": "se", "TUN": "tn",
  "BEL": "be", "EGY": "eg", "IRN": "ir", "NZL": "nz",
  "ESP": "es", "CPV": "cv", "KSA": "sa", "URU": "uy",
  "FRA": "fr", "NOR": "no", "SEN": "sn", "IRQ": "iq",
  "ARG": "ar", "AUT": "at", "ALG": "dz", "JOR": "jo",
  "POR": "pt", "COD": "cd", "UZB": "uz", "COL": "co",
  "ENG": "gb-eng", "CRO": "hr", "GHA": "gh", "PAN": "pa"
};

const COUNTRIES = [

]

const GROUPS = [
  {
    wcGroup: "Grupo A",
    countries: [
      "México",
      "Sudáfrica",
      "Corea del Sur",
      "Chequia"
    ]
  },
  {
    wcGroup: "Grupo B",
    countries: [
      "Canadá",
      "Suiza",
      "Bosnia y Herzegovina",
      "Catar"
    ]
  },
  {
    wcGroup: "Grupo C",
    countries: [
      "Brasil",
      "Marruecos",
      "Escocia",
      "Haití"
    ]
  },
  {
    wcGroup: "Grupo D",
    countries: [
      "Estados Unidos",
      "Australia",
      "Paraguay",
      "Turquía"
    ]
  },
  {
    wcGroup: "Grupo E",
    countries: [
      "Alemania",
      "Costa de Marfil",
      "Ecuador",
      "Curazao"
    ]
  },
  {
    wcGroup: "Grupo F",
    countries: [
      "Países Bajos",
      "Japón",
      "Suecia",
      "Túnez"
    ]
  },
  {
    wcGroup: "Grupo G",
    countries: [
      "Bélgica",
      "Egipto",
      "Irán",
      "Nueva Zelanda"
    ]
  },
  {
    wcGroup: "Grupo H",
    countries: [
      "España",
      "Cabo Verde",
      "Uruguay",
      "Arabia Saudita"
    ]
  },
  {
    wcGroup: "Grupo I",
    countries: [
      "Francia",
      "Noruega",
      "Senegal",
      "Irak"
    ]
  },
  {
    wcGroup: "Grupo J",
    countries: [
      "Argentina",
      "Austria",
      "Argelia",
      "Jordania"
    ]
  },
  {
    wcGroup: "Grupo K",
    countries: [
      "Portugal",
      "Colombia",
      "República Democrática del Congo",
      "Uzbekistán"
    ]
  },
  {
    wcGroup: "Grupo L",
    countries: [
      "Inglaterra",
      "Croacia",
      "Ghana",
      "Panamá"
    ]
  }
];

//
// // 1 arquero + 4 defensas + 3 mediocampistas + 3 delanteros = 11 jugadores
// const FORMACION = [
//   "Arquero",
//   "Defensa",
//   "Defensa",
//   "Defensa",
//   "Defensa",
//   "Mediocampista",
//   "Mediocampista",
//   "Mediocampista",
//   "Delantero",
//   "Delantero",
//   "Delantero",
// ];



// function siglaPais(nombre) {
//   const limpio = nombre
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "") // quita acentos
//     .toUpperCase();
//   const palabras = limpio.split(/\s+/);
//   // país de una palabra ("Argentina" -> "ARG"), de varias ("Costa de Marfil" -> "CDM")
//   if (palabras.length === 1) return palabras[0].slice(0, 3);
//   return palabras.map((p) => p[0]).join("").slice(0, 3);
// }

/**
 * Construye el álbum completo en memoria (48 países x 12 cartas = 576).
 * Reemplazar por una llamada a la API cuando esté disponible.
 */

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

async function construirAlbumLocal() {
  try {
    return await apiCall('/api/album');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarCatalogoBarajitas() {
  try {
    return await apiCall('/api/cards');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarInfoGrupoProy() {
  try {
    return await apiCall('/api/groups/me');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarTodosGruposProy() {
  try {
    return await apiCall('/api/groups');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarIntercambios() {
  try {
    return await apiCall('/api/trades');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarRepetidas() {
  try {
    return await apiCall('/api/inventory/duplicates');
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

async function BuscarRepetidasGrupo(groupId) {
  try {
    return await apiCall(`/api/groups/${groupId}/duplicates`);
  } catch (err) {
    console.error("Hubo un error...\n" + err.message);
  }
}

const GRUPOS_PROY_TODOS = await BuscarTodosGruposProy()
export const GRUPO_PROY = await BuscarInfoGrupoProy()
export const CATALOGO_COMPLETO = await BuscarCatalogoBarajitas()
export const ALBUM_DATA = await construirAlbumLocal()
export const CANT_SOBRES = GRUPO_PROY.group.unopenedPacks
export const TODOS_LOS_GRUPOS = GRUPOS_PROY_TODOS.groups

export { GROUPS, FLAG_CODES, BuscarIntercambios, BuscarRepetidasGrupo, construirAlbumLocal }
