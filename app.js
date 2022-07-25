const capital = "Capital";
const cba = "Cordoba";
const otraZona = "Resto del pais";

const costoDeEnvioCompleto = 1290;
const costoDeEnvioMitad = costoDeEnvioCompleto/2;
const costoDeEnvioCero=0;

const remera = "Remera";
const jeans = "Jeans";
const zapatillas = "Zapatillas";

const unaCuota = "Una cuota s/interes";
const tresCuotas = "Tres cuotas s/interes";
const seisCuotas =  "seis cuotas c/interes 21%";

class Usuario {
    constructor (nombre, ciudad, telefono){
        this.nombre = nombre
        this.ciudad = ciudad
        this.telefono = telefono
        this.tipoDeEnvio = tipoDeEnvio
    }
}

let nombre = prompt("hola, ingresa tu nombre porfavor");
let ciudad = prompt("selecciona tu ciudad: \n a) Capital \n b) Cordoba \n c) Resto del pais");
let telefono = prompt ("ingresa tu telefono");
let tipoDeEnvio = prompt("selecciona tipo de entrega: \n a) retiro en Correo \n b) Retiro en tienda \n c) Entrega a domicilio");

let usuario1 = new Usuario(nombre, ciudad, telefono, tipoDeEnvio);
console.log(usuario1);

/*class Compra{
    constructor(producto1, producto2, producto3){
        this.producto1=producto
        this.producto2=producto
        this.producto3=producto
    }
}
*/

for (let i= 1; i<5; i++){
    let productosSeleccionados= prompt("Selecciona la ropa que vas a comprar \n a) Remera \n b) Jeans \n c) Zapatillas");
    console.log(productosSeleccionados);
}

let costoProductos = parseFloat(prompt("ingresa el costo de tu compra"));

let cuotas=(prompt("En cuantas cuotas quieres pagar \n a) Una cuota s/interes \n b) Tres cuotas s/interes \n c) seis cuotas c/interes 21%"));
