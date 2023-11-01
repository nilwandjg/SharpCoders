var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = [];

for(let i=0; i<20; i++){
    N[i] = parseInt(lines.shift());
}

for(let i=0; i<10; i++){
        let aux = N[i];
        N[i] = N[19-i];
        N[19-i] = aux;
}

for(let i=0; i<20; i++){
    console.log(`N[${i}] = ${N[i]}`);
}