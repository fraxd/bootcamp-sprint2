$(document).ready(function () {
    $('#tabla_examen').DataTable();
    $('#table_Hemograma').DataTable({
        searching: false
    });
    $('#table_Perfil_Bioquimico').DataTable({
        searching: false
    });
});



// Funciones que genera valores aleatorios para los examenes
function generarDatosAleatorios(tope) {
    var datos = [];
    for (var i = 0; i < tope; i++) {
        datos.push(Math.floor(Math.random() * 100));
    }
    return datos;
}


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



// Perfil Lipidico
var config_Lipidico = {
    type: 'bar',
    data: {
        labels: ['Colesterol HDL', 'Colesterol LDL', 'Triglicéridos', 'Colesterol TOTAL'],
        datasets: [{
            label: 'Resultados',
            data: generarDatosAleatorios(4),
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
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

var canvas_Lipidico = document.getElementById('chart_Lipidico');
var chart_Lipidico = new Chart(canvas_Lipidico, config_Lipidico);

// Examen de orina
var config_orina = {
    type: 'bar',
    data: {
        labels: ['Color', 'Aspecto', 'PH', 'Leucoesterasa', 'Sangre', 'Leucocitos', 'Hematies', 'Germenes', 'Calcio', 'Acido Urico'],
        datasets: [{
            label: 'Resultados',
            data: generarDatosAleatorios(10),
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1
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

var canvas_Orina = document.getElementById('chart_Orina');
var chart_Orina = new Chart(canvas_Orina, config_orina);






// Generador de datos Tabla Hemograma    -----------------
var glr_value = Math.floor(Math.random() * 100) / 10 + 4.5;
var hb_value = Math.floor(Math.random() * 5) + 13;
var hto_value = Math.floor(Math.random() * 13) + 38;
var glb_value = Math.floor(Math.random() * 7000) + 4500;
var plt_value = Math.floor(Math.random() * 300000) + 150000;

// Mostrar los valores generados en la tabla
$('#glr').text(glr_value.toFixed(1) + ' millones/mm³');
$('#hb').text(hb_value + ' g/dL');
$('#hto').text(hto_value + '%');
$('#glb').text(glb_value + '/mm³');
$('#plt').text(plt_value + '/mm³');




// Generador de datos tabla Perfil Bioquimico -------------------
var gluc_value = Math.floor(Math.random() * 40) + 70;
var coltot_value = Math.floor(Math.random() * 100) + 100;
var colldl_value = Math.floor(Math.random() * 50) + 70;
var colhdl_value = Math.floor(Math.random() * 20) + 30;
var trig_value = Math.floor(Math.random() * 100) + 50;
var au_value = Math.floor(Math.random() * 50) / 10 + 2.4;
var pcr_value = Math.floor(Math.random() * 3) / 10;


// Mostrar la data
$('#gluc').text(gluc_value + ' mg/dL');
$('#coltot').text(coltot_value + ' mg/dL');
$('#colldl').text(colldl_value + ' mg/dL');
$('#colhdl').text(colhdl_value + ' mg/dL');
$('#trig').text(trig_value + ' mg/dL');
$('#au').text(au_value + ' mg/dL');
$('#pcr').text(pcr_value + ' mg/L');

// Funcion de agregar datos a la tabla

function addExamen(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    var nombrePaciente = $('#nombrePaciente').val();
    var nombreDoctor = $('#nombreDoctor').val();
    var examen = $('#examen').val();
    var fecha = $('#fecha').val();

    // Crear una nueva fila en la tabla con los valores del formulario
    var fila = '<tr>' +
        '<td>' + nombrePaciente + '</td>' +
        '<td>' + nombreDoctor + '</td>' +
        '<td>' + examen + '</td>' +
        '<td>' + fecha + '</td>' +
        '<td> En proceso... </td>' +
        '<td> En proceso... </td>' +
        '</tr>';
    $('#tabla_examen').append(fila);

    // Limpiar los campos del formulario
    $('#nombrePaciente').val('');
    $('#nombreDoctor').val('');
    $('#examen').val('');
    $('#fecha').val('');
    $('#archivo').val('');
}
