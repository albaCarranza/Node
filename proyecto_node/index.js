// const fs = require('fs');
// const readline = require('readline');

let rc = require('./readConsole');
let wa = require('./writeAndReadObject')

rc.readConsole((person3) => {
  wa.writeAndRead('miIndex.json', person3);
});
