
const fs = require('fs');
const readline = require('readline');

const person = {
    name: '',
    surname: '',
    age: 0
};

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
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


function readConsole(callback) {
    pregunta('Cual es tu nombre?: ').then((name) => {
        return pregunta('Cual es tu apellido?: ').then((surname) => {
            return pregunta('Cual es tu edad?: ').then((age) => {
                let person3 = { name: name, surname: surname, age: parseInt(age) 
               }; return callback(person3)


            });
        });
    })
        .catch((error) => {
            console.log(error)
        })
}


async function asyncAwait2 (callback){

    try{
    let pregunta1 = await pregunta('Cual es tu nombre?: ')
    let pregunta2 = await pregunta('Cual es tu apellido?: ')
    let pregunta3 = await pregunta('Cual es tu edad?: ')
    person.name = pregunta1
    person.surname = pregunta2
    person.age = pregunta3
    console.log(person);
    return callback(person)
  
  
  } catch(error) {
    console.log(error);
  }
  }
  
module.exports = { readConsole, asyncAwait2 }