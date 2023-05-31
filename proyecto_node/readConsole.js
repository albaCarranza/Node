
const fs = require('fs');
const readline = require('readline');

function readConsole(callback) {
    const rl = readline.createInterface(
        process.stdin,
        process.stdout
    );

    let person3 = { name: '', surname: '', age: 0 };

    rl.question('Cual es tu nombre?: ', (name) => {
        person3.name = name;

        rl.question('Cual es tu apellido?: ', (surname) => {
            person3.surname = surname;

            rl.question('Cual es tu edad?: ', (age) => {
                person3.age = parseInt(age);

                rl.close();
                callback(person3)
            });
        });
    });
}

module.exports = {readConsole}