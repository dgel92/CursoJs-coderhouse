const section = document.querySelector("#section-box-card")
const temp = document.querySelector("template")
const card = temp.content.querySelector("div")


const prodItemDetail= [];
datosLocalStorage();
function datosLocalStorage (){
    let nombre = JSON.parse(localStorage.getItem("producto"));
    console.log(nombre);
    prodItemDetail.push(nombre)
    console.log(prodItemDetail)
}


function renderizado(prodItemDetail){
    prodItemDetail.forEach((elm)=>{
        const cardClonar = card.cloneNode(card,true)
        cardClonar.children[0].src = elm.img
        cardClonar.children[1].innerText = elm.nombre
        cardClonar.children[2].innerText = elm.precio
        cardClonar.children[3].innerText = elm.descripcion
        section.appendChild(cardClonar)
        })
        localStorage.clear()
    }

renderizado(prodItemDetail);


const botonComprar = document.querySelector("#compra")
botonComprar.addEventListener('click', ()=>{
Swal.fire({
    position: 'bottom-end',
    icon: 'success',
    title: 'Añadiendo al carrito',
    showConfirmButton: false,
    timer: 2000,
    toast: true,
    })
})