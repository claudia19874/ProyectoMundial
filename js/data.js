
const CONFEDERACIONES = [
  {
    "codigo": "CONMEBOL",
    "nombre": "Conmebol · Sudamérica",
    "paises": [
      {
        "nombre": "Argentina",
        "code": "ar",
        "fifaCode": "arg"
      },
      {
        "nombre": "Brasil",
        "code": "br",
        "fifaCode": "bra"
      },
      {
        "nombre": "Colombia",
        "code": "co",
        "fifaCode": "col"
      },
      {
        "nombre": "Ecuador",
        "code": "ec",
        "fifaCode": "ecu"
      },
      {
        "nombre": "Paraguay",
        "code": "py",
        "fifaCode": "par"
      },
      {
        "nombre": "Uruguay",
        "code": "uy",
        "fifaCode": "uru"
      }
    ]
  },
  {
    "codigo": "UEFA",
    "nombre": "UEFA · Europa",
    "paises": [
      {
        "nombre": "Alemania",
        "code": "de",
        "fifaCode": "ger"
      },
      {
        "nombre": "Austria",
        "code": "at",
        "fifaCode": "aut"
      },
      {
        "nombre": "Bélgica",
        "code": "be",
        "fifaCode": "bel"
      },
      {
        "nombre": "Bosnia y Herzegovina",
        "code": "ba",
        "fifaCode": "bih"
      },
      {
        "nombre": "Croacia",
        "code": "hr",
        "fifaCode": "cro"
      },
      {
        "nombre": "España",
        "code": "es",
        "fifaCode": "esp"
      },
      {
        "nombre": "Escocia",
        "code": "gb-sct",
        "fifaCode": "sco"
      },
      {
        "nombre": "Francia",
        "code": "fr",
        "fifaCode": "fra"
      },
      {
        "nombre": "Países Bajos",
        "code": "nl",
        "fifaCode": "ned"
      },
      {
        "nombre": "Noruega",
        "code": "no",
        "fifaCode": "nor"
      },
      {
        "nombre": "Portugal",
        "code": "pt",
        "fifaCode": "por"
      },
      {
        "nombre": "República Checa",
        "code": "cz",
        "fifaCode": "cze"
      },
      {
        "nombre": "Suecia",
        "code": "se",
        "fifaCode": "swe"
      },
      {
        "nombre": "Suiza",
        "code": "ch",
        "fifaCode": "sui"
      },
      {
        "nombre": "Turquía",
        "code": "tr",
        "fifaCode": "tur"
      },
      {
        "nombre": "Inglaterra",
        "code": "gb-eng",
        "fifaCode": "eng"
      }
    ]
  },
  {
    "codigo": "CAF",
    "nombre": "CAF · África",
    "paises": [
      {
        "nombre": "Argelia",
        "code": "dz",
        "fifaCode": "alg"
      },
      {
        "nombre": "Cabo Verde",
        "code": "cv",
        "fifaCode": "cpv"
      },
      {
        "nombre": "Costa de Marfil",
        "code": "ci",
        "fifaCode": "civ"
      },
      {
        "nombre": "Egipto",
        "code": "eg",
        "fifaCode": "egy"
      },
      {
        "nombre": "Ghana",
        "code": "gh",
        "fifaCode": "gha"
      },
      {
        "nombre": "Marruecos",
        "code": "ma",
        "fifaCode": "mar"
      },
      {
        "nombre": "República Democrática del Congo",
        "code": "cd",
        "fifaCode": "cod"
      },
      {
        "nombre": "Senegal",
        "code": "sn",
        "fifaCode": "sen"
      },
      {
        "nombre": "Sudáfrica",
        "code": "za",
        "fifaCode": "rsa"
      },
      {
        "nombre": "Túnez",
        "code": "tn",
        "fifaCode": "tun"
      }
    ]
  },
  {
    "codigo": "AFC",
    "nombre": "AFC · Asia",
    "paises": [
      {
        "nombre": "Arabia Saudita",
        "code": "sa",
        "fifaCode": "ksa"
      },
      {
        "nombre": "Australia",
        "code": "au",
        "fifaCode": "aus"
      },
      {
        "nombre": "Catar",
        "code": "qa",
        "fifaCode": "qat"
      },
      {
        "nombre": "Corea del Sur",
        "code": "kr",
        "fifaCode": "kor"
      },
      {
        "nombre": "Irak",
        "code": "iq",
        "fifaCode": "irq"
      },
      {
        "nombre": "Irán",
        "code": "ir",
        "fifaCode": "irn"
      },
      {
        "nombre": "Japón",
        "code": "jp",
        "fifaCode": "jpn"
      },
      {
        "nombre": "Jordania",
        "code": "jo",
        "fifaCode": "jor"
      },
      {
        "nombre": "Uzbekistán",
        "code": "uz",
        "fifaCode": "uzb"
      }
    ]
  },
  {
    "codigo": "CONCACAF",
    "nombre": "Concacaf · Norte y Centroamérica",
    "paises": [
      {
        "nombre": "Canadá",
        "code": "ca",
        "fifaCode": "can"
      },
      {
        "nombre": "Curazao",
        "code": "cw",
        "fifaCode": "cuw"
      },
      {
        "nombre": "Estados Unidos",
        "code": "us",
        "fifaCode": "usa"
      },
      {
        "nombre": "Haití",
        "code": "ht",
        "fifaCode": "hai"
      },
      {
        "nombre": "México",
        "code": "mx",
        "fifaCode": "mex"
      },
      {
        "nombre": "Panamá",
        "code": "pa",
        "fifaCode": "pan"
      }
    ]
  },
  {
    "codigo": "OFC",
    "nombre": "OFC · Oceanía",
    "paises": [
      {
        "nombre": "Nueva Zelanda",
        "code": "nz",
        "fifaCode": "nzl"
      }
    ]
  }
];


