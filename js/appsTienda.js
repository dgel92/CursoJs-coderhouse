let baseDatos =[
    {
    id: 1,
    nombre: 'lampara 1',
    img: "../multimedia/img/lampara1.jpg",
    categoria: "escritorio",
    portada: true,
    stock: 5,
    precio: 5820,
    descripcion: 'ñonñonñon',
    },
    {
    id: 2,
    nombre: 'lampara 2',
    img: "../multimedia/img/lampara2.jpg",
    categoria: "escritorio",
    portada: false,
    stock: 8,
    precio: 6040,
    descripcion: 'ñonñonñon',
    },
    {
    id: 3,
    nombre: 'lampara 3',
    img: "../multimedia/img/lampara3.jpg",
    categoria: "escritorio",
    portada: true,
    stock: 5,
    precio: 5040,
    descripcion: 'ñonñonñon',
    },
    {
    id: 4,
    nombre: 'lampara 4',
    img: "../multimedia/img/lampara4.jpg",
    categoria: "escritorio",
    portada: false,
    stock: 8,
    precio: 7040,
    descripcion: 'ñonñonñon',
    },
    {
    id: 5,
    nombre: 'lampara 5',
    img: "../multimedia/img/lampara5.jpg",
    categoria: "lampara de pie",
    portada: true,
    stock: 18,
    precio: 16040,
    descripcion: 'ñonñonñon',
    }
]

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContainer = document.querySelector('#carrito-contenedor')
const btnVaciar = document.querySelector("#vaciarCarrito")
const contadorCarrito = document.querySelector("#contadorCarrito")
const contenedorFiltrar = document.querySelector("#contenedorFiltrar")


function renderizado(array){

    baseDatos.forEach((product)=>{
        const div = document.createElement('div')
        div.className = "product-card"
        div.innerHTML = `
                        <img src=${product.img} class="card_ph" alt="">
                        <h2 class="product-tittle">${product.nombre}</h2>
                        <h3 class="product-price">precio ${product.precio}</h3>
                        <p class="product-detail">${product.descripcion}</p>
                        <button id="agregar-${product.id}" class=btn btn-primary>Ver mas</button>
                        `
        productosContainer.append(div)
        
        const btnVerMas = document.querySelector(`#agregar-${product.id}`)
        btnVerMas.addEventListener('click', ()=>{
        productoSeleccionado(product.id)
        setTimeout(function(){
            location.href= "../pages/itemDetailContainer.html";
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
renderizado(baseDatos)




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
