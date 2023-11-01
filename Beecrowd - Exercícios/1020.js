var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let idade = parseInt(lines.shift());
let ano = 0;
let mes = 0;
let dia = 0;

while(idade>=365){
    idade-=365;
    ano++;
}

while(idade>=30){
    idade-=30;
    mes++;
}

while(idade>=1){
    idade-=1;
    dia++;
}

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");