import Carrito from "../js/carrito.js"

let arrayprueba =[
    {
        id: 1,
        tittle: 'lampara 1',
        imgUrl: "../multimedia/img/lampara1.jpg",
        categoria: "escritorio",
        portada: true,
        stock: 5,
        price: 5820,
        detalle: 'ñonñonñon',
    },
]

let carrito = new Carrito('items')

class CardtWidget {
    constructor(nodo, producto){
        this.nodo = nodo
        this.producto = producto
        this.cantidad = 0
        this.cantidadDom = nodo.querySelector("#cantidad")
        this.cantidadDom.innerText = 0


        this.suma = nodo.querySelector(".suma")
        this.resta = nodo.querySelector(".resta")
        this.compra = nodo.querySelector("#compra")

        this.suma.addEventListener("click", () =>{
            if (this.cantidad >= producto.stock) return
            this.cantidad++
            this.cantidadDom.innerText = this.cantidad
        })

        this.resta.addEventListener("click", () =>{
            if (this.cantidad == 0) return
            this.cantidad--
            this.cantidadDom.innerText = this.cantidad
        })


        this.compra.addEventListener("click", () => {
            carrito.agregarItem(this.producto)
        })

    }
}  

class Producto {
    constructor (id, tittle, categoria, stock, price, detalle){
        this.id = id
        this.tittle = tittle
        this.categoria = categoria
        this.stock = stock
        this.price = price
        this.detalle = detalle
    }
}


const section = document.querySelector("#section-itemDetail")
const temp = document.querySelector("template")
const cardItemDetail = temp.content.querySelector("div")

function renderizadoitemDetail(array){

    section.innerHTML = ""
    array.forEach((elm)=>{    
        const cardClonarItemDetail = cardItemDetail.cloneNode(cardItemDetail,true)
        cardClonarItemDetail.children[0].src = elm.imgUrl
        cardClonarItemDetail.children[1].innerText = elm.tittle
        cardClonarItemDetail.children[2].innerText = elm.price
        cardClonarItemDetail.children[3].innerText = elm.detalle
    
        section.appendChild(cardClonarItemDetail)
        let widt = new CardtWidget(cardClonarItemDetail, elm)
        console.log(widt)
        })
    }
    
    renderizadoitemDetail(arrayprueba);
