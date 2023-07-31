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
// Función para obtener una entrada del usuario y validarla
function obtenerEntradaUsuario(mensaje, opcionesValidas) {
  let entrada = "";

  while (!opcionesValidas.includes(entrada)) {
    entrada = prompt(mensaje);

    if (entrada === null) {
      console.log("No se seleccionó ninguna opción.");
      return null;
    } else {
      entrada = entrada.toUpperCase();
    }

    if (!opcionesValidas.includes(entrada)) {
      console.log("Opción no válida.");
    }
  }

  return entrada;
}
// Función para obtener el tipo de mascota (perro o gato)
function obtenerTipoMascota() {
  const tipoMascota = obtenerEntradaUsuario(
    "¿Qué tipo de mascota deseas generar un nombre? (P) Perro | (G) Gato",
    ["P", "G"]
  );

  return tipoMascota === "P" ? "perro" : "gato";
}
// Función para obtener el género de la mascota (macho o hembra)
function obtenerGeneroMascota() {
  const generoMascota = obtenerEntradaUsuario(
    "¿Cuál es el género de la mascota? (M) Macho | (H) Hembra",
    ["M", "H"]
  );

  return generoMascota === "M" ? "macho" : "hembra";
}
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
      let cantidadNombresNum = NaN;

      while (isNaN(cantidadNombresNum) || cantidadNombresNum <= 0) {
        const cantidadNombres = prompt("¿Cuántos nombres deseas generar?");
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
