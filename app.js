const costoDeEnvioCompleto = 1290;
const costoDeEnvioMitad = costoDeEnvioCompleto/2;
const costoDeEnvioCero=0;

const remera = "Remera";
const jeans = "Jeans";
const zapatillas = "Zapatillas";

class Usuario {
    constructor (nombre, ciudad, telefono){
        this.nombre = nombre
        this.ciudad = ciudad
        this.telefono = telefono
        this.tipoDeEnvio = tipoDeEnvio
    }
}

const nombre = prompt("hola, ingresa tu nombre porfavor");
const ciudad = prompt("Ingresa tu ciudad");
const telefono = prompt ("ingresa tu telefono");
const tipoDeEnvio = prompt("selecciona tipo de entrega: \n a) retiro en tienda \n b) Retiro en correo \n c) Entrega a domicilio");

const usuario1 = new Usuario(nombre, ciudad, telefono, tipoDeEnvio);
console.log(usuario1);

for (let i= 1; i<5; i++){
    const productosSeleccionados= prompt("Selecciona la ropa que vas a comprar \n a) Remera \n b) Jeans \n c) Zapatillas");
    console.log(productosSeleccionados);
}

const costoProductos = parseFloat(prompt("ingresa el costo de tu compra"));
console.log(costoProductos)

let cuotas=prompt("En cuantas cuotas quieres pagar \n a) Una cuota s/interes \n b) Tres cuotas s/interes \n c) seis cuotas c/interes 21%");
if (cuotas.toLocaleLowerCase() ==="a" && tipoDeEnvio.toLocaleLowerCase() ==="a"){
    console.log(`Hola ${usuario1.nombre}. El total a pagar es = ${costoProductos};y el costo de envio es = ${costoDeEnvioCero} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="a" && tipoDeEnvio.toLocaleLowerCase() === "b" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar es = ${costoProductos};y el costo de envio es = ${costoDeEnvioMitad} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="a" && tipoDeEnvio.toLocaleLowerCase() === "c" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar es = ${costoProductos};y el costo de envio es = ${costoDeEnvioCompleto} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}


else if (cuotas.toLocaleLowerCase() ==="b" && tipoDeEnvio.toLocaleLowerCase() === "a" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 3 cuotas de = ${(costoProductos/3)}; el costo de envio es = ${costoDeEnvioCero} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="b" && tipoDeEnvio.toLocaleLowerCase() === "b" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 3 cuotas de = ${(costoProductos/3)}; el costo de envio es = ${costoDeEnvioMitad} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="b" && tipoDeEnvio.toLocaleLowerCase() === "c" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 3 cuotas de = ${(costoProductos/3)}; el costo de envio es = ${costoDeEnvioCompleto} y sera despachado a tu ciudad = ${usuario1.ciudad}`);


}
else if (cuotas.toLocaleLowerCase() ==="c" && tipoDeEnvio.toLocaleLowerCase() === "a" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 6 cuotas con un interes de 21%, total por cuota de = ${(((costoProductos*0.21)+costoProductos)/6)}; el costo de envio es = ${costoDeEnvioCero} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="c" && tipoDeEnvio.toLocaleLowerCase() === "b" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 6 cuotas con un interes de 21%, total por cuota de = ${(((costoProductos*0.21)+costoProductos)/6)}; el costo de envio es = ${costoDeEnvioMitad} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
else if (cuotas.toLocaleLowerCase() ==="c" && tipoDeEnvio.toLocaleLowerCase() === "c" ){
    console.log(`Hola ${usuario1.nombre}. El total a pagar seran 6 cuotas con un interes de 21%, total por cuota de = ${(((costoProductos*0.21)+costoProductos)/6)}; el costo de envio es = ${costoDeEnvioCompleto} y sera despachado a tu ciudad = ${usuario1.ciudad}`);
}
