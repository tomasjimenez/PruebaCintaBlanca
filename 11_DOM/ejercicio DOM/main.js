
let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");
let tipo = document.getElementById("tipo");
let direccion = document.getElementById("direccion");


let respuesta1 = document.getElementById("respuesta1");
let respuesta2 = document.getElementById("respuesta2");
let respuesta3 = document.getElementById("respuesta3");
let respuesta4 = document.getElementById("respuesta4");


let button = document.getElementById('boton');


const cambiar = () => {

    respuesta1.innerHTML = nombre.value;
    respuesta2.innerHTML = telefono.value;
    respuesta3.innerHTML = tipo.value;

    if(direccion.value === "sin" ){
        respuesta4.innerHTML = "sin piña";
    }

    if(direccion.value === "con" ){
        respuesta4.innerHTML = "con piña";
    }
};


button.addEventListener('click', cambiar);