const DATOS_JUGADORES = [
  {
    "id": "mex-00",
    "nombre": "Escudo FEFEMEX",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mex-01",
    "nombre": "Guillermo Ochoa",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Portero",
    "club": "AEL Limassol",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Guillermo_Ochoa_2018.jpg/800px-Guillermo_Ochoa_2018.jpg"
  },
  {
    "id": "mex-02",
    "nombre": "Jorge Sánchez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "PAOK Saloniki",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mex-03",
    "nombre": "César Montes",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "FC Lokomotiv Moscow",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/C%C3%A9sar_Montes.jpg/800px-C%C3%A9sar_Montes.jpg"
  },
  {
    "id": "mex-04",
    "nombre": "Johan Vásquez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Genoa CFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mex-05",
    "nombre": "Jesús Gallardo",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Deportivo Toluca FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jes%C3%BAs_Gallardo_2018.jpg/800px-Jes%C3%BAs_Gallardo_2018.jpg"
  },
  {
    "id": "mex-06",
    "nombre": "Edson Álvarez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Fenerbahçe SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Edson_%C3%81lvarez_2018.jpg/800px-Edson_%C3%81lvarez_2018.jpg"
  },
  {
    "id": "mex-07",
    "nombre": "Luis Chávez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "FC Dynamo Moscow",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Luis_Ch%C3%A1vez_2022.jpg/800px-Luis_Ch%C3%A1vez_2022.jpg"
  },
  {
    "id": "mex-08",
    "nombre": "Orbelín Pineda",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "AEK Athens",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Orbel%C3%ADn_Pineda_2018.jpg/800px-Orbel%C3%ADn_Pineda_2018.jpg"
  },
  {
    "id": "mex-09",
    "nombre": "Santiago Giménez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Santiago_Gim%C3%A9nez_2022.jpg/800px-Santiago_Gim%C3%A9nez_2022.jpg"
  },
  {
    "id": "mex-10",
    "nombre": "Raúl Jiménez",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Fulham FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Ra%C3%BAl_Jim%C3%A9nez_2018.jpg/800px-Ra%C3%BAl_Jim%C3%A9nez_2018.jpg"
  },
  {
    "id": "mex-11",
    "nombre": "Julián Quiñones",
    "pais": "México",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Al Qadsiah FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-00",
    "nombre": "Escudo SAFA",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-01",
    "nombre": "Ronwen Williams",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Portero",
    "club": "Mamelodi Sundowns FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-02",
    "nombre": "Khuliso Mudau",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Mamelodi Sundowns FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-03",
    "nombre": "Aubrey Modiba",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Mamelodi Sundowns FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-04",
    "nombre": "Nkosinathi Sibisi",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Orlando Pirates FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-05",
    "nombre": "Mbekezeli Mbokazi",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Chicago Fire FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-06",
    "nombre": "Teboho Mokoena",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Mamelodi Sundowns FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-07",
    "nombre": "Sphephelo Sithole",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "CD Tondela",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-08",
    "nombre": "Themba Zwane",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Mamelodi Sundowns FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-09",
    "nombre": "Oswin Appollis",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Orlando Pirates FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-10",
    "nombre": "Lyle Foster",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Burnley FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "rsa-11",
    "nombre": "Evidence Makgopa",
    "pais": "Sudáfrica",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Orlando Pirates FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "kor-00",
    "nombre": "Escudo KFA",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "kor-01",
    "nombre": "Kim Seunggyu",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Portero",
    "club": "FC Tokyo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Kim_Seung-gyu_2018.jpg/800px-Kim_Seung-gyu_2018.jpg"
  },
  {
    "id": "kor-02",
    "nombre": "Kim Minjae",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Kim_Min-jae_2022.jpg/800px-Kim_Min-jae_2022.jpg"
  },
  {
    "id": "kor-03",
    "nombre": "Seol Youngwoo",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "FK Crvena Zvezda",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "kor-04",
    "nombre": "Kim Moonhwan",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Daejeon Hana Citizen FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Kim_Moon-hwan_2019.jpg/800px-Kim_Moon-hwan_2019.jpg"
  },
  {
    "id": "kor-05",
    "nombre": "Lee Hanbeom",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "FC Midtjylland",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "kor-06",
    "nombre": "Hwang Inbeom",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Feyenoord Rotterdam",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Hwang_In-beom_2019.jpg/800px-Hwang_In-beom_2019.jpg"
  },
  {
    "id": "kor-07",
    "nombre": "Lee Kangin",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lee_Kang-in_2019.jpg/800px-Lee_Kang-in_2019.jpg"
  },
  {
    "id": "kor-08",
    "nombre": "Lee Jaesung",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "1. FSV Mainz 05",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lee_Jae-sung_2018.jpg/800px-Lee_Jae-sung_2018.jpg"
  },
  {
    "id": "kor-09",
    "nombre": "Son Heungmin",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "LAFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Son_Heung-min_2018.jpg/800px-Son_Heung-min_2018.jpg"
  },
  {
    "id": "kor-10",
    "nombre": "Hwang Heechan",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "Wolverhampton Wanderers FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Hwang_Hee-chan_2018.jpg/800px-Hwang_Hee-chan_2018.jpg"
  },
  {
    "id": "kor-11",
    "nombre": "Cho Guesung",
    "pais": "Corea del Sur",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "FC Midtjylland",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Cho_Gue-sung_2022.jpg/800px-Cho_Gue-sung_2022.jpg"
  },
  {
    "id": "cze-00",
    "nombre": "Escudo FACR",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-01",
    "nombre": "Jindřich Staněk",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Portero",
    "club": "SK Slavia Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-02",
    "nombre": "Vladimír Coufal",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "TSG Hoffenheim",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vladim%C3%ADr_Coufal_2021.jpg/800px-Vladim%C3%ADr_Coufal_2021.jpg"
  },
  {
    "id": "cze-03",
    "nombre": "Tomáš Holeš",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "SK Slavia Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-04",
    "nombre": "Ladislav Krejčí",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "Wolverhampton Wanderers FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-05",
    "nombre": "David Zima",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Defensa",
    "club": "SK Slavia Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-06",
    "nombre": "Tomáš Souček",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "West Ham United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Tom%C3%A1%C5%A1_Sou%C4%8Dek_2021.jpg/800px-Tom%C3%A1%C5%A1_Sou%C4%8Dek_2021.jpg"
  },
  {
    "id": "cze-07",
    "nombre": "Michal Sadílek",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "SK Slavia Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-08",
    "nombre": "Lukáš Provod",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Centrocampista",
    "club": "SK Slavia Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cze-09",
    "nombre": "Patrik Schick",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Patrik_Schick_2021.jpg/800px-Patrik_Schick_2021.jpg"
  },
  {
    "id": "cze-10",
    "nombre": "Adam Hložek",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "TSG Hoffenheim",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Adam_Hlo%C5%BEek_2021.jpg/800px-Adam_Hlo%C5%BEek_2021.jpg"
  },
  {
    "id": "cze-11",
    "nombre": "Jan Kuchta",
    "pais": "República Checa",
    "grupo": "Grupo A",
    "posicion": "Delantero",
    "club": "AC Sparta Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-00",
    "nombre": "Escudo Canada Soccer",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-01",
    "nombre": "Maxime Crépeau",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Portero",
    "club": "Orlando City SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-02",
    "nombre": "Alistair Johnston",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Celtic FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alistair_Johnston_2022.jpg/800px-Alistair_Johnston_2022.jpg"
  },
  {
    "id": "can-03",
    "nombre": "Alphonso Davies",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Alphonso_Davies_2022.jpg/800px-Alphonso_Davies_2022.jpg"
  },
  {
    "id": "can-04",
    "nombre": "Moïse Bombito",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "OGC Nice",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-05",
    "nombre": "Derek Cornelius",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Rangers FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-06",
    "nombre": "Stephen Eustáquio",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "LAFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Stephen_Eust%C3%A1quio_2022.jpg/800px-Stephen_Eust%C3%A1quio_2022.jpg"
  },
  {
    "id": "can-07",
    "nombre": "Ismaël Koné",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "US Sassuolo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "can-08",
    "nombre": "Jonathan Osorio",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Toronto FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jonathan_Osorio_2018.jpg/800px-Jonathan_Osorio_2018.jpg"
  },
  {
    "id": "can-09",
    "nombre": "Jonathan David",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Juventus FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Jonathan_David_2022.jpg/800px-Jonathan_David_2022.jpg"
  },
  {
    "id": "can-10",
    "nombre": "Cyle Larin",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Southampton FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cyle_Larin_2022.jpg/800px-Cyle_Larin_2022.jpg"
  },
  {
    "id": "can-11",
    "nombre": "Tajon Buchanan",
    "pais": "Canadá",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Villarreal CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tajon_Buchanan_2022.jpg/800px-Tajon_Buchanan_2022.jpg"
  },
  {
    "id": "bih-00",
    "nombre": "Escudo N/FSBiH",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-01",
    "nombre": "Nikola Vasilj",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Portero",
    "club": "FC St. Pauli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-02",
    "nombre": "Amar Dedić",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "SL Benfica",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-03",
    "nombre": "Sead Kolašinac",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Atalanta Bergamo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Sead_Kola%C5%A1inac_2018.jpg/800px-Sead_Kola%C5%A1inac_2018.jpg"
  },
  {
    "id": "bih-04",
    "nombre": "Dennis Hadžikadunić",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "UC Sampdoria",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-05",
    "nombre": "Tarik Muharemović",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "US Sassuolo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-06",
    "nombre": "Benjamin Tahirović",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Brøndby IF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-07",
    "nombre": "Armin Gigović",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "BSC Young Boys",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-08",
    "nombre": "Amir Hadžiahmetović",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Hull City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bih-09",
    "nombre": "Edin Džeko",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "FC Schalke 04",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Edin_D%C5%BEeko_2018.jpg/800px-Edin_D%C5%BEeko_2018.jpg"
  },
  {
    "id": "bih-10",
    "nombre": "Ermedin Demirović",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "VfB Stuttgart",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ermedin_Demirovi%C4%87_2021.jpg/800px-Ermedin_Demirovi%C4%87_2021.jpg"
  },
  {
    "id": "bih-11",
    "nombre": "Samed Baždar",
    "pais": "Bosnia y Herzegovina",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Jagiellonia Białystok",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "qat-00",
    "nombre": "Escudo QFA",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "qat-01",
    "nombre": "Meshaal Barsham",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Portero",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "qat-02",
    "nombre": "Pedro Miguel",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pedro_Miguel_2019.jpg/800px-Pedro_Miguel_2019.jpg"
  },
  {
    "id": "qat-03",
    "nombre": "Boualem Khoukhi",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Boualem_Khoukhi_2019.jpg/800px-Boualem_Khoukhi_2019.jpg"
  },
  {
    "id": "qat-04",
    "nombre": "Lucas Mendes",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Al Wakrah SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "qat-05",
    "nombre": "Homam Ahmed",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Cultural Leonesa",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "qat-06",
    "nombre": "Abdulaziz Hatem",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Al Rayyan SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abdulaziz_Hatem_2019.jpg/800px-Abdulaziz_Hatem_2019.jpg"
  },
  {
    "id": "qat-07",
    "nombre": "Karim Boudiaf",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Al Duhail SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Karim_Boudiaf_2019.jpg/800px-Karim_Boudiaf_2019.jpg"
  },
  {
    "id": "qat-08",
    "nombre": "Hassan Al-Haydos",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hassan_Al-Haydos_2019.jpg/800px-Hassan_Al-Haydos_2019.jpg"
  },
  {
    "id": "qat-09",
    "nombre": "Akram Afif",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Akram_Afif_2019.jpg/800px-Akram_Afif_2019.jpg"
  },
  {
    "id": "qat-10",
    "nombre": "Almoez Ali",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Al Duhail SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Almoez_Ali_2019.jpg/800px-Almoez_Ali_2019.jpg"
  },
  {
    "id": "qat-11",
    "nombre": "Ahmed Alaaeldin",
    "pais": "Catar",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Al Rayyan SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sui-00",
    "nombre": "Escudo SFV/ASF",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sui-01",
    "nombre": "Gregor Kobel",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Portero",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Gregor_Kobel_2021.jpg/800px-Gregor_Kobel_2021.jpg"
  },
  {
    "id": "sui-02",
    "nombre": "Silvan Widmer",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "1. FSV Mainz 05",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Silvan_Widmer_2021.jpg/800px-Silvan_Widmer_2021.jpg"
  },
  {
    "id": "sui-03",
    "nombre": "Manuel Akanji",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Manuel_Akanji_2018.jpg/800px-Manuel_Akanji_2018.jpg"
  },
  {
    "id": "sui-04",
    "nombre": "Nico Elvedi",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Borussia Mönchengladbach",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Nico_Elvedi_2018.jpg/800px-Nico_Elvedi_2018.jpg"
  },
  {
    "id": "sui-05",
    "nombre": "Ricardo Rodríguez",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Defensa",
    "club": "Real Betis",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ricardo_Rodr%C3%ADguez_2018.jpg/800px-Ricardo_Rodr%C3%ADguez_2018.jpg"
  },
  {
    "id": "sui-06",
    "nombre": "Granit Xhaka",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Sunderland AFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Granit_Xhaka_2018.jpg/800px-Granit_Xhaka_2018.jpg"
  },
  {
    "id": "sui-07",
    "nombre": "Remo Freuler",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "Bologna FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Remo_Freuler_2018.jpg/800px-Remo_Freuler_2018.jpg"
  },
  {
    "id": "sui-08",
    "nombre": "Denis Zakaria",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Centrocampista",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Denis_Zakaria_2018.jpg/800px-Denis_Zakaria_2018.jpg"
  },
  {
    "id": "sui-09",
    "nombre": "Breel Embolo",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Stade Rennais FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Breel_Embolo_2018.jpg/800px-Breel_Embolo_2018.jpg"
  },
  {
    "id": "sui-10",
    "nombre": "Dan Ndoye",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Nottingham Forest FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sui-11",
    "nombre": "Ruben Vargas",
    "pais": "Suiza",
    "grupo": "Grupo B",
    "posicion": "Delantero",
    "club": "Sevilla FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Ruben_Vargas_2021.jpg/800px-Ruben_Vargas_2021.jpg"
  },
  {
    "id": "bra-00",
    "nombre": "Escudo CBF",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bra-01",
    "nombre": "Alisson Becker",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Portero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Alisson_Becker_2018.jpg/800px-Alisson_Becker_2018.jpg"
  },
  {
    "id": "bra-02",
    "nombre": "Danilo",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "CR Flamengo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Danilo_2018.jpg/800px-Danilo_2018.jpg"
  },
  {
    "id": "bra-03",
    "nombre": "Marquinhos",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Marquinhos_2018.jpg/800px-Marquinhos_2018.jpg"
  },
  {
    "id": "bra-04",
    "nombre": "Gabriel Magalhães",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Gabriel_Magalh%C3%A3es_2021.jpg/800px-Gabriel_Magalh%C3%A3es_2021.jpg"
  },
  {
    "id": "bra-05",
    "nombre": "Casemiro",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Casemiro_2018.jpg/800px-Casemiro_2018.jpg"
  },
  {
    "id": "bra-06",
    "nombre": "Bruno Guimarães",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Newcastle United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bruno_Guimar%C3%A3es_2021.jpg/800px-Bruno_Guimar%C3%A3es_2021.jpg"
  },
  {
    "id": "bra-07",
    "nombre": "Lucas Paquetá",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "CR Flamengo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lucas_Paquet%C3%A1_2022.jpg/800px-Lucas_Paquet%C3%A1_2022.jpg"
  },
  {
    "id": "bra-08",
    "nombre": "Vinícius Júnior",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vinicius_Jr_2021.jpg/800px-Vinicius_Jr_2021.jpg"
  },
  {
    "id": "bra-09",
    "nombre": "Rodrygo Goes",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bra-10",
    "nombre": "Neymar Jr",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Santos FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Neymar_Jr._with_Al-Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg/800px-Neymar_Jr._with_Al-Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg"
  },
  {
    "id": "bra-11",
    "nombre": "Raphinha",
    "pais": "Brasil",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Raphinha_2021.jpg/800px-Raphinha_2021.jpg"
  },
  {
    "id": "mar-00",
    "nombre": "Escudo FRMF",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-01",
    "nombre": "Yassine Bounou",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Portero",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-02",
    "nombre": "Achraf Hakimi",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-03",
    "nombre": "Noussair Mazraoui",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-04",
    "nombre": "Nayef Aguerd",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Real Sociedad",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-05",
    "nombre": "Romain Saïss",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Al Sadd SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-06",
    "nombre": "Sofyan Amrabat",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Fenerbahçe SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-07",
    "nombre": "Azzedine Ounahi",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Panathinaikos FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-08",
    "nombre": "Brahim Díaz",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-09",
    "nombre": "Hakim Ziyech",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Galatasaray SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-10",
    "nombre": "Youssef En-Nesyri",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Fenerbahçe SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "mar-11",
    "nombre": "Amine Adli",
    "pais": "Marruecos",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-00",
    "nombre": "Escudo SFA",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-01",
    "nombre": "Angus Gunn",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Portero",
    "club": "Norwich City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-02",
    "nombre": "Andrew Robertson",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-03",
    "nombre": "Kieran Tierney",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-04",
    "nombre": "Grant Hanley",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Norwich City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-05",
    "nombre": "Anthony Ralston",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Celtic FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-06",
    "nombre": "Scott McTominay",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "SSC Napoli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-07",
    "nombre": "John McGinn",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Aston Villa FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-08",
    "nombre": "Billy Gilmour",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "SSC Napoli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-09",
    "nombre": "Callum McGregor",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Celtic FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-10",
    "nombre": "Ché Adams",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Torino FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sco-11",
    "nombre": "Ryan Christie",
    "pais": "Escocia",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "AFC Bournemouth",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-00",
    "nombre": "Escudo FHF",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-01",
    "nombre": "Johny Placide",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Portero",
    "club": "SC Bastia",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-02",
    "nombre": "Carlens Arcus",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "Angers SCO",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-03",
    "nombre": "Ricardo Adé",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "LDU Quito",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-04",
    "nombre": "Alex Christian",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "FC Telavi",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-05",
    "nombre": "Jean-Kévin Duverne",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Defensa",
    "club": "FC Nantes",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-06",
    "nombre": "Bryan Alceus",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "FC Argeș Pitești",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-07",
    "nombre": "Derrick Etienne Jr.",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "Toronto FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-08",
    "nombre": "Leverton Pierre",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Centrocampista",
    "club": "US Avranches",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-09",
    "nombre": "Duckens Nazon",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Kayserispor",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-10",
    "nombre": "Frantzdy Pierrot",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "AEK Athens",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "hai-11",
    "nombre": "Louicius Don Deedson",
    "pais": "Haití",
    "grupo": "Grupo C",
    "posicion": "Delantero",
    "club": "Odense Boldklub",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-00",
    "nombre": "Escudo USSF",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-01",
    "nombre": "Matt Turner",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Portero",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-02",
    "nombre": "Sergiño Dest",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "PSV Eindhoven",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-03",
    "nombre": "Chris Richards",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-04",
    "nombre": "Antonee Robinson",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Fulham FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-05",
    "nombre": "Tim Ream",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Charlotte FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-06",
    "nombre": "Tyler Adams",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "AFC Bournemouth",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-07",
    "nombre": "Weston McKennie",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Juventus FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-08",
    "nombre": "Yunus Musah",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-09",
    "nombre": "Christian Pulisic",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-10",
    "nombre": "Gio Reyna",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "usa-11",
    "nombre": "Folarin Balogun",
    "pais": "Estados Unidos",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aus-00",
    "nombre": "Escudo Football Australia",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aus-01",
    "nombre": "Mathew Ryan",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Portero",
    "club": "Levante UD",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Mathew_Ryan_2018.jpg/800px-Mathew_Ryan_2018.jpg"
  },
  {
    "id": "aus-02",
    "nombre": "Milos Degenek",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "APOEL FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Milos_Degenek_2018.jpg/800px-Milos_Degenek_2018.jpg"
  },
  {
    "id": "aus-03",
    "nombre": "Harry Souttar",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Leicester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Harry_Souttar_2021.jpg/800px-Harry_Souttar_2021.jpg"
  },
  {
    "id": "aus-04",
    "nombre": "Aziz Behich",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Melbourne City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aziz_Behich_2018.jpg/800px-Aziz_Behich_2018.jpg"
  },
  {
    "id": "aus-05",
    "nombre": "Jordan Bos",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Feyenoord Rotterdam",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aus-06",
    "nombre": "Jackson Irvine",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "FC St. Pauli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jackson_Irvine_2018.jpg/800px-Jackson_Irvine_2018.jpg"
  },
  {
    "id": "aus-07",
    "nombre": "Connor Metcalfe",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "FC St. Pauli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aus-08",
    "nombre": "Ajdin Hrustic",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "SC Heracles Almelo",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ajdin_Hrustic_2021.jpg/800px-Ajdin_Hrustic_2021.jpg"
  },
  {
    "id": "aus-09",
    "nombre": "Mathew Leckie",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Melbourne City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mathew_Leckie_2018.jpg/800px-Mathew_Leckie_2018.jpg"
  },
  {
    "id": "aus-10",
    "nombre": "Awer Mabil",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "CD Castellón",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Awer_Mabil_2018.jpg/800px-Awer_Mabil_2018.jpg"
  },
  {
    "id": "aus-11",
    "nombre": "Mohamed Toure",
    "pais": "Australia",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Norwich City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-00",
    "nombre": "Escudo APF",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-01",
    "nombre": "Carlos Coronel",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Portero",
    "club": "New York Red Bulls",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-02",
    "nombre": "Gustavo Gómez",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "SE Palmeiras",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-03",
    "nombre": "Omar Alderete",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Getafe CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-04",
    "nombre": "Júnior Alonso",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Clube Atlético Mineiro",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-05",
    "nombre": "Robert Rojas",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Vasco da Gama",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-06",
    "nombre": "Mathías Villasanti",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Grêmio FBPA",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-07",
    "nombre": "Andrés Cubas",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Vancouver Whitecaps FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-08",
    "nombre": "Diego Gómez",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Inter Miami CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-09",
    "nombre": "Miguel Almirón",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Newcastle United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-10",
    "nombre": "Julio Enciso",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Brighton & Hove Albion FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "par-11",
    "nombre": "Ramón Sosa",
    "pais": "Paraguay",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Nottingham Forest FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-00",
    "nombre": "Escudo TFF",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-01",
    "nombre": "Mert Günok",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Portero",
    "club": "Beşiktaş JK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-02",
    "nombre": "Zeki Çelik",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "AS Roma",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-03",
    "nombre": "Merih Demiral",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Al Ahli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-04",
    "nombre": "Abdülkerim Bardakcı",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Galatasaray SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-05",
    "nombre": "Ferdi Kadıoğlu",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Defensa",
    "club": "Brighton & Hove Albion FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-06",
    "nombre": "Hakan Çalhanoğlu",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-07",
    "nombre": "Orkun Kökçü",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "SL Benfica",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-08",
    "nombre": "Arda Güler",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-09",
    "nombre": "Kerem Aktürkoğlu",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "SL Benfica",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-10",
    "nombre": "Kenan Yıldız",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Juventus FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tur-11",
    "nombre": "Barış Alper Yılmaz",
    "pais": "Turquía",
    "grupo": "Grupo D",
    "posicion": "Delantero",
    "club": "Galatasaray SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-00",
    "nombre": "Escudo RBFA",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-01",
    "nombre": "Koen Casteels",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Portero",
    "club": "Al Qadsiah FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-02",
    "nombre": "Timothy Castagne",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Fulham FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-03",
    "nombre": "Wout Faes",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Leicester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-04",
    "nombre": "Arthur Theate",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Eintracht Frankfurt",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-05",
    "nombre": "Maxim De Cuyper",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Club Brugge KV",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-06",
    "nombre": "Amadou Onana",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Aston Villa FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-07",
    "nombre": "Youri Tielemans",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Aston Villa FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-08",
    "nombre": "Kevin De Bruyne",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-09",
    "nombre": "Jérémy Doku",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-10",
    "nombre": "Romelu Lukaku",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "SSC Napoli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "bel-11",
    "nombre": "Leandro Trossard",
    "pais": "Bélgica",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-00",
    "nombre": "Escudo EFA",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-01",
    "nombre": "Mohamed El Shenawy",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Portero",
    "club": "Al Ahly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-02",
    "nombre": "Mohamed Hany",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Al Ahly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-03",
    "nombre": "Mohamed Abdelmonem",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "OGC Nice",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-04",
    "nombre": "Ahmed Hegazi",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "NEOM SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-05",
    "nombre": "Mohamed Hamdy",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Pyramids FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-06",
    "nombre": "Hamdy Fathi",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Al-Wakrah SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-07",
    "nombre": "Marwan Attia",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Al Ahly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-08",
    "nombre": "Ahmed Sayed Zizo",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Zamalek SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-09",
    "nombre": "Mohamed Salah",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-10",
    "nombre": "Mostafa Mohamed",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "FC Nantes",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "egy-11",
    "nombre": "Mahmoud Trézéguet",
    "pais": "Egipto",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Al-Rayyan SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-00",
    "nombre": "Escudo FFIRI",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-01",
    "nombre": "Alireza Beiranvand",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Portero",
    "club": "Tractor SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-02",
    "nombre": "Ramin Rezaeian",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Esteghlal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-03",
    "nombre": "Shojae Khalilzadeh",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Tractor SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-04",
    "nombre": "Hossein Kanaani",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Persepolis FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-05",
    "nombre": "Milad Mohammadi",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Persepolis FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-06",
    "nombre": "Saeid Ezatolahi",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Shabab Al Ahli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-07",
    "nombre": "Saman Ghoddos",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Kalba FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-08",
    "nombre": "Alireza Jahanbakhsh",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "SC Heerenveen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-09",
    "nombre": "Mehdi Taremi",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-10",
    "nombre": "Sardar Azmoun",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Shabab Al Ahli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irn-11",
    "nombre": "Mehdi Ghayedi",
    "pais": "Irán",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Kalba FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-00",
    "nombre": "Escudo NZF",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-01",
    "nombre": "Alex Paulsen",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Portero",
    "club": "Auckland FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-02",
    "nombre": "Tim Payne",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Wellington Phoenix FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-03",
    "nombre": "Michael Boxall",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Minnesota United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-04",
    "nombre": "Nando Pijnaker",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Auckland FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-05",
    "nombre": "Liberato Cacace",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Defensa",
    "club": "Empoli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-06",
    "nombre": "Marko Stamenic",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "Olympiacos FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-07",
    "nombre": "Matthew Garbett",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "NAC Breda",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-08",
    "nombre": "Sarpreet Singh",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Centrocampista",
    "club": "UD Leiria",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-09",
    "nombre": "Elijah Just",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "SK St. Pölten",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-10",
    "nombre": "Chris Wood",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Nottingham Forest FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nzl-11",
    "nombre": "Ben Waine",
    "pais": "Nueva Zelanda",
    "grupo": "Grupo G",
    "posicion": "Delantero",
    "club": "Plymouth Argyle FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-00",
    "nombre": "Escudo RFEF",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-01",
    "nombre": "Unai Simón",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Portero",
    "club": "Athletic Club",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-02",
    "nombre": "Dani Carvajal",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-03",
    "nombre": "Robin Le Normand",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-04",
    "nombre": "Aymeric Laporte",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-05",
    "nombre": "Marc Cucurella",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Chelsea FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-06",
    "nombre": "Rodri Hernández",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-07",
    "nombre": "Fabián Ruiz",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-08",
    "nombre": "Pedri",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-09",
    "nombre": "Lamine Yamal",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-10",
    "nombre": "Dani Olmo",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "esp-11",
    "nombre": "Nico Williams",
    "pais": "España",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Athletic Club",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-00",
    "nombre": "Escudo FCF",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-01",
    "nombre": "Vozinha",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Portero",
    "club": "GD Chaves",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-02",
    "nombre": "Steven Moreira",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Columbus Crew",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-03",
    "nombre": "Logan Costa",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Villarreal CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-04",
    "nombre": "Roberto Lopes",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Shamrock Rovers FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-05",
    "nombre": "João Paulo Fernandes",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Sheriff Tiraspol",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-06",
    "nombre": "Jamiro Monteiro",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "PEC Zwolle",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-07",
    "nombre": "Kevin Pina",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "FC Krasnodar",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-08",
    "nombre": "Deroy Duarte",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "PFC Ludogorets Razgrad",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-09",
    "nombre": "Ryan Mendes",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Fatih Karagümrük",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-10",
    "nombre": "Bebé",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Racing de Ferrol",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cpv-11",
    "nombre": "Jovane Cabral",
    "pais": "Cabo Verde",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "CF Estrela da Amadora",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-00",
    "nombre": "Escudo AUF",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-01",
    "nombre": "Sergio Rochet",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Portero",
    "club": "SC Internacional",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-02",
    "nombre": "Nahitan Nández",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Al Qadsiah FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-03",
    "nombre": "Ronald Araújo",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-04",
    "nombre": "José María Giménez",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-05",
    "nombre": "Mathias Olivera",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "SSC Napoli",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-06",
    "nombre": "Manuel Ugarte",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-07",
    "nombre": "Federico Valverde",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-08",
    "nombre": "Rodrigo Bentancur",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Tottenham Hotspur FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-09",
    "nombre": "Facundo Pellistri",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Panathinaikos FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-10",
    "nombre": "Darwin Núñez",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uru-11",
    "nombre": "Maximiliano Araújo",
    "pais": "Uruguay",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Sporting CP",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-00",
    "nombre": "Escudo SAFF",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-01",
    "nombre": "Mohammed Al-Owais",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Portero",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-02",
    "nombre": "Saud Abdulhamid",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "AS Roma",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-03",
    "nombre": "Ali Al-Bulaihi",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-04",
    "nombre": "Hassan Tambakti",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-05",
    "nombre": "Yasser Al-Shahrani",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Defensa",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-06",
    "nombre": "Mohamed Kanno",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-07",
    "nombre": "Abdulelah Al-Malki",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Al Ettifaq FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-08",
    "nombre": "Salem Al-Dawsari",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Centrocampista",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-09",
    "nombre": "Abdulrahman Ghareeb",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-10",
    "nombre": "Firas Al-Buraikan",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Al Ahli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ksa-11",
    "nombre": "Saleh Al-Shehri",
    "pais": "Arabia Saudita",
    "grupo": "Grupo H",
    "posicion": "Delantero",
    "club": "Al Ittihad FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-00",
    "nombre": "Escudo DFB",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-01",
    "nombre": "Marc-André ter Stegen",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Portero",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-02",
    "nombre": "Joshua Kimmich",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-03",
    "nombre": "Antonio Rüdiger",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-04",
    "nombre": "Jonathan Tah",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-05",
    "nombre": "David Raum",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "RB Leipzig",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-06",
    "nombre": "Robert Andrich",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-07",
    "nombre": "Pascal Groß",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-08",
    "nombre": "Jamal Musiala",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-09",
    "nombre": "Florian Wirtz",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-10",
    "nombre": "Leroy Sané",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ger-11",
    "nombre": "Kai Havertz",
    "pais": "Alemania",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-00",
    "nombre": "Escudo FIF",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-01",
    "nombre": "Yahia Fofana",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Portero",
    "club": "Angers SCO",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-02",
    "nombre": "Wilfried Singo",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-03",
    "nombre": "Odilon Kossounou",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Atalanta BC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-04",
    "nombre": "Evan Ndicka",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "AS Roma",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-05",
    "nombre": "Ghislain Konan",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-06",
    "nombre": "Franck Kessié",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Al Ahli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-07",
    "nombre": "Ibrahim Sangaré",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Nottingham Forest FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-08",
    "nombre": "Seko Fofana",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Ettifaq FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-09",
    "nombre": "Simon Adingra",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Brighton & Hove Albion FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-10",
    "nombre": "Sébastien Haller",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "CD Leganés",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "civ-11",
    "nombre": "Nicolas Pépé",
    "pais": "Costa de Marfil",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Villarreal CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-00",
    "nombre": "Escudo FEF",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-01",
    "nombre": "Hernán Galíndez",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Portero",
    "club": "CA Huracán",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-02",
    "nombre": "Angelo Preciado",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "AC Sparta Praha",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-03",
    "nombre": "Félix Torres",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "SC Corinthians",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-04",
    "nombre": "Willian Pacho",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-05",
    "nombre": "Piero Hincapié",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Bayer 04 Leverkusen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-06",
    "nombre": "Moisés Caicedo",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Chelsea FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-07",
    "nombre": "Alan Franco",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Clube Atlético Mineiro",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-08",
    "nombre": "Kendry Páez",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Independiente del Valle",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-09",
    "nombre": "Jeremy Sarmiento",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Burnley FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-10",
    "nombre": "Enner Valencia",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "SC Internacional",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ecu-11",
    "nombre": "Kevin Rodríguez",
    "pais": "Ecuador",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Royale Union Saint-Gilloise",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-00",
    "nombre": "Escudo FFK",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-01",
    "nombre": "Eloy Room",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Portero",
    "club": "Cowlitz Black Bears",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-02",
    "nombre": "Cuco Martina",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Sin Club / Libre",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-03",
    "nombre": "Sherel Floranus",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "PEC Zwolle",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-04",
    "nombre": "Jurien Gaari",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Al Hazem SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-05",
    "nombre": "Nathan Markelo",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Defensa",
    "club": "Roda JC Kerkrade",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-06",
    "nombre": "Leandro Bacuna",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "FC Groningen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-07",
    "nombre": "Vurnon Anita",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Al Orobah FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-08",
    "nombre": "Juninho Bacuna",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Centrocampista",
    "club": "Gaziantep FK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-09",
    "nombre": "Brandley Kuwas",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Volendam",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-10",
    "nombre": "Rangelo Janga",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Nea Salamina",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cuw-11",
    "nombre": "Kenji Gorré",
    "pais": "Curazao",
    "grupo": "Grupo E",
    "posicion": "Delantero",
    "club": "Umm Salal SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-00",
    "nombre": "Escudo KNVB",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-01",
    "nombre": "Bart Verbruggen",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Portero",
    "club": "Brighton & Hove Albion FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-02",
    "nombre": "Denzel Dumfries",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-03",
    "nombre": "Virgil van Dijk",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-04",
    "nombre": "Nathan Aké",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-05",
    "nombre": "Matthijs de Ligt",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-06",
    "nombre": "Frenkie de Jong",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-07",
    "nombre": "Tijjani Reijnders",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-08",
    "nombre": "Xavi Simons",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "RB Leipzig",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-09",
    "nombre": "Cody Gakpo",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-10",
    "nombre": "Memphis Depay",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "SC Corinthians",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "ned-11",
    "nombre": "Donyell Malen",
    "pais": "Países Bajos",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-00",
    "nombre": "Escudo JFA",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-01",
    "nombre": "Zion Suzuki",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Portero",
    "club": "Parma Calcio",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-02",
    "nombre": "Yukinari Sugawara",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Southampton FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-03",
    "nombre": "Takehiro Tomiyasu",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-04",
    "nombre": "Kou Itakura",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Borussia Mönchengladbach",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-05",
    "nombre": "Shogo Taniguchi",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "KAS Eupen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-06",
    "nombre": "Wataru Endo",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-07",
    "nombre": "Hidemasa Morita",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Sporting CP",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-08",
    "nombre": "Takefusa Kubo",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Real Sociedad",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-09",
    "nombre": "Kaoru Mitoma",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Brighton & Hove Albion FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-10",
    "nombre": "Takumi Minamino",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jpn-11",
    "nombre": "Ayase Ueda",
    "pais": "Japón",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Feyenoord Rotterdam",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-00",
    "nombre": "Escudo SvFF",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-01",
    "nombre": "Robin Olsen",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Portero",
    "club": "Aston Villa FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-02",
    "nombre": "Emil Krafth",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Newcastle United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-03",
    "nombre": "Victor Lindelöf",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-04",
    "nombre": "Isak Hien",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Atalanta BC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-05",
    "nombre": "Ludwig Augustinsson",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "RSC Anderlecht",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-06",
    "nombre": "Jens Cajuste",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Ipswich Town FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-07",
    "nombre": "Hugo Larsson",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Eintracht Frankfurt",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-08",
    "nombre": "Dejan Kulusevski",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Tottenham Hotspur FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-09",
    "nombre": "Alexander Isak",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Newcastle United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-10",
    "nombre": "Viktor Gyökeres",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Sporting CP",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "swe-11",
    "nombre": "Anthony Elanga",
    "pais": "Suecia",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Nottingham Forest FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-00",
    "nombre": "Escudo FTF",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-01",
    "nombre": "Bechir Ben Saïd",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Portero",
    "club": "Espérance de Tunis",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-02",
    "nombre": "Yan Valery",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Sheffield Wednesday FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-03",
    "nombre": "Yassine Meriah",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Espérance de Tunis",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-04",
    "nombre": "Montassar Talbi",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "FC Lorient",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-05",
    "nombre": "Ali Maâloul",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Defensa",
    "club": "Al Ahly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-06",
    "nombre": "Ellyes Skhiri",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Eintracht Frankfurt",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-07",
    "nombre": "Aïssa Laïdouni",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Al-Wakrah SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-08",
    "nombre": "Mohamed Ali Ben Romdhane",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Centrocampista",
    "club": "Ferencvárosi TC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-09",
    "nombre": "Elias Achouri",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "FC København",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-10",
    "nombre": "Youssef Msakni",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "Al-Arabi SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "tun-11",
    "nombre": "Hamza Rafia",
    "pais": "Túnez",
    "grupo": "Grupo F",
    "posicion": "Delantero",
    "club": "US Lecce",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-00",
    "nombre": "Escudo FCF",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-01",
    "nombre": "Camilo Vargas",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Portero",
    "club": "Atlas FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-02",
    "nombre": "Daniel Muñoz",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-03",
    "nombre": "Davinson Sánchez",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Galatasaray SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-04",
    "nombre": "Jhon Lucumí",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Bologna FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-05",
    "nombre": "Johan Mojica",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "RCD Mallorca",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-06",
    "nombre": "Jefferson Lerma",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-07",
    "nombre": "Richard Ríos",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "SE Palmeiras",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-08",
    "nombre": "James Rodríguez",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Rayo Vallecano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-09",
    "nombre": "Jhon Arias",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Fluminense FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-10",
    "nombre": "Luis Díaz",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "col-11",
    "nombre": "Jhon Córdoba",
    "pais": "Colombia",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "FC Krasnodar",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-00",
    "nombre": "Escudo FPF",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-01",
    "nombre": "Diogo Costa",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Portero",
    "club": "FC Porto",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-02",
    "nombre": "João Cancelo",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-03",
    "nombre": "Rúben Dias",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-04",
    "nombre": "Gonçalo Inácio",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Sporting CP",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-05",
    "nombre": "Nuno Mendes",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-06",
    "nombre": "João Palhinha",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-07",
    "nombre": "Bruno Fernandes",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-08",
    "nombre": "Bernardo Silva",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-09",
    "nombre": "Rafael Leão",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-10",
    "nombre": "Cristiano Ronaldo",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "por-11",
    "nombre": "Diogo Jota",
    "pais": "Portugal",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-00",
    "nombre": "Escudo FECOFA",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-01",
    "nombre": "Lionel Mpasi",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Portero",
    "club": "Rodez AF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-02",
    "nombre": "Gédéon Kalulu",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "FC Lorient",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-03",
    "nombre": "Chancel Mbemba",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Olympique Marseille",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-04",
    "nombre": "Henoc Inonga Baka",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "FAR Rabat",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-05",
    "nombre": "Arthur Masuaku",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Beşiktaş JK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-06",
    "nombre": "Samuel Moutoussamy",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Sivasspor",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-07",
    "nombre": "Charles Pickel",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "US Cremonese",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-08",
    "nombre": "Gaël Kakuta",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Esteghlal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-09",
    "nombre": "Théo Bongonda",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "FC Spartak Moscow",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-10",
    "nombre": "Yoane Wissa",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Brentford FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cod-11",
    "nombre": "Cédric Bakambu",
    "pais": "República Democrática del Congo",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Real Betis",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-00",
    "nombre": "Escudo UFA",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-01",
    "nombre": "Utkir Yusupov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Portero",
    "club": "Foolad FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-02",
    "nombre": "Husniddin Aliqulov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Rizespor",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-03",
    "nombre": "Abdukodir Khusanov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "RC Lens",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-04",
    "nombre": "Rustam Ashurmatov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Rubin Kazan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-05",
    "nombre": "Farrukh Sayfiev",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Defensa",
    "club": "Navbahor Namangan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-06",
    "nombre": "Otabek Shukurov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Al-Bataeh Club",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-07",
    "nombre": "Odiljon Hamrobekov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Tractor SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-08",
    "nombre": "Jaloliddin Masharipov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Centrocampista",
    "club": "Esteghlal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-09",
    "nombre": "Abbosbek Fayzullaev",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "CSKA Moscow",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-10",
    "nombre": "Eldor Shomurodov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "AS Roma",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "uzb-11",
    "nombre": "Oston Urunov",
    "pais": "Uzbekistán",
    "grupo": "Grupo K",
    "posicion": "Delantero",
    "club": "Persepolis FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-00",
    "nombre": "Escudo The FA",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-01",
    "nombre": "Jordan Pickford",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Portero",
    "club": "Everton FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-02",
    "nombre": "Kyle Walker",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-03",
    "nombre": "John Stones",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-04",
    "nombre": "Marc Guéhi",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-05",
    "nombre": "Trent Alexander-Arnold",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-06",
    "nombre": "Declan Rice",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-07",
    "nombre": "Kobbie Mainoo",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-08",
    "nombre": "Jude Bellingham",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-09",
    "nombre": "Bukayo Saka",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-10",
    "nombre": "Harry Kane",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "eng-11",
    "nombre": "Phil Foden",
    "pais": "Inglaterra",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-00",
    "nombre": "Escudo HNS",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-01",
    "nombre": "Dominik Livaković",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Portero",
    "club": "Fenerbahçe SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-02",
    "nombre": "Josip Juranović",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "1. FC Union Berlin",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-03",
    "nombre": "Josip Šutalo",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "AFC Ajax",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-04",
    "nombre": "Joško Gvardiol",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-05",
    "nombre": "Borna Sosa",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Torino FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-06",
    "nombre": "Luka Modrić",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-07",
    "nombre": "Mateo Kovačić",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-08",
    "nombre": "Marcelo Brozović",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-09",
    "nombre": "Mario Pašalić",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Atalanta BC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-10",
    "nombre": "Andrej Kramarić",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "TSG Hoffenheim",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "cro-11",
    "nombre": "Ante Budimir",
    "pais": "Croacia",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "CA Osasuna",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-00",
    "nombre": "Escudo GFA",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-01",
    "nombre": "Lawrence Ati-Zigi",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Portero",
    "club": "FC St. Gallen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-02",
    "nombre": "Alidu Seidu",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Stade Rennais FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-03",
    "nombre": "Alexander Djiku",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Fenerbahçe SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-04",
    "nombre": "Mohammed Salisu",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-05",
    "nombre": "Gideon Mensah",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "AJ Auxerre",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-06",
    "nombre": "Thomas Partey",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-07",
    "nombre": "Salis Abdul Samed",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Sunderland AFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-08",
    "nombre": "Mohammed Kudus",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "West Ham United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-09",
    "nombre": "Jordan Ayew",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "Leicester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-10",
    "nombre": "Iñaki Williams",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "Athletic Club",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "gha-11",
    "nombre": "Antoine Semenyo",
    "pais": "Ghana",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "AFC Bournemouth",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-00",
    "nombre": "Escudo FEPAFUT",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-01",
    "nombre": "Orlando Mosquera",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Portero",
    "club": "Al-Fayha FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-02",
    "nombre": "Michael Amir Murillo",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Olympique Marseille",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-03",
    "nombre": "Edgardo Fariña",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "FK Khimki",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-04",
    "nombre": "José Córdoba",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Norwich City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-05",
    "nombre": "Eric Davis",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Defensa",
    "club": "Vila Nova FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-06",
    "nombre": "Aníbal Godoy",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Nashville SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-07",
    "nombre": "Adalberto Carrasquilla",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Houston Dynamo FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-08",
    "nombre": "Cristian Martínez",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Centrocampista",
    "club": "Hapoel Ironi Kiryat Shmona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-09",
    "nombre": "Yoel Bárcenas",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "Mazatlán FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-10",
    "nombre": "Ismael Díaz",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "CD Universidad Católica",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "pan-11",
    "nombre": "José Fajardo",
    "pais": "Panamá",
    "grupo": "Grupo L",
    "posicion": "Delantero",
    "club": "CD Universidad Católica",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-00",
    "nombre": "Escudo FFF",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-01",
    "nombre": "Mike Maignan",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Portero",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-02",
    "nombre": "Jules Koundé",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "FC Barcelona",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-03",
    "nombre": "William Saliba",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-04",
    "nombre": "Dayot Upamecano",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-05",
    "nombre": "Théo Hernandez",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "AC Milan",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-06",
    "nombre": "Aurélien Tchouaméni",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-07",
    "nombre": "Eduardo Camavinga",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-08",
    "nombre": "Antoine Griezmann",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-09",
    "nombre": "Ousmane Dembélé",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Paris Saint-Germain",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-10",
    "nombre": "Kylian Mbappé",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Real Madrid C. F.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "fra-11",
    "nombre": "Marcus Thuram",
    "pais": "Francia",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-00",
    "nombre": "Escudo NFF",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-01",
    "nombre": "Ørjan Nyland",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Portero",
    "club": "Sevilla FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-02",
    "nombre": "Julian Ryerson",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-03",
    "nombre": "Leo Skiri Østigård",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Stade Rennais FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-04",
    "nombre": "Kristoffer Ajer",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Brentford FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-05",
    "nombre": "David Møller Wolfe",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "AZ Alkmaar",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-06",
    "nombre": "Sander Berge",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Fulham FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-07",
    "nombre": "Patrick Berg",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "FK Bodø/Glimt",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-08",
    "nombre": "Martin Ødegaard",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Arsenal FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-09",
    "nombre": "Oscar Bobb",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-10",
    "nombre": "Erling Haaland",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "nor-11",
    "nombre": "Alexander Sørloth",
    "pais": "Noruega",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-00",
    "nombre": "Escudo FSF",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-01",
    "nombre": "Édouard Mendy",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Portero",
    "club": "Al Ahli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-02",
    "nombre": "Krépin Diatta",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-03",
    "nombre": "Kalidou Koulibaly",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Al Hilal SFC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-04",
    "nombre": "Moussa Niakhaté",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Olympique Lyonnais",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-05",
    "nombre": "Ismail Jakobs",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Galatasaray SK",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-06",
    "nombre": "Idrissa Gueye",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Everton FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-07",
    "nombre": "Pape Matar Sarr",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Tottenham Hotspur FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-08",
    "nombre": "Lamine Camara",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "AS Monaco",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-09",
    "nombre": "Ismaïla Sarr",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Crystal Palace FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-10",
    "nombre": "Sadio Mané",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Al Nassr FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "sen-11",
    "nombre": "Nicolas Jackson",
    "pais": "Senegal",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Chelsea FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-00",
    "nombre": "Escudo IFA",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-01",
    "nombre": "Jalal Hassan",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Portero",
    "club": "Al-Zawraa SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-02",
    "nombre": "Hussein Ali",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "SC Heerenveen",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-03",
    "nombre": "Rebin Sulaka",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "FC Seoul",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-04",
    "nombre": "Saad Natiq",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "Al-Quwa Al-Jawiya",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-05",
    "nombre": "Merchas Doski",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Defensa",
    "club": "1. FC Slovácko",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-06",
    "nombre": "Amir Al-Ammari",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Cracovia",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-07",
    "nombre": "Osama Rashid",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "FC Vizela",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-08",
    "nombre": "Ibrahim Bayesh",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Centrocampista",
    "club": "Al-Riyadh SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-09",
    "nombre": "Ali Jasim",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Como 1907",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-10",
    "nombre": "Aymen Hussein",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Al-Khor SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "irq-11",
    "nombre": "Mohanad Ali",
    "pais": "Irak",
    "grupo": "Grupo I",
    "posicion": "Delantero",
    "club": "Al-Shorta SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "arg-00",
    "nombre": "Escudo AFA",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "arg-01",
    "nombre": "Emiliano Martínez",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Portero",
    "club": "Aston Villa FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Emiliano_Mart%C3%ADnez_2022.jpg/800px-Emiliano_Mart%C3%ADnez_2022.jpg"
  },
  {
    "id": "arg-02",
    "nombre": "Nahuel Molina",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nahuel_Molina_2022.jpg/800px-Nahuel_Molina_2022.jpg"
  },
  {
    "id": "arg-03",
    "nombre": "Cristian Romero",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Tottenham Hotspur FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Cristian_Romero_2022.jpg/800px-Cristian_Romero_2022.jpg"
  },
  {
    "id": "arg-04",
    "nombre": "Lisandro Martínez",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Manchester United FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Lisandro_Mart%C3%ADnez_2022.jpg/800px-Lisandro_Mart%C3%ADnez_2022.jpg"
  },
  {
    "id": "arg-05",
    "nombre": "Nicolás Tagliafico",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Olympique Lyonnais",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Nicolas_Tagliafico_2018.jpg/800px-Nicolas_Tagliafico_2018.jpg"
  },
  {
    "id": "arg-06",
    "nombre": "Rodrigo De Paul",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Inter Miami CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rodrigo_De_Paul_2022.jpg/800px-Rodrigo_De_Paul_2022.jpg"
  },
  {
    "id": "arg-07",
    "nombre": "Enzo Fernández",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Chelsea FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Enzo_Fern%C3%A1ndez_2022.jpg/800px-Enzo_Fern%C3%A1ndez_2022.jpg"
  },
  {
    "id": "arg-08",
    "nombre": "Alexis Mac Allister",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Liverpool FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Alexis_Mac_Allister_2022.jpg/800px-Alexis_Mac_Allister_2022.jpg"
  },
  {
    "id": "arg-09",
    "nombre": "Lionel Messi",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Inter Miami CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_round-of-16-against-Australia_%28cropped%29.jpg/800px-Lionel-Messi-Argentina-2022-FIFA-World-Cup_round-of-16-against-Australia_%28cropped%29.jpg"
  },
  {
    "id": "arg-10",
    "nombre": "Julián Álvarez",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Atlético de Madrid",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Juli%C3%A1n_%C3%81lvarez_2022.jpg/800px-Juli%C3%A1n_%C3%81lvarez_2022.jpg"
  },
  {
    "id": "arg-11",
    "nombre": "Lautaro Martínez",
    "pais": "Argentina",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Lautaro_Mart%C3%ADnez_2022.jpg/800px-Lautaro_Mart%C3%ADnez_2022.jpg"
  },
  {
    "id": "aut-00",
    "nombre": "Escudo ÖFB",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-01",
    "nombre": "Patrick Pentz",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Portero",
    "club": "Brøndby IF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-02",
    "nombre": "Stefan Posch",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Bologna FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-03",
    "nombre": "Kevin Danso",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "RC Lens",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-04",
    "nombre": "Philipp Lienhart",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "SC Freiburg",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-05",
    "nombre": "Phillipp Mwene",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "1. FSV Mainz 05",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-06",
    "nombre": "Nicolas Seiwald",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "RB Leipzig",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-07",
    "nombre": "Konrad Laimer",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "FC Bayern München",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-08",
    "nombre": "Marcel Sabitzer",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-09",
    "nombre": "Christoph Baumgartner",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "RB Leipzig",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-10",
    "nombre": "Marko Arnautović",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "FC Internazionale Milano",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "aut-11",
    "nombre": "Patrick Wimmer",
    "pais": "Austria",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "VfL Wolfsburg",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "alg-00",
    "nombre": "Escudo FAF",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "alg-01",
    "nombre": "Luca Zidane",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Portero",
    "club": "Granada CF",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Luca_Zidane_2018.jpg/800px-Luca_Zidane_2018.jpg"
  },
  {
    "id": "alg-02",
    "nombre": "Aïssa Mandi",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Lille OSC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/A%C3%AFssa_Mandi_2018.jpg/800px-A%C3%AFssa_Mandi_2018.jpg"
  },
  {
    "id": "alg-03",
    "nombre": "Ramy Bensebaini",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Borussia Dortmund",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ramy_Bensebaini_2019.jpg/800px-Ramy_Bensebaini_2019.jpg"
  },
  {
    "id": "alg-04",
    "nombre": "Rayan Aït-Nouri",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Manchester City FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rayan_A%C3%AFt-Nouri_2021.jpg/800px-Rayan_A%C3%AFt-Nouri_2021.jpg"
  },
  {
    "id": "alg-05",
    "nombre": "Jaouen Hadjam",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "BSC Young Boys",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "alg-06",
    "nombre": "Ramiz Zerrouki",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "FC Twente",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ramiz_Zerrouki_2021.jpg/800px-Ramiz_Zerrouki_2021.jpg"
  },
  {
    "id": "alg-07",
    "nombre": "Houssem Aouar",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Al Ittihad",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Houssem_Aouar_2019.jpg/800px-Houssem_Aouar_2019.jpg"
  },
  {
    "id": "alg-08",
    "nombre": "Hicham Boudaoui",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "OGC Nice",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Hicham_Boudaoui_2019.jpg/800px-Hicham_Boudaoui_2019.jpg"
  },
  {
    "id": "alg-09",
    "nombre": "Riyad Mahrez",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Al Ahli FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Riyad_Mahrez_2018.jpg/800px-Riyad_Mahrez_2018.jpg"
  },
  {
    "id": "alg-10",
    "nombre": "Mohamed Amoura",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "VfL Wolfsburg",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "alg-11",
    "nombre": "Amine Gouiri",
    "pais": "Argelia",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Olympique Marseille",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Amine_Gouiri_2019.jpg/800px-Amine_Gouiri_2019.jpg"
  },
  {
    "id": "jor-00",
    "nombre": "Escudo JFA",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Escudo",
    "club": "Federación",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-01",
    "nombre": "Yazeed Abulaila",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Portero",
    "club": "Al-Hussein SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-02",
    "nombre": "Ihsan Haddad",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Al-Faisaly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-03",
    "nombre": "Yazan Al-Arab",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "FC Seoul",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-04",
    "nombre": "Abdallah Nasib",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Al-Hussein SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-05",
    "nombre": "Salem Al-Ajalin",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Defensa",
    "club": "Al-Faisaly SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-06",
    "nombre": "Nizar Al-Rashdan",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Al-Khaldiya SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-07",
    "nombre": "Noor Al-Rawabdeh",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Selangor FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-08",
    "nombre": "Mahmoud Al-Mardi",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Centrocampista",
    "club": "Al-Hussein SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-09",
    "nombre": "Musa Al-Taamari",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Montpellier HSC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-10",
    "nombre": "Yazan Al-Naimat",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Al-Arabi SC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  },
  {
    "id": "jor-11",
    "nombre": "Ali Olwan",
    "pais": "Jordania",
    "grupo": "Grupo J",
    "posicion": "Delantero",
    "club": "Selangor FC",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-image-placeholder.svg/800px-No-image-placeholder.svg.png"
  }
];

/**
 * Cruza CONFEDERACIONES (metadata de selección) con DATOS_JUGADORES
 * (plantilla real) y arma el álbum agrupado por país que consume app.js.
 */
function construirAlbumLocal() {
  const paises = [];
  CONFEDERACIONES.forEach((conf) => {
    conf.paises.forEach((p) => {
      const jugadoresPais = DATOS_JUGADORES
        .filter((j) => j.pais === p.nombre)
        .sort((a, b) => a.id.localeCompare(b.id)); // -00 escudo primero, luego -01..-11

      if (jugadoresPais.length !== 12) {
        console.warn(`[data.js] ${p.nombre} tiene ${jugadoresPais.length} barajitas (esperaba 12)`);
      }

      const cartas = jugadoresPais.map((j) => {
        const esEscudo = j.posicion === "Escudo";
        return {
          id: j.id,
          nombre: j.nombre,
          rol: esEscudo ? "Federación" : j.posicion,
          tipo: esEscudo ? "escudo" : "jugador",
          club: j.club,
          foto: j.foto,
        };
      });

      paises.push({
        pais: p.nombre,
        code: p.code,
        fifaCode: p.fifaCode,
        confederacion: conf.codigo,
        cartas,
      });
    });
  });
  return paises;
}

const ALBUM_DATA = construirAlbumLocal();
