var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let O = lines.shift();
let soma = 0;

for(let i = 0; i < 12; i++){
    for(let j = 0; j < 12; j++){
        const num = parseFloat(lines.shift());
        if(j > i){
            soma += num;
        }
    }
}

if(O === "S"){
    O = soma;   
} else {
    O = soma / 66;
}

console.log(O.toFixed(1));