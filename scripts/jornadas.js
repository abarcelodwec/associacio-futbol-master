// Función que rellena los select de cada categoría para poder seleccionar una jornada y posteriormente mostrar los partidos.
function jornadasSelector(categoria) {

    let localStorageJornadas;

    localStorageJornadas = JSON.parse(localStorage.getItem(categoria));

    if (localStorageJornadas != null) {


        jornadasSelect.innerHTML = '';
        jornadasSelect.innerHTML += '<option selected>Selecciona una Jornada</option>';


        localStorageJornadas.forEach(element => {
            jornadasSelect.innerHTML += '<option value="' + element.id + '">Jornada ' + element.id + '</option>';
        });

    }

}


// Función que monta una tabla donde inserta partidos recogidos del LocalStorage según la jornada seleccionada
function mostrarJornada(jornadaId, categoria) {

    let localStorageJornadas;
    localStorageJornadas = JSON.parse(localStorage.getItem(categoria));
    totalPartidos = ((localStorageJornadas.length + 2) / 4);


    // Construimos cabecera de la tabla de Jornada
    thJornades.innerHTML = '<tr>' +
        '<th style="width: 42%" class="text-center">Local</th>' +
        '<th style="width: 5%"></th>' +
        '<th style="width: 5%"></th>' +
        '<th style="width: 5%"></th>' +
        '<th style="width: 42%" class="text-center">Visitante</th>' +
        '</tr>';


    // Construimos body de la tabla de Jornada

    // bucle que recorre todo el json recuperado del LocalStorage

    tbJornades.innerHTML = '';

    for (let i = 0; i < totalPartidos; i++) {

        tbJornades.innerHTML +=
            '<tr>' +
            '<td class="text-center"> ' + localStorageJornadas[jornadaId - 1].jornada[i].local + '</td>' +
            '<td> <img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_local + '" class="escudosjornada"  alt="Logo_local"></td>' +
            '<td><b> VS </b></td>' +
            '<td> <img src="' + localStorageJornadas[jornadaId - 1].jornada[i].logo_visitante + '" class="escudosjornada"  alt="Logo_visitante"></td>' +
            '<td class="text-center"> ' + localStorageJornadas[jornadaId - 1].jornada[i].visitante + '</td>' +
            '</tr>';
    }
};

