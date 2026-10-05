const prompt = require('prompt-sync')();
const PINCORRECTO=123456;

let intento="";
let contador=0;
while(intento!=PINCORRECTO){
    console.log("Escribe tu pin");
    intento=Number(prompt());
    contador=contador+1;
    if(intento!=PINCORRECTO){
        console.log("Su pin es incorrecto");
        console.log("Lleva",contador,"intentos");
    }
}
console.log("¡BIENVENIDO A NEQUI!");