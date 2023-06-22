const readlineSync = require('readline-sync');
let num = readlineSync.question("Ingresá un número: ");

if (num == 0) {
    console.log("El número es cero")
} else if (num > 0) {
    if (num % 2 == 0){
        console.log("El número es positivo y par");
    } else {
        console.log("El número es positivo e impar");
    }
    
} else {
    console.log("El número es negativo");
};