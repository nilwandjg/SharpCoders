var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

while(N > 0){
    for(let i = 0; i < N; i++){
        let matriz = [];
        
        for(let j = 0; j < N; j++){
            let aux = 0;
            if(i===j){
                aux = 2;
            }
            if(i + j + 1 === N){
                aux = 1;
            }
            
            matriz.push(3 - aux);
        }
        console.log(matriz.join(""));
    }
    N = parseInt(lines.shift());
}