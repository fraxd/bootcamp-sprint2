window.usuarios = [];

document.getElementById('ingresoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores de los campos de formulario
    let nombrePaciente = document.getElementById('nombrePaciente').value;
    let diagnostico = document.getElementById('diagnostico').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let medico = document.getElementById('medico').value;
    
     //objeto usuario
    let usuario = {};
    usuario.nombrePaciente = nombrePaciente ; 
    usuario.fecha= fecha;
    usuario.diagnostico = diagnostico;
    usuario.medico = medico;
    usuario.hora = hora;
    window.usuarios.push(usuario);
    window.llenarCalendario();

    $('#modalRegistro').modal('hide');
});

window.addEventListener('load', function () {
    window.crearCalendario();
    
})
window.crearCalendario = function() {
let cita = document.querySelector("#ol")
for (let i = -4; i < 31; i++) {
let dia = document.createElement("li")
let postit = document.createElement("p")
dia.setAttribute("id", "dia"+i)
cita.appendChild(dia)
dia.appendChild(postit)
if(i>0){
postit.innerText= i;
}

}
}
window.llenarCalendario=function(){
    for (let i = 1; i < 31; i++) {
        let card = document.querySelector("#dia"+i)
            card.innerHTML="<p>"+i+"</p>"
        for (let e = 0; e < window.usuarios.length ; e++){
            let entrada = window.usuarios[e];
            day= entrada.fecha.charAt(8) + entrada.fecha.charAt(9);
            month=entrada.fecha.charAt(5) + entrada.fecha.charAt(6);
            year= entrada.fecha.charAt(0) + entrada.fecha.charAt(1)+ entrada.fecha.charAt(2) + entrada.fecha.charAt(3);
            if(day==i && month==04 && year==2023){
                let d= document.createElement("div");
                card.appendChild(d);
                d.innerText= entrada.nombrePaciente  + '-' + entrada.diagnostico + '-' + entrada.hora + '-' + entrada.medico;
            }
        }
}
}

// boton para agregar el registro
document.getElementById('ingresoForm').addEventListener("click", agregarRegistro);