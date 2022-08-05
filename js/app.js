import {arrayItems} from "../js/datos.js";

const section = document.querySelector("#section-box-card")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")


function renderizado(array){
    array.forEach((elm)=>{
        const cardClonar = card.cloneNode(card,true)
        cardClonar.children[0].innerText = elm.tittle
        cardClonar.children[1].innerText = elm.price
        cardClonar.children[2].innerText = elm.detalle
        cardClonar.children[3].innerText = elm.stock
        cardClonar.children[4].src = elm.imgUrl
        section.appendChild(cardClonar)
        })
    }

renderizado(arrayItems)
























