const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingresá un número: ");

if (num == 0) {
    console.log("El número es cero");
} else if (num > 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
};