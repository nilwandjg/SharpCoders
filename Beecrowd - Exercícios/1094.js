var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines.shift());
let coelhos = 0;
let ratos = 0;
let sapos = 0;

for(let i=1; i<=N; i++){
    
    let entrada = lines.shift().split(" ");
    
    let quantia = parseInt(entrada[0]);
    let tipo = entrada[1];
    
    switch(tipo){
        case 'C':
            coelhos+=quantia;
            break;
        case 'R':
            ratos+=quantia;
            break;
        case'S':
            sapos+=quantia;
            break;
    }
}

let cobaias = coelhos + ratos + sapos;

console.log(`Total: ${cobaias} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${((coelhos/cobaias)*100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((ratos/cobaias)*100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapos/cobaias)*100).toFixed(2)} %`);