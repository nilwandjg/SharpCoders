var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let totalPositivos = 0;
let positivos = 0;
let total = 0;

for(let i=1; i <=6; i++){
    let valor = parseFloat(lines.shift());
    if(valor >= 0){
        totalPositivos += valor;
        positivos++
    }
}

total = totalPositivos/positivos;

console.log(positivos + " valores positivos");
console.log(total.toFixed(1));