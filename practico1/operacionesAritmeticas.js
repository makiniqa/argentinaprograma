let num1 = 5;
let num2 = 6;
let num3 = 8;
let num4 = 4;

let suma = num1 + num2;
let resta = num3 - num4;
let resultadoFinal = suma * resta;

let esPar;

if (resultadoFinal % 2 === 0) {
    esPar = true;
} else {
    esPar = false;
}

console.log("Mis variables iniciales fueron:", num1 + ", " + num2 + ", " + num3 + " y " + num4 + ". La respuesta a verificar si el resultado final es par es:", esPar);