


/*formulario - inicio*/

const inputNombre = document.querySelector('#input-nombre')
const inputApellido = document.querySelector('#input-apellido')
const inputTelefono= document.querySelector('#input-direccion')
const inputEmail = document.querySelector('#input-email')
const inputText = document.querySelector('#input-text')
    
const formulario = document.querySelector('#formulario');

inputNombre.addEventListener('change', () =>{
    console.log( inputNombre.value )
})

inputApellido.addEventListener('change', () =>{
    console.log( inputApellido.value )
})

inputTelefono.addEventListener('change', () =>{
    console.log( inputTelefono.value )
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
    const Telefono = inputTelefono.value
    const email = inputEmail.value
    const text = inputText.value

    if (nombre.length < 5 || apellido.length < 5 || Telefono.length < 5){
        alert("Datos invalidos")
        return
    }

    const usuario = {
        nombre: nombre,
        apellido: apellido,
        Telefono: Telefono, 
        email: email,
        text: text,
    }

    consultasRegistradas.push(usuario)
    console.log(consultasRegistradas)
})

/*formulario - fin*/


const inputNombre2 = document.querySelector("#input-nombre");
const inputRol2 = document.querySelector("#input-rol");
const btnGuardar = document.querySelector("#btn-guardar");

const usuarios = []

const guardarUsuario = () => {
    const valueNombre = inputNombre2.value
    const valueRol = inputRol2.value

    usuarios.push({
        nombre: valueNombre,
        rol: valueRol
    })
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    console.log(usuarios)
    valueNombre=' '
    valueRol= ' '
}

btnGuardar.addEventListener('click', guardarUsuario)