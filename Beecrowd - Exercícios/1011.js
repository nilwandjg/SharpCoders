var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;

let R = parseFloat(lines.shift());

let volume = (4.0/3.0) * pi * Math.pow(R, 3);

console.log("VOLUME = " + volume.toFixed(3));