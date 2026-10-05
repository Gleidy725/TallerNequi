/*Este era mi arreglo, voy a mantener los valores, 
pero lo voy a volver un array de objetos
movimientos=[500000,-200000,-13000,8000,20000,-135000];
Así defino el pago al comercio*/

let movimientos = [
    {
        tipo: "Pago Nómina",
        monto: 500000
    },
    {
        tipo: "Nada",
        monto: 0
    },
    {
        tipo: "Pago recibo",
        monto: -200000
    },
    {
        tipo: "Consignación",
        monto: 8000
    },
    {
        tipo: "Nada",
        monto: 0
    },
    {
        tipo: "Consignación",
        monto: 20000
    },
    {
        tipo: "Pago comercio",
        monto: -13000
    },
    {
        tipo: "Pago administración",
        monto: -135000
    },
    {
        tipo: "Nada",
        monto: 0
    }];

for(let l=0; l<movimientos.length;l++){
    if(movimientos[l].monto==0){
        continue;
    }
    if(movimientos[l].tipo=="Pago comercio"){
        console.log("La posición se encontró, era la",l);
        break;
    }
}