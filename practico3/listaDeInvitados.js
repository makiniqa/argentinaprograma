personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
admitidos = [];
rechazados = [];

for (let i = 0; i < personas.length; i++) {
    if (personas[i] == "Jose" || personas[i] == "Sofia") {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    };
};

admitidos.sort()
rechazados.sort();

console.log("La lista ordenada de invitados admitidos es: ")
for (let admitido = 0; admitido < admitidos.length; admitido++) {
    console.log(admitidos[admitido]);
};

console.log("La lista ordenada de invitados rechazados es: ")
for (let rechazado = 0; rechazado < rechazados.length; rechazado++) {
    console.log(rechazados[rechazado]);
};