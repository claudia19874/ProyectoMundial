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

// 1 arquero + 4 defensas + 3 mediocampistas + 3 delanteros = 11 jugadores
const FORMACION = [
  "Arquero",
  "Defensa",
  "Defensa",
  "Defensa",
  "Defensa",
  "Mediocampista",
  "Mediocampista",
  "Mediocampista",
  "Delantero",
  "Delantero",
  "Delantero",
];

/**
 * Plantillas reales del Mundial 2026 (11 jugadores por selección, en el mismo
 * orden que FORMACION: 1 arquero + 4 defensas + 3 mediocampistas + 3 delanteros).
 * Fuente: listas oficiales/FIFA de cada federación. Cuando llegue la API,
 * este objeto se puede borrar por completo y usar los datos que devuelva el servidor.
 */
const JUGADORES_REALES = {
  "Argentina": ["Emiliano Martínez", "Cristian Romero", "Nicolás Otamendi", "Lisandro Martínez", "Nahuel Molina", "Rodrigo De Paul", "Enzo Fernández", "Alexis Mac Allister", "Lionel Messi", "Julián Álvarez", "Lautaro Martínez"],
  "Brasil": ["Alisson", "Marquinhos", "Gabriel Magalhães", "Danilo Luiz", "Wesley", "Casemiro", "Bruno Guimarães", "Lucas Paquetá", "Vinícius Júnior", "Neymar", "Raphinha"],
  "Colombia": ["David Ospina", "Davinson Sánchez", "Yerry Mina", "Daniel Muñoz", "Johan Mojica", "James Rodríguez", "Jefferson Lerma", "Jhon Arias", "Luis Díaz", "Luis Suárez", "Jhon Córdoba"],
  "Ecuador": ["Hernán Galíndez", "Piero Hincapié", "Willian Pacho", "Pervis Estupiñán", "Félix Torres", "Moisés Caicedo", "Kendry Páez", "Alan Franco", "Enner Valencia", "Kevin Rodríguez", "Gonzalo Plata"],
  "Paraguay": ["Gatito Fernández", "Gustavo Gómez", "Júnior Alonso", "Omar Alderete", "Fabián Balbuena", "Miguel Almirón", "Andrés Cubas", "Diego Gómez", "Antonio Sanabria", "Julio Enciso", "Gabriel Ávalos"],
  "Uruguay": ["Sergio Rochet", "José María Giménez", "Ronald Araújo", "Mathías Olivera", "Matías Viña", "Federico Valverde", "Rodrigo Bentancur", "Giorgian de Arrascaeta", "Darwin Núñez", "Facundo Pellistri", "Federico Viñas"],

  "Alemania": ["Manuel Neuer", "Antonio Rüdiger", "Jonathan Tah", "Waldemar Anton", "David Raum", "Joshua Kimmich", "Jamal Musiala", "Florian Wirtz", "Kai Havertz", "Nick Woltemade", "Leroy Sané"],
  "Austria": ["Alexander Schlager", "David Alaba", "Kevin Danso", "Stefan Posch", "Philipp Lienhart", "Xaver Schlager", "Nicolas Seiwald", "Konrad Laimer", "Marko Arnautović", "Michael Gregoritsch", "Marcel Sabitzer"],
  "Bélgica": ["Thibaut Courtois", "Thomas Meunier", "Zeno Debast", "Arthur Theate", "Timothy Castagne", "Kevin De Bruyne", "Youri Tielemans", "Amadou Onana", "Romelu Lukaku", "Jérémy Doku", "Leandro Trossard"],
  "Bosnia y Herzegovina": ["Nikola Vasilj", "Sead Kolašinac", "Dennis Hadžikadunić", "Amar Dedić", "Nikola Katić", "Amir Hadžiahmetović", "Benjamin Tahirović", "Ivan Šunjić", "Edin Džeko", "Ermedin Demirović", "Haris Tabaković"],
  "Croacia": ["Dominik Livaković", "Joško Gvardiol", "Josip Šutalo", "Josip Stanišić", "Duje Ćaleta-Car", "Luka Modrić", "Mateo Kovačić", "Nikola Vlašić", "Ivan Perišić", "Andrej Kramarić", "Ante Budimir"],
  "España": ["Unai Simón", "Marc Cucurella", "Aymeric Laporte", "Pau Cubarsí", "Pedro Porro", "Rodri", "Pedri", "Fabián Ruiz", "Lamine Yamal", "Nico Williams", "Ferran Torres"],
  "Escocia": ["Craig Gordon", "Andy Robertson", "Grant Hanley", "Kieran Tierney", "Scott McKenna", "John McGinn", "Scott McTominay", "Ryan Christie", "Ché Adams", "Lawrence Shankland", "Lyndon Dykes"],
  "Francia": ["Mike Maignan", "William Saliba", "Ibrahima Konaté", "Jules Koundé", "Théo Hernandez", "Aurélien Tchouaméni", "Warren Zaïre-Emery", "Adrien Rabiot", "Kylian Mbappé", "Ousmane Dembélé", "Marcus Thuram"],
  "Países Bajos": ["Bart Verbruggen", "Virgil van Dijk", "Nathan Aké", "Jurriën Timber", "Denzel Dumfries", "Frenkie de Jong", "Tijjani Reijnders", "Ryan Gravenberch", "Cody Gakpo", "Memphis Depay", "Donyell Malen"],
  "Noruega": ["Ørjan Nyland", "Kristoffer Ajer", "Leo Østigård", "David Møller Wolfe", "Julian Ryerson", "Martin Ødegaard", "Sander Berge", "Morten Thorsby", "Erling Haaland", "Alexander Sørloth", "Jørgen Strand Larsen"],
  "Portugal": ["Diogo Costa", "Rúben Dias", "João Cancelo", "Nuno Mendes", "Diogo Dalot", "Bruno Fernandes", "Bernardo Silva", "Vitinha", "Cristiano Ronaldo", "João Félix", "Rafael Leão"],
  "República Checa": ["Matěj Kovář", "Ladislav Krejčí", "David Zima", "Vladimír Coufal", "Robin Hranáč", "Tomáš Souček", "Lukáš Provod", "Michal Sadílek", "Patrik Schick", "Adam Hložek", "Jan Kuchta"],
  "Suecia": ["Jacob Widell Zetterström", "Victor Lindelöf", "Isak Hien", "Gustaf Lagerbielke", "Gabriel Gudmundsson", "Lucas Bergvall", "Mattias Svanberg", "Yasin Ayari", "Viktor Gyökeres", "Alexander Isak", "Anthony Elanga"],
  "Suiza": ["Gregor Kobel", "Manuel Akanji", "Nico Elvedi", "Silvan Widmer", "Ricardo Rodriguez", "Granit Xhaka", "Remo Freuler", "Denis Zakaria", "Breel Embolo", "Dan Ndoye", "Rubén Vargas"],
  "Turquía": ["Uğurcan Çakır", "Merih Demiral", "Çağlar Söyüncü", "Zeki Çelik", "Ferdi Kadıoğlu", "Hakan Çalhanoğlu", "Kaan Ayhan", "Orkun Kökçü", "Arda Güler", "Kenan Yıldız", "Kerem Aktürkoğlu"],
  "Inglaterra": ["Jordan Pickford", "John Stones", "Marc Guéhi", "Reece James", "Dan Burn", "Declan Rice", "Jude Bellingham", "Jordan Henderson", "Harry Kane", "Bukayo Saka", "Marcus Rashford"],

  "Argelia": ["Luca Zidane", "Aïssa Mandi", "Ramy Bensebaini", "Rayan Aït-Nouri", "Jaouen Hadjam", "Nabil Bentaleb", "Houssem Aouar", "Ramiz Zerrouki", "Riyad Mahrez", "Mohamed Amoura", "Amine Gouiri"],
  "Cabo Verde": ["Vozinha", "Stopira", "Roberto Lopes", "Logan Costa", "João Paulo", "Jamiro Monteiro", "Kevin Pina", "Deroy Duarte", "Ryan Mendes", "Garry Rodrigues", "Jovane Cabral"],
  "Costa de Marfil": ["Yahia Fofana", "Odilon Kossounou", "Wilfried Singo", "Evan Ndicka", "Ghislain Konan", "Franck Kessié", "Ibrahim Sangaré", "Seko Fofana", "Nicolas Pépé", "Simon Adingra", "Amad Diallo"],
  "Egipto": ["Mohamed El Shenawy", "Ramy Rabia", "Mohamed Abdelmonem", "Yasser Ibrahim", "Mohamed Hany", "Marwan Attia", "Emam Ashour", "Mahmoud Saber", "Mohamed Salah", "Omar Marmoush", "Zizo"],
  "Ghana": ["Lawrence Ati-Zigi", "Alidu Seidu", "Abdul Rahman Baba", "Gideon Mensah", "Jerome Opoku", "Thomas Partey", "Abdul Fatawu", "Elisha Owusu", "Jordan Ayew", "Antoine Semenyo", "Iñaki Williams"],
  "Marruecos": ["Yassine Bounou", "Achraf Hakimi", "Nayef Aguerd", "Noussair Mazraoui", "Chadi Riad", "Sofyan Amrabat", "Azzedine Ounahi", "Bilal El Khannouss", "Ayoub El Kaabi", "Brahim Díaz", "Abde Ezzalzouli"],
  "RD del Congo": ["Lionel Mpasi", "Chancel Mbemba", "Arthur Masuaku", "Axel Tuanzebe", "Aaron Wan-Bissaka", "Samuel Moutoussamy", "Edo Kayembe", "Gaël Kakuta", "Cédric Bakambu", "Yoane Wissa", "Meschak Elia"],
  "Senegal": ["Édouard Mendy", "Kalidou Koulibaly", "Moussa Niakhaté", "Krépin Diatta", "Ismail Jakobs", "Idrissa Gueye", "Pape Matar Sarr", "Lamine Camara", "Sadio Mané", "Ismaïla Sarr", "Nicolas Jackson"],
  "Sudáfrica": ["Ronwen Williams", "Aubrey Modiba", "Khuliso Mudau", "Nkosinathi Sibisi", "Mbekezeli Mbokazi", "Teboho Mokoena", "Sphephelo Sithole", "Thalente Mbatha", "Themba Zwane", "Lyle Foster", "Oswin Appollis"],
  "Túnez": ["Aymen Dahmen", "Montassar Talbi", "Dylan Bronn", "Ali Abdi", "Yan Valery", "Ellyes Skhiri", "Hannibal Mejbri", "Anis Ben Slimane", "Elias Achouri", "Firas Chaouat", "Hazem Mastouri"],

  "Arabia Saudita": ["Mohammed Al-Owais", "Saud Abdulhamid", "Hassan Al-Tambakti", "Abdulelah Al-Amri", "Ali Lajami", "Salem Al-Dawsari", "Mohamed Kanno", "Nasser Al-Dawsari", "Firas Al-Buraikan", "Saleh Al-Shehri", "Abdullah Al-Hamdan"],
  "Australia": ["Mathew Ryan", "Harry Souttar", "Miloš Degenek", "Alessandro Circati", "Aziz Behich", "Jackson Irvine", "Connor Metcalfe", "Ajdin Hrustic", "Mathew Leckie", "Awer Mabil", "Nestory Irankunda"],
  "Catar": ["Meshaal Barsham", "Pedro Miguel", "Boualem Khoukhi", "Lucas Mendes", "Homam Ahmed", "Abdulaziz Hatem", "Karim Boudiaf", "Assim Madibo", "Hassan Al-Haydos", "Akram Afif", "Almoez Ali"],
  "Corea del Sur": ["Jo Hyeon-woo", "Kim Min-jae", "Kim Moon-hwan", "Seol Young-woo", "Lee Tae-seok", "Lee Jae-sung", "Hwang In-beom", "Lee Kang-in", "Son Heung-min", "Hwang Hee-chan", "Cho Gue-sung"],
  "Irak": ["Jalal Hassan", "Rebin Sulaka", "Manaf Younis", "Merchas Doski", "Zaid Tahseen", "Ibrahim Bayesh", "Amir Al-Ammari", "Zidane Iqbal", "Aymen Hussein", "Mohanad Ali", "Ali Al-Hamadi"],
  "Irán": ["Alireza Beiranvand", "Ehsan Hajsafi", "Milad Mohammadi", "Hossein Kanaanizadegan", "Ramin Rezaeian", "Saeid Ezatolahi", "Alireza Jahanbakhsh", "Mehdi Torabi", "Mehdi Taremi", "Ali Alipour", "Shahriyar Moghanlou"],
  "Japón": ["Zion Suzuki", "Kō Itakura", "Yukinari Sugawara", "Takehiro Tomiyasu", "Shōgo Taniguchi", "Wataru Endo", "Takefusa Kubo", "Ritsu Dōan", "Daizen Maeda", "Ayase Ueda", "Kōki Ogawa"],
  "Jordania": ["Yazeed Abulaila", "Ihsan Haddad", "Yazan Al-Arab", "Abdallah Nasib", "Saed Al-Rosan", "Rajaei Ayed", "Noor Al-Rawabdeh", "Mohannad Abu Taha", "Musa Al-Taamari", "Ali Olwan", "Mahmoud Al-Mardi"],
  "Uzbekistán": ["Utkir Yusupov", "Abdukodir Khusanov", "Rustam Ashurmatov", "Farrukh Sayfiev", "Khojiakbar Alijonov", "Otabek Shukurov", "Jamshid Iskanderov", "Odiljon Hamrobekov", "Eldor Shomurodov", "Abbosbek Fayzullaev", "Jaloliddin Masharipov"],

  "Canadá": ["Dayne St. Clair", "Alphonso Davies", "Alistair Johnston", "Moïse Bombito", "Derek Cornelius", "Stephen Eustáquio", "Ismaël Koné", "Tajon Buchanan", "Jonathan David", "Cyle Larin", "Jacob Shaffelburg"],
  "Curazao": ["Eloy Room", "Juriën Gaari", "Roshon van Eijma", "Sherel Floranus", "Joshua Brenet", "Leandro Bacuna", "Juninho Bacuna", "Godfried Roemeratoe", "Jürgen Locadia", "Gervane Kastaneer", "Jeremy Antonisse"],
  "Estados Unidos": ["Matt Turner", "Sergiño Dest", "Chris Richards", "Antonee Robinson", "Tim Ream", "Tyler Adams", "Weston McKennie", "Giovanni Reyna", "Christian Pulisic", "Ricardo Pepi", "Folarin Balogun"],
  "Haití": ["Johny Placide", "Ricardo Adé", "Carlens Arcus", "Jean-Kévin Duverne", "Duke Lacroix", "Leverton Pierre", "Danley Jean Jacques", "Jean-Ricner Bellegarde", "Duckens Nazon", "Frantzdy Pierrot", "Derrick Etienne Jr."],
  "México": ["Guillermo Ochoa", "Jesús Gallardo", "César Montes", "Jorge Sánchez", "Johan Vásquez", "Edson Álvarez", "Orbelín Pineda", "Luis Chávez", "Raúl Jiménez", "Santiago Giménez", "Alexis Vega"],
  "Panamá": ["Luis Mejía", "Fidel Escobar", "Eric Davis", "Amir Murillo", "Cesar Blackman", "Adalberto Carrasquilla", "Yoel Barcenas", "Alberto Quintero", "Cecilio Waterman", "Jose Fajardo", "Ismael Diaz"],

  "Nueva Zelanda": ["Max Crocombe", "Michael Boxall", "Tim Payne", "Liberato Cacace", "Tyler Bindon", "Joe Bell", "Alex Rufer", "Marko Stamenić", "Chris Wood", "Ben Waine", "Kosta Barbarouses"],
};

