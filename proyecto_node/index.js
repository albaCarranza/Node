// const fs = require('fs');
// const readline = require('readline');

let rc = require('./readConsole');
let wa = require('./writeAndReadObject')

// rc.readConsole((person3) => {
// wa.writeAndRead('miIndex.json', person3);
// });

// rc.asyncAwait2(function callback(person){
// wa.asyncAwait('newPerson.JSON', person)
// })

rc.readConsole(function callback(person){
  wa.writeandReadThen('newPerson2.JSON', person)
})