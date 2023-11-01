var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let operacao = lines.shift();
let M = [];
let valor = 0;
let aux = 1;

for(let i = 7; i < 12; i++){
    valor = i * 12;
    for(let j = 12 - i; j < 12 / 2 + aux; j++){
        M.push(valor + j);
    }
    aux++;
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
    console.log((soma / contador).toFixed(1));
}