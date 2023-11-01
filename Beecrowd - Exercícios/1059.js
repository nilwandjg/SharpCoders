var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


for(let num = 1; num<=100; num++){
    if (num % 2 === 0){
        console.log(num);
    }
}