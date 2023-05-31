
// Crea un objeto con las siguientes propiedades: name, surname, age.
// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.
// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.

const person = {
    name: '',
    surname: '',
    age: 0
  };
  
const fs = require('fs/promises');

//****PROMISES****//

// fs.writeFile("person.json", JSON.stringify(person))
// .then(()=>
// {
//   return fs.readFile("person.json", "utf-8")
// })
// .then((data) =>
// {
//   console.log(JSON.parse(data))
// })
// .catch((error) =>
// {
//   console.log(error)
// })

//***ASYNC/AWAIT***//

// async function asyncAwait (){

//   await fs.writeFile('new.json', JSON.stringify(person))
//   const nuevo = await fs.readFile('new.json', 'utf8')
//   console.log(JSON.parse(nuevo));
// }

// asyncAwait()

// • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
// módulo readline de node y solicita los valores del name, surname y age a través de la consola.
// • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
// readline.
// • Este ejercicio debe hacerse en una única ejecución de JavaScript
 
const readline = require('readline');

function pregunta(pregunta) {
  const question = new Promise((resolve,reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close()
    })
  });
  return question;
}


function pregunta2() {
pregunta('Cual es tu nombre?: ') .then((name) => {
return pregunta('Cual es tu apellido?: ') .then((surname) => {
return pregunta('Cual es tu edad?: ') .then((age) => {
  let person3 = {name: name, surname: surname, age: parseInt(age)};


const jsonData = JSON.stringify(person3);

 return fs.writeFile('person.json', jsonData)
});
});
})

.then(() =>
{
  return fs.readFile('person.json', 'utf8')
})
.then((data) =>
{
  console.log(JSON.parse(data))
})
.catch((error) =>
{
  console.log(error)
})
}
// pregunta2();


module.exports = { readline };

//***ASYNC/AWAIT***//

async function asyncAwait (){

  try{
  const pregunta1 = await pregunta('Cual es tu nombre?: ')
  const pregunta2 = await pregunta('Cual es tu apellido?: ')
  const pregunta3 = await pregunta('Cual es tu edad?: ')
  person.name = pregunta1
  person.surname = pregunta2
  person.age = pregunta3
  console.log(person);

  await fs.writeFile('new.json', JSON.stringify(person))
  const nuevo = await fs.readFile('new.json', 'utf8')
  JSON.parse(nuevo);
} catch(error) {
  console.log(error);
}
}

asyncAwait()

module.exports = {asyncAwait, pregunta2, pregunta}
