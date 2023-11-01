var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let T = parseInt(lines.shift());
let Fib = [0, 1];

for(let i=2; i<=60;i++){
    Fib[i] = Fib[i-1] + Fib[i-2];
}

for(let i=0; i<T; i++){
    let N = parseInt(lines.shift());
    console.log(`Fib(${N}) = ${Fib[N]}`);
}