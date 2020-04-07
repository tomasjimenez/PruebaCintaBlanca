// // alert('hola')

// // Valores en variables
// // Numerico
// var numero = 10;
// // String o Texto
// var nombre = 'Tomas';
// // Boolean
// var verdadero =true;
// // Arreglo o Array
// var arreglo = [];
// // Objeto o objet
// var objeto = {};

// // operadores + - * /


// var num1 = 150;
// var num2 = 200;
// var suma = num1 + num2



// console.log(suma)
// console.log(nombre)

// // Concatenar unir 2 textos

// var saludo = 'Hola desde la consola'

// console.log(saludo + nombre);

// // Entrada de datos
// var pregunta = 
// // Salida de datos
// console.log(pregunta);


// // Preguntar el nombre del usuario, el telefono y su correo, mostrarlo en diferentes consolas
 
// var pregunta1 = prompt('Cual es tu nombre')
// console.log(pregunta1);

// var pregunta2 = prompt('Cual es tu telefono')
// console.log(pregunta2);

// var pregunta3 = prompt('Cual es tu correo')
// console.log(pregunta3);

// var pregunta4 = prompt


let player1 = prompt('Elige piedra papael o tijera');
let player2 = prompt('ELige piedra papel o tijera');

if(player1 === player2){
    console.log('Empate');
}

else if(player1 === 'piedra' && player2 === 'tijera' || player1 === 'tijera' && player2 === 'papel' || player1 === 'papel' && player2 === 'piedra'){
    console.log('Gana jugador 1');
}

else if(player2 === 'piedra' && player1 === 'tijera' || player2 === 'tijera' && player1 === 'papel' || player2 === 'papel' && player1 === 'piedra'){
    console.log('Gana jugador 2');
}
console.error('Dato incorrecto');



