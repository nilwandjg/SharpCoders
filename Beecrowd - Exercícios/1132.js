var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseInt(lines.shift());
let total = 0;

if(X < Y){
    for(let i = X; i<=Y; i++){
        if(i % 13 !== 0){
            total += i;
        }
    }
} else {
    for(let i = Y; i<=X; i++){
        if(i % 13 !== 0){
            total += i;
        }
    }
}
console.log(total);