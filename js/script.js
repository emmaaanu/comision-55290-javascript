const MASCOTA_PERRO = "perro";
const MASCOTA_GATO = "gato";

const nombresMascotasPerros = {
  macho: [
    "Max",
    "Charlie",
    "Rocky",
    "Buddy",
    "Toby",
    "Cooper",
    "Zeus",
    "Bruno",
    "Duke",
    "Rex",
  ],
  hembra: [
    "Bella",
    "Lucy",
    "Daisy",
    "Lola",
    "Molly",
    "Luna",
    "Chloe",
    "Lily",
    "Coco",
    "Mia",
  ],
};

const nombresMascotasGatos = {
  macho: [
    "Simba",
    "Oliver",
    "Leo",
    "Bogart",
    "Bob",
    "Walter",
    "Kenny",
    "Hendrix",
    "Igor",
    "Coco",
  ],
  hembra: [
    "Luna",
    "Chloe",
    "Lily",
    "Coco",
    "Mia",
    "Greta",
    "Maia",
    "Sia",
    "Mia",
    "Lia",
  ],
};

// Función para generar nombres únicos aleatorios
function generarNombresUnicos(nombres, genero, cantidad) {
  const nombresGenerados = new Set();
  const nombresPorGenero = nombres[genero];

  while (nombresGenerados.size < cantidad) {
    const nombreAleatorio =
      nombresPorGenero[Math.floor(Math.random() * nombresPorGenero.length)];

    nombresGenerados.add(nombreAleatorio);
  }

  return [...nombresGenerados];
}
// Función para generar nombres de mascotas
function generarNombresMascotas(tipoMascota, generoMascota, cantidadNombres) {
  const nombres =
    tipoMascota === MASCOTA_PERRO
      ? nombresMascotasPerros
      : nombresMascotasGatos;
  const nombresGenerados = generarNombresUnicos(
    nombres,
    generoMascota,
    cantidadNombres
  );

  return nombresGenerados;
}
// Función para borrar nombres generados y limpiar la pantalla
function borrarNombres(cardElement, tipoMascota) {
  const cardNombresKey =
    tipoMascota === MASCOTA_PERRO
      ? "nombresGeneradosPerro"
      : "nombresGeneradosGato";
  // Remover nombres generados de localStorage
  localStorage.removeItem(cardNombresKey);

  const resultadosElement = cardElement.querySelector(".resultados");
  resultadosElement.innerHTML = "Nombres generados: ";
}

// Función para obtener una imagen de mascota desde la API
function obtenerImagenMascota(apiUrl, imgElement) {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      imgElement.src = data[0].url;
    });
}
// Función para simular la generación de nombres de mascotas
function simuladorNombresMascotas(cardElement, tipoMascota) {
  const generoMascota = cardElement.querySelector(".genero-mascota").value;
  const cantidadNombresNum = parseInt(
    cardElement.querySelector(".cantidad-nombres").value
  );

  if (!isNaN(cantidadNombresNum) && cantidadNombresNum > 0) {
    const cardNombresKey =
      tipoMascota === MASCOTA_PERRO
        ? "nombresGeneradosPerro"
        : "nombresGeneradosGato";
    const nombresGeneradosAnteriores =
      JSON.parse(localStorage.getItem(cardNombresKey)) || [];
    const nuevosNombresGenerados = generarNombresMascotas(
      tipoMascota,
      generoMascota,
      cantidadNombresNum
    );

    const nombresGenerados = [
      ...nombresGeneradosAnteriores,
      ...nuevosNombresGenerados,
    ];
    // Almacenar nombres generados en localStorage
    localStorage.setItem(cardNombresKey, JSON.stringify(nombresGenerados));

    const resultadosElement = cardElement.querySelector(".resultados");
    resultadosElement.innerHTML = `Nombres generados: ${nuevosNombresGenerados.join(
      ", "
    )}`;
  } else {
    console.log("Ingresa una cantidad válida.");
  }
}
// Obtener elementos HTML de las tarjetas de perro y gato
const perroCard = document.querySelector(".card.perro");
const gatoCard = document.querySelector(".card.gato");

// Obtener y mostrar imágenes de mascotas desde la API
obtenerImagenMascota(
  "https://api.thedogapi.com/v1/images/search",
  perroCard.querySelector("img")
);
obtenerImagenMascota(
  "https://api.thecatapi.com/v1/images/search",
  gatoCard.querySelector("img")
);

// Agregar event listeners a los botones Generar y Borrar
perroCard
  .querySelector(".generar-nombres")
  .addEventListener("click", () =>
    simuladorNombresMascotas(perroCard, MASCOTA_PERRO)
  );

perroCard
  .querySelector(".borrar-nombres")
  .addEventListener("click", () => borrarNombres(perroCard, MASCOTA_PERRO));

gatoCard
  .querySelector(".generar-nombres")
  .addEventListener("click", () =>
    simuladorNombresMascotas(gatoCard, MASCOTA_GATO)
  );

gatoCard
  .querySelector(".borrar-nombres")
  .addEventListener("click", () => borrarNombres(gatoCard, MASCOTA_GATO));

// Cargar nombres generados al cargar la página
window.addEventListener("load", () => {
  const nombresGeneradosPerro =
    JSON.parse(localStorage.getItem("nombresGeneradosPerro")) || [];
  const nombresGeneradosGato =
    JSON.parse(localStorage.getItem("nombresGeneradosGato")) || [];

  const resultadosElementPerro = perroCard.querySelector(".resultados");
  resultadosElementPerro.textContent = `Nombres generados: ${nombresGeneradosPerro.join(
    ", "
  )}`;

  const resultadosElementGato = gatoCard.querySelector(".resultados");
  resultadosElementGato.textContent = `Nombres generados: ${nombresGeneradosGato.join(
    ", "
  )}`;
});
