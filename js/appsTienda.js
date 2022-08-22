import {arrayItems} from "../js/datos.js";

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


const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")
btnLamparaDePie.addEventListener('click', ()=>{
    const filtrarLamparaPie = arrayItems.filter((prod)=>{
    let nodAntiguo = document.querySelector("#card-tienda")
    nodAntiguo.remove();
    return prod.categoria == "lampara de pie";
    })
    console.log(filtrarLamparaPie)
    renderizadoTienda(filtrarLamparaPie);
})

const btnLamparaEscritorio = document.querySelector(".btn1LamparaEscritorio")
btnLamparaEscritorio.addEventListener('click', ()=>{
    const filtrarLamparaEscritorio = arrayItems.filter((prod)=>{
        let nodAntiguo = document.querySelector("#card-tienda")
        nodAntiguo.remove();
        return prod.categoria == "escritorio"
    })
    console.log(filtrarLamparaEscritorio)
    renderizadoTienda(filtrarLamparaEscritorio)
})

const btnBorrarCategorias = document.querySelector(".btnBorrarCategorias")
btnBorrarCategorias.addEventListener('click', ()=>{
    let nodAntiguo= document.querySelector("#card-tienda")
    nodAntiguo.remove()
    console.log(arrayItems)
    renderizadoTienda(arrayItems)
}) 



const btnMayorAMenor = document.querySelector(".btnMayorAMenor")
    btnMayorAMenor.addEventListener('click', ()=>{
    const filrarMayor = arrayItems.sort(( a, b) => b.price - a.price)
    let nodAntiguo = document.querySelector("#card-tienda")
    nodAntiguo.remove();
    console.log(filrarMayor)
    renderizadoTienda(filrarMayor)
})

const btnMenorAMayor = document.querySelector(".btnMenorAMayor")
    btnMenorAMayor.addEventListener('click', ()=>{
        const filrarMenor = arrayItems.sort(( a, b) => a.price - b.price)
        let nodAntiguo = document.querySelector("#card-tienda")
        nodAntiguo.remove();
        console.log(filrarMenor)
        renderizadoTienda(filrarMenor)
})



















const btnVermas = document.querySelector("#btnVerMas")
btnVermas.addEventListener('click', () => {
    setTimeout(function(){
        location.href="../pages/itemDetailContainer.html";
    }, 1000 );
    })


















    /*btnLamparaDePie.addEventListener('click', ()=>{
    arrayItems.filter((prod)=>{
        return prod.categoria  == "lampara de pie"
        })
        let nodeAntiguo  = document.querySelector(".product-tienda");
        nodeAntiguo.remove();
        renderizadoTienda(filtrarCatlamparaDePie);
        console.log(filtrarCatlamparaDePie)
})*/

/*const btnLamparaEscritorio = document.querySelector(".btn1LamparaEscritorio")
btnLamparaEscritorio.addEventListener('click', ()=>{
    arrayItems.filter((prod)=>{
        return prod.categoria  == "escritorio"
        })
        let nodeAntiguo  = document.querySelector(".product-tienda");
        nodeAntiguo.remove();
        renderizadoTienda(filtrarCatEscritorio);
        console.log(filtrarCatEscritorio)
})*/

/*const btnMayorAMenor = document.querySelector(".btnMayorAMenor")

btnMayorAMenor.addEventListener('click', ()=>{
    let nodeAntiguo  = document.querySelector(".product-card");
    nodeAntiguo.remove();
    arrayItems.sort(( a, b) => a.price - b.price)
    console.log(ordenarMayorAMenor);
    renderizadoTienda(ordenarMayorAMenor);
})*/


//filtrar por precio "menor a mayor"//
/*const btnMenorAMayor = document.querySelector(".btnMenorAMayor")

btnMenorAMayor.addEventListener('click', ()=>{
    let nodeAntiguo  = document.querySelector(".product-card");
    nodeAntiguo.remove();
    arrayItems.sort(( a, b) => a.price - b.price)
    console.log(ordenarMenorAMayor);
    renderizadoTienda(ordenarMenorAMayor);
})*/
