import {arrayItems} from "../js/datos.js";

/*Funcion card para productoss - Inicio*/
const section = document.querySelector("#section-box-tienda")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")

function renderizadoTienda(array){
    array.forEach((elm)=>{
        const cardClonar = card.cloneNode(card,true)
        cardClonar.children[0].src = elm.imgUrl
        cardClonar.children[1].innerText = elm.tittle
        cardClonar.children[2].innerText = elm.price
        cardClonar.children[3].innerText = elm.detalle
        section.appendChild(cardClonar)
        })
    }
    
    renderizadoTienda(arrayItems);
    /*Funcion card para productoss - Fin*/



//filtrado- inicio//
//ordenar por categoria-inicio//
const filtrarCatEscritorio = arrayItems.filter((prod)=>{
        return prod.categoria  == 'escritorio';
        })
        console.log(filtrarCatEscritorio)
        
const filtrarCatlamparaDePie = arrayItems.filter((prod)=>{
        return prod.categoria  == 'lampara de pie';
        })
        
        console.log(filtrarCatlamparaDePie)
//ordenar por categoria-fin//



//ordenar por precio mayor o menor-inicio//
const ordenarMenorAMayor = arrayItems.sort((a, b) => a.price - b.price)
console.log(ordenarMenorAMayor);

const ordenarMayorAMenor = arrayItems.sort((a, b) => b.price - a.price)
console.log(ordenarMayorAMenor);
//ordenar por precio mayor o menor-fin//



//ordenar por abecedario-inicio//
const ordenarPorTituloAZ= arrayItems.sort((a, b) => {
    if (a.tittle > b.tittle){
        return 1
    } else if ( a.tittle < b.tittle){
        return -1
    }
})
console.log(ordenarPorTituloAZ)

const ordenarPorTituloZa= arrayItems.sort((a, b) => {
    if (a.tittle < b.tittle){
        return 1
    } else if ( a.tittle > b.tittle){
        return -1
    }
})
console.log(ordenarPorTituloZa)


//eventos para filtrar busqueda - inicio//
//filtrar por categoria "lampara de pie"//
const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")

btnLamparaDePie.addEventListener('click', ()=>{
    arrayItems.filter((prod)=>{
        return prod.categoria  == "lampara de pie"
        })
        renderizadoTienda(filtrarCatlamparaDePie);
        console.log(filtrarCatlamparaDePie)
})

//filtrar por categoria "lampara de escritorio"//
const btnLamparaEscritorio = document.querySelector(".btn1LamparaEscritorio")

btnLamparaEscritorio.addEventListener('click', ()=>{
    arrayItems.filter((prod)=>{
        return prod.categoria  == "escritorio"
        })
        renderizadoTienda(filtrarCatEscritorio);
        console.log(filtrarCatEscritorio)
})

//filtrar por precio "mayor a menor"//
const btnMayorAMenor = document.querySelector(".btnMayorAMenor")

btnMayorAMenor.addEventListener('click', ()=>{
    arrayItems.sort(( a, b) => a.price - b.price)
    console.log(ordenarMayorAMenor);
    renderizadoTienda(ordenarMayorAMenor);
})


//filtrar por precio "menor a mayor"//
const btnMenorAMayor = document.querySelector(".btnMenorAMayor")

btnMenorAMayor.addEventListener('click', ()=>{
    arrayItems.sort(( a, b) => a.price - b.price)
    console.log(ordenarMenorAMayor);
    renderizadoTienda(ordenarMenorAMayor);
})

