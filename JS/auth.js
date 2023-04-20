// Array de Usuarios
let usuario = [
    {
        nombre: "Dr. House",
        email: "drhouse@pencalabs.cl",
        rut: "11111111-1",
        password: "abc123",
        rol: "profesional"
    },
    {
        nombre: "Juan Enfermin",
        email: "juan@pencalabs.cl",
        rut: "22222222-2",
        password: "abc123",
        rol: "paciente"
    }
]



// Login Usuarios Profesionales ------------------------
function login_profesional(e) {
    e.preventDefault();
    // Obtenemos los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Enviamos los datos del formulario a un servidor o API
    var flagLogin = false;
    usuario.forEach(user => {
        if (user.email == email) {
            if (user.password == password) {
                console.log('oki doki')
                flagLogin = true
                localStorage.setItem('user', JSON.stringify(user.email));
                localStorage.setItem('rol', JSON.stringify(user.rol));
                localStorage.setItem('nombre', JSON.stringify(user.nombre));
                window.location.href = '../pages/dashboard.html';
            }
            else alert('Algo fallo, que cosa? no sabemos')
        }

    })
    if (!flagLogin) alert('Correo / contraseña no correctos.')

    // Reiniciamos el formulario
    document.getElementById("form-login-profesional").reset();
    // Evitamos que el formulario se envíe de forma tradicional
    return false;
}

// Register Usuarios Profesionales
function register_profesional(e) {
    console.log('ADENTRO EJALE ')
    e.preventDefault();
    // Obtenemos los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var rut = document.getElementById("rut").value;
    var password = document.getElementById("password").value;

    // Enviamos los datos del formulario a un servidor o API
    var flagLogin = false;
    usuario.forEach(user => {
        if (user.email == email) {
            alert('Este correo ya esta registrado.');
            return false;
        }
    })
    usuario.push({
        nombre: name,
        email: email,
        rut: rut,
        password: password,
        rol: "profesional"
    });
    localStorage.setItem('user', JSON.stringify(user.email));
    localStorage.setItem('rol', JSON.stringify('profesional'));
    localStorage.setItem('nombre', JSON.stringify(user.nombre));
    window.location.href = '../pages/dashboard.html';

    console.log(usuario)
    // Reiniciamos el formulario
    document.getElementById("form-register-profesional").reset();
    // Evitamos que el formulario se envíe de forma tradicional
    return false;
}


// Login Usuarios publico general ------------------------
function login_publico(e) {
    e.preventDefault();
    // Obtenemos los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Enviamos los datos del formulario a un servidor o API
    var flagLogin = false;
    usuario.forEach(user => {
        if (user.email == email) {
            if (user.password == password) {
                console.log('oki doki')
                flagLogin = true
                localStorage.setItem('user', JSON.stringify(user.email));
                localStorage.setItem('rol', JSON.stringify(user.rol));
                localStorage.setItem('nombre', JSON.stringify(user.nombre));
                window.location.href = '../pages/publico/pacientes.html';
                // Perfil para editar paciente (? -- Hay que ver bien eso
            }
            else alert('Algo fallo, que cosa? no sabemos')
        }

    })
    if (!flagLogin) alert('Correo / contraseña no correctos.')

    // Reiniciamos el formulario
    document.getElementById("form-login-profesional").reset();
    // Evitamos que el formulario se envíe de forma tradicional
    return false;
}

// Register Usuarios Profesionales
function register_public(e) {
    e.preventDefault();
    // Obtenemos los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var rut = document.getElementById("rut").value;
    var password = document.getElementById("password").value;

    // Enviamos los datos del formulario a un servidor o API
    var flagLogin = false;
    usuario.forEach(user => {
        if (user.email == email) {
            alert('Este correo ya esta registrado.');
            return false;
        }
    })
    usuario.push({
        nombre: name,
        email: email,
        rut: rut,
        password: password,
        rol: "publico"
    });
    localStorage.setItem('user', JSON.stringify(email));
    localStorage.setItem('rol', JSON.stringify('publico'));
    localStorage.setItem('nombre', JSON.stringify(name));
    window.location.href = '../pages/publico/pacientes.html';

    console.log(usuario)
    // Reiniciamos el formulario
    document.getElementById("form-register-publico").reset();
    // Evitamos que el formulario se envíe de forma tradicional
    return false;
}