
// Proceso que se genera en dos pasos.
// 1. Descargar datos de la web con la API y guardarlos en localStorage
// 2. Generar la misma estructura que sin la API en LocalStorage con los datos descargados y aprovechar el resto de la web


// Botones
const btnDescargarJornadasAPI = document.getElementById('btnDescargarJornadasAPI');
const btnGenerarJornadasAPI = document.getElementById('btnGenerarJornadasAPI');

// Función que descarga de https://www.api-football.com/ la liga BBVA masculino y femenino y mete en localstorage el json obtenido

function descargarJornadasAPI() {

    var myHeaders = new Headers();
    myHeaders.append("x-rapidapi-key", "e6ed9cdcfc5bcaf1149ec8d3677f9bcb");
    myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://v3.football.api-sports.io/fixtures?league=140&season=2022", requestOptions)
        .then(response => response.text())
        .then(result => localStorage.setItem('jornadasAPIMasc', result))
        .catch(error => console.log('error', error));




    fetch("https://v3.football.api-sports.io/fixtures?league=142&season=2022", requestOptions)
        .then(response => response.text())
        .then(result => localStorage.setItem('jornadasAPIFem', result))
        .catch(error => console.log('error', error));



    alert('\n\nDatos descargados. \n\n\nPulsa el botón "Crear con datos de www.api-football.com" \nde las herramientas para generar las jornadas');

    btnGenerarJornadasAPI.disabled = false;



};



// Creamos en LocalStorage una estructura propia de jornadas/partidos con los datos obtenidos de la API
// Parámetro de la categoría.
function generarJornadasAPI(categoria) {


    // Variables    
    let partidos = []; //Array que acumula los partidos de cada jornada
    let jornadas = []; //Array que acumula las jornadas
    let partidoObj; //Variable al crear objeto partido
    let jornadaAPI = []; //Acumula las jornadas del json descargado
    jornadaId = 1;

    // Recupera el json descargado de la API
    let localStorageJornadas = JSON.parse(localStorage.getItem('jornadasAPI' + categoria));


    // Doble bucle para separar por jornadas (Season)
    for (let i = 1; i < (localStorageJornadas.response.length / 10) + 1; i++) {

        jornadaAPI = localStorageJornadas.response.filter(jornadas => jornadas.league.round == "Regular Season - " + i);

        for (let j = 0; j < jornadaAPI.length; j++) {

            partidoObj = new partidoAPI(

                (j + 1),
                jornadaAPI[j].teams.home.name,
                jornadaAPI[j].teams.away.name,
                jornadaAPI[j].goals.home,
                jornadaAPI[j].goals.away,
                jornadaAPI[j].teams.home.logo,
                jornadaAPI[j].teams.away.logo
            );

            partidos.push(partidoObj);

        }


        // Insertamos todos los partidos por jornadas en un array
        jornadas.push(new jornada(partidos, jornadaId));
        jornadaId++;

        // limpiamos array para siguiente jornada
        partidos = [];

    }


    // Guardamos en localstorage toda la estructura creada
    localStorage.setItem('jornadas' + categoria, (JSON.stringify(jornadas)));

    // actualizar select de las jornadas de las quinielas
    quinielaSelector();

}


// LISTENERS

btnDescargarJornadasAPI.addEventListener('click', descargarJornadasAPI);
btnGenerarJornadasAPI.addEventListener('click', () => {

    generarJornadasAPI('Fem');
    generarJornadasAPI('Masc');
    alert('Jornadas creadas correctamente. Ya puedes hacer quinielas.');
    btnGenerarJornadasAPI.disabled = true;



});