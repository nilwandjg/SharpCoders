var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

while(N > 0){
    for(let i = 0; i< N; i++){
        let M = [];
    
        for(let j=0; j< N; j++){
            let aux = (1+ Math.abs(i - j)).toFixed(0);
            M.push(aux.padStart(3));
        }
        console.log(M.join(" "));
    }
    
    console.log("");
    
    N = parseInt(lines.shift()); 
}