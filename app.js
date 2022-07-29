class Usuario {
    constructor (nombre, ciudad, telefono, tipoDeEnvio){
        this.nombre = nombre
        this.ciudad = ciudad
        this.telefono = telefono
        this.tipoDeEnvio = tipoDeEnvio
    }
}

class producto{
    constructor(nombre, precio, talle, cantidad){
        this.nombre=nombre;
        this.precio=precio;
        this.talle=talle;
        this.cantidad=cantidad;
    }
    sumarIva(){
        return this.precio *1.21;
    }
}

function SolicitarDatos(){
    let nombre = prompt("hola, ingresa tu nombre porfavor").toLocaleLowerCase();
    let ciudad = prompt("Ingresa tu ciudad").toLocaleLowerCase();
    let telefono = parseFloat(prompt ("ingresa tu telefono"));
    let tipoDeEnvio = prompt("Que tipo de envio prefieres").toLocaleLowerCase();
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

function SolicitarProductos(){
    const arrayProductos=[];
    for (let i=0; i = arrayProductos; i++ ){
            const verificar = prompt ("ingresa el nombre del producto o escribe fin para terminar de agregar productoss").toLocaleLowerCase();
        if(verificar == "fin"){
            break;
        }
        else{
            const nombre = verificar;
            const precio = prompt("ingresa el precio del producto");
            const talle = prompt("ingresa el talle que quieres llevar");
            const cantidad = prompt("ingresa la cantidad de este producto que deseas comprar");
            arrayProductos.push((new producto(nombre,precio,talle,cantidad,)));

            const result = arrayProductos.filter((el) => el.nombre.includes(nombre));
            return(arrayProductos)
        }
    }
}



SolicitarDatos();
SolicitarProductos();
