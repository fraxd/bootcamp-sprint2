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

a=false;

const formulario = document.getElementById('formulario');
const imputs = document.querySelectorAll('#formulario input');
formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const nom = document.querySelector('#nombre').value;
    const contra = document.querySelector('#contraseña').value;
    
    const name=document.querySelector("#subnombre");
    const pass=document.querySelector("#subcontra");
    name.innerText=""
    pass.innerText=""

    let a=false;
    if(nom===nombre && contraseña===contra){
        let a=true
        localStorage.setItem('molestia', JSON.stringify(a));
        window.location.href='../index.html';
    }else{
        if(nom!==nombre){
            name.innerText="Usuario incorrecto"
        }
        if(nom===""){
            name.innerText="Ingrese usuario"
        }
        if(nom!==nombre && contraseña===contra){
            name.innerText="Usuario incorrecto"
            pass.innerText="Ingrese Contraseña"
        }
        if(nom==="" && contraseña===contra){
            name.innerText="Ingrese usuario"
            pass.innerText="Ingrese Contraseña"
        }
        if(contraseña!==contra){
            pass.innerText="Contraseña incorrecta"
            
        }
        if(contra===""){
            
            pass.innerText="Ingrese Contraseña"
            
        }
    }
    formulario.reset();
});


