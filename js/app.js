import {arrayItems} from "../js/datos.js";



/*Funcion para navbar mobile - inicio*/
function get(element) {
    return document.getElementById(element);
}
let open = get("navOpen");
let nav = get("nav");
let close = get("navClose");

open.addEventListener('click', function () {
    nav.classList.add('nav-open');
})
close.addEventListener('click', function () {
    nav.classList.remove('nav-open');
})
//Funcion para navbar mobile - fin//



//filtrar productos de portada - inicio//
const filtrar = arrayItems.filter((prod)=>{
    return prod.portada  == true
    })
    
    console.log(filtrar)
//filtrar productos de portada - fin//



/*Funcion card para productoss - Inicio*/
const section = document.querySelector("#section-box-card")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

function renderizado(array){
    array.forEach((elm)=>{
        const cardClonar = card.cloneNode(card,true)
        cardClonar.children[0].src = elm.imgUrl
        cardClonar.children[1].innerText = elm.tittle
        cardClonar.children[2].innerText = elm.price
        cardClonar.children[3].innerText = elm.detalle
        section.appendChild(cardClonar)
        })
    }

renderizado(filtrar);

/*Funcion card para productoss - Fin*/



/*modal - inicio*/
const modalContainer = document.querySelector("#modal-container")
const abrirModal = document.querySelector("#btn-modal-open")
const cerrarModal = document.querySelector("#btn-modal-close")

abrirModal.addEventListener('click',()=>{
    modalContainer.classList.add('modal-container-active')
})

cerrarModal.addEventListener('click',()=>{
    modalContainer.classList.remove('modal-container-active')
})
/*modal - fin*/



arrayItems.forEach((array) => {


})

















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
