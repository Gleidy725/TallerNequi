const prompt = require('prompt-sync')();
let opcion;
do{
    console.log("¿Qué desea hacer?",
        "\n1.Ver saldo",
        "\n2.Enviar dinero",
        "\n3.Recargar",
        "\n4.Salir");
    opcion=prompt();
    if(opcion==1){
        verSaldo();
    }else if(opcion==2){
        enviarDinero();
    }else if(opcion==3){
        recargar();
    }
}while(opcion!=4);
console.log("¡Vuelve pronto!");

function verSaldo(){
    let saldo=0;
    console.log("Su saldo es de",saldo,"pesos");
}

function enviarDinero(){
    console.log("Transaccion existosa");
}

function recargar(){
    console.log("Su nequi fue recargado exitosamente");
}