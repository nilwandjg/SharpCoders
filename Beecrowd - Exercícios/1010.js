var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let primeiro = lines.shift().split(" ");
let segundo = lines.shift().split(" ");

let cod1 = parseInt(primeiro[0]);
let numPecas1 = parseInt(primeiro[1]);
let valorUnitario1 = parseFloat(primeiro[2]);

let cod2 = parseInt(segundo[0]);
let numPecas2 = parseInt(segundo[1]);
let valorUnitario2 = parseFloat(segundo[2]);

let valor = (numPecas1 * valorUnitario1) + (numPecas2 * valorUnitario2);

console.log("VALOR A PAGAR: R$ " + valor.toFixed(2));