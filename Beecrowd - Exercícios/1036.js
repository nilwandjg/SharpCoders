var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var entrada = lines.shift().split(" ");

var A = parseFloat(entrada[0]);
var B = parseFloat(entrada[1]);
var C = parseFloat(entrada[2]);

var delta = (B*B)-4*A*C;

if(delta <= 0.0 || A === 0.0){
    console.log("Impossivel calcular");
} else {
    var r1 = ((-1*B)+Math.sqrt(delta))/(2*A);
    var r2 = ((-1*B)-Math.sqrt(delta))/(2*A);
    console.log("R1 = " + r1.toFixed(5));
    console.log("R2 = " + r2.toFixed(5));
}