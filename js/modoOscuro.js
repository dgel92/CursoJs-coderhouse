/*Modo oscuro*/
let darkModelLs = localStorage.getItem('dark')
if (darkModelLs === "true"){
    document.body.classList.add('dark')
}

const btnDarkMode = document.querySelector(".darkMode")

btnDarkMode.addEventListener('click', () => {
    let darkMode = localStorage.getItem('dark')
    if (darkMode === "true"){
        document.body.classList.remove('dark')
        localStorage.setItem('dark',false)
    }else{
        document.body.classList.add('dark')
        localStorage.setItem('dark',true)
    }
})
console.log(localStorage.getItem('dark'))


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





