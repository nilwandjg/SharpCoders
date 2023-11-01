var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let C = parseInt(lines.shift());
let T = lines.shift();
let M = [];
let resultado = 0;

for(let linha = 0; linha < 12; linha++){
    M[linha] = [];
    for(let coluna = 0; coluna < 12; coluna++){
        M[linha][coluna] = '';
    }
}

for(let linha = 0; linha < 12; linha++){
    for(let coluna = 0; coluna < 12; coluna++){
        let entrada = lines.shift();
        M[linha][coluna] = parseFloat(entrada);
    }
}

for(let linha = 0; linha < 12; linha++){
    resultado += M[linha][C];
}

if(T === "M"){
    resultado = resultado/12;
}

console.log(resultado.toFixed(1));