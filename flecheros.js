import { division, multiplicacion, suma, resta } from "./operacion.js";

var display = document.getElementById("visor");
var operacionA;
var operacionB;
var operacion;

const b1 = () => {
  if (display.textContent == "0") {
    display.textContent = "1";
  } else {
    display.textContent += "1";
  }
};
const b2 = () => {
  if (display.textContent == "0") {
    display.textContent = "2";
  } else {
    display.textContent += "2";
  }
};
const b3 = () => {
  if (display.textContent == "0") {
    display.textContent = "3";
  } else {
    display.textContent += "3";
  }
};
const b4 = () => {
  if (display.textContent == "0") {
    display.textContent = "4";
  } else {
    display.textContent += "4";
  }
};
const b5 = () => {
  if (display.textContent == "0") {
    display.textContent = "5";
  } else {
    display.textContent += "5";
  }
};
const b6 = () => {
  if (display.textContent == "0") {
    display.textContent = "6";
  } else {
    display.textContent += "6";
  }
};
const porcentaje = () => {
  if (display.value !== "0") {
    display.value = parseFloat(display.value) / 100;
  }
};

const b7 = () => {
  if (display.textContent == "0") {
    display.textContent = "7";
  } else {
    display.textContent += "7";
  }
};
const b8 = () => {
  if (display.textContent == "0") {
    display.textContent = "8";
  } else {
    display.textContent += "8";
  }
};
const b9 = () => {
  if (display.textContent == "0") {
    display.textContent = "9";
  } else {
    display.textContent += "9";
  }
};
const b0 = () => {
  if (display.textContent == "0") {
    display.textContent = "0";
  } else {
    display.textContent += "0";
  }
};



const borrar = () => {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
};


const bback = () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent.length == 0) {
    display.textContent = "0";
  }
};
const MasMenos = () => {
  if (display.value !== "0") {
    display.value = -parseFloat(display.value);
  }
};

const bsuma = () => {
  operacionA = display.textContent;
  operacion = "+";
  limpiar();
};
const bresta = () => {
  operacionA = display.textContent;
  operacion = "-";
  limpiar();
};
const bmultiplicacion = () => {
  operacionA = display.textContent;
  operacion = "*";
  limpiar();
};
const bdiv = () => {
  operacionA = display.textContent;
  operacion = "-";
  limpiar();
};
const bigual = () => {
  operacionB = display.textContent;
  operacion = "=";
  resolver();
};

const limpiar = () => {
  display.textContent = "";
};

const resolver = () => {
  var result = 0;
  switch (operacion) {
    case "+":
      result = suma(parseFloat(operacionA), parseFloat(operacionB));
      break;
    case "-":
      result = resta(parseFloat(operacionA), parseFloat(operacionB));
      break;
    case "*":
      result = suma(parseFloat(operacionA), parseFloat(operacionB));
      break;
    case "/":
      result = suma(parseFloat(operacionA), parseFloat(operacionB));
      break;
  }
  display.textContent = result;
};
