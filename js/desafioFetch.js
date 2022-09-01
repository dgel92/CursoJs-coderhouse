fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
    title: 'hola mundo',
    body: 'mensaje de prueba 2',
    userId: 1,
}),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



fetch('../js/data.json')
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data)
    })

const pedirPokemon= (query)=>{

const pokemonContainer = document.querySelector('#pokemon')
const btnSiguiente = document.querySelector('#btnSiguiente')
const btnAnterior = document.querySelector('#btnAnterior')


fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
.then((resp)=> resp.json())
.then((data)=>{
    console.log(data)

    pokemonContainer.innerHTML=`
                                <h3>${data.name}</h3>
                                <img src=${data.sprites.front_default} alt=${pokemon.name}/>
                                `
    })
}

let id = 1
btnSiguiente.addEventListener('click', ()=>{
    if(id === 200) return
    id++
    pedirPokemon(id)
})
btnAnterior.addEventListener('click', ()=>{
    if(id === 1) return
    id--
    pedirPokemon(id)
})


const form = document.querySelector("#form-busqueda")
const inputBusqueda = document.querySelector("#buscarPokemon")

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const busqueda = inputBusqueda.value
    console.log(busqueda)
    pedirPokemon(busqueda)
})
pedirPokemon(id)