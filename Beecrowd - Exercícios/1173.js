var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = parseInt(lines.shift());
let N = [];
N[0] = entrada;

for(let i=1; i<10;i++){
    N[i] = N[i-1] * 2;
}

for(let i=0; i<10;i++){
    console.log(`N[${i}] = ${N[i]}`);
}