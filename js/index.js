const cuotas = 2;

function pagos(){
    alert("Hasta dos cuotas sin recargo")
    for ( let i = 0; i < cuotas; i++){
        console.log((i + 1) + " cuotas sin interes.")
    }
}

alert("Viernes envios gratis")

let cuidad = confirm("Eres de Montevideo?");
alert(cuidad);

let hamburguesaSimple = 150
let hamburguesaDoble = 250
let hamburguesaVege = 200
let helado = 50
let envio = 50

alert("Elige tu hamburguesa")
let hamburguesa = prompt("1-hamburguesa simple. 2-Hamburguesa doble quarto de libra. 3-Hamburguesa vegetariana")
    if (hamburguesa == "1"){
        resultado = hamburguesaSimple;
        alert("El costo de tu hamburguesa es $" + hamburguesaSimple);
    } else if (hamburguesa == "2"){
        resultado = hamburguesaDoble;
        alert("El costo de tu hamburguesa es $" + hamburguesaDoble);
    } else if (hamburguesa == "3"){
        resultado = hamburguesaVege;
        alert("El costo de tu hamburguesa es $" + hamburguesaVege);
    } else {
        alert("Vuelve a elegir tu hamburguesa");
    }


let postre = prompt("Deseas agregar postre?")
    if (postre === "si"){
        alert("Se agrego postre a tu pedido $" + helado);
    } else if (postre === "no"){
        alert("No se agrego postre a tu pedido");
    } else {
        alert("Vuelve a ingresar")
    }


