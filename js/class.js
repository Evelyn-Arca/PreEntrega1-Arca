const productosGastronomicos = [
    {id : 1, imagen : "/img/hamburguesa simple.png" , nombre : "simple", precio : 150},
    {id : 2, imagen : "/img/hamburguesa doble.png", nombre : "doble", precio : 250},
    {id : 3, imagen : "/img/hamburguesa vegetariana.png", nombre : "vegetariana", precio : 200},
    {id : 4, imagen : "/img/postre.jfif", nombre : "postre", precio : 50},
    {id : 5, imagen : "/img/envio.png", nombre : "envio", precio : 50}
]

const guardarEnLocalStorage = ()=> {
    if (comprar.length > 0) {
        localStorage.setItem('Comprar', JSON.stringify(comprar))
    }
}

const recuperarComprasDeLocalStorage = ()=> {
    if (localStorage.getItem('Comprar')) {
        return JSON.parse(localStorage.getItem('Comprar'))
    } else {
        return []
    }
}

const comprar = recuperarComprasDeLocalStorage()

const mostrarMensajes = (msg, bgcolor)=> {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}