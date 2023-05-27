const meses = 12;
let temperaturas = {
    enero: 75,
    febrero: 80,
    marzo: 77,
    abril: 83,
    mayo: 90,
    junio: 94,
    julio: 91,
    agosto: 30,
    septiembre: 47,
    octubre: 20,
    noviembre: 11,
    diciembre: -3
};

let suma_temp_fahrenheit = temperaturas.enero + temperaturas.febrero + temperaturas.marzo +
                           temperaturas.abril + temperaturas.mayo + temperaturas.junio +
                           temperaturas.julio + temperaturas.agosto + temperaturas.septiembre +
                           temperaturas.octubre + temperaturas.noviembre + temperaturas.diciembre;

let promedio_fahrenheit = suma_temp_fahrenheit / meses;

let promedio_celsius = (promedio_fahrenheit - 32) * 5/9;

console.log("El promedio anual en grados celsius es:", promedio_celsius);