import {arrayItems} from "../js/datos.js";

const section = document.querySelector("#section-box-card")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")


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

renderizado(arrayItems)

const carritoDeCompras = [];

const addToCard = arrayItems.push













