
alert("A continuación podrás realizar tu pedido")
let hamburguesaSimple = 150
let hamburguesaDoble = 250
let hamburguesaVege = 200
let helado = 50
let envio = 50

function pedirHamburguesa() {
    let hamburguesa = prompt("1-hamburguesa simple. 2-Hamburguesa doble quarto de libra. 3-Hamburguesa vegetariana")
    if (hamburguesa == "hamburguesa simple") {
        resultado = hamburguesaSimple
        alert("El costo de tu hamburguesa es $" + hamburguesaSimple)
    } else if (hamburguesa == "hamburguesa doble") {
        resultado = hamburguesaDoble;
        alert("El costo de tu hamburguesa es $" + hamburguesaDoble)
    } else if (hamburguesa == "hamburguesa vegetariana") {
        resultado = hamburguesaVege;
        alert("El costo de tu hamburguesa es $" + hamburguesaVege)
    } else {
        alert("Vuelve a elegir tu hamburguesa")
    }
    return hamburguesa
}

function agregarPostre() {
    let postre = prompt("Deseas agregar postre?")
    if (postre === "si") {
        alert("Se agrego postre a tu pedido $" + helado);
    } else if (postre === "no") {
        alert("No se agrego postre a tu pedido");
    } else {
        alert("Vuelve a ingresar")
    }
    return postre
}

function agregarEnvio() {
    let sumarEnvio = prompt("Ingresa el costo de envio")
    while (sumarEnvio != 50) {
        sumarEnvio = prompt("vuelve a ingresar el costo de envio")
    }
    return sumarEnvio
}

function pedidoTotal(hamburguesa, postre, sumarEnvio) {
    if (hamburguesa && postre && sumarEnvio) {
        const total = (hamburguesa + postre + sumarEnvio)
        return total
    }
}

const hamburguesa = pedirHamburguesa()
const postre = agregarPostre()
const sumarEnvio = agregarEnvio()
const resultadoTotal = pedidoTotal(hamburguesa, postre, sumarEnvio)
alert("tu pedido es " + resultadoTotal)

for (let i = 0; i < 2; i++) {
    alert((i + 1) + " cuotas sin interes. ")
}

