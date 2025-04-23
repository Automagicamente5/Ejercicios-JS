const leer = require("prompt-sync")();

function main() {
    let idTarjeta = "def id tarjeta";
    let saldoIncial = 0;
    let medioPago = "def medio pago";
    let montoCargar = -1;
    let saldoActualizado = -1;

    console.log("Ingresa id de tarjeta (numero/nombre)");
    idTarjeta = leer();
    console.log("Ingresa el saldo inicial");
    saldoIncial = Number(leer());
    console.log("Ingresa medio de pago [Efectivo/Tarjeta/MercadoCode]");
    medioPago = leer();
    console.log("Ingresa monto a cargar");
    montoCargar = Number(leer());

    saldoActualizado = saldoIncial + montoCargar;

    console.log("\n\t### Informe de cargar tarjeta ###");
    console.log("Tarjeta "+idTarjeta+" con saldo inicial de $"+saldoIncial+" opcion de pago "+medioPago+" incrementa su saldo en $"+montoCargar);
    console.log("Saldo de tarjeta actual: $"+saldoActualizado);
    console.log("Gracias por usar nuestros servicios!");
}

main();