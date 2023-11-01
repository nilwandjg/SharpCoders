var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let i = 1;
let j = 60;

while(j>=0){
    console.log(`I=${i} J=${j}`);
    i+=3;
    j-=5;
}