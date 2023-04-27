// Variable para almacenar los registros de enfermedades
var registrosEnfermedades = [];

// función para agregar el regsistro
function agregarRegistro() {
    // obtener los valores del formulario
    var nombrePaciente = document.getElementById("nombrePacienteInput").value;
    var diagnostico = document.getElementById("diagnosticoInput").value;
    var fecha = document.getElementById("fechaInput").value;
    var inicioTratamiento = document.getElementById("inicioTratamientoInput").value;
    var otrosDatos = document.getElementById("otrosDatosInput").value;

    // objeto para el registro de las enfermedades
    var registro = {
        nombrePaciente: nombrePaciente,
        diagnostico: diagnostico,
        fecha: fecha,
        inicioTratamiento: inicioTratamiento,
        otrosDatos: otrosDatos
    };

    // agrega el registro los datos
    registrosEnfermedades.push(registro);

    // actualizar la tabla de registros
    actualizarTabla();

    // limpiar el formulario
    document.getElementById("registroForm").reset();

    // cerrar el modal
    $('#modalRegistro').modal('hide');
}

// actualizar la tabla de registros
function actualizarTabla() {
    var tableBody = document.getElementById("registrosTableBody");
    tableBody.innerHTML = "";

    for (var i = 0; i < registrosEnfermedades.length; i++) {
        var registro = registrosEnfermedades[i];

        var row = document.createElement("tr");
        row.innerHTML = "<td>" + registro.nombrePaciente + "</td><td>" + registro.diagnostico + "</td><td>" + registro.fecha + "</td><td>" + registro.inicioTratamiento + "</td><td>" + registro.otrosDatos + "</td>";
        tableBody.appendChild(row);
    }
}

// boton para agregar el registro
document.getElementById("agregarRegistroBtn").addEventListener("click", agregarRegistro);