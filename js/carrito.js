class Carrito{
    constructor (){
        this.items = []
        this.total = 0
    }
    agregarItem(item){
        this.items.push(item)
    }
    
    eliminarItem(item){
        this.items.splice(item)
    }
}

export default Carrito 