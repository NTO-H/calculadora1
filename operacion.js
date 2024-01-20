export const suma = (valor1 = 0, valor2 = 0) => {
  return valor1 + valor2;
};

export const resta = (valor1 = 0, valor2 = 0) => {
  return valor1 - valor2;
};

export const multiplicacion = (valor1 = 0, valor2 = 0) => {
  return valor1 * valor2;
};

export const division = (valor1 = 0, valor2 = 0) => {
  if (valor2 !== 0) {
    return valor1 / valor2;
  } else {
    return "Error";
  }
};
