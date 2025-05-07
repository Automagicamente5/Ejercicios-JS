const leer = require("prompt-sync")();


const OPC_TIPO_PEDIDO_1 = "J";
const TIPO_PEDIDO_1 = "Juegos";


function main() {
    let tipoPedido = "def producto";
    let tipoProducto = "def producto seleccionado";
    let medioPago = "def medio de pago";

    let opcIngresada = "def opcion ingresada";

    console.log("Ingresa el tipo de producto:\n\t["+OPC_TIPO_PEDIDO_1+"] "+TIPO_PEDIDO_1+"\n\t[S] Supermercado\n\t[F] Farmacia");
    opcIngresada = leer().toUpperCase();

    switch (opcIngresada) {
        case OPC_TIPO_PEDIDO_1:
            tipoPedido = TIPO_PEDIDO_1;
            console.log("Selecciona el producto: \n\t[1] Pizza\n\t[2] Hamburguesa");
            opcIngresada = leer();
            switch (opcIngresada) {
                case "1":
                    tipoProducto = "Pizza";
                    break;
                case "2":
                    tipoProducto = "Hamburguesa";
                    break;
                default:
                    console.log("El producto seleccionado no es valido");
            }
            break;
        case "S":
            tipoPedido = "Supermercado"
            console.log("Selecciona el producto: \n\t[1] Papel Higienico\n\t[2] Harina");
            opcIngresada = leer();
            switch (opcIngresada) {
                case "1":
                    tipoProducto = "Papel Higienico";
                    break;
                case "2":
                    tipoProducto = "Harina";
                    break;
                default:
                    console.log("El producto seleccionado no es valido");
            }
            break;
        case "F":
            tipoPedido = "Farmacia"
            console.log("Selecciona el producto: \n\t[1] Medicamento\n\t[2] Curitas");
            opcIngresada = leer();
            switch (opcIngresada) {
                case "1":
                    tipoProducto = "Medicamento";
                    break;
                case "2":
                    tipoProducto = "Curitas";
                    break;
                default:
                    console.log("El producto seleccionado no es valido");
            }
            break;
        default:
            console.log("El tipo de pedido no es valido");
    }

    console.log("Ingresa el medio de pago:\n\t[E] Efectivo\n\t[T] Tarjeta");
    medioPago = leer().toUpperCase();

    switch (medioPago) {
        case "E":
            medioPago = "Efectivo"
            break;
        case "T":
            medioPago = "Tarjeta"
            console.log("Selecciona el tipo de tarjeta: \n\t[1] Debito\n\t[2] Credito");
            opcIngresada = leer();
            switch (opcIngresada) {
                case "1":
                    medioPago += "Debito";
                    break;
                case "2":
                    medioPago = medioPago + "Credito";
                    break;
                default:
                    console.log("El tipo de tarjeta no es valido");
            }
            break;
        default:
            console.log("El medio de pago no es valido");
    }

    console.log("\t\t### Iniciando pedido ###");
    console.log("Tipo de pedido: " + tipoPedido);
    console.log("Pedido: " + tipoProducto);
    console.log("Medio de pago: " + medioPago);
    console.log("\n\n\tPedido iniciado...");
}

main();