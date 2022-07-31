const items =[
    {
        id: 1,
        tittle: "DISCO DURO HDD 1TB SEAGATE BARRACUDA SATA III",
        imgUrl: "./multimedia/img/1586464173_disc1.jpg",
        categoria: ["discosMecanicos"],
        portada: true,
        stock: 5,
        price: 5820,
    },
    {
        id: 2,
        tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE",
        imgUrl: "https://www.venex.com.ar/products_images/1586464610_disc3.jpg",
        categoria: ["discosMecanicos"],
        portada: false,
        stock: 8,
        price: 6040,
    },
    {
        id: 3,
        tittle: "DISCO DURO HDD 1 TB WESTERN DIGITAL WD SATA III 64MB/S PURPLE",
        imgUrl: "https://www.venex.com.ar/products_images/1586464823_disc5.jpg",
        categoria: ["discosMecanicos"],
        portada: false,
        stock: 10,
        price: 6790,
    },
    {
        id: 4,
        tittle: "DISCO SOLIDO SSD 120GB ADATA SATA III SU650",
        imgUrl: "https://www.venex.com.ar/products_images/1576699630_asu650ss120gtr.jpg",
        categoria: ["discosSolidos"],
        portada: false,
        stock: 5,
        price: 3095,
    },
    {
        id: 5,
        tittle: "DISCO SOLIDO SSD 120GB GIGABYTE SATA III GP-GSTF",
        imgUrl: "https://www.venex.com.ar/products_images/1537278903_2018070417395493_big.png",
        categoria: ["discosSolidos"],
        portada: true,
        stock: 8,
        price: 3199,
    },
    {
        id: 6,
        tittle: "DISCO SOLIDO SSD 240GB ADATA M2 SATA ASU650",
        imgUrl: "https://www.venex.com.ar/products_images/1612471859_productgallery7028.jpg",
        categoria: ["discosSolidos"],
        portada: false,
        stock: 10,
        price: 4899,
    },
    {
        id: 7,
        tittle: "FUENTE GIGABYTE 450W P450W 80+ BRONZE",
        imgUrl: "https://www.venex.com.ar/products_images/1613753649_concepto-4628218.png",
        categoria: ["fuentesDePoder"],
        portada: false,
        stock: 5,
        price: 7490,
    },
    {
        id: 8,
        tittle: "FUENTE AEROCOOL DORADO 750W 80+ GOLD ARGB",
        imgUrl: "https://www.venex.com.ar/products_images/1638552320_fuente.png",
        categoria: ["fuentesDePoder"],
        portada: false,
        stock: 8,
        price: 15490,
    },
    {
        id: 9,
        tittle: "FUENTE CORSAIR CX750F 750W FULL MODULAR RGB 80+ BRONZE",
        imgUrl: "https://www.venex.com.ar/products_images/1630702216_-base-cxf-rgb-blk-psu-2020-config-gallery-cx750pl,f-rgb-black-01.png",
        categoria: ["fuentesDePoder"],
        portada: true,
        stock: 10,
        price: 21990,
    },
    {
        id: 10,
        tittle: "GABINETE CORSAIR ICUE 4000X RGB TG BLACK",
        imgUrl: "https://www.venex.com.ar/products_images/1640625716_1.png",
        categoria: ["gabinetes"],
        portada: false,
        stock: 5,
        price: 22490,
    },
    {
        id: 11,
        tittle: "GABINETE CORSAIR 5000D TG WHITE",
        imgUrl: "https://www.venex.com.ar/products_images/1649182836_sdfgsdgfdfg.png",
        categoria: ["gabinetes"],
        portada: false,
        stock: 8,
        price: 27999,
    },
    {
        id: 12,
        tittle: "GABINETE AEROCOOL ATOMIC",
        imgUrl: "https://www.venex.com.ar/products_images/1648655727_hfghfgh.png",
        categoria: ["gabinetes"],
        portada: false,
        stock: 10,
        price: 6599,
    },
    
]

const contenedorProductos=document.getElementById('contenedor-productos');
const contenedorCarrito=document.getElementById('carrito-contenedor');



const mostrarItems = (array, funcion) => {
    for (const elemento of array){
        funcion(elemento)
    }
}

CrearItems(items)
function CrearItems(array){
    for (const item of array){
        let div = document.createElement('div');
        div.className=`producto`;
        div.innerHTML=`<div class ='wrapper'>
                            <div class ='card'>
                            <img src=${item.imgUrl}>
                            <div class='card_text'>
                                <h1>${item.tittle}</h1>
                                <h4>${item.categoria}</h4>
                                <h3> $ ${item.price}</h3>
                                <p>Stock =${item.stock}</p>
                                </div>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div);
    }
}























































