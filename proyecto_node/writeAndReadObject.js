const fs = require('fs');

function writeAndRead(a,b){
const jsonData = JSON.stringify(b);

fs.writeFile(a, jsonData, 'utf8', () => {
    fs.readFile('a', 'utf8', (err, data) => {

        const person = JSON.parse(data);
        console.log(person);
    });

});
}
// writeAndRead('./miFichero.json', {calle: 'Teruel', numero: 8});

module.exports = {writeAndRead}