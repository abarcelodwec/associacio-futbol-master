let primeraMasc = ["Almeria", "Athletic Club", "Atlético de Madrid", "FC Barcelona",
    "Real Betis", "Cádiz", "Celta de Vigo", "Elche", "Espanyol", "Getafe",
    "Girona", "Real Mallorca", "Osasuna", "Rayo Vallecano", "Real Madrid",
    "Real Sociedad", "Sevilla", "Valencia", "Valladolid", "Villarreal"];

let primeraFem = ["Alavés", "Alhama", "Atlético Fem", "Barcelona Fem",
    "Tenerife", "Levante Fem", "Madrid CFF", "Betis Fem",
    "R. Madrid Fem", "R. Sociedad Fem", "Sevilla Fem", "Huelva Fem",
    "Valencia Fem", "Villarreal Fem"];


// Goles que se hicieron durante la liga 2021.
// El constructor de partidos, coge un valor random de este array para llegar los atributos de los goles.

let goles2021 = [1, 4, 4, 2, 1, 2, 1, 1, 1, 1, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 3, 3, 0, 0, 1, 0, 2, 2, 2, 1, 0, 1, 0, 1, 1, 0, 2, 3, 1, 0,
    3, 0, 4, 0, 1, 1, 2, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 1, 4, 5, 2, 1, 1, 5, 2, 0, 2, 0, 0, 1, 1, 2, 2, 1, 2, 0, 0, 0, 0, 1, 2, 3, 0, 1, 1, 1, 2, 1, 2, 0, 0, 2, 3, 1, 0, 0, 2, 1, 3,
    6, 1, 3, 1, 4, 1, 1, 0, 3, 0, 2, 0, 1, 0, 2, 3, 0, 0, 1, 0, 2, 0, 1, 1, 3, 1, 1, 0, 2, 0, 1, 0, 1, 1, 0, 0, 1, 0, 2, 1, 1, 0, 2, 0, 1, 0, 0, 1, 3, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1, 0,
    1, 0, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 3, 2, 0, 3, 0, 2, 1, 1, 5, 3, 2, 2, 2, 2, 1, 0, 4, 1, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0, 0, 1, 0, 3, 3, 3, 0, 1, 1, 2, 1, 1, 1, 0, 3, 1, 1, 2, 0,
    2, 0, 0, 0, 1, 2, 2, 1, 0, 1, 0, 2, 3, 3, 2, 2, 2, 0, 0, 2, 2, 1, 3, 3, 1, 0, 1, 0, 1, 0, 1, 1, 4, 0, 1, 4, 0, 0, 0, 0, 2, 2, 3, 1, 0, 3, 1, 2, 2, 2, 3, 1, 0, 0, 1, 4, 1, 0, 1, 1,
    2, 1, 1, 1, 1, 3, 1, 2, 0, 1, 1, 2, 0, 0, 2, 1, 0, 0, 0, 2, 1, 0, 1, 0, 3, 1, 1, 1, 0, 1, 4, 0, 0, 0, 1, 1, 4, 3, 2, 2, 2, 0, 2, 1, 2, 0, 3, 2, 3, 2, 3, 1, 1, 0, 4, 1, 3, 4, 0, 0,
    1, 3, 2, 1, 2, 0, 1, 1, 2, 0, 0, 2, 0, 1, 1, 0, 0, 1, 1, 3, 1, 2, 5, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 0, 2, 0, 4, 1, 1, 0, 1, 0, 1, 1, 2, 2, 1, 2, 0, 1, 0, 1, 4, 0, 2, 0, 0, 2, 4, 2,
    2, 2, 1, 1, 1, 0, 0, 1, 3, 2, 0, 2, 1, 4, 0, 2, 2, 2, 0, 0, 2, 2, 0, 1, 3, 0, 2, 1, 4, 2, 0, 2, 2, 0, 2, 1, 3, 0, 0, 0, 1, 0, 0, 0, 3, 1, 2, 1, 4, 3, 3, 2, 0, 0, 2, 2, 2, 4, 2, 0,
    2, 0, 0, 3, 0, 0, 4, 0, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 3, 3, 0, 1, 4, 2, 1, 2, 0, 4, 0, 0, 1, 2, 2, 0, 0, 3, 0, 1, 0, 2, 1, 0, 1, 5, 1, 0, 0, 3, 1, 1, 3, 4, 3, 2, 0, 2, 0, 1, 0,
    4, 1, 3, 1, 1, 2, 2, 1, 4, 0, 1, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2, 3, 1, 1, 0, 0, 1, 0, 1, 0, 3, 1, 0, 4, 0, 0, 0, 1, 0, 1, 2, 1, 4, 1, 1, 0, 4, 1, 1, 2, 1, 0, 2, 2,
    2, 0, 1, 0, 0, 0, 1, 0, 1, 2, 1, 0, 2, 3, 1, 0, 2, 0, 4, 2, 1, 1, 1, 1, 1, 2, 1, 0, 0, 2, 2, 1, 0, 1, 1, 2, 1, 4, 0, 0, 2, 3, 1, 2, 3, 0, 0, 0, 0, 1, 0, 2, 2, 1, 2, 3, 0, 1, 2, 3,
    1, 3, 0, 1, 2, 0, 2, 1, 2, 0, 2, 1, 0, 0, 1, 1, 4, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 2, 4, 0, 2, 6, 0, 0, 3, 0, 1, 1, 2, 1, 1, 1, 2, 1, 3, 1, 1, 0, 1, 1, 6, 0, 3, 0, 0, 0,
    0, 3, 1, 5, 0, 2, 2, 0, 1, 1, 2, 0, 1, 0, 2, 1, 0, 0, 1, 1, 1, 1, 3, 1, 1, 2, 0, 1, 0, 2, 0, 0, 0, 2, 0, 0, 1, 2, 1, 0, 2, 0, 2, 4, 3, 1]




