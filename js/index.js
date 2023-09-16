const d = document;

// Se crea el head
const head = d.createElement("head");

//Obtengo una referencia al elemento body
const bodyElement = d.body;

// Cambio el color al body
bodyElement.style.backgroundColor = "#A9A9A9";

// Se crea la etiqueta meta para el charset
const metaCharset = d.createElement("meta");
metaCharset.setAttribute("charset", "UTF-8");

// Se crea la etiqueta title
const title = d.createElement("title");
title.textContent = "Generador de Nombres para Mascotas";

// Se crea la etiqueta meta para el viewport
const metaViewport = d.createElement("meta");
metaViewport.setAttribute("name", "viewport");
metaViewport.setAttribute("content", "width=device-width, initial-scale=1.0");

// Crear el enlace para tu hoja de estilo CSS
const cssLink = d.createElement("link");
cssLink.setAttribute("rel", "stylesheet");
cssLink.setAttribute("href", "./css/style.css");

// Crear el elemento h1
const h1 = d.createElement("h1");
h1.innerHTML = " Generador de Nombres para Mascotas";

//Cambio el color a las cards
perro.style.backgroundColor = "#FFFFFF";
gato.style.backgroundColor = "#FFFFFF";

//Se agrega el elemento h1
main.appendChild(h1);

//Cambio el color del h1
h1.style.color = "#FFFFFF";

// Agregar el enlace CSS al head
head.appendChild(cssLink);

// Se agregan los elementos al head
head.appendChild(metaCharset);
head.appendChild(title);
head.appendChild(metaViewport);

// Se agrega el head al html
const html = d.querySelector("html");
html.insertBefore(head, html.firstChild);

const cuerpo = d.querySelector("body");
