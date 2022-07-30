class Usuario {
    constructor (nombre, ciudad, telefono, tipoDeEnvio){
        this.nombre = nombre
        this.ciudad = ciudad
        this.telefono = telefono
        this.tipoDeEnvio = tipoDeEnvio
    }
}

class Producto{
    constructor(nombreProducto, precio, talle, cantidad){
        this.nombreProducto=nombreProducto;
        this.precio=precio;
        this.talle=talle;
        this.cantidad=cantidad;
    }
    sumarIva(){
        return this.precio *1.21;
    }
}

function SolicitarDatos(){
    const nombre = prompt("hola, ingresa tu nombre porfavor").toLocaleLowerCase();
    const ciudad = prompt("Ingresa tu ciudad").toLocaleLowerCase();
    const telefono = parseFloat(prompt ("ingresa tu telefono"));
    const tipoDeEnvio = prompt("Que tipo de envio prefieres").toLocaleLowerCase();
    const usuarioCreado = new Usuario(nombre, ciudad, telefono, tipoDeEnvio);
    alert(`hola ${usuarioCreado.nombre}, ya hemos creado tu usuario y tipo de envio`);
    console.log(usuarioCreado);
}

const suma = (x) =>{
    let acumulador = 0;
    for (i = 0; i<x.length; i++){
        acumulador += x[i];
    }
    return(acumulador)
}

const arrayProductos = [];

function SolicitarProductos(){
    const nombreProducto = prompt("ingresa el nombre del producto que quieres comprar").toLocaleLowerCase()
    const precioProducto= Number(prompt("ingresa el precio del producto"))
    const talle=prompt("ingresa el talle del producto")
    const cantidadProducto= Number(prompt("ingresa la cantidad de compra"))

    const nuevoArray = new Producto(nombreProducto,precioProducto,talle,cantidadProducto)
    arrayProductos.push(nuevoArray)
    }
    

function Verificar(){
    const consulta = prompt ("¿Quieres agregar un producto?");
    if ( consulta.toLocaleLowerCase() === "si"){
        SolicitarProductos()
        Verificar()
        console.log(arrayProductos)
    }else{
        console.log(arrayProductos)
        
    }
}
SolicitarDatos
Verificar()


const nombreProductos = arrayProductos.map((producto) =>{
    return producto.nombreProducto
})
alert(`los productos que vas a comprar son ${nombreProductos}. Gracias por tu compra`)
