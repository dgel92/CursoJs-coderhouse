class Producto{
    constructor(nombreProducto, precio, talle, cantidad){
        this.nombreProducto=nombreProducto;
        this.precio=precio;
        this.talle=talle;
        this.cantidad=cantidad;
    }
}

const arrayProductos = [];
function SolicitarDatos(){
    const nombreProducto = prompt("ingresa el nombre del producto que quieres comprar").toLocaleLowerCase()
    const precioProducto= Number(prompt("ingresa el precio del producto"))
    const talle=prompt("ingresa el talle del producto")
    const cantidadProducto= Number(prompt("ingresa la cantidad de compra"))
    const nuevoArray = new Producto(nombreProducto,precioProducto,talle,cantidadProducto)
    arrayProductos.push(nuevoArray)
    }
    

function Verificar(){
    const consulta = prompt ("¿Quieres comprar un producto?").toLocaleLowerCase();
    if ( consulta === "si"){
        SolicitarDatos()
        Verificar()
        console.log(arrayProductos)
    }else{
        console.log(arrayProductos)
        
    }
}

Verificar()

const nombreProductos = arrayProductos.map((producto) =>{
    return producto.nombreProducto
})
alert(`los productos que vas a comprar son ${nombreProductos}. Gracias por tu compra`)
