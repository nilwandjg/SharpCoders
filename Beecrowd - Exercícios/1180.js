var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let X = lines.shift().split(" ");
let menor = 0;
let posicao = 0;

for(let i=0; i<N; i++){
    if(i === 0){
        menor = X[i];
        posicao = i;
    } else if(X[i] < menor){
        menor = parseInt(X[i]);
        posicao = i;
    }
}

console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${posicao}`);