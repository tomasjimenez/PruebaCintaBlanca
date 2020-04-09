
let button = document.getElementById('boton');
let respuesta = document.getElementById('respuesta');
let input = document.getElementById('pregunta');



const cambiar  = () => {

    respuesta.innerHTML = input.value
};

button.addEventListener('click', cambiar);

//

