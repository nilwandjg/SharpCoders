var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift());
let N = [];

for(let i=0; i<1000; i++){
    for(let j=0; j<T; j++){
        N.push(j);
    }
}

for(let i=0; i<1000; i++){
    console.log(`N[${i}] = ${N[i]}`);
}