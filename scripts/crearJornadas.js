// Gestión de la creación de todas las jornadas con sus correspondientes partidos,
// utilizando el método Round Robin de emparejamiento de tablas de Richard Schuring 
// https://en.wikipedia.org/wiki/Round-robin_tournament

/*
Ejemplo de resultado de un torneo de 8 equipo 1 vuelta.

Jornada 1	1 – 8	2 – 7	3 – 6	4 – 5
Jornada 2	8 – 5	6 – 4	7 – 3	1 – 2
Jornada 3	2 – 8	3 – 1	4 – 7	5 – 6
Jornada 4	8 – 6	7 – 5	1 – 4	2 – 3
Jornada 5	3 – 8	4 – 2	5 – 1	6 – 7
Jornada 6	8 – 7	1 – 6	2 – 5	3 – 4
Jornada 7	4 – 8	5 – 3	6 – 2	7 – 1

*/


// elementos
const thJornades = document.getElementById('thJornades');
const tbJornades = document.getElementById('tbJornades');
const jornadasSelect = document.getElementById('jornadasSelect');
const btnGenerarJornadas = document.getElementById('btnGenerarJornadas');


// Variables del total de jornadas y total partidos por jornada
let totalJornadas;
let totalPartidos;



let jornadas = [];
let jornadaId = 1;
let totalVuelta = 0;
let ArrEquipos = [];
let claveLStorageJornada;

// Función que crea las jornadas. Dividida en dos procesos: ida y vuelta.
function generarJornadas(categoria) {

    jornadas = [];
    jornadaId = 1;
    totalVuelta = 0;

    crearRondas(primeraRonda(categoria), 'ida', categoria);

    totalVuelta = 0;

    crearRondas(primeraRonda(categoria), 'vuelta', categoria);

}

// Devuelve array de la primera ronda de la que se basan la creación del resto de rondas. 
function primeraRonda(categoria) {

    let arrCategoria = [];

    if (categoria === 'masc') {
        arrCategoria = primeraMasc;
    } else {
        arrCategoria = primeraFem;
    }

    let primeraRonda = [];

    for (let i = 0; primeraRonda.length < (arrCategoria.length) / 2; i++) {
        primeraRonda[i] = arrCategoria[i]
    }

    return primeraRonda;

}

// Crea la siguiente ronda y pasa las dos rondas como parámetro al método que crea los partidos y jornada.
// Se ejecuta recursivamente hasta crear todas las rondas
function crearRondas(ronda, idaOVuelta, categoria) {

    if (categoria == 'masc') {
        ArrEquipos = primeraMasc;
        claveLStorageJornada = 'jornadasMasc';
    } else {
        ArrEquipos = primeraFem;
        claveLStorageJornada = 'jornadasFem';
    }


    //  Base Recursividad
    if (totalVuelta == ArrEquipos.length - 1) {
        return
    }


    let ultimoValor = ronda[ronda.length - 1];

    let indiceUltimoValor = ArrEquipos.indexOf(ultimoValor);


    let ronda2 = [];

    for (let i = indiceUltimoValor + 1; ronda2.length < (ArrEquipos.length) / 2; i++) {

        if (ArrEquipos[i] == ArrEquipos[ArrEquipos.length - 1]) {

            i = 0;
        }

        ronda2.push(ArrEquipos[i]);

    }


    // Pasamos las rondas como parámetros para crear las jornadas y partidos.
    crearJornada(ronda, ronda2, idaOVuelta, categoria);
    totalVuelta++;

    // Se genera una nueva ronda pero la segunda ronda pasa a ser la primera
    crearRondas(ronda2, idaOVuelta, categoria);
}


// Genera la jornada con todos los partidos creados comparando dos rondas y formaliza los objetos
// que se insertan en una array de jornada que finalmente se guarda en el LocalStorage
function crearJornada(TeamsA, TeamsB, idaOVuelta) {

    let jornadaArr = [];

    for (let i = 0; i < TeamsA.length; i++) {

        if (TeamsA[i] === TeamsB[TeamsA.length - (i + 1)]) { // Si coinciden se añade el último equipo.

            if (idaOVuelta === 'ida') {

                if (totalVuelta % 2 === 0) { // Importante, vuelta par!

                    partidoObj = new partido(
                        (i + 1),
                        TeamsA[i],
                        ArrEquipos[ArrEquipos.length - 1], //ultimo equipo
                        'img/escudos/' + TeamsA[i] + '.png',
                        'img/escudos/' + ArrEquipos[ArrEquipos.length - 1] + '.png'
                    );

                } else {

                    partidoObj = new partido(
                        (i + 1),
                        ArrEquipos[ArrEquipos.length - 1], //ultimo equipo
                        TeamsA[i],
                        'img/escudos/' + ArrEquipos[ArrEquipos.length - 1] + '.png',
                        'img/escudos/' + TeamsA[i] + '.png'
                    );

                }

            } else {

                if (totalVuelta % 2 === 0) {

                    partidoObj = new partido(
                        (i + 1),
                        ArrEquipos[ArrEquipos.length - 1],
                        TeamsA[i],
                        'img/escudos/' + ArrEquipos[ArrEquipos.length - 1] + '.png',
                        'img/escudos/' + TeamsA[i] + '.png'
                    );

                } else {

                    partidoObj = new partido(
                        (i + 1),
                        TeamsA[i],
                        ArrEquipos[ArrEquipos.length - 1],
                        'img/escudos/' + TeamsA[i] + '.png',
                        'img/escudos/' + ArrEquipos[ArrEquipos.length - 1] + '.png'
                    );

                }

            }

        } else {

            if (idaOVuelta === 'ida') {


                partidoObj = new partido(
                    (i + 1),
                    TeamsA[i],
                    TeamsB[TeamsA.length - (i + 1)],
                    'img/escudos/' + TeamsA[i] + '.png',
                    'img/escudos/' + TeamsB[TeamsA.length - (i + 1)] + '.png'
                );

            } else {

                partidoObj = new partido(
                    (i + 1),
                    TeamsB[TeamsA.length - (i + 1)],
                    TeamsA[i],
                    'img/escudos/' + TeamsB[TeamsA.length - (i + 1)] + '.png',
                    'img/escudos/' + TeamsA[i] + '.png'
                );

            }
        }

        jornadaArr.push(partidoObj);

    }


    jornadas.push(new jornada(jornadaArr, jornadaId));

    jornadaId++;

    // Guardar el total de jornadas generadas en el LocalStorage
    localStorage.setItem(claveLStorageJornada, (JSON.stringify(jornadas)));

    quinielaSelector();



}

// LISTENERS

btnGenerarJornadas.addEventListener('click', () => {

    generarJornadas('masc');
    generarJornadas('fem');

    alert('Jornadas creadas correctamente. Ya puedes hacer quinielas.');



});








