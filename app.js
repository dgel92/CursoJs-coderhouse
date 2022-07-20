const
    capital = "Capital";
    cba = "Cordoba";
    otraZona= "Resto del pais";

const
    costoDeEnvioCompleto=1290;
    costoDeEnvioMitad= costoDeEnvioCompleto/2;
    costoDeEnvioCero=0;

/*let destino = prompt("selecciona tu ciudad: \n A) Capital \n B) Cordoba \n C) Resto del pais");
let tipoDeEnvio = prompt("selecciona tipo de entrega: \n A) retiro en Correo \n B) Retiro en tienda \n C) Entrega a domicilio");
*/

let saludo = prompt("Hola, porfavor ingresa tu nombre");
console.log(saludo);

for (let i= 1; i<4; i++){
    let producto = prompt("Hola, ingresa el nombre de los productos que vas a comprar");
    console.log(i+ "-"+ producto);
}
let valor = parseFloat(prompt("ingresa el costo de tu compra"));

let unaCuota = "Una cuota s/interes";
    tresCuotas = "Tres cuotas s/interes";
    seisCuotas =  "seis cuotas c/interes 21%";

let cuotas=(prompt("En cuantas cuotas quieres pagar \n a) Una cuota s/interes \n b) Tres cuotas s/interes \n c) seis cuotas c/interes 21%"));
if (cuotas.toLowerCase()==="a"){
    console.log(`el total a pagar es ${valor}`);
}    
else if(cuotas.toLowerCase()==="b"){
    console.log("el total a pagar es 3 cuotas de :$" + " "+ (valor/3));
}
else if(cuotas.toLowerCase()==="c"){
    console.log("el total a pagar es 6 cuotas de :$" + " "+ ((valor*0.21)+valor)/6);
}
