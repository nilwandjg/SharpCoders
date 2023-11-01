var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines.shift().split(" ");

let A = parseInt(entrada[0]);
let B = parseInt(entrada[1]);
let C = parseInt(entrada[2]);

//Maior entre A e B
let maiorAB = (A + B + Math.abs(A - B))/2;

//Maior entre AB e C
let maior = (maiorAB + C + Math.abs(maiorAB - C))/2;

console.log(maior + " eh o maior");