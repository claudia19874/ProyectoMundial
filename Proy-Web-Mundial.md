Proyecto: Álbum de Fútbol – Mundial 2026

Materia: Programación Orientada a la Web
NRC: 26577
Prof. Luis Fuentes

1. Introducción y Contexto

Con el contexto del Mundial de Fútbol 2026, este proyecto tiene como objetivo aplicar de forma
práctica los conceptos de Programación Web que se han estudiado a lo largo del semestre.
Cada grupo de desarrollo será responsable de construir una aplicación web interactiva
(interfaz de cliente) que permita a los usuarios gestionar su propio álbum de barajitas, abrir
sobres para conseguir nuevas barajitas y realizar intercambios con los álbumes de otros grupos
del salón.

2. Arquitectura General del Sistema

El sistema se basará en una arquitectura cliente-servidor:

●  El Cliente: Una interfaz web que consumirá los servicios de una API para actualizar el

estado del álbum y gestionar los intercambios.

●  El Servidor: Una API central que procesa las solicitudes, valida las transacciones, baraja
los sobres y coordina la comunicación entre todos los grupos para los intercambios.

3. Requerimientos Técnicos Obligatorios

A. HTML5 & CSS3

●  HTML Semántico: El uso de etiquetas adecuadas (como <header>, <main>, <section>,
<article>, <nav>, <figure>) es obligatorio para estructurar de manera limpia y accesible el
documento.

●  Diseño Responsive (Mobile-First): La interfaz debe adaptarse fluidamente a

dispositivos móviles, tablets y pantallas de escritorio utilizando técnicas modernas como
CSS Flexbox y CSS Grid.

●  Estilos y UX: El diseño visual debe ser atractivo, intuitivo y simular la experiencia de

hojear y completar un álbum físico.

B. Lógica y Consumo de Datos (JavaScript Moderno)

●  Manipulación del DOM: Actualización dinámica de la interfaz basada en las respuestas
del servidor sin necesidad de recargar la página por completo (comportamiento de Single
Page Application).

●  Autenticación: Cada grupo recibirá una API Key única. Esta clave deberá incluirse en
las cabeceras de cada petición HTTP y en la conexión de Socket.IO para identificar y
autenticar a su grupo ante el servidor.

4. Reglas del Álbum

Para acotar el alcance del proyecto y enfocarnos en la lógica técnica, el álbum tendrá las
siguientes reglas particulares:

●  Estructura de las Selecciones: Cada país participante contará únicamente con 12

barajitas: el escudo de la federación y 11 jugadores de la plantilla oficial.

●  Sin Contenido Promocional: No habrá barajitas de estadios, ciudades sede, leyendas

históricas ni secciones de patrocinadores.

●  Gestión de Imágenes en el Cliente: El servidor central no almacena ni provee las

imágenes de las barajitas. La API solo retornará datos estructurados de la barajita (por
ejemplo: { "id": "POR-10", "nombre": "Cristiano Ronaldo", "rol": "Delantero" }). Es absoluta
responsabilidad de su interfaz asociar de manera lógica estos datos con una imagen
local (o URL externa) para renderizarla adecuadamente en pantalla.

5. Funcionalidades de la Aplicación

La interfaz web del proyecto debe cubrir con lo siguiente:

1. Vista de Álbum

●  Visualización de las páginas del álbum organizadas por países.
●  Distinción clara entre las barajitas que ya poseen (pegadas en el álbum), las que aún no

han conseguido (siluetas o espacios vacíos) y las que tienen repetidas.

2. Apertura de Sobres

●  Un botón o acción para solicitar y "abrir" un sobre de barajitas.
●  Cada sobre otorgará 7 barajitas aleatorias.
●  Animación o transición visual interactiva que muestre las barajitas obtenidas antes de

agregarlas al inventario general.

3. Mercado de Intercambios

●

Inventario de Repetidas: Sección específica para visualizar las barajitas duplicadas
disponibles para negociar.

●  Propuesta de Intercambios: Interfaz para seleccionar una barajita repetida propia y
proponer un intercambio a otro grupo a cambio de una barajita de su inventario que a
ustedes les haga falta.

●  Negociación en Vivo: Recibir ofertas de intercambio de otros grupos de forma

interactiva (aceptar o rechazar ofertas).

6. Integración con la API y Sockets

La comunicación se dividirá en dos capas de la pila de protocolos de red:

1.  Capa HTTP (REST API): Para acciones transaccionales y de consulta de estado (ej.

solicitar el inventario inicial, reclamar un sobre de barajitas, consultar el estado del álbum
guardado).

2.  Capa WebSockets (Socket.IO): Para la negociación activa del mercado de fichajes (ej.
notificar en vivo cuando un grupo publica una oferta, recibir una alerta de que te han
propuesto un cambio o confirmar que una transacción fue aceptada mutuamente).
Nota Importante: La documentación detallada de los endpoints HTTP, payloads requeridos y
los nombres de los canales/eventos de Socket.IO les será entregada a la brevedad posible.

link a la documentación del websocket:
https://sticker-album-server-proyect-production.up.railway.app/api-docs/


