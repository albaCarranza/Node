const fs = require('fs/promises');

function writeAndRead(a,b){
const jsonData = JSON.stringify(b);

fs.writeFile(a, jsonData, 'utf8', () => {
    fs.readFile('a', 'utf8', (err, data) => {

        const person = JSON.parse(data);
        console.log(person);
    });

});
}
function writeandReadThen(x,y){
fs.writeFile(x, JSON.stringify(y))
.then(()=>
{
  return fs.readFile(x, "utf-8")
})
.then((data) =>
{
JSON.parse(data)
})
.catch((error) =>
{
  console.log(error)
})
}
writeAndRead('./miFichero.json', {calle: 'Teruel', numero: 8});


async function asyncAwait (x,y){
try{
  await fs.writeFile(x, JSON.stringify(y))
  const nuevo = await fs.readFile(x, 'utf-8')
JSON.parse(nuevo);
} catch(error){
    console.log(error);
}
}

module.exports = { asyncAwait, writeandReadThen}