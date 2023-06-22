const readlineSync = require('readline-sync');
let dia = readlineSync.question("Qué día de la semana es hoy? (en formato número del 1 al 7): ");
dia = Number(dia);

switch(dia) {
  case 1:
    dia = "lunes"
    break;
  case 2:
    dia = "martes"
    break;
  case 3:
    dia = "miércoles"
    break;
  case 4:
    dia = "jueves"
    break;
  case 5:
    dia = "viernes"
    break;
  case 6:
    dia = "sábado"
    break;
  case 7:
    dia = "domingo"
    break;
  default:
    dia = null;
};

if (dia === null) {
    console.log("Número inválido");
} else {
    console.log("Hoy es %s.", dia);
}