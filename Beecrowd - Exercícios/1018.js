var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorLido = parseInt(lines.shift());
let valor = valorLido;

let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let nota1 = 0;

while(valor > 0){
    
    while(valor >= 100){
        valor -= 100;
        nota100++;
    }
    
    while(valor >= 50){
        valor -= 50;
        nota50++;
    }
    
    while(valor >= 20){
        valor -= 20;
        nota20++;
    }
    
    while(valor >= 10){
        valor -= 10;
        nota10++;
    }
    
    while(valor >= 5){
        valor -= 5;
        nota5++;
    }
    
    while(valor >= 2){
        valor -= 2;
        nota2++;
    }
    
    while(valor >= 1){
        valor -= 1;
        nota1++;
    }
    
}

console.log(valorLido);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");