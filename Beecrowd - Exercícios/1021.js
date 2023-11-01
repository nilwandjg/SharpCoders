var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines.shift());

let nota100 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;
let nota5 = 0;
let nota2 = 0;
let moeda1 = 0;
let moeda050 = 0;
let moeda025 = 0;
let moeda010 = 0;
let moeda005 = 0;
let moeda001 = 0;

let aux = 0.00001;

while(valor>=100.00-aux){valor-=100.00; nota100++;}

while(valor>=50.00-aux){valor-=50.00; nota50++}

while(valor>=20.00-aux){valor-=20.00; nota20++;}

while(valor>=10.00-aux){valor-=10.00; nota10++;}

while(valor>=5.00-aux){valor-=5.00; nota5++;}

while(valor>=2.00-aux){valor-=2.00; nota2++;}

while(valor>=1.00-aux){valor-=1.00; moeda1++;}

while(valor>=0.50-aux){valor-=0.50; moeda050++;}

while(valor>=0.25-aux){valor-=0.25; moeda025++;}

while(valor>=0.10-aux){valor-=0.10; moeda010++;}

while(valor>=0.05-aux){valor-=0.05; moeda005++;}

while(valor>=0.01-aux){valor-=0.01; moeda001++;}

console.log("NOTAS:");
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${moeda1} moeda(s) de R$ 1.00`);
console.log(`${moeda050} moeda(s) de R$ 0.50`);
console.log(`${moeda025} moeda(s) de R$ 0.25`);
console.log(`${moeda010} moeda(s) de R$ 0.10`);
console.log(`${moeda005} moeda(s) de R$ 0.05`);
console.log(`${moeda001} moeda(s) de R$ 0.01`);