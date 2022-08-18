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