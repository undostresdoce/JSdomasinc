// 1: Crear una función callback en JavaScript
// La función principal se llama 'operaciones' y recibe 4 parámetros:
// - a y b: números
// - minora y potencias: funciones callback

function operaciones(a, b, minora, potencias) {
  // 2: Mostrar 'Buenos días' al inicio de la función principal
  logConsola("🌞 Buenos días, iniciando operaciones...");

  // Punto 2: Calcular diferencia y potencia
  const diferencia = a - b;
  const elevado = Math.pow(a, b);

  // 2: Invocar función callback 'minora' con la diferencia
  logConsola(`Calculando diferencia entre ${a} y ${b}...`);
  minora(diferencia, a, b); 

  // 2: Invocar función callback 'potencias' con el resultado de potencia
  logConsola(`Calculando potencia de ${a} elevado a ${b}...`);
  potencias(elevado, a, b); 
}

// consola visual
function logConsola(mensaje) {
  const consola = document.getElementById("consola");
  consola.textContent += mensaje + "\n";
}

// Evento 
document.getElementById("calcularBtn").addEventListener("click", () => {
  const a = parseInt(document.getElementById("numA").value);
  const b = parseInt(document.getElementById("numB").value);
  const resultados = document.getElementById("resultados");

  // Limpiar resultados y consola antes de cada ejecución
  resultados.innerHTML = "";
  document.getElementById("consola").textContent = "";

  // Validación de entrada
  if (isNaN(a) || isNaN(b)) {
    resultados.innerHTML = "Por favor ingresa ambos números.";
    return;
  }

  // 3: Invocar la función operaciones con funciones anónimas como callbacks
  operaciones(
    a,
    b,
    function (diferencia, a, b) {
      // 4: Mostrar mensaje personalizado con los valores ingresados
      resultados.innerHTML += `La diferencia entre ${a} y ${b} es: ${diferencia}<br>`;
    },
    function (elevado, a, b) {
      // 4: Mostrar mensaje personalizado con los valores ingresados
      resultados.innerHTML += `Elevando ${a} a potencia ${b} se obtiene: ${elevado}<br>`;
    }
  );
});
