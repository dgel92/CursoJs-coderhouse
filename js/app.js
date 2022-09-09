import {arrayItems} from "../js/datos.js";


const filtrar = arrayItems.filter((prod)=>{
    return prod.portada  == true
    })
    
    console.log(filtrar)

const productosContainer = document.querySelector("#contenedor-productos")

function renderPortada(array){
filtrar.forEach((producto) =>{
    const div = document.createElement('div')
    div.className = "product-card"
    div.innerHTML = `
                    <img src=${producto.img} class="card_ph" alt="">
                    <h2 class="product-tittle">${producto.nombre}</h2>
                    <h3 class="product-price">precio ${producto.precio}</h3>
                    <p class="product-detail">${producto.descripcion}</p>
                    <button id="verMas-${producto.id}" class=btn btn-primary>Ver mas</button>
                    `
        productosContainer.append(div)

    const btnVerMas = document.querySelector(`#verMas-${producto.id}`)
    btnVerMas.addEventListener('click', ()=>{
    productoSeleccionado(producto.id)
    setTimeout(function(){
        location.href= "../pages/itemDetailContainer.html";
    }, 1000);
        })
}) 
}

renderPortada(2)

//funcion para localstorage
const prod = []
const productoSeleccionado = (id) =>{
    const producto  = filtrar.find((prod) => prod.id === id)
    const productoJSON = JSON.stringify(producto)
    localStorage.setItem('producto', productoJSON)
    console.log(producto)
    console.log(JSON.stringify(productoJSON))
}
renderPortada(filtrar)


const carrousel = document.querySelector("#contenedor-carrousel")
const divCarrousel = document.createElement('div')
divCarrousel.className = "carrousel-portd"
divCarrousel.innerHTML = `
                <div id="carouselExampleInterval"  class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="./multimedia/img/lampara9.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="./multimedia/img/lampara9.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="./multimedia/img/lampara9.jpg" class="d-block w-100" alt="...">
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                `
                carrousel.append(divCarrousel)
























/*<section>
                <button id="btn-modal-open" class="btn btn-prymary btn-oculto"></button>
                <div id="modal-container" class="modal-container modal-container-active">
                    <div id="my-modal" class="my-modal">
                        <h1>Vissio Lamparas</h1>
                        <hr>
                        <div class="modal-subtittle">
                            <h4>En todos nuestros productos</h4>
                            <h4>3, 6 y 12 cuotas s/interes</h4>
                        </div>
                        <div class="modal-subtittle2">
                            <h4>Pagos en efectivo de contacto, 15% de descuento.</h4>
                            <h4>Pagos por transferencia, 10% de descuento.</h4>
                        </div>
                        <div class="modal-subtittle3">
                            <h5>Plazo de entrega en stock de 7 a 10 dias.</h5>
                            <h5>Productos a pedido de 15 a 20 dias.</h5>
                        </div>
                        <button id="btn-modal-close" ref= ${item.id} class="btn btn-prymary">Cerrar</button>
                    </div>    
                </div>
        </section>*/





/*funcion para agregar al carrito
const carritoDeCompras = []
const btnAgregar = document.querySelector("#btnAgregarAlCarrito")
btnAgregar.addEventListener('click', ()=>{
    carritoDeCompras.push(arrayPortada.id)
    alert("agregado al carrito")
})

function eventoBotones(id){
    const target = document.querySelectorAll("#btnAgregarAlCarrito")
    target.forEach(el =>{
        el.addEventListener('click', agregarCarrito)
    })
}
const agregarCarrito = (e) =>{
    console.log(e.target)
    }

    eventoBotones(btnAgregarAlCarrito)*/


/*
    function cardWidget(){
    const carritoDeCompras=[]
    const stock = arrayItems.filter(producto =>producto.stock)
    
    function handleAdd(){
        if (count < stock){
            return setCount (count + 1);
        }
    }

    function handleSubstract(){
        if ((count) > stock){
            return setCount (count - 1);
        }
    }

    function handleBuy(){
        arrayItems.find(producto => producto.id == id)
        carritoDeCompras.push()
    }

    const sectionCardtWidgwet = document.querySelector("#cardtWidget-section")
    const tempCardtWidgwet = ocument.querySelector("template")
    const cardWidgwet = tempCardtWidgwet.content.querySelector("div")
    const clonarCard = cardWidgwet.cloneNode(card,true)

        clonarCard.children[2].innerText = {handleAdd}
        clonarCard.children[1].innerText = elm.tittle
        clonarCard.children[2].innerText =`$ ${elm.price}`
        clonarCard.children[3].innerText = elm.detalle
        sectionCardtWidgwet.appendChild(clonarCard)
    }
    */

    /*function buscador(){
    let buscador = prompt('ingresa el producto que quieres buscar');
    let prodIngresado = arrayProd.filter(producto => producto.nombre.includes(buscador));
    console.log(prodIngresado);
    console.log("producto buscado:");
}*/



/*Modo oscuro*/
