// Arreglo para almacenar los usuarios creados
let users = [];

// Función para crear un nuevo usuario
function createUser() {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const email = document.getElementById('email').value;

    // Validación de campos vacíos
    if (!name || !role || !email) {
        alert('Por favor complete todos los campos');
        return;
    }

    // Creación de objeto de usuario
    const user = {
        name: name,
        role: role,
        email: email
    };

    // Agregar usuario al arreglo y actualizar la tabla
    users.push(user);
    updateTable();

    // Limpiar campos del formulario
    document.getElementById('name').value = '';
    document.getElementById('role').value = 'familiar';
    document.getElementById('email').value = '';
}

// Función para actualizar la tabla de usuarios
function updateTable() {
    const tableBody = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const row = tableBody.insertRow();

        const nameCell = row.insertCell();
        nameCell.textContent = user.name;

        const roleCell = row.insertCell();
        roleCell.textContent = user.role;

        const emailCell = row.insertCell();
        emailCell.textContent = user.email;

        const actionsCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.addEventListener('click', function() {
            deleteUser(i);
        });
        actionsCell.appendChild(deleteButton);
    }
}

// Función para eliminar un usuario
function deleteUser(index) {
    users.splice(index, 1);
    updateTable();
}

// Asignar evento submit al formulario
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createUser();
});
