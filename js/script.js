// Lista de nombres para perros y gatos (separados por género)
const nombresPerros = {
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

const nombresGatos = {
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

function generarNombresMascotas(tipoMascota, generoMascota, cantidadNombres) {
  const nombres = tipoMascota === "perro" ? nombresPerros : nombresGatos;
  const nombresGenerados = generarNombresUnicos(
    nombres,
    generoMascota,
    cantidadNombres
  );

  return nombresGenerados;
}

function simuladorNombresMascotas(cardElement) {
  const tipoMascota = cardElement.classList.contains("perro")
    ? "perro"
    : "gato";
  const generoMascota = cardElement.querySelector(".genero-mascota").value;
  const cantidadNombresNum = parseInt(
    cardElement.querySelector(".cantidad-nombres").value
  );

  if (!isNaN(cantidadNombresNum) && cantidadNombresNum > 0) {
    const nombresGenerados = generarNombresMascotas(
      tipoMascota,
      generoMascota,
      cantidadNombresNum
    );
    const resultadosElement = cardElement.querySelector(".resultados");
    resultadosElement.innerHTML = `Nombres generados: ${nombresGenerados.join(
      ", "
    )}`;
  } else {
    console.log("Ingresa una cantidad válida.");
  }
}

const perroCard = document.querySelector(".card.perro");
const gatoCard = document.querySelector(".card.gato");

perroCard
  .querySelector(".generar-nombres")
  .addEventListener("click", () => simuladorNombresMascotas(perroCard));

gatoCard
  .querySelector(".generar-nombres")
  .addEventListener("click", () => simuladorNombresMascotas(gatoCard));
