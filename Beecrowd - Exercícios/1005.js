var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pesoNotaA = 3.5;
const pesoNotaB = 7.5;

let A = parseFloat(lines.shift()).toFixed(1);
let B = parseFloat(lines.shift()).toFixed(1);

let media = ((A * pesoNotaA) + (B * pesoNotaB)) / (pesoNotaA + pesoNotaB)

console.log("MEDIA = " + media.toFixed(5));