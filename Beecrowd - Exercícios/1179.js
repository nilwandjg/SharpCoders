var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let impares = [];
let pares = [];

for(let i=0; i<15; i++){
    let entrada = parseInt(lines.shift());

    //Vetor PARES está cheio?
    if(pares.length === 5){
        for(let j=0; j<5; j++){
            console.log(`par[${j}] = ${pares[j]}`);
        }
        pares = [];
    }
    
    //VETOR IMPARES está cheio?
    if(impares.length === 5){
        for(let j=0; j<5; j++){
            console.log(`impar[${j}] = ${impares[j]}`);
        }
        impares = [];
     }
  
    //O número é par ou impar?
    if(entrada % 2 === 0){
        pares.push(entrada);
    } else {
        impares.push(entrada);
    }
}

//imprimir os impares
for(let i=0; i<impares.length;i++){
    console.log(`impar[${i}] = ${impares[i]}`);
}

//imprimir os pares
for(let i=0; i<pares.length; i++){
    console.log(`par[${i}] = ${pares[i]}`);
}