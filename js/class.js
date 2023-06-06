class Orden {
    constructor(solicitudDePedido) {
        this.pedido = solicitudDePedido
    }
    totalPedido() {
        if (this.pedido.length > 0) {
            return this.pedido.reduce((acc, opcion)=> acc + opcion.precio, 0)
        }
    }
}