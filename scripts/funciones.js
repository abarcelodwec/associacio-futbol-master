
// Función que devuelve un array con números aleatorios no repetidos
function numAleatorio(lenght) {

    let array = [];

    for (let i = 0; i < lenght; i++) {
        array.push(i);
    }
    array = array.sort(function () { return Math.random() - 0.5 });

    return array;
};


