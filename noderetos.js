// • Hacer que se imprima un mensaje que indique “Mensaje 1” nada más ejecutar el programa.
// • Pasados tres segundos, se debe imprimir “Mensaje 2”.
// • Y después de que se imprima este mensaje, que se imprima “Mensaje 3”

// console.log('mensaje 1');

// setTimeout(function () {
//     console.log('mensaje 2');

//     setTimeout(function () {
//         console.log('mensaje 3');

//     });

// }, 3000)

// Crea un objeto con las siguientes propiedades: name, surname, age.
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.

const person = {
    name: 'Pepe',
    surname: 'Gallardo',
    age: 25
  };
  
const fs = require('fs');
// const jsonData = JSON.stringify(person);

// fs.writeFile("person.json", jsonData, 'utf8', () => {
//     fs.readFile('person.json', 'utf8', (err, data) => {

//         const person = JSON.parse(data);
//         console.log(person);
//     });

// });

// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript
 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let person3 = {name:'', surname:'', age: 0};

rl.question('Cual es tu nombre?: ', (name) => {
    person3.name = name;

rl.question('Cual es tu apellido?: ', (surname) => {
    person3.surname = surname;

rl.question('Cual es tu edad?: ', (age) => {
    person3.age = parseInt(age);

const jsonData = JSON.stringify(person);

fs.writeFile('person.json', jsonData, 'utf8', (err) => {
fs.readFile('person.json', 'utf8', (err, data) => {
    
console.log(person3);
rl.close();
     });
   }); 
  });
 });
});

module.exports = { readline };
