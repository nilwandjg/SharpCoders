var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let data = lines.shift().split("/");

let dia = data[0];
let mes = data[1];
let ano = data[2];

//MM/DD/AA
console.log(`${mes}/${dia}/${ano}`);

//AA/MM/DD
console.log(`${ano}/${mes}/${dia}`);

//DD-MM-AA
console.log(`${dia}-${mes}-${ano}`);