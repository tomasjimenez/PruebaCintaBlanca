// // Tipos de datos
// "Hola Mundo" // string

// 10000 // number


// // boolean
// true
// False


// //array

// ['joe', 'ryan', 'marta']
// [1, 2, 3]
// [true, false, true, false]


// //object

// 'ryan'
// 70.4
// 14
// true

// console.log({"username":'tomas', score:20.4, professional:true});

//  var nombre = "tomas";
//  let edad = "24";
//  var peso = "80kg";
//  const PI = 3.1415;
 
//  console.log(nombre, edad, peso, PI);

// let numberOne = 80;
// let numberTwo = 100;

// let result = numberOne + numberTwo;

// console.log(result);

// let clave = "tom123";
// let input = "tom1234";

// let result = clave == input;

// if(result === true){
//     console.log("login correcto");
// }else{
//     console.log("Contraseña incorrecta");
// }

// for (let i =1; i <= 100; i++){

//     if(i % 5 === 0 && i % 3 ===0){
//         console.log(i + 'Fizz');
//     } else if (i % 5 === 0){
//         console.log(i + 'Buzz');
//     }else if (i % 3 === 0){
//         console.log(i + "FizzBuzz");
//     }else{
//         console.log(i + 'otro numero');
//     }

// }


// for (let i =1; i <= 10; i++){
//     console.log(i + "*" + 3 + "=" + i * 3);
// }

// for (let i = 1; i <= 30; i= i + 3){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i + "*" + "8" + "=" + i * 8);
// }

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i + " " + "Es par");
//     }else if (i % 3 === 0){
//         console.log(i + " " + "Es impar");
//     }else{
//         console.log("otro numero");
//     }

// }

// for(let i = 1; i <= 100; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     } else if (i % 5 === 0){
//         console.log("Buzz");
//     }else if (i % 3 === 0){
//         console.log("Fizz");
//     }else{
//         console.log(i);
//     }
// }



 let jugador1 = prompt("Elige jugador 1");
 let jugador2 = prompt("Elige jugador 2");

 if(jugador1 === jugador2 ){
     console.log('Empate');
 }

 else if(jugador1 === "piedra" && jugador2 === "tijera" || jugador1 === "papel" && jugador2 === "piedra" || jugador1 === "tijera" && jugador2 === "papel"){
     console.log("Gana jugador1");
 }

 else if(jugador2 === "piedra" && jugador1 === "tijera" || jugador2 === "papel" && jugador1 === "piedra" || jugador2 === "tijera" && jugador1 === "papel"){
    console.log("Gana jugador2");
}else{
    console.log("Respuesta incorrecta");
} 