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
function generarNombresUnicos(nombres, cantidad) {
  const nombresGenerados = new Set();
  const generos = Object.keys(nombres);

  while (nombresGenerados.size < cantidad) {
    const generoAleatorio = generos[Math.floor(Math.random() * generos.length)];
    const nombresPorGenero = nombres[generoAleatorio];
    const nombreAleatorio =
      nombresPorGenero[Math.floor(Math.random() * nombresPorGenero.length)];

    nombresGenerados.add(nombreAleatorio);
  }

  return [...nombresGenerados];
}

// Función para obtener el tipo de mascota (perro o gato)
function obtenerTipoMascota() {
  let tipo = "";

  while (tipo !== "P" && tipo !== "G") {
    tipo = prompt(
      "¿Qué tipo de mascota deseas generar un nombre? (P) Perro | (G) Gato"
    );

    if (tipo === null) {
      console.log("No se seleccionó ningún tipo de mascota.");
      return null;
    } else {
      tipo = tipo.toUpperCase();
    }

    if (tipo !== "P" && tipo !== "G") {
      console.log("Opción de tipo de mascota no válida.");
    }
  }

  return tipo === "P" ? "perro" : "gato";
}

// Función para obtener el género de la mascota (macho o hembra)
function obtenerGeneroMascota() {
  let genero = "";

  while (genero !== "M" && genero !== "H") {
    genero = prompt("¿Cuál es el género de la mascota? (M) Macho | (H) Hembra");

    if (genero === null) {
      console.log("No se seleccionó ningún género de mascota.");
      return null;
    } else {
      genero = genero.toUpperCase();
    }

    if (genero !== "M" && genero !== "H") {
      console.log("Opción de género de mascota no válida.");
    }
  }

  return genero === "M" ? "macho" : "hembra";
}

// Función para generar nombres de mascotas
function generarNombresMascotas(tipoMascota, generoMascota, cantidadNombres) {
  const nombres = tipoMascota === "perro" ? nombresPerros : nombresGatos;
  const nombresGenerados = generarNombresUnicos(nombres, cantidadNombres);

  return nombresGenerados;
}

// Función para manejar el simulador interactivo
function simuladorNombresMascotas() {
  const tipoMascota = obtenerTipoMascota();

  if (tipoMascota) {
    const generoMascota = obtenerGeneroMascota();

    if (generoMascota) {
      let cantidadNombres = "";
      let cantidadNombresNum = 0;

      while (isNaN(cantidadNombresNum) || cantidadNombresNum <= 0) {
        cantidadNombres = prompt("¿Cuántos nombres deseas generar?");
        cantidadNombresNum = parseInt(cantidadNombres);

        if (isNaN(cantidadNombresNum) || cantidadNombresNum <= 0) {
          console.log("Ingresa una cantidad válida.");
        }
      }

      const nombresGenerados = generarNombresMascotas(
        tipoMascota,
        generoMascota,
        cantidadNombresNum
      );
      console.log(`Nombres generados: ${nombresGenerados.join(", ")}`);
    }
  }
}

simuladorNombresMascotas();
