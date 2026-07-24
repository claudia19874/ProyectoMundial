
const apiKey = import.meta.env.VITE_APIKEY
const apiUrl = import.meta.env.VITE_API_URL

/**

 * Datos simulados q en teoria da la apikey
 */

const CONFEDERACIONES = [
  {
    codigo: "CONMEBOL",
    nombre: "Conmebol · Sudamérica",
    paises: [
      { nombre: "Argentina", code: "ar" },
      { nombre: "Brasil", code: "br" },
      { nombre: "Colombia", code: "co" },
      { nombre: "Ecuador", code: "ec" },
      { nombre: "Paraguay", code: "py" },
      { nombre: "Uruguay", code: "uy" },
    ],
  },
  {
    codigo: "UEFA",
    nombre: "UEFA · Europa",
    paises: [
      { nombre: "Alemania", code: "de" },
      { nombre: "Austria", code: "at" },
      { nombre: "Bélgica", code: "be" },
      { nombre: "Bosnia y Herzegovina", code: "ba" },
      { nombre: "Croacia", code: "hr" },
      { nombre: "España", code: "es" },
      { nombre: "Escocia", code: "gb-sct" },
      { nombre: "Francia", code: "fr" },
      { nombre: "Países Bajos", code: "nl" },
      { nombre: "Noruega", code: "no" },
      { nombre: "Portugal", code: "pt" },
      { nombre: "República Checa", code: "cz" },
      { nombre: "Suecia", code: "se" },
      { nombre: "Suiza", code: "ch" },
      { nombre: "Turquía", code: "tr" },
      { nombre: "Inglaterra", code: "gb-eng" },
    ],
  },
  {
    codigo: "CAF",
    nombre: "CAF · África",
    paises: [
      { nombre: "Argelia", code: "dz" },
      { nombre: "Cabo Verde", code: "cv" },
      { nombre: "Costa de Marfil", code: "ci" },
      { nombre: "Egipto", code: "eg" },
      { nombre: "Ghana", code: "gh" },
      { nombre: "Marruecos", code: "ma" },
      { nombre: "RD del Congo", code: "cd" },
      { nombre: "Senegal", code: "sn" },
      { nombre: "Sudáfrica", code: "za" },
      { nombre: "Túnez", code: "tn" },
    ],
  },
  {
    codigo: "AFC",
    nombre: "AFC · Asia",
    paises: [
      { nombre: "Arabia Saudita", code: "sa" },
      { nombre: "Australia", code: "au" },
      { nombre: "Catar", code: "qa" },
      { nombre: "Corea del Sur", code: "kr" },
      { nombre: "Irak", code: "iq" },
      { nombre: "Irán", code: "ir" },
      { nombre: "Japón", code: "jp" },
      { nombre: "Jordania", code: "jo" },
      { nombre: "Uzbekistán", code: "uz" },
    ],
  },
  {
    codigo: "CONCACAF",
    nombre: "Concacaf · Norte y Centroamérica",
    paises: [
      { nombre: "Canadá", code: "ca" },
      { nombre: "Curazao", code: "cw" },
      { nombre: "Estados Unidos", code: "us" },
      { nombre: "Haití", code: "ht" },
      { nombre: "México", code: "mx" },
      { nombre: "Panamá", code: "pa" },
    ],
  },
  {
    codigo: "OFC",
    nombre: "OFC · Oceanía",
    paises: [{ nombre: "Nueva Zelanda", code: "nz" }],
  },
];

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
async function construirAlbumLocal() {
  // const paises = [];
  // CONFEDERACIONES.forEach((conf) => {
  //   conf.paises.forEach((p) => {
  //     const sigla = siglaPais(p.nombre);
  //     const cartas = [
  //       {
  //         id: `${sigla}-ESC`,
  //         nombre: `Escudo · ${p.nombre}`,
  //         rol: "Federación",
  //         tipo: "escudo",
  //       },
  //       ...FORMACION.map((rol, i) => ({
  //         id: `${sigla}-${String(i + 1).padStart(2, "0")}`,
  //         nombre: `Jugador ${i + 1}`,
  //         rol,
  //         tipo: "jugador",
  //         dorsal: i + 1,
  //       })),
  //     ];
  //     paises.push({
  //       pais: p.nombre,
  //       code: p.code,
  //       confederacion: conf.codigo,
  //       cartas,
  //     });
  //   });
  // });
  // return paises;
  try {
    const resp = await fetch(apiUrl + '/api/album/', {
      method: 'GET',
      headers: {
        'x-api-key': apiKey
      }
    })

    if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText)
    const data = await resp.json()
    // console.log(JSON.stringify(data.countries))
    return data;
  } catch (Error) {
    console.Error("Hubo un error...\n" + Error.message)
  }


}

async function BuscarCatalogoBarajitas() {
  try {
    const resp = await fetch(apiUrl + '/api/cards/', {
      method: 'GET',
      headers: {
        'x-api-key': apiKey
      }
    })

    if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText)
    const data = await resp.json()
    // console.log(JSON.stringify(data.countries))
    return data;
  } catch (Error) {
    console.error("Hubo un error...\n" + Error.message)
  }
}

const CATALOGO_COMPLETO = await BuscarCatalogoBarajitas();
const ALBUM_DATA = await construirAlbumLocal();

export { CATALOGO_COMPLETO, ALBUM_DATA, GROUPS };
