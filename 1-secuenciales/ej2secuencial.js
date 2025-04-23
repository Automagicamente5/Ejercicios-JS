const leer = require("prompt-sync")();

function main() {
    let horaSalida = -1;
    let horaLlegada = -1;
    let estadoRegistro = false;
    let estadoEquipaje = false;
    let tarjetaImpresa = false;
    let tarjetaDigital = false;
    let llegoTiempo = false;
    let poseeTarjeta = false;
    let cumpleRequerimientos = false;

    console.log("Hora de salida al aeropuerto [2digitos]");
    horaSalida = Number(leer());
    console.log("Hora de llegada al aeropuerto [2digitos]");
    horaLlegada = Number(leer());
    console.log("Estado del check-in [1-SI / 0-NO]");
    estadoRegistro = Boolean(Number(leer()));
    console.log("Estado del equipaje [1-SI / 0-NO]");
    estadoEquipaje = Boolean(Number(leer()));
    console.log("Posee tarjeta impresa [1-SI / 0-NO]");
    tarjetaImpresa = Boolean(Number(leer()));
    console.log("Posee tarjeta digital [1-SI / 0-NO]");
    tarjetaDigital = Boolean(Number(leer()));

                    // 12 - 9 = 3 >= 3 = true 
                    // 12 - 10 = 2 >= 3 = false 
                    // 12 - 7 = 5 >= 3 = true 
    llegoTiempo = (horaSalida - horaLlegada) >= 3;

    // impreas O digital ?
    poseeTarjeta = tarjetaImpresa || tarjetaDigital;

    cumpleRequerimientos = llegoTiempo && estadoRegistro && estadoEquipaje && poseeTarjeta;

    console.log("\n\t###Estado de vuelo###\n");
    console.log("\t\t3hrs antes del vuelo: "+llegoTiempo);
    console.log("\t\tcon check-in: "+estadoRegistro);
    console.log("\t\tequipaje entregado: "+estadoEquipaje);
    console.log("\t\ttarjeta impresa o digital: "+poseeTarjeta);
    console.log("\t\tCumple con los requerimientos: "+cumpleRequerimientos);
    
}

main();