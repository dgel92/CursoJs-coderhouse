class Productosbase{
    constructor ( id, tittle, imgUrl, categoria, portada, stock, price, detalle="ñonñonñon"){
        this.id = id
        this.tittle = tittle
        this.imgUrl = imgUrl
        this.categoria = categoria
        this.portada = portada
        this.stock = stock
        this.price = price
        this.detalle = detalle
    }
}

export let arrayItems = []
arrayItems.push(new Productosbase( 1,"lampara 1", "../multimedia/img/lampara1.jpg", "escritorio", true, 5, 5820, "..."))
arrayItems.push(new Productosbase( 2,"lampara 2", "../multimedia/img/lampara2.jpg", "escritorio", false, 8, 6040, "..."))
arrayItems.push(new Productosbase( 3,"lampara 3", "../multimedia/img/lampara3.jpg", "escritorio", false, 5, 3095, "..."))
arrayItems.push(new Productosbase( 4,"lampara 4", "../multimedia/img/lampara4.jpg", "escritorio", false, 5, 3095, "..."))
arrayItems.push(new Productosbase( 5,"lampara 5", "../multimedia/img/lampara5.jpg", "lampara de pie", true, 10, 4899, "..."))
arrayItems.push(new Productosbase( 6,"lampara 6", "../multimedia/img/lampara6.jpg", "lampara de pie", false, 10, 4899, "..."))
arrayItems.push(new Productosbase( 7,"lampara 7", "../multimedia/img/lampara7.jpg", "lampara de pie", false, 10, 4899, "..."))

