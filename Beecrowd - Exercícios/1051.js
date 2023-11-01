var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var impostoTotal= 0.0;
var diferenca = 0.0;

if(salario > 4500){
    diferenca = salario - 4500;
    impostoTotal += diferenca * 0.28;
    salario = salario - diferenca;
}

if(salario > 3000){
    diferenca = salario - 3000;
    impostoTotal += diferenca * 0.18;
    salario = salario - diferenca;
}

if(salario > 2000){
    diferenca = salario - 2000;
    impostoTotal += diferenca * 0.08;
    salario = salario - diferenca;
}

if(salario < 2000)
    console.log("Isento");
else {
    console.log("R$ " + impostoTotal.toFixed(2));
}