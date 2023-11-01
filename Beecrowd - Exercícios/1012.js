var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

let valor = lines.shift().split(' ');

let A = parseFloat(valor[0]); 
let B = parseFloat(valor[1]);
let C = parseFloat(valor[2]);

let triangulo = (A * C)/2;

let circulo = pi * Math.pow(C, 2);

let trapezio = ((A + B) * C)/2;

let quadrado = Math.pow(B, 2);

let retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));