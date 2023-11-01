var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let X = lines.shift();

for (let i=1; i<=X; i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}