let usuarios = [
    {name: "Pepito Perez", movimientos:[
        {
            tipo: "Pago Nómina",
            monto: 8000000
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
        }]
    },
    {name: "Pepita Martínez", movimientos: [
        {
            tipo: "Pago Nómina",
            monto: 1300000
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
        }]
    },
    {name: "Arroz con coco", movimientos: [
        {
            tipo: "Pago Nómina",
            monto: 2500000
        },
        {
            tipo: "Pago recibo",
            monto: -200000
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
        }]
    }
];

for(let l=0; l<usuarios.length;l++){
    let totalUsuario=0;
    for(let m=0;m<usuarios[l].movimientos.length;m++){
        totalUsuario=totalUsuario+usuarios[l].movimientos[m].monto;
    }
    console.log("El total final de",usuarios[l].name,"es",totalUsuario);
}
