const leer = require("prompt-sync")();

const VALOR_DESCUENTO = 0.25;
const REDUCCION_PRECIO = 1-VALOR_DESCUENTO;
const DIA_OFERTA_1 = "J";
const DIA_OFERTA_2 = "V";
const DEF_TOTA_COMPRA = 9999999;
const DEF_PRECIO_FINAL = 9999999;

function main() {
    let diaCompra = "def dia";
    let esDiaOferta = false;
    let totalCompra = DEF_TOTA_COMPRA;
    let precioFinal = DEF_PRECIO_FINAL;

    console.log("Ingresa el dia de compra [L-M-Mi-J-V]");
    diaCompra = leer().toUpperCase();
    console.log("Ingresa total de compra");
    totalCompra = Number(leer());
    
    esDiaOferta = (diaCompra === DIA_OFERTA_1) || (diaCompra === DIA_OFERTA_2);
    precioFinal = totalCompra;
    if ( esDiaOferta ) {
        console.log("Aplicando descuento");
        precioFinal = totalCompra * REDUCCION_PRECIO;
    }
    console.log("\t###Informe de compra###\n");
    console.log("Total: $"+ totalCompra);
    console.log("Es dia de oferta: "+ esDiaOferta);
    console.log("Precio final: $"+precioFinal);
}

main();