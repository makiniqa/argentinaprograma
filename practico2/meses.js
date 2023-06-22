const readlineSync = require('readline-sync');
let mes = ""

// Con este bucle nos aseguramos de que el valor ingresado sea un a) número b) entre 1 y 12
do {
    mes = Number(readlineSync.question("Ingresá un mes (en formato número del 1 al 12): "));

    if (Number.isInteger(mes) == false || mes < 1 || mes > 12) {
        console.log("Tenés que ingresar un número entero entre 1 y 12.");
    };
} while (Number.isInteger(mes) == false || mes < 1 || mes > 12);

let meses_kv = {
    1: ["enero", 31],
    2: ["febrero", 28],
    3: ["marzo", 31],
    4: ["abril", 30],
    5: ["mayo", 31],
    6: ["junio", 30],
    7: ["julio", 31],
    8: ["agosto", 31],
    9: ["septiembre", 30],
    10: ["octubre", 31],
    11: ["noviembre", 30],
    12: ["diciembre", 31] 
};

console.log("La cantidad de dias del mes de %s es %s.", meses_kv[mes][0], meses_kv[mes][1]);