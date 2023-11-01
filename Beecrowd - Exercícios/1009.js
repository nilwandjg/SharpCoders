var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let salario = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());

total = salario + (totalVendas * 0.15);

console.log("TOTAL = R$ " + total.toFixed(2));