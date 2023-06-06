const pedido = []
const opcion = [{tipo: 'hamburguesa simple', precio: 150, codigo: 1},
                {tipo: 'hamburguesa doble', precio: 250, codigo: 3},
                {tipo: 'hamburguesa vegetariana', precio: 150, codigo: 3},
                {tipo: 'postre', precio: 50, codigo: 4},
                {tipo: 'envio', precio: 50, codigo: 5}]

function buscarOpcion(codigo) {
    let resultado = opcion.find((opcion)=> opcion.codigo === parseInt(codigo))
    return resultado
}

function finalizarPedido() {
    const cena = new Orden(pedido)
    alert ('Tu pedido es ' + cena.totalPedido() + ' que lo disfrutes!')
}

function agregarAlPedido() {
    let codigo = prompt('Elige tus favoritos. 1-hamburguesa simple 2-hamburguesa doble 3-hamburguesa vegetariana 4-postre 5-envio')
    let hamburguesaAgregada = buscarOpcion(codigo)
    if (hamburguesaAgregada !== undefined) {
        pedido.push(hamburguesaAgregada)
        alert (hamburguesaAgregada.tipo + ' se agrego al menú')
        let respuesta = confirm('Desea agregar otra opción?')
        if (respuesta === true) {
            agregarAlPedido()
        } else {
            finalizarPedido()
        }
    }
}

agregarAlPedido()