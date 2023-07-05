const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
    num = Math.random() * (3 - 0);
    jugada = Math.floor(num).toString();

    let jugadas = {
    "0": "piedra",
    "1": "papel",
    "2": "tijeras"
    };

    return jugadas[jugada]
};

function obtenerJugadaUsuario() {
    do {
        let jugada = readlineSync.question("Piedra, papel o tijeras?: ");
        jugada = jugada.toLowerCase();

        if (jugada == "tijera") {
            jugada = "tijeras";
        };

        if (jugada != "piedra" && jugada != "papel" && jugada != "tijeras") {
            console.log("Tenés que elegir entre piedra, papel o tijera. Volvé a intentar");
        } else {
            return jugada;
        };
    } while (true);
};

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora == "piedra") {
        if (jugadaUsuario == "papel") {
            return "Gana el usuario";
        } else if (jugadaUsuario == "tijeras") {
            return "Gana la computadora";
        } else {
            return "Empate";
        }
    } else if (jugadaComputadora == "papel") {
        if (jugadaUsuario == "tijeras") {
            return "Gana el usuario";
        } else if (jugadaUsuario == "piedra") {
            return "Gana la computadora";
        } else {
            return "Empate";
        };
    } else if (jugadaComputadora == "tijeras") {
        if (jugadaUsuario == "piedra") {
            return "Gana el usuario";
        } else if (jugadaUsuario == "papel") {
            return "Gana la computadora";
        } else {
            return "Empate";
        };
    };

};


let jugadaComputadora = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("La computadora eligio: %s.", jugadaComputadora);
console.log("El usuario eligio: %s.", jugadaUsuario);
console.log("El resultado fue: %s.", resultado);