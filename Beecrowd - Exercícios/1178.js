var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseFloat(lines.shift());
let N = [X];

for(let i=1; i<100; i++){
    N.push((N[i-1]/2.0));
}

for(let i=0; i<100; i++){
    console.log(`N[${i}] = ${N[i].toLocaleString('en-US', {minimumFractionDigits:4, useGrouping: false})}`);
}