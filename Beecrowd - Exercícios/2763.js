var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = lines.shift();
entrada = entrada.replace(".", " ").replace(".", " ").replace("-", " ");

let cpf = entrada.split(" ");

for(let i=0; i<cpf.length; i++){
    console.log(cpf[i]);
}