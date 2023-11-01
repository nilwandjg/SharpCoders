var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

let dentro = 0;
let fora = 0;

for(let i = 1; i <= N; i++){
    let X = parseInt(lines.shift());
    if(X>=10 && X<=20){
        dentro++;        
    } else {
        fora++;
    }
}

console.log(dentro + " in");
console.log(fora + " out");