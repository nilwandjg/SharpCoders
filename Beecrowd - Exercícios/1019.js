var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let hora = 0;
let minuto = 0;
let segundo = 0;

while(N >= 3600){
    N -= 3600;
    hora++;
}

while(N >= 60){
    N -= 60;
    minuto++;
}

while(N >= 1){
    N -= 1;
    segundo++;
}

console.log(`${hora}:${minuto}:${segundo}`);