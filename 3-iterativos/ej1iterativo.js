const leer = require("prompt-sync")();

const MODIFICADOR_TIEMPO = 100 / 60;

function main() {
    let horaInicial = -1;
    let horaFinal = -1;
    let intervalo = -1;
    let cantColectivos = 0;

    console.log("Ingresa hora inicial en formato de 4 digitos");
    horaInicial = Number(leer());
    console.log("Ingresa hora final en formato de 4 digitos");
    horaFinal = Number(leer());
    
    console.log("Ingresa el intervalo en minutos");
    intervalo = Number(leer());
    
    intervalo = intervalo * (MODIFICADOR_TIEMPO);

    for (let i = horaInicial; i <= horaFinal; i=i+intervalo) {
        cantColectivos++;
        console.log("Paso un colectivo - Nº"+cantColectivos+" Hora:"+i);
    }

    console.log("Cantidad total de colectivos en el rango de horaros es: "+cantColectivos);
    
}

main();