var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();
let M = [];
let valor = 0;

for(let i = 0; i < 5; i++){
    valor = i * 12;
    for(let j = i + 1; j < 11 - i; j++){
        M.push(valor + j);
    }
}

let soma = 0;
let contador = 0;

for(let i = 0; i < 144; i++){
    let numero = parseFloat(lines.shift());
    if(M.indexOf(i) != -1){
        soma += numero;
        contador++;
    }
}

if(operacao == "S"){
    console.log(soma.toFixed(1));
} else {
    console.log((soma/contador).toFixed(1));
}