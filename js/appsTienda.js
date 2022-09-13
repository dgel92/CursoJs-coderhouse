import {arrayItems} from "../js/datos.js";

const productosContainer = document.querySelector("#contenedor-productos")


function renderPortada(array){
    filtrar.forEach((producto) =>{
        const div = document.createElement('div')
        div.className = "product-card"
        div.innerHTML = `
                        <img src=${producto.img} class="card_ph" alt="">
                        <div class="product-tittle">
                        <h2>${producto.nombre}</h2>
                        </div>
                        <button id="verMas-${producto.id}" class="verMas">Ver mas</button>
                        `
            productosContainer.append(div)
    
        const btnVerMas = document.querySelector(`#verMas-${producto.id}`)
        btnVerMas.addEventListener('click', ()=>{
        productoSeleccionado(producto.id)
        setTimeout(function(){
            location.href= "./pages/itemDetailContainer.html";
        }, 1000);
            })
    }) 
    }
    

    //funcion para localstorage
    const prod = []
    const productoSeleccionado = (id) =>{
        const producto  = baseDatos.find((prod) => prod.id === id)
        const productoJSON = JSON.stringify(producto)
        localStorage.setItem('producto', productoJSON)
        console.log(producto)
        console.log(JSON.stringify(productoJSON))
    }
renderPortada(arrayItems)




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















/*
const btnLamparaDePie = document.querySelector(".btn1LamparaDePie")
btnLamparaDePie.addEventListener('click', ()=>{
    const filtrarLamparaPie = baseDatos.filter((prod)=>{
    return prod.categoria == "lampara de pie";
    })
    console.log(filtrarLamparaPie)
    contenedorFiltrar.innerHTML = ""
    renderizado(filtrarLamparaPie);
})

const btnLamparaEscritorio = document.querySelector(".btn1LamparaEscritorio")
btnLamparaEscritorio.addEventListener('click', ()=>{
    const filtrarLamparaEscritorio = baseDatos.filter((prod)=>{
        return prod.categoria == "escritorio"
    })
    console.log(filtrarLamparaEscritorio)
    contenedorFiltrar.innerHTML = ""
    renderizado(filtrarLamparaEscritorio)
})

const btnMayorAMenor = document.querySelector(".btnMayorAMenor")
    btnMayorAMenor.addEventListener('click', ()=>{
    const filrarMayor = baseDatos.sort(( a, b) => b.price - a.price)
    console.log(filrarMayor)
    renderizado(filrarMayor)
})

const btnMenorAMayor = document.querySelector(".btnMenorAMayor")
    btnMenorAMayor.addEventListener('click', ()=>{
        const filrarMenor = baseDatos.sort(( a, b) => a.price - b.price)
        console.log(filrarMenor)
        renderizado(filrarMenor)
})

const btnBorrarCategorias = document.querySelector(".btnBorrarCategorias")
btnBorrarCategorias.addEventListener('click', ()=>{
    const borrarFiltros = baseDatos
    console.log(borrarFiltros)
    renderizado(borrarFiltros)
})
*/





















/*const btnVerMas = document.querySelector(`producto.id`)
    btnVerMas.addEventListener('click', () => {
    setTimeout(function(){
        location.href="./";
    }, 1000 );
    
})





















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
