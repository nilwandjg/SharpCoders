var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pesoNotaA = 2;
const pesoNotaB = 3;
const pesoNotaC = 5;

let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);
let C = parseFloat(lines.shift()).toFixed(1);

let media = ((A*pesoNotaA) + (B*pesoNotaB) + (C*pesoNotaC)) / (pesoNotaA + pesoNotaB + pesoNotaC);

console.log("MEDIA = " + media.toFixed(1));