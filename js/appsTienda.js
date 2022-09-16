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

const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")
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
    btnMayorAMenor.addEventListener('click', ()=>{
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
})



/*minuto 39 after array y funciones de orden superior*/










/*const btnVerMas = document.querySelector(`producto.id`)
    btnVerMas.addEventListener('click', () => {
    setTimeout(function(){
        location.href="./";
    }, 1000 );
    
})








const listaPosts = document.querySelector(".pruebaAPI")

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    
    const li = document.createElement('li')
    li.innerHTML=`
                <h3>${data.title}</h3>
                <p>${data.userId}</p>
    `
    listaPosts.append(li)
    })


/*ajax y fetch 01:16 clase*/
















/*const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")
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
