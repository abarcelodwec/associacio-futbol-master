// elementos

// Las tres tablas donde se muestras los datos: Quiniela, Apuesta y resultado 
const thQuinielas = document.getElementById('thQuinielas');
const tbQuinielas = document.getElementById('tbQuinielas');
const thApuestas = document.getElementById('thApuestas');
const tbApuestas = document.getElementById('tbApuestas');
const thResultados = document.getElementById('thResultados');
const tbResultados = document.getElementById('tbResultados');
const thIconoResultados = document.getElementById('thIconoResultados');
const tbIconoResultados = document.getElementById('tbIconoResultados');
const tituloQuiniela = document.getElementById('tituloQuiniela');
const tablaApuestas = document.getElementById('tablaApuestas');

// Botones
const btnCrearQuiniela = document.getElementById("btnCrearQuiniela");
const btnCrearJornadas = document.getElementById("btnCrearJornadas");
const btnSuerte = document.getElementById("btnSuerte");
const btnVerificar = document.getElementById("btnVerificar");
const btnBorrar = document.getElementById("btnBorrar");
const btnHerramientas = document.getElementById('btnHerramientas');

const quinielaSelect = document.getElementById('quinielaSelect');



// Función que crea la tabla de la quiniela según la jornada selecionada en el select (parametro: jornadaId)
// Recupera la jornada del LocalStorage por categoría. Primero todos los masculinos y después 4 de femeninos.
// Una vez mostrada la tabla con los valores, creamos un objeto quiniela con la jornada, partido y resultado
// para compararlo fácilmente con la futura selección del usuario.

function mostrarQuiniela(jornadaId) {

    // Limpieza resultados y gestión botones por si ya hemos verificado una anterior
    tbResultados.innerHTML = '';
    thResultados.innerHTML = '';
    document.getElementById('aciertos').innerHTML = '';
    btnSuerte.innerText = "¿Te ves con suerte?";
    btnSuerte.disabled = false;
    btnVerificar.hidden = false;
    btnVerificar.hidden = false;



    totalPartidos = (primeraMasc.length / 2);

    let quinielaArr = [];

    tituloQuiniela.innerHTML = 'Quiniela jornada: ' + jornadaId + '<br><br>';

    // Construimos cabecera de la tabla de quiniela
    thQuinielas.innerHTML =
        '<tr class="text-center">' +
        '<th style="width: 42%">Local</th>' +
        '<th style="width: 16%"></th>' +
        '<th style="width: 42%">Visitante</th>' +
        '</tr>'


    // Contruimos body de la tabla de quiniela.
    // Bucle que recorre todo el json recuperado del LocalStorage.
    // Creamos objeto quiniela con los partidos los datos necesarios para poder comparar
    // y mostrar los resultados

    //MASCULINO

    localStorageJornadas = JSON.parse(localStorage.getItem('jornadasMasc'));


    tbQuinielas.innerHTML = '';

    for (let i = 0; i < totalPartidos; i++) {

        tbQuinielas.innerHTML +=
            '<tr>' +
            '<td><img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_local + '" alt="Logo" class="escudosquiniela" /> ' + localStorageJornadas[jornadaId - 1].jornada[i].local + '</td>' +
            '<td id="goles' + i + '" class="text-center fw-bold"></td>' +
            '<td class="text-end"> ' + localStorageJornadas[jornadaId - 1].jornada[i].visitante + ' <img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_visitante + '" alt="Logo" class="escudosquiniela" /></td>' +
            '</tr>';

        quinielaArr.push(new quiniela(
            jornadaId,
            localStorageJornadas[jornadaId - 1].jornada[i].partidoId,
            localStorageJornadas[jornadaId - 1].jornada[i].gol_local,
            localStorageJornadas[jornadaId - 1].jornada[i].gol_visitante,
            localStorageJornadas[jornadaId - 1].jornada[i].resultado

        ));
    }

    // FEMENINO

    localStorageJornadas = JSON.parse(localStorage.getItem('jornadasFem'));

    // Si se elige una jornada que no existe en la liga femenina, se empieza por la jornada 1
    if (jornadaId > localStorageJornadas.length) { jornadaId = 1 };


    for (let i = 0; i < 4; i++) {

        tbQuinielas.innerHTML +=
            '<tr>' +
            '<td><img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_local + '" alt="Logo" class="escudosquiniela" /> ' + localStorageJornadas[jornadaId - 1].jornada[i].local + '</td>' +
            '<td id="goles' + (i + 10) + '" class="text-center fw-bold"></td>' +
            '<td class="text-end"> ' + localStorageJornadas[jornadaId - 1].jornada[i].visitante + ' <img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_visitante + '" alt="Logo" class="escudosquiniela" /></td>' +
            '</tr>';

        quinielaArr.push(new quiniela(
            jornadaId,
            localStorageJornadas[jornadaId - 1].jornada[i].partidoId,
            localStorageJornadas[jornadaId - 1].jornada[i].gol_local,
            localStorageJornadas[jornadaId - 1].jornada[i].gol_visitante,
            localStorageJornadas[jornadaId - 1].jornada[i].resultado
        ));

    }

    // Guardamos array de la quiniela generada en el LocalStorage
    localStorage.setItem('quiniela', (JSON.stringify(quinielaArr)));


    // Construimos cabecera de la tabla de Apuesta (1 X 2)
    thApuestas.innerHTML =
        '<tr>' +
        '<th>1</th>' +
        '<th>X</th>' +
        '<th>2</th>' +
        '</tr>'

    // Contruimos body de la tabla de Apuesta (1 X 2)
    tbApuestas.innerHTML = '';

    for (let i = 0; i < totalPartidos + 4; i++) {

        tbApuestas.innerHTML +=
            '<tr class="apuestaPartido">' +
            '<td class="apuesta1">1</td>' +
            '<td class="apuestax">X</td>' +
            '<td class="apuesta2">2</td>' +
            '</tr>';


    }

    btnSuerte.removeAttribute('hidden');


}

// Función que crea y muestra la tabla donde insertaremos los resultados.
function clickVerifica() {


    tbResultados.innerHTML = '';


    // Construimos cabecera de la tabla de Resultados
    thResultados.innerHTML =
        '<tr>' +
        '<th>Aciertos</th>' +
        '</tr>'

    // Contruimos body de la tabla de Resultados
    tbResultados.innerHTML = '';

    for (let i = 0; i < totalPartidos + 4; i++) {

        tbResultados.innerHTML +=
            '<tr class="apuestaPartido">' +
            '<td id="iconoResultado' + (i + 1) + '" ><div class="spinner-border spinner-border-sm" style="color:rgb(136, 206, 31)" role="status"></div></td>' +
            '</tr>';


        document.getElementById('goles' + i).innerHTML = '<div class="spinner-grow spinner-grow-sm" style="color:rgb(136, 206, 31)" role="status"></div>';


    }



    compararResultados();


}

// Función que recupera la quiniela generada (mostrarQuiniela(jornadaId)) y lo compara con las seleccionadas
// Anadido SetTimeout de 1 segundo por resultado mostrado para crear algo más de emoción que mostrar todos los resultados de una vez. 

function compararResultados() {

    // Recoger quiniela guardada en LS y meterla en un array
    const quinielaArr = JSON.parse(localStorage.getItem('quiniela'));

    // Recoger el valor de las casillas de apuesta seleccionadas y añadirla en el array como un campo más (apuesta). 
    const seleccionadas = document.querySelectorAll(".seleccionada");

    for (let i = 0; i < seleccionadas.length; i++) {

        quinielaArr[i].apuesta = seleccionadas[i].innerHTML

    }

    // Comparar y añadir mostar resultados.

    const aciertos = document.getElementById('aciertos');

    let acierto = 0;


    for (let i = 0; i < quinielaArr.length; i++) {

        // retraso de 1 segundo para cada resultado.

        setTimeout(function () {

            if (quinielaArr[i].resultado == quinielaArr[i].apuesta) {

                document.getElementById('iconoResultado' + (i + 1)).innerHTML = '<img src="img/quinielaSI.png" />';

                acierto++;
                aciertos.innerHTML = acierto;

            } else {

                document.getElementById('iconoResultado' + (i + 1)).innerHTML = '<img src="img/quinielaNO.png" />';

            }

            document.getElementById('goles' + i).innerHTML = quinielaArr[i].gol_local + " - " + quinielaArr[i].gol_visitante;

        }, 1000 * i);

    }

    // Evitar que se pueda volver a generar.
    btnSuerte.disabled = true;

    btnVerificar.disabled = true;


};

// Rellena el select con todas las jornadas para elegir cuál hacer la quiniela. 
function quinielaSelector() {

    let localStorageJornadas;

    localStorageJornadas = JSON.parse(localStorage.getItem('jornadasMasc'));


    if (localStorageJornadas != null) {
        quinielaSelect.innerHTML = '';
        localStorageJornadas.forEach(element => {
            quinielaSelect.innerHTML += '<option value="' + element.id + '">Jornada ' + element.id + '</option>';
        });


        btnCrearQuiniela.disabled = false;


    } else {

        quinielaSelect.innerHTML = "<option>No hay ninguna jornada creada.</option>"

        btnCrearQuiniela.disabled = true;
    }

    // if (quinielaSelect.childElementCount > 1) {

    // };

}


// EVENTOS

// Evento que al hacer clic en cualquier elemento de la tabla de apuestas,
// le añade la clase 'seleccionada' y la quita a los colindantes. (Solo se puede marcar un resultado por partido)
tablaApuestas.addEventListener('click', (e) => {

    e.preventDefault();

    if (e.target.classList.contains('apuesta1')) {

        let apuestax = e.target.nextSibling;
        let apuesta2 = apuestax.nextSibling;

        e.target.classList.toggle('seleccionada');
        apuestax.classList.remove('seleccionada');
        apuesta2.classList.remove('seleccionada');

    }
    if (e.target.classList.contains('apuestax')) {

        let apuesta1 = e.target.previousSibling;
        let apuesta2 = e.target.nextSibling;

        e.target.classList.toggle('seleccionada');
        apuesta1.classList.remove('seleccionada');
        apuesta2.classList.remove('seleccionada');

    }
    if (e.target.classList.contains('apuesta2')) {

        let apuestax = e.target.previousSibling;
        let apuesta1 = apuestax.previousSibling;

        e.target.classList.toggle('seleccionada');
        apuestax.classList.remove('seleccionada');
        apuesta1.classList.remove('seleccionada');

    }

    // Habilitamos el botón sólo cuando estén todas las apuestas seleccionadas
    const seleccionadas = document.querySelectorAll(".seleccionada");

    if (seleccionadas.length === 14) {

        btnVerificar.disabled = false;

    } else {

        btnVerificar.disabled = true;

    }

});


// Hace una selección random de todas las apuestas
btnSuerte.addEventListener('click', () => {


    // Limpieza de seleccionadas por si no es la primera vez
    const seleccionadas = document.querySelectorAll(".seleccionada");

    seleccionadas.forEach((e) => {

        e.classList.remove('seleccionada');

    })

    // Selecciona las apuesta de manera aleatoria, con con un retraso de 100ms entre selecciones, 
    // para que sea más atractivo 
    const apuestaPartido = document.querySelectorAll(".apuestaPartido");
    let array = numAleatorio(14);

    for (let i = 0; i < apuestaPartido.length; i++) {

        setTimeout(function () {

            apuestaPartido[array[i]].childNodes[Math.floor(Math.random() * 3)].classList.toggle('seleccionada');

        }, 100 * i);

    }

    btnSuerte.disabled = false;
    btnSuerte.innerHTML = "¿No te convence?";
    btnVerificar.hidden = false;
    btnVerificar.disabled = false;
});


// Ejecuta el proceso de verificación de la apuesta.
btnVerificar.addEventListener('click', clickVerifica);

// Borra todo el LocalStorage
btnBorrar.addEventListener('click', () => {

    localStorage.clear();
    quinielaSelector();
    btnCrearQuiniela.disabled = true;
    btnGenerarJornadasAPI.disabled = true;

})


// Abre las herramientas al cargar la página
window.onload = function () {
    btnHerramientas.click();
};