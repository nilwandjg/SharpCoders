var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for(i = 1; i <= 10; i++){
    console.log(`${i} x ${N} = ${i*N}`);
}