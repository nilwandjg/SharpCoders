var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let contInteiro = 0;

for(let i=1; i <=5; i++){
    let entrada = parseInt(lines.shift());
    if(entrada % 2 === 0){
        contInteiro++;
    }
}

console.log(contInteiro + " valores pares");