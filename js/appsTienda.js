import {arrayItems} from "../js/datos.js";

const productosContainer = document.querySelector('#contenedor-productos')

function renderizado(array){

    arrayItems.forEach((product)=>{
        const div = document.createElement('div')
        div.className = "product-card"
        div.innerHTML = `
                        <img src=${product.img} class="card_ph" alt="">
                        <h2 class="product-tittle">${product.nombre}</h2>
                        <h3 class="product-price">precio ${product.precio}</h3>
                        <p class="product-detail">alto: ${product.alto} - diametro: ${product.diametro}</p>
                        <p class="product-detail">Pantallas: ${product.pantallas}</p>
                        <button id="agregar-${product.id}" class=btn btn-primary>Ver mas</button>
                        `
        productosContainer.append(div)
        
        const btnVerMas = document.querySelector(`#agregar-${product.id}`)
        btnVerMas.addEventListener('click', ()=>{
        productoSeleccionado(product.id)
        console.log(productoSeleccionado)
        setTimeout(function(){
            location.href= "../pages/itemDetailContainer.html";
        }, 1000);
            })
        })
    }

renderizado(arrayItems)

    const prod = []
    const productoSeleccionado = (id) =>{
        const producto  = arrayItems.find((prod) => prod.id === id)
        const productoJSON = JSON.stringify(producto)
        localStorage.setItem('producto', productoJSON)
        console.log(producto)
        console.log(JSON.stringify(productoJSON))
    }


const listaFiltros = document.querySelector('.BtnCategoria')
listaFiltros.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn1LamparaDePie')){
        const filtrarLamparaPie = arrayItems.filter((prod)=>{
            return prod.categoria == "lampara de pie";
            })
            console.log(filtrarLamparaPie)
            productosContainer.innerHTML = "";
            renderizado(filtrarLamparaPie)
    }
    else if(e.target.classList.contains('btn1LamparaEscritorio')){
        const filtrarLamparaEscritorio = arrayItems.filter((prod)=>{
            return prod.categoria == "escritorio"
        })
        console.log(filtrarLamparaEscritorio)
        productosContainer.innerHTML = "";
        renderizado(filtrarLamparaEscritorio);
    }
})

const listaPrecio = document.querySelector('.Btnprecio')
listaPrecio.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btnMayorAMenor')){
        const filrarMayor = arrayItems.sort(( a, b) => b.precio - a.precio)
        console.log(filrarMayor)
        productosContainer.innerHTML = ""
        renderizado(filrarMayor)
        }
        else if(e.target.classList.contains('btnMenorAMayor')){
            const filrarMenor = arrayItems.sort(( b, a) => b.precio - a.precio)
            console.log(filrarMenor)
            productosContainer.innerHTML = ""
            renderizado(filrarMenor)
        }
    }
)








/*const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")
btnLamparaDePie.addEventListener('click', ()=>{
    const filtrarLamparaPie = arrayItems.filter((prod)=>{
    return prod.categoria == "lampara de pie";
    })
    console.log(filtrarLamparaPie)
    productosContainer.innerHTML = "";
    renderizado(filtrarLamparaPie)
})

const btnLamparaEscritorio = document.querySelector(".btn1LamparaEscritorio")
btnLamparaEscritorio.addEventListener('click', ()=>{
    const filtrarLamparaEscritorio = arrayItems.filter((prod)=>{
        return prod.categoria == "escritorio"
    })
    console.log(filtrarLamparaEscritorio)
    productosContainer.innerHTML = "";
    renderizado(filtrarLamparaEscritorio)
})

const btnMayorAMenor = document.querySelector(".btnMayorAMenor")
    btnMayorAMenor.addEventListener('click', (e) =>{
    console.log(e.target)
})
/*
const btnMayorAMenor = document.querySelector(".btnMayorAMenor")
    btnMayorAMenor.addEventListener('click', () =>{
    const filrarMayor = arrayItems.sort(( a, b) => b.precio - a.precio)
    console.log(filrarMayor)
    productosContainer.innerHTML = ""
    renderizado(filrarMayor)
})


const btnMenorAMayor = document.querySelector(".btnMenorAMayor")
    btnMenorAMayor.addEventListener('click', ()=>{
        const filrarMenor = arrayItems.sort(( b, a) => b.precio - a.precio)
        console.log(filrarMenor)
        productosContainer.innerHTML = ""
        renderizado(filrarMenor)
})

const btnBorrarCategorias = document.querySelector(".btnBorrarCategorias")
btnBorrarCategorias.addEventListener('click', ()=>{
    const borrarCategoria = arrayItems
    console.log(borrarCategoria);
    productosContainer.innerHTML = ""
    renderizado(borrarCategoria)





    
})*/