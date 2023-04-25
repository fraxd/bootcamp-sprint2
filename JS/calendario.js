window.usuarios = [];

document.getElementById('ingresoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores de los campos de formulario
    var nombrePaciente = document.getElementById('nombrePaciente').value;
    var diagnostico = document.getElementById('diagnostico').value;
    var fecha = document.getElementById('fecha').value;
    var tratamiento = document.getElementById('Hora').value;
    var otrosDatos = document.getElementById('otrosDatos').value;

    // Crear una nueva fila en la tabla con los datos ingresados
    var fila = document.createElement('tr');
    fila.innerHTML = '<td>' + nombrePaciente + '</td><td>' + diagnostico + '</td><td>' + fecha + '</td><td>' + tratamiento + '</td><td>' + otrosDatos + '</td>';

    // Agregar la fila a la tabla
    document.getElementById('tablaDatos').getElementsByTagName('tbody')[0].appendChild(fila);

    // Limpiar los campos del formulario
    document.getElementById('nombrePaciente').value = '';
    document.getElementById('diagnostico').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('tratamiento').value = '';
    document.getElementById('otrosDatos').value = '';

     //objeto usuario
    let usuario = {};
    usuario.nombrePaciente = nombrePaciente ; 
    window.usuarios.push(usuario);
    window.crearcita();
});



window.addEventListener('load', function() { window.crearcita();})
window.crearcita = function() {
let cita = document.querySelector("#ol")
for (let i = 0; i < 31; i++) {
let entrada = window.usuarios[i];
let dia = document.createElement("li")
let postit = document.createElement("p")
dia.setAttribute("id", "dia"+i)
cita.appendChild(dia)
dia.appendChild(postit)
postit.innerText = entrada.nombrePaciente

}
}