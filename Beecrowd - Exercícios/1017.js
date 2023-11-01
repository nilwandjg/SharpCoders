var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());

let distancia = parseFloat(velMedia * tempo);

let consumoGasolina = distancia/12.0;

console.log(consumoGasolina.toFixed(3));