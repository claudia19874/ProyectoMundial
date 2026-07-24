let apiKey;
let apiUrl;
try {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    apiKey = import.meta.env.VITE_APIKEY;
    apiUrl = import.meta.env.VITE_API_URL;
  }
} catch (e) {
  apiKey = undefined;
  apiUrl = undefined;
}

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

const GROUPS = [
  { wcGroup: "Grupo A", countries: ["México", "Sudáfrica", "Corea del Sur", "Chequia"] },
  { wcGroup: "Grupo B", countries: ["Canadá", "Suiza", "Bosnia y Herzegovina", "Catar"] },
  { wcGroup: "Grupo C", countries: ["Brasil", "Marruecos", "Escocia", "Haití"] },
  { wcGroup: "Grupo D", countries: ["Estados Unidos", "Australia", "Paraguay", "Turquía"] },
  { wcGroup: "Grupo E", countries: ["Alemania", "Costa de Marfil", "Ecuador", "Curazao"] },
  { wcGroup: "Grupo F", countries: ["Países Bajos", "Japón", "Suecia", "Túnez"] },
  { wcGroup: "Grupo G", countries: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"] },
  { wcGroup: "Grupo H", countries: ["España", "Cabo Verde", "Uruguay", "Arabia Saudita"] },
  { wcGroup: "Grupo I", countries: ["Francia", "Noruega", "Senegal", "Irak"] },
  { wcGroup: "Grupo J", countries: ["Argentina", "Austria", "Argelia", "Jordania"] },
  { wcGroup: "Grupo K", countries: ["Portugal", "Colombia", "República Democrática del Congo", "Uzbekistán"] },
  { wcGroup: "Grupo L", countries: ["Inglaterra", "Croacia", "Ghana", "Panamá"] }
];

async function construirAlbumLocal() {
  if (!apiUrl || !apiKey) return null;
  try {
    const resp = await fetch(apiUrl + '/api/album/', {
      method: 'GET',
      headers: { 'x-api-key': apiKey }
    });
    if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText);
    return await resp.json();
  } catch (err) {
    console.warn("No se pudo cargar el album desde el API:", err.message);
    return null;
  }
}

async function BuscarCatalogoBarajitas() {
  if (!apiUrl || !apiKey) return null;
  try {
    const resp = await fetch(apiUrl + '/api/cards/', {
      method: 'GET',
      headers: { 'x-api-key': apiKey }
    });
    if (!resp.ok) throw new Error(resp.status + ' ' + resp.statusText);
    return await resp.json();
  } catch (err) {
    console.warn("No se pudo cargar el catalogo desde el API:", err.message);
    return null;
  }
}

const SIGLAS_PAISES = {
  "México": "MEX", "Sudáfrica": "RSA", "Corea del Sur": "KOR", "Chequia": "CZE",
  "Canadá": "CAN", "Suiza": "SUI", "Bosnia y Herzegovina": "BIH", "Catar": "QAT",
  "Brasil": "BRA", "Marruecos": "MAR", "Escocia": "SCO", "Haití": "HAI",
  "Estados Unidos": "USA", "Australia": "AUS", "Paraguay": "PAR", "Turquía": "TUR",
  "Alemania": "GER", "Costa de Marfil": "CIV", "Ecuador": "ECU", "Curazao": "CUW",
  "Países Bajos": "NED", "Japón": "JPN", "Suecia": "SWE", "Túnez": "TUN",
  "Bélgica": "BEL", "Egipto": "EGY", "Irán": "IRN", "Nueva Zelanda": "NZL",
  "España": "ESP", "Cabo Verde": "CPV", "Uruguay": "URU", "Arabia Saudita": "KSA",
  "Francia": "FRA", "Noruega": "NOR", "Senegal": "SEN", "Irak": "IRQ",
  "Argentina": "ARG", "Austria": "AUT", "Argelia": "ALG", "Jordania": "JOR",
  "Portugal": "POR", "Colombia": "COL", "República Democrática del Congo": "COD", "Uzbekistán": "UZB",
  "Inglaterra": "ENG", "Croacia": "CRO", "Ghana": "GHA", "Panamá": "PAN"
};

const FORMACION = ["Escudo", "Arquero", "Defensa", "Defensa", "Defensa", "Defensa", "Mediocampista", "Mediocampista", "Mediocampista", "Delantero", "Delantero", "Delantero"];

const PLANTILLAS = {
  "Argentina": ["Emiliano Martinez", "Nahuel Molina", "Cristian Romero", "Nicolas Otamendi", "Lisandro Martinez", "Rodrigo De Paul", "Enzo Fernandez", "Alexis Mac Allister", "Julian Alvarez", "Lionel Messi", "Angel Di Maria"],
  "Brasil": ["Alisson Becker", "Danilo", "Marquinhos", "Gabriel Magalhaes", "Renan Lodi", "Casemiro", "Bruno Guimaraes", "Lucas Paqueta", "Vinicius Junior", "Rodrygo", "Raphinha"],
  "Francia": ["Mike Maignan", "Jules Kounde", "William Saliba", "Ibrahima Konate", "Theo Hernandez", "Aurelien Tchouameni", "Adrien Rabiot", "Antoine Griezmann", "Ousmane Dembele", "Kylian Mbappe", "Marcus Thuram"],
  "España": ["Unai Simon", "Dani Carvajal", "Aymeric Laporte", "Robin Le Normand", "Marc Cucurella", "Rodri", "Pedri", "Fabian Ruiz", "Lamine Yamal", "Alvaro Morata", "Nico Williams"],
  "Portugal": ["Diogo Costa", "Joao Cancelo", "Ruben Dias", "Pepe", "Nuno Mendes", "Ruben Neves", "Bruno Fernandes", "Bernardo Silva", "Rafael Leao", "Cristiano Ronaldo", "Joao Felix"],
  "Alemania": ["Manuel Neuer", "Joshua Kimmich", "Antonio Rudiger", "Jonathan Tah", "David Raum", "Ilkay Gundogan", "Toni Kroos", "Jamal Musiala", "Florian Wirtz", "Kai Havertz", "Leroy Sane"],
  "Inglaterra": ["Jordan Pickford", "Kyle Walker", "John Stones", "Harry Maguire", "Luke Shaw", "Declan Rice", "Jude Bellingham", "Phil Foden", "Bukayo Saka", "Harry Kane", "Marcus Rashford"],
  "Países Bajos": ["Bart Verbruggen", "Denzel Dumfries", "Virgil van Dijk", "Nathan Ake", "Daley Blind", "Frenkie de Jong", "Tijjani Reijnders", "Xavi Simons", "Cody Gakpo", "Memphis Depay", "Donyell Malen"],
  "Bélgica": ["Koen Casteels", "Timothy Castagne", "Wout Faes", "Jan Vertonghen", "Arthur Theate", "Amadou Onana", "Kevin De Bruyne", "Youri Tielemans", "Jeremy Doku", "Romelu Lukaku", "Leandro Trossard"],
  "Croacia": ["Dominik Livakovic", "Josip Juranovic", "Josko Gvardiol", "Dejan Lovren", "Borna Sosa", "Mateo Kovacic", "Luka Modric", "Marcelo Brozovic", "Ivan Perisic", "Andrej Kramaric", "Bruno Petkovic"],
  "Uruguay": ["Sergio Rochet", "Nahitan Nandez", "Jose Maria Gimenez", "Ronald Araujo", "Mathias Olivera", "Federico Valverde", "Rodrigo Bentancur", "Manuel Ugarte", "Facundo Pellistri", "Darwin Nunez", "Maximiliano Araujo"],
  "México": ["Guillermo Ochoa", "Cesar Montes", "Nestor Araujo", "Jesus Gallardo", "Julian Araujo", "Edson Alvarez", "Luis Chavez", "Orbelin Pineda", "Hirving Lozano", "Raul Jimenez", "Santiago Gimenez"],
  "Estados Unidos": ["Matt Turner", "Sergino Dest", "Chris Richards", "Tim Ream", "Antonee Robinson", "Tyler Adams", "Yunus Musah", "Weston McKennie", "Christian Pulisic", "Ricardo Pepi", "Timothy Weah"],
  "Canadá": ["Milan Borjan", "Alistair Johnston", "Kamal Miller", "Steven Vitoria", "Alphonso Davies", "Stephen Eustaquio", "Atiba Hutchinson", "Tajon Buchanan", "Jonathan David", "Cyle Larin", "Junior Hoilett"],
  "Japón": ["Zion Suzuki", "Hiroki Ito", "Ko Itakura", "Shogo Taniguchi", "Yukinari Sugawara", "Wataru Endo", "Hidemasa Morita", "Takefusa Kubo", "Ritsu Doan", "Kaoru Mitoma", "Ayase Ueda"],
  "Corea del Sur": ["Kim Seung-gyu", "Kim Moon-hwan", "Kim Min-jae", "Kim Young-gwon", "Lee Ki-je", "Jung Woo-young", "Lee Jae-sung", "Lee Kang-in", "Son Heung-min", "Cho Gue-sung", "Hwang Hee-chan"],
  "Marruecos": ["Yassine Bounou", "Achraf Hakimi", "Romain Saiss", "Nayef Aguerd", "Noussair Mazraoui", "Sofyan Amrabat", "Azzedine Ounahi", "Hakim Ziyech", "Youssef En-Nesyri", "Amine Harit", "Ilias Chair"],
  "Senegal": ["Edouard Mendy", "Kalidou Koulibaly", "Abdou Diallo", "Ismail Jakobs", "Youssouf Sabaly", "Idrissa Gueye", "Nampalys Mendy", "Cheikhou Kouyate", "Sadio Mane", "Ismaila Sarr", "Boulaye Dia"],
  "Australia": ["Mathew Ryan", "Milos Degenek", "Harry Souttar", "Kye Rowles", "Aziz Behich", "Aaron Mooy", "Ajdin Hrustic", "Riley McGree", "Mathew Leckie", "Mitchell Duke", "Craig Goodwin"],
  "Colombia": ["Camilo Vargas", "Daniel Munoz", "Davinson Sanchez", "Yerry Mina", "Johan Mojica", "Jefferson Lerma", "Richard Rios", "James Rodriguez", "Luis Diaz", "Rafael Santos Borre", "Jhon Duran"],
  "Ecuador": ["Hernan Galindez", "Angelo Preciado", "Piero Hincapie", "Felix Torres", "Pervis Estupinan", "Moises Caicedo", "Kendry Paez", "Alan Franco", "Gonzalo Plata", "Enner Valencia", "Kevin Rodriguez"],
  "Paraguay": ["Roberto Fernandez", "Robert Rojas", "Gustavo Gomez", "Junior Alonso", "Juan Caceres", "Andres Cubas", "Diego Gomez", "Ramon Sosa", "Miguel Almiron", "Antonio Sanabria", "Julio Enciso"],
  "Suiza": ["Yann Sommer", "Silvan Widmer", "Manuel Akanji", "Nico Elvedi", "Ricardo Rodriguez", "Granit Xhaka", "Remo Freuler", "Xherdan Shaqiri", "Ruben Vargas", "Breel Embolo", "Zeki Amdouni"],
  "Austria": ["Alexander Schlager", "Stefan Posch", "Kevin Danso", "Maximilian Wober", "Philipp Mwene", "Konrad Laimer", "Xaver Schlager", "Christoph Baumgartner", "Marcel Sabitzer", "Michael Gregoritsch", "Marko Arnautovic"],
  "Turquía": ["Ugurcan Cakir", "Zeki Celik", "Merih Demiral", "Samet Akaydin", "Ferdi Kadioglu", "Hakan Calhanoglu", "Ismail Yuksek", "Salih Ozcan", "Kenan Yildiz", "Baris Alper Yilmaz", "Kerem Akturkoglu"],
  "Suecia": ["Robin Olsen", "Emil Krafth", "Victor Nilsson Lindelof", "Isak Hien", "Ludwig Augustinsson", "Jens Cajuste", "Albin Ekdal", "Dejan Kulusevski", "Emil Forsberg", "Alexander Isak", "Anthony Elanga"],
  "Noruega": ["Orjan Nyland", "Julian Ryerson", "Kristoffer Ajer", "Leo Ostigard", "Fredrik Bjorkan", "Sander Berge", "Martin Odegaard", "Patrick Berg", "Mohamed Elyounoussi", "Erling Haaland", "Alexander Sorloth"],
  "Escocia": ["Angus Gunn", "Aaron Hickey", "Grant Hanley", "Jack Hendry", "Andrew Robertson", "Callum McGregor", "John McGinn", "Scott McTominay", "Ryan Christie", "Che Adams", "Lyndon Dykes"],
  "Chequia": ["Jindrich Stanek", "Vladimir Coufal", "Robin Hranac", "Tomas Vlcek", "David Jurasek", "Tomas Soucek", "Ladislav Krejci", "Antonin Barak", "Adam Hlozek", "Patrik Schick", "Mojmir Chytil"],
  "Bosnia y Herzegovina": ["Ibrahim Sehic", "Sead Kolasinac", "Nihad Mujakic", "Amir Hadziahmetovic", "Amar Dedic", "Miralem Pjanic", "Rade Krunic", "Edin Visca", "Ermedin Demirovic", "Edin Dzeko", "Amar Rahmanovic"],
  "Egipto": ["Mohamed El Shenawy", "Ahmed Hegazy", "Mohamed Abdelmonem", "Mohamed Hamdy", "Ahmed Fatouh", "Mohamed Elneny", "Mohamed Hamdi", "Mahmoud Trezeguet", "Mostafa Mohamed", "Mohamed Salah", "Omar Marmoush"],
  "Sudáfrica": ["Ronwen Williams", "Nyiko Mobbie", "Grant Kekana", "Mothobi Mvala", "Aubrey Modiba", "Teboho Mokoena", "Sphephelo Sithole", "Mihlali Mayambela", "Themba Zwane", "Percy Tau", "Lyle Foster"],
  "Nueva Zelanda": ["Oliver Sail", "Michael Boxall", "Tommy Smith", "Nando Pijnaker", "Liberato Cacace", "Marko Stamenic", "Joe Bell", "Elijah Just", "Callum McCowatt", "Chris Wood", "Ben Waine"],
  "Panamá": ["Orlando Mosquera", "Michael Amir Murillo", "Cesar Blackman", "Andres Andrade", "Eric Davis", "Christopher Perez", "Adalberto Carrasquilla", "Anibal Godoy", "Ismael Diaz", "Cesar Yanis", "Jose Fajardo"],
  "Túnez": ["Aymen Dahmen", "Mohamed Drager", "Yassine Meriah", "Montassar Talbi", "Ali Abdi", "Aissa Laidouni", "Ellyes Skhiri", "Wahbi Khazri", "Anis Ben Slimane", "Youssef Msakni", "Naim Sliti"],
  "Irán": ["Alireza Beiranvand", "Ramin Rezaeian", "Morteza Pouraliganji", "Shojae Khalilzadeh", "Ehsan Hajsafi", "Ahmad Nourollahi", "Saeid Ezatolahi", "Alireza Jahanbakhsh", "Sardar Azmoun", "Mehdi Taremi", "Karim Ansarifard"],
  "Arabia Saudita": ["Mohammed Al-Owais", "Saud Abdulhamid", "Ali Al-Bulaihi", "Abdulelah Al-Amri", "Yasir Al-Shahrani", "Salman Al-Faraj", "Mohamed Kanno", "Salem Al-Dawsari", "Saleh Al-Shehri", "Firas Al-Buraikan", "Feras Al-Brikan"],
  "Ghana": ["Lawrence Ati Zigi", "Alexander Djiku", "Daniel Amartey", "Denis Odoi", "Gideon Mensah", "Thomas Partey", "Mohammed Kudus", "Andre Ayew", "Jordan Ayew", "Antoine Semenyo", "Inaki Williams"],
  "Costa de Marfil": ["Yahia Fofana", "Serge Aurier", "Willy Boly", "Odilon Kossounou", "Ghislain Konan", "Franck Kessie", "Ibrahim Sangare", "Nicolas Pepe", "Sebastien Haller", "Wilfried Zaha", "Simon Adingra"],
  "Argelia": ["Rais MBolhi", "Mohamed Farsi", "Ramy Bensebaini", "Aissa Mandi", "Youcef Atal", "Ismael Bennacer", "Nabil Bentaleb", "Riyad Mahrez", "Islam Slimani", "Baghdad Bounedjah", "Said Benrahma"],
  "Uzbekistán": ["Utkir Yusupov", "Sherzod Nasrullaev", "Farrukh Sayfiev", "Rustamjon Ashurmatov", "Abdukodir Khusanov", "Jaloliddin Masharipov", "Otabek Shukurov", "Eldor Shomurodov", "Igor Sergeev", "Bobur Abdikholikov", "Oston Urunov"],
  "Jordania": ["Yazeed Abulaila", "Ihsan Haddad", "Yazan Al-Arab", "Salem Al-Ajalin", "Ehsan Haddad", "Nour Alrawabdeh", "Yazan Al-Naimat", "Musa Al-Taamari", "Ali Olwan", "Hamza Al-Dardour", "Mahmoud Al-Mardi"],
  "Irak": ["Jalal Hassan", "Zaid Tahseen", "Rebin Sulaka", "Merchas Doski", "Hussein Ali", "Amir Al-Ammari", "Ibrahim Bayesh", "Mohanad Ali", "Aymen Hussein", "Ali Al-Hamadi", "Bashar Resan"],
  "Curazao": ["Eloy Room", "Cuco Martina", "Sherel Floranus", "Juninho Bacuna", "Roshon van Eijma", "Leandro Bacuna", "Michael Maria", "Livano Comenencia", "Tahith Chong", "Kenji Gorre", "Charlison Benschop"],
  "Cabo Verde": ["Vozinha", "Diney Borges", "Roberto Lopes", "Steven Fortes", "Kevyn", "Kenny Rocha", "Deroy Duarte", "Ryan Mendes", "Bebe", "Bryan Teixeira", "Jamiro Monteiro"],
  "Haití": ["Josue Duverger", "Ricardo Adé", "Andrew Jean-Baptiste", "Carlens Arcus", "Zachary Herivaux", "Danley Jean Jacques", "Steeven Saba", "Jean-Ricner Bellegarde", "Frantzdy Pierrot", "Duckens Nazon", "Fafà Picault"],
  "República Democrática del Congo": ["Lionel Mpasi", "Chancel Mbemba", "Arthur Masuaku", "Gedeon Kalulu", "Aaron Tshibola", "Samuel Moutoussamy", "Grady Diangana", "Yoane Wissa", "Cedric Bakambu", "Fiston Mayele", "Silas Katompa"]
};

function generarCatalogoLocal() {
  const clubes = ["Real Madrid", "Barcelona", "Bayern Munich", "PSG", "Manchester City", "Liverpool", "Arsenal", "Chelsea", "Juventus", "Inter Milan", "AC Milan", "Napoli", "Atletico Madrid", "Borussia Dortmund", "Manchester United"];
  const countries = [];

  GROUPS.forEach((grupo) => {
    grupo.countries.forEach((nombrePais) => {
      const sigla = SIGLAS_PAISES[nombrePais] || nombrePais.slice(0, 3).toUpperCase();
      const jugadores = PLANTILLAS[nombrePais] || [];
      const cards = [];

      for (let i = 0; i < 12; i++) {
        const role = FORMACION[i];
        if (role === "Escudo") {
          cards.push({
            id: sigla + "-ESC",
            name: "Escudo " + nombrePais,
            role: "Escudo"
          });
        } else {
          const num = i;
          const id = sigla + "-" + String(num).padStart(2, "0");
          const nombreJugador = jugadores[i - 1] || ("Jugador " + i);
          cards.push({
            id: id,
            name: nombreJugador,
            role: role,
            jerseyNumber: num,
            club: clubes[(i + sigla.charCodeAt(0)) % clubes.length]
          });
        }
      }

      countries.push({
        country: nombrePais,
        countryCode: sigla,
        wcGroup: grupo.wcGroup,
        cards: cards
      });
    });
  });

  return {
    countries: countries,
    totalCards: countries.length * 12
  };
}

let CATALOGO_COMPLETO = await BuscarCatalogoBarajitas();
let ALBUM_DATA = await construirAlbumLocal();

if (!CATALOGO_COMPLETO || !CATALOGO_COMPLETO.countries || CATALOGO_COMPLETO.countries.length === 0) {
  CATALOGO_COMPLETO = generarCatalogoLocal();
  ALBUM_DATA = CATALOGO_COMPLETO;
}

if (!CATALOGO_COMPLETO.totalCards) {
  CATALOGO_COMPLETO.totalCards = CATALOGO_COMPLETO.countries.reduce((acc, p) => acc + (p.cards ? p.cards.length : 0), 0);
}

export { CATALOGO_COMPLETO, ALBUM_DATA, GROUPS, FLAG_CODES };