function siglaPais(nombre) {
  const limpio = nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita acentos
    .toUpperCase();
  const palabras = limpio.split(/\s+/);
  // país de una palabra ("Argentina" -> "ARG"), de varias ("Costa de Marfil" -> "CDM")
  if (palabras.length === 1) return palabras[0].slice(0, 3);
  return palabras.map((p) => p[0]).join("").slice(0, 3);
}

/**
 * Construye el álbum completo en memoria (48 países x 12 cartas = 576).
 * Reemplazar por una llamada a la API cuando esté disponible.
 */
function construirAlbumLocal() {
  const paises = [];
  CONFEDERACIONES.forEach((conf) => {
    conf.paises.forEach((p) => {
      const sigla = siglaPais(p.nombre);
      const plantilla = JUGADORES_REALES[p.nombre] || FORMACION.map((rol, i) => `Jugador ${i + 1}`);
      const cartas = [
        {
          id: `${sigla}-ESC`,
          nombre: `Escudo · ${p.nombre}`,
          rol: "Federación",
          tipo: "escudo",
          // Escudo real de la federación (logo), a colocar en img/escudos/<code>.png
          foto: `img/escudos/${p.code}.png`,
          // Respaldo si todavía no tienen el logo: la bandera del país (URL externa real)
          bandera: `https://flagcdn.com/w320/${p.code}.png`,
        },
        ...FORMACION.map((rol, i) => ({
          id: `${sigla}-${String(i + 1).padStart(2, "0")}`,
          nombre: plantilla[i],
          rol,
          tipo: "jugador",
          dorsal: i + 1,
          // Convención de imagen local: img/jugadores/<ID-DE-LA-CARTA>.jpg
          foto: `img/jugadores/${sigla}-${String(i + 1).padStart(2, "0")}.jpg`,
          // Respaldo si todavía no tienen la foto del jugador: la bandera del país (atenuada, ver app.js/styles.css)
          bandera: `https://flagcdn.com/w320/${p.code}.png`,
        })),
      ];
      paises.push({
        pais: p.nombre,
        code: p.code,
        confederacion: conf.codigo,
        cartas,
      });
    });
  });
  return paises;
}

const ALBUM_DATA = construirAlbumLocal();
