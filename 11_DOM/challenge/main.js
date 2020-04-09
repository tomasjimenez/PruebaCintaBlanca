let input1 = document.getElementById('nombre');
let input2 = document.getElementById('telefono');
let input3 = document.getElementById('pizza');
let input4 = document.getElementById('direccion');

let button = document.getElementById('boton');

let respuesta1 = document.getElementById('respuesta1');
let respuesta2 = document.getElementById('respuesta2');
let respuesta3 = document.getElementById('respuesta3');
let respuesta4 = document.getElementById('respuesta4');

let card = document.getElementById('card')

const cambiar = () => {
    

    card.classList.remove('customCard')

    respuesta1.innerHTML = input1.value
    respuesta2.innerHTML = input2.value
    respuesta3.innerHTML = input3.value
    respuesta4.innerHTML = input4.value

    if (input4.value = 'sin') {
        respuesta4.innerHTML = ':D';

    }else if(input4.value = 'con') {
        respuesta4.innerHTML = ':F';
    }else{
        respuesta4.innerHTML = 'Datos incorrectos';
    }

    

};




button.addEventListener('click', cambiar);