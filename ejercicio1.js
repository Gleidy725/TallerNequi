//const prompt = require('prompt-sync')();
let movimientos=[500000,-200000,-13000,8000,20000,-135000];
let total=0;
cantidadRetiros=0;

for(let l=0;l<movimientos.length;l++){
    total=total+movimientos[l];
    if(movimientos[l]<0){
        cantidadRetiros=cantidadRetiros+1;
    }
}
console.log("Total:",total);
console.log("Cantidad de retiros en el mes:",cantidadRetiros);