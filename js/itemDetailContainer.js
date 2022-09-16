const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', ()=>{
    // contenedorModal.classList.toggle('modal-active')
    botonCerrar.click()
})

modalCarrito.addEventListener('click', (event)=>{
    // console.log(event)
    event.stopPropagation()
})


import {arrayItems} from "../js/datos.js";

const productosContainer = document.querySelector("#contenedor-productos")
const btnVaciar = document.querySelector('#vaciarCarrito')
const contadorCarrito = document.querySelector('#contadorCarrito')
const carritoContainer = document.querySelector('#carrito-contenedor')
const btnEliminarproducto= document.querySelector('#eliminarProducto')


const prodItemDetail= [];
datosLocalStorage();
function datosLocalStorage (){
    let nombre = JSON.parse(localStorage.getItem("producto"));
    console.log(nombre);
    prodItemDetail.push(nombre)
    console.log(prodItemDetail)
}

function renderItem(prodItemDetail){
    prodItemDetail.forEach((producto)=>{
        const div = document.createElement('div')
        div.className = "producto"
        div.innerHTML= `
                        <img src=${producto.img} class="card_ph" alt="">
                        <h2 class="product-tittle">${producto.nombre}</h2>
                        <h3 class="product-price">precio ${producto.precio}</h3>
                        <p class="product-detail">${producto.descripcion}</p>
                        <button id="agregar-${producto.id}"class=btn btn-primary>Agregar al carrito</button>
                        `
        productosContainer.append(div)

        const btnAgregar= document.querySelector(`#agregar-${producto.id}`) 
        btnAgregar.addEventListener('click', ()=>{
            agregarProducto(producto.id)
            renderCarrito()
        })
    })
}

renderItem(prodItemDetail);

const carrito = []

const agregarProducto = (id) =>{
    const producto = arrayItems.find((prod) => prod.id === id)
    carrito.push(producto)
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderCarrito()
}

const elminarDelCarrito = (id) => {
    const producto = carrito.find((prod) => prod.id === id)
    producto.cantidad -= 1

    if (producto.cantidad === 0) {
        const indice = carrito.indexOf(producto)
        carrito.splice(indice, 1)
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    toastEliminar()
    renderCarrito()
}

const vaciarCarrito = () => {

    Swal.fire(
        {
            title: 'Está seguro?',
            text: 'Esto no es reversible',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'No, cancelar'
        }
    ).then( (result) => {
        if (result.isConfirmed) {
            carrito.length = 0
            localStorage.setItem('carrito', JSON.stringify(carrito))
        
            Toastify({
                text: 'Se vació el carrito',
                time: 3000
            }).showToast()

            renderCarrito()
        }
    } )
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContainer.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = "productoEnCarrito"

        div.innerHTML = `
                    <p>${prod.nombre}</p>
                    <p>Precio: $${prod.precio}</p>
                    <p>Cantidad: ${prod.cantidad}</p>
                    <button onclick="elminarDelCarrito(${prod.id})" class="boton-eliminar">delete</button>
        `

        carritoContainer.append(div)
    })

    actualizarCantidad()
    actualizarTotal()
}

/*const botonComprar = document.querySelector("#compra")
botonComprar.addEventListener('click', ()=>{
Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'Añadiendo al carrito',
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    })
})*/

renderCarrito()























/*min 57 afterclass*/

/*
const listaPosts = document.querySelector(".pruebaAPI")

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    
    const li = document.createElement('li')
    li.innerHTML=`
                <h3>${data.title}</h3>
                <p>${data.body}</p>
    `
    listaPosts.append(li)
    })*/
