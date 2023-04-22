// Creación de usuario
document.getElementById("crearUsuarioForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var rol = document.getElementById("rol").value;
    var contrasena = document.getElementById("contrasena").value;
    var confirmarContrasena = document.getElementById("confirmarContrasena").value;

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden. Por favor, intenta de nuevo.");
        return;
    }

    // Crear un objeto de usuario con los valores del formulario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        rol: rol,
        contrasena: contrasena
    };

    // Agregar el usuario a la lista de usuarios
    var userTableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    var row = userTableBody.insertRow();
    var nombreCell = row.insertCell();
    var rolCell = row.insertCell();
    var correoCell = row.insertCell();
    var accionesCell = row.insertCell();
    nombreCell.textContent = usuario.nombre + " " + usuario.apellido;
    rolCell.textContent = usuario.rol;
    correoCell.textContent = usuario.correo;
    accionesCell.innerHTML = "<button class='btn btn-danger' onclick='eliminarUsuario(this)'>Eliminar</button>";

    // Cerrar el modal
    $('#crearUsuarioModal').modal('hide');

    // Limpiar el formulario
    document.getElementById('crearUsuarioForm').reset();
});

// Función para eliminar un usuario de la lista
function eliminarUsuario(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
