const tableBody = document.querySelector("tbody")
const inputSearch = document.querySelector("input#inputSearch")

const cart = []

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
    activarClickEnBotonesComprar()
}

const activarClickEnBotonesComprar = ()=> {
    const botonesComprar = document.querySelectorAll('button.button.button-outline.button-big-emoji')
    for (let botonComprar of botonesComprar) {
        botonComprar.addEventListener('click', ()=> {
            let resultadoProducto = productosGastronomicos.find((prod)=> prod.id === parseInt(botonComprar.id))
            cart.push(resultadoProducto)
            guardarEnLocalStorage()
            mostrarMensajes(`El producto ${resultadoProducto.nombre} se guardó en carrito...`, 'pink')
            mostrarCarrito()
        })
    }
}

const mostrarCarrito = () => {
    const carrito = document.querySelector('#carrito')
    carrito.innerHTML = ''
    let total = 0 
    if (cart.length > 0) {
        cart.forEach((producto) => {
            carrito.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`
            total += producto.precio
        })
        carrito.innerHTML += `<p>Total: $${total}</p>` 
    } else {
        carrito.innerHTML = '<p>No hay productos en el carrito</p>'
    }
}

const finalizarCompraButton = document.querySelector('#finalizarCompra');
finalizarCompraButton.addEventListener('click', () => {
  cart.length = 0;
  mostrarMensajes('Compra finalizada!', 'pink');
  mostrarCarrito();
});

cargarProductos(productosGastronomicos)
mostrarCarrito()


