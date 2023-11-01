var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());

for (let i=1; i<=N; i++){
    let X = parseInt(lines.shift());
    if(X === 0){
        console.log("NULL");
    } else if(X % 2 === 0 && X > 0){
        console.log("EVEN POSITIVE");
    } else if(X % 2 === 0 && X < 0){
        console.log("EVEN NEGATIVE");
    } else if(X % 2 !== 0 && X > 0){
        console.log("ODD POSITIVE");
    } else if(X % 2 !== 0 && X < 0){
        console.log("ODD NEGATIVE");
    }
}