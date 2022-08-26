class Carrito{
    constructor (){
        this.items = []
        this.total = 0
    }
    agregarItem(item, cant){
        if(this.items.includes(item)){
            let pos = this.items.indexOf(item)
            this.items[pos].cantidad = cant
        } else{
            item.cantidad = cant
        this.items.push(item)
        }
    }
}

export default Carrito 


const carrito = []

const agregarAlCarrito = (id) =>{
    const producto = stockProductos.fin( (prod) => prod.id === id)
    carrito.push(producto)
    console.log(carrito)

}
