let i = 10;

do {
    if (i == 10) {
        console.log("Cuenta regresiva %s", i);
    } else if (i == 0) {
        console.log("Lanzamiento!");
    } else {
        console.log(i.toString());
    }

    i = i - 1;
} while (i > -1);