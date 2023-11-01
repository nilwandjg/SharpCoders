var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let contador = 1;

while(contador<=6){
   if(X % 2 !== 0){
       console.log(X);
       contador++;
   }
   X++;
}