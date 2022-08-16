


/*formulario - inicio*/

const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputDireccion= document.querySelector('#input-direccion')
const inputEmail = document.querySelector('#input-email')
const inputText = document.querySelector('#input-text')
    
const formulario = document.querySelector('#formulario');

inputNombre.addEventListener('change', () =>{
    console.log( inputNombre.value )
})

inputApellido.addEventListener('change', () =>{
    console.log( inputApellido.value )
})

inputDireccion.addEventListener('change', () =>{
    console.log( inputDireccion.value )
})

inputEmail.addEventListener('change', () =>{
    console.log( inputEmail.value )
})
inputText.addEventListener('change', () =>{
    console.log( inputText.value )
})

const consultasRegistradas = [];

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const direccion = inputDireccion.value
    const email = inputEmail.value
    const text = inputText.value

    if (nombre.length < 5 || apellido.length < 5 || direccion.length < 5){
        alert("Datos invalidos")
        return
    }

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion, 
        email: email,
        text: text,
    }

    consultasRegistradas.push(usuario)
    console.log(consultasRegistradas)
})

/*formulario - fin*/
