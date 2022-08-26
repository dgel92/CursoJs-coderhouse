import {arrayItems} from "../js/datos.js";


const filtrar = arrayItems.filter((prod)=>{
    return prod.portada  == true
    })
    
    console.log(filtrar)

const section = document.querySelector("#section-box-card")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

function renderizado(array){
    array.forEach((elm)=>{
        const cardClonar = card.cloneNode(card,true)
        cardClonar.children[0].src = elm.img
        cardClonar.children[1].innerText = elm.nombre
        cardClonar.children[2].innerText = elm.precio
        cardClonar.children[3].innerText = elm.descripcion
        section.appendChild(cardClonar)

    const btnVerMas = document.querySelector("#btnVerMas")
    btnVerMas.addEventListener('click', ()=>{
    productoSeleccionado(product.id)
    setTimeout(function(){
        location.href= "../pages/itemDetailContainer.html";
    }, 1000);
        })
        })
    }

renderizado(filtrar);


const modalContainer = document.querySelector("#modal-container")
const abrirModal = document.querySelector("#btn-modal-open")
const cerrarModal = document.querySelector("#btn-modal-close")

abrirModal.addEventListener('click',()=>{
    modalContainer.classList.add('modal-container-active')
})

cerrarModal.addEventListener('click',()=>{
    modalContainer.classList.remove('modal-container-active')
})

const btnVermas = document.querySelector("#btnVerMas")
btnVermas.addEventListener('click', () => {
    setTimeout(function(){
        location.href="../pages/itemDetailContainer.html";
    }, 1000 );
    })

const prod = []
    const productoSeleccionado = (id) =>{
        const producto  = baseDatos.find((prod) => prod.id === id)
        const productoJSON = JSON.stringify(producto)
        localStorage.setItem('producto', productoJSON)
        console.log(producto)
        console.log(JSON.stringify(productoJSON))
    }











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
