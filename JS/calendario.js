window.usuarios = [];

document.getElementById('ingresoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores de los campos de formulario
    let nombrePaciente = document.getElementById('nombrePaciente').value;
    let diagnostico = document.getElementById('diagnostico').value;
    let fecha = document.getElementById('fecha').value;
    let tratamiento = document.getElementById('Hora').value;
    let otrosDatos = document.getElementById('otrosDatos').value;
    
     //objeto usuario
    let usuario = {};
    usuario.nombrePaciente = nombrePaciente ; 
    usuario.fecha= fecha;
    window.usuarios.push(usuario);
    window.llenarCalendario();
});

window.addEventListener('load', function () {
    window.crearCalendario();
    
})
window.crearCalendario = function() {
let cita = document.querySelector("#ol")
for (let i = 0; i < 31; i++) {
let dia = document.createElement("li")
let postit = document.createElement("p")
dia.setAttribute("id", "dia"+i)
cita.appendChild(dia)
dia.appendChild(postit)
postit.innerText= i;
 
}
}
window.llenarCalendario=function(){
    for (let i = 0; i < 31; i++) {
        for (let e=0;e<window.usuarios.length;e++){
            let entrada = window.usuarios[e];
            day= entrada.fecha.charAt(8) + entrada.fecha.charAt(9);
            month=entrada.fecha.charAt(5) + entrada.fecha.charAt(6);
            year= entrada.fecha.charAt(0) + entrada.fecha.charAt(1)+ entrada.fecha.charAt(2) + entrada.fecha.charAt(3);
            console.log(day+month+year);
            if(day==i){
                let card = document.querySelector("#dia"+i)
                card.innerText = entrada.nombrePaciente;
            }
        }
}
}