var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());

let tempo = distancia*2;

console.log(tempo + " minutos");