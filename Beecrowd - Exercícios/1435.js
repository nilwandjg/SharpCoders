var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let vetor = [];
let M = [];

while(N !== 0){
    M = new Array(N);
    for(let i = 0; i < N /2; i++){
        vetor = new Array (N);
        for(let j = 0; j < N/2; j++){
            const value = Math.min(i, j) + 1;
            vetor[j] = value < 10 ? ` ${value}` : `${value}`;
            vetor[N - 1 - j] = vetor[j];
        }
        M[i] = ` ${vetor.join('  ')}`;
        M[N - 1 -i] = M[i];
    }
    console.log(`${M.join('\n')}`);
    
    N = parseInt(lines.shift());
    console.log('');
}