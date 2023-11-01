var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let positivos = 0;

for(let i = 1; i<=6; i++){
    let entrada = parseInt(lines.shift());
    if(entrada > 0){
        positivos++;
    }
}

console.log(positivos + " valores positivos");