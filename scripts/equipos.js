// Elementos
// Tablas de los equipos
const thEquipos = document.getElementById('thEquipos');
const tbEquipos = document.getElementById('tbEquipos');
const tablaEquipos = document.getElementById('tablaEquipos');

// Tabla resultado de buscar todas las jornadas de un equipo
const thBuscaEquipos = document.getElementById('thBuscaEquipos');
const tbBuscaEquipos = document.getElementById('tbBuscaEquipos');
const logoBuscaEquipo = document.getElementById('logoBuscaEquipo');

// Muestra una lista de los equipos
// Extrae los equipos del localStorage en un array y lo recorrer mientras contruye la table
function mostrarEquipos(categoria) {

    let localStorageJornadas = JSON.parse(localStorage.getItem(categoria));


    if (localStorageJornadas == null) {

        thEquipos.innerHTML = "No hay ninguna jornada creada";

    } else {

        let j = 0;

        // Construimos cabecera de la tabla de los equipos
        thEquipos.innerHTML =
            '<tr>' +
            '<th>Liga 2022</th>' +
            '</tr>'

        // recorremos el array y construye los registros (un tr cada dos equipos) 
        for (let i = 0; i < localStorageJornadas[0].jornada.length; i++) {

            let equipoLocal = localStorageJornadas[0].jornada[i].local;
            let equipoVisitante = localStorageJornadas[0].jornada[i].visitante;


            tbEquipos.innerHTML +=
                '<tr>' +
                '<td id="partido' + j + '" onclick=' + 'buscarEquipos' + categoria + '("' + encodeURIComponent(equipoLocal) + '")' + '><img src="' + localStorageJornadas[0].jornada[i].logo_local + '" alt="Logo" class="escudosquiniela" />  ' + equipoLocal + '</td>' +
                '<td id="partido' + (j + 1) + '" onclick=' + 'buscarEquipos' + categoria + '("' + encodeURIComponent(equipoVisitante) + '")' + '><img src="' + localStorageJornadas[0].jornada[i].logo_visitante + '" alt="Logo" class="escudosquiniela" />  ' + equipoVisitante + '</td>' +
                '</tr>';

            j = j + 2;

        }

    }

}

function buscarEquiposjornadasMasc(equipo) {

    equipo = decodeURIComponent(equipo);

    let localStorageJornadas = JSON.parse(localStorage.getItem('jornadasMasc'));

    // console.log(localStorageJornadas);

    tbBuscaEquipos.innerHTML = '';
    thBuscaEquipos.innerHTML = '';

    thBuscaEquipos.innerHTML +=
        '<tr>' +
        '<td colspan="3"><h5>Todas las jornadas del ' + equipo + '</h5></td>' +
        '</tr>' +
        '<tr>' +
        '<td># Jornada</td>' +
        '<td>Local</td>' +
        '<td>Visitante</td>' +
        '</tr>';

    for (let i = 0; i < localStorageJornadas[0].jornada.length; i++) {

        if (localStorageJornadas[0].jornada[i].local == equipo) {

            logoBuscaEquipo.innerHTML = '<img src="' + localStorageJornadas[0].jornada[i].logo_local + '" alt="Logo" />';



        } else if (localStorageJornadas[0].jornada[i].visitante == equipo) {


            logoBuscaEquipo.innerHTML = '<img src="' + localStorageJornadas[0].jornada[i].logo_visitante + '" alt="Logo" />';

        }
    }

    for (let i = 0; i < localStorageJornadas.length; i++) {

        for (let j = 0; j < localStorageJornadas[0].jornada.length; j++) {

            if ((localStorageJornadas[i].jornada[j].local == equipo) || (localStorageJornadas[i].jornada[j].visitante == equipo)) {

                // console.log(localStorageJornadas[i].jornada[j].visitante);

                let equipoLocal = localStorageJornadas[i].jornada[j].local;
                let equipoLocalLogo = localStorageJornadas[i].jornada[j].logo_local;
                let equipoVisitante = localStorageJornadas[i].jornada[j].visitante;
                let equipoVisitanteLogo = localStorageJornadas[i].jornada[j].logo_visitante;

                tbBuscaEquipos.innerHTML +=
                    '<tr>' +
                    '<td>' + localStorageJornadas[i].id + '</td>' +
                    '<td><img src="' + equipoLocalLogo + '" alt="Logo" class="escudosquiniela" />  ' + equipoLocal + '</td>' +
                    '<td><img src="' + equipoVisitanteLogo + '" alt="Logo" class="escudosquiniela" />  ' + equipoVisitante + '</td>' +
                    '</tr>';
            }
        }
    }

    // Desplaza hasta el logo para mostrar resultado.
    location.hash='#';
    location.hash='#posicionTablaEquipo';

}

function buscarEquiposjornadasFem(equipo) {

    equipo = decodeURIComponent(equipo);

    let localStorageJornadas = JSON.parse(localStorage.getItem('jornadasFem'));

    // console.log(localStorageJornadas);

    tbBuscaEquipos.innerHTML = '';
    thBuscaEquipos.innerHTML = '';

    thBuscaEquipos.innerHTML +=
        '<tr>' +
        '<td colspan="3"><h5>Todas las jornadas del ' + equipo + '</h5></td>' +
        '</tr>' +
        '<tr>' +
        '<td># Jornada</td>' +
        '<td>Local</td>' +
        '<td>Visitante</td>' +
        '</tr>';

    for (let i = 0; i < localStorageJornadas[0].jornada.length; i++) {

        // console.log(localStorageJornadas[0].jornada[i].local);
        if (localStorageJornadas[0].jornada[i].local == equipo) {

            logoBuscaEquipo.innerHTML = '<img src="' + localStorageJornadas[0].jornada[i].logo_local + '" alt="Logo" />';



        } else if (localStorageJornadas[0].jornada[i].visitante == equipo) {


            logoBuscaEquipo.innerHTML = '<img src="' + localStorageJornadas[0].jornada[i].logo_visitante + '" alt="Logo" />';

        }
    }

    for (let i = 0; i < localStorageJornadas.length; i++) {

        for (let j = 0; j < localStorageJornadas[0].jornada.length; j++) {

            if ((localStorageJornadas[i].jornada[j].local == equipo) || (localStorageJornadas[i].jornada[j].visitante == equipo)) {

                // console.log(localStorageJornadas[i].jornada[j].visitante);

                let equipoLocal = localStorageJornadas[i].jornada[j].local;
                let equipoLocalLogo = localStorageJornadas[i].jornada[j].logo_local;
                let equipoVisitante = localStorageJornadas[i].jornada[j].visitante;
                let equipoVisitanteLogo = localStorageJornadas[i].jornada[j].logo_visitante;

                tbBuscaEquipos.innerHTML +=
                    '<tr>' +
                    '<td>' + localStorageJornadas[i].id + '</td>' +
                    '<td><img src="' + equipoLocalLogo + '" alt="Logo" class="escudosquiniela" />  ' + equipoLocal + '</td>' +
                    '<td><img src="' + equipoVisitanteLogo + '" alt="Logo" class="escudosquiniela" />  ' + equipoVisitante + '</td>' +
                    '</tr>';
            }
        }
    }

    location.hash='#';
    location.hash='#posicionTablaEquipo';
}