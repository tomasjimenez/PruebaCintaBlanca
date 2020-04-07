//Variables especiales

//Arreglo

let arreglo = [];

               //0        1                2           3    

let flores = ["Rosas", "Margaritas", "Tulipanes", "GiraSol",];

console.log(flores);

flores [4] = "Orquidea"

console.log(flores);

console.log(flores[2]);

// .push()

flores.push(5)
console.log(flores);

// .pop

flores.pop(true)

console.log(flores);

// .splice()

flores.splice(2,2)
console.log(flores);

//Objetos

let persona = {
    nombre : "Ricardo",
    edad: 21,
    tel : "0999999999999",
    direccion: "tumbaco",
    familia: true,
    musica: ["Salsa", "Cumbia", "Reggaeton", ],
    peliculas : {
        terror : false,
        romanticas : ["Titanic", "Romeo y Julieta"]
    }
}


console.log(persona.nombre);