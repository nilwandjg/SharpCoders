var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maior = 0;
let posicao = 0;

for(let i = 1; i<=100; i++){
    let entrada = parseInt(lines.shift());
    
    if(entrada > maior){
        maior = entrada;
        posicao = i;
    }
}

console.log(maior);
console.log(posicao);