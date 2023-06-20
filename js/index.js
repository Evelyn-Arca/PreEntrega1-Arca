const tableBody = document.querySelector("tbody")
const inputSearch = document.querySelector("input#inputSearch")

const armarFilaHTML = (prod)=> {
    return `<tr>
                <td class="class-table-number">${prod.id}</td>
                <td class="image"><img src="${prod.imagen}" tittle="titulo de la imagen"></td>
                <td>$ ${prod.precio}</td>
                <td> ${prod.nombre}</td>
                <td><button id="${prod.id}" class="button button-outline button-big-emoji">🤍</button></td>
            </tr>`
}

const filtrarProductos = ()=> {
    let arrayResultado = productosGastronomicos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
inputSearch.addEventListener('search', filtrarProductos)

const cargarProductos = (array)=> {
    tableBody.innerHTML = ''
    array.forEach((producto) => {
        tableBody.innerHTML += armarFilaHTML(producto)
    })
    activarClickEnBotonesFav()
}

const activarClickEnBotonesFav = ()=> {
    const botonesFav = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    for (let botonFav of botonesFav) {
        botonFav.addEventListener('click', ()=> {
            let resultadoProducto = productosGastronomicos.find((prod)=> prod.id === parseInt(botonFav.id))
            favoritos.push(resultadoProducto)
            guardarEnLocalStorage()
            mostrarMensajes(`El producto ${resultadoProducto.nombre} se guardó en favoritos...`, 'pink')
        })
    }
}

cargarProductos(productosGastronomicos)


