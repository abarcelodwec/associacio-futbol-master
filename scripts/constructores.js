// Contructores de objetos partido, partidoAPI y quiniela.


// Función para crear objetos que corresponden a cada partido de cada jornada.
// Los goles, son un gol aleatorio que están en un array que contiene todos los goles que se hicieron en la temporada 2021 

function partido(partidoId, local, visitante, logo_local, logo_visitante) {

    this.partidoId = partidoId;
    this.local = local;
    this.visitante = visitante;
    this.gol_local = goles2021[Math.floor(Math.random() * goles2021.length)];
    this.gol_visitante = goles2021[Math.floor(Math.random() * goles2021.length)];
    this.logo_local = logo_local;
    this.logo_visitante = logo_visitante;
    this.calcResultado = function () {

        if (this.gol_local > this.gol_visitante) {
            return '1';
        } else if (this.gol_local < this.gol_visitante) {
            return '2';
        } else {
            return 'X';
        }
    };
    this.resultado = this.calcResultado();

};

// Función que crea un objeto correspondiente a cada partido
function partidoAPI(partidoId, local, visitante, gol_local, gol_visitante, logo_local, logo_visitante) {

    // Si el valor de los goles es null por ser una jornada aún no disputada,
    // selecciona un gol aleatorio de un array que contiene todos los goles de la temporada 2021

    if (gol_local === null) { gol_local = goles2021[Math.floor(Math.random() * goles2021.length)] }
    if (gol_visitante === null) { gol_visitante = goles2021[Math.floor(Math.random() * goles2021.length)] }

    this.partidoId = partidoId;
    this.local = local;
    this.visitante = visitante;
    this.gol_local = gol_local;
    this.gol_visitante = gol_visitante;
    this.logo_local = logo_local;
    this.logo_visitante = logo_visitante;
    this.calcResultado = function () {

        if (this.gol_local > this.gol_visitante) {
            return '1';
        } else if (this.gol_local < this.gol_visitante) {
            return '2';
        } else {
            return 'X';
        }
    };
    this.resultado = this.calcResultado();

};


// Función que crea los objetos de las jornadas
function jornada(jornada, id) {

    this.id = id;
    this.jornada = jornada;

};


// Función que crea un objeto de una quiniela según los partidos de una jornada
function quiniela(jornada, partido, gol_local, gol_visitante, resultado) {


    this.jornada = jornada;
    this.partido = partido;
    this.gol_local = gol_local;
    this.gol_visitante = gol_visitante;
    this.resultado = resultado;

};

