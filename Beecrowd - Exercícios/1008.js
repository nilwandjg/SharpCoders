var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numFuncionario = parseInt(lines.shift());
let horasTrabalhadas = parseInt(lines.shift());
let valorPorHora = parseFloat(lines.shift()).toFixed(2);

let salary = horasTrabalhadas * valorPorHora;

console.log("NUMBER = " + numFuncionario);
console.log("SALARY = U$ " + salary.toFixed(2));