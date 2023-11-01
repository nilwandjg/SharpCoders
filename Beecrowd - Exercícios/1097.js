var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let j = 7;

for (let i=1; i<=9; i+=2){
    
    let contador = 1;
    
    while(contador<=3){
        console.log(`I=${i} J=${j}`);
        j--;
        contador++;
    }
    
    j+=5;
}