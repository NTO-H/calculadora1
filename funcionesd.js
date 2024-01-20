let valor1 = "";
let valor2 = "";
let resultado;
let operador = "";
let del;

const llenar = (numero) => {
  const visor = document.getElementById("visor");
  if (visor.value === "0") {
    visor.value = numero.toString();
  } else {
    visor.value += numero;
  }
};

const reiniciar = () => {
  document.getElementById("visor").value = "0";
  valor1 = "";
  operador = "";
  limpiarHistorial();
};

const limpiarHistorial = () => {
  const historialLista = document.getElementById("historial-lista");
  historialLista.innerHTML = "";
};

const operacion = (sinal) => {
  if (valor1 === "") {
    operador = sinal;
    valor1 = parseFloat(document.getElementById("visor").value);
    document.getElementById("visor").value = "";
  } else {
    switch (operador) {
      case "+":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) + parseFloat(valor2);
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "-":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) - parseFloat(valor2);
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "/":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) / parseFloat(valor2);
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      case "*":
        operador = sinal;
        valor2 = document.getElementById("visor").value;
        valor1 = parseFloat(valor1) * parseFloat(valor2);
        document.getElementById("visor").value = "";
        valor2 = "";
        break;
      default:
        resultado = valor1;
        break;
    }
  }
};

const punto = () => {
  const visor = document.getElementById("visor");
  if (!visor.value.includes(".")) {
    visor.value += ".";
  }
};

const calcular = () => {
  const visor = document.getElementById("visor");
  const historialLista = document.getElementById("historial-lista");

  switch (operador) {
    case "+":
      resultado = valor1 + parseFloat(visor.value);
      historialLista.innerHTML += `<li>${valor1} + ${parseFloat(visor.value)} = ${resultado}</li>`;
      break;
    case "-":
      resultado = valor1 - parseFloat(visor.value);
      historialLista.innerHTML += `<li>${valor1} - ${parseFloat(visor.value)} = ${resultado}</li>`;
      break;
    case "*":
      resultado = valor1 * parseFloat(visor.value);
      historialLista.innerHTML += `<li>${valor1} * ${parseFloat(visor.value)} = ${resultado}</li>`;
      break;
    case "/":
      resultado = valor1 / parseFloat(visor.value);
      historialLista.innerHTML += `<li>${valor1} / ${parseFloat(visor.value)} = ${resultado}</li>`;
      break;
    default:
      resultado = valor1;
      break;
  }

  visor.value = resultado.toLocaleString("es-ES");
  valor1 = resultado;
  operador = "";
};

const porcentaje = () => {
  valor2 = parseFloat(document.getElementById("visor").value);
  resultado = (valor1 / 100) * valor2;
  document.getElementById("visor").value = resultado;
};

const retroceso = () => {
  del = document.getElementById("visor").value;
  document.getElementById("visor").value = del.length;
  document.getElementById("visor").value = del.substr(0, del.length - 1);
};
