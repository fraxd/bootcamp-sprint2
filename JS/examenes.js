$(document).ready(function () {
    $('#example').DataTable();
});



// Funciones que genera valores aleatorios para los examenes
function generarDatosAleatorios(tope) {
    var datos = [];
    for (var i = 0; i < tope; i++) {
        datos.push(Math.floor(Math.random() * 100));
    }
    return datos;
}

// Configuracion Estandar para graficos
var config = {
    type: 'line',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
        datasets: [{
            label: 'Resultados',
            data: generarDatosAleatorios(7),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

var canvas = document.getElementById('examnsChart');
var chart = new Chart(canvas, config);


// Factor de coagulacion
var config_coagulacion = {
    type: 'line',
    data: {
        labels: ['Factor I', 'Factor VII', 'Factor VIII', 'FACTOR IX', 'FACTOR XI', 'Factor XII', 'FACTOR II', 'Factor V', 'Factor x'],
        datasets: [{
            label: 'Resultados',
            data: generarDatosAleatorios(9),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

var canvas_coagulacion = document.getElementById('chart_coagulacion');
var chart_coagulacion = new Chart(canvas_coagulacion, config_coagulacion);

//