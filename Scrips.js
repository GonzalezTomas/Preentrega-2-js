let nombre = prompt("¿Cual es tu nombre?");
let apellido = prompt("¿Cual es tu apellido?");
let Precio = 850;

let TotalDeCompra = 0;

function prueba() {
    function NombreCompleto() {
        nombre = prompt("¿Cual es tu nombre?");

        apellido = prompt("¿Cual es tu apellido?");
    }
    if ((nombre) && (apellido)) {
        alert("Hola " + nombre + " " + apellido + " bienvenido/a");
    }
    else {
        alert("Por favor ingresa tu nombre completo.")
        NombreCompleto();
        prueba();
    }
}
prueba();


function Chocolates(){let ProductosChocolate = parseInt(prompt("¿Cuantos chocolates quieres llevar? Cada chocolate vale: $850. Si compra 5 o más tiene un descuento de $500"));
console.log(ProductosChocolate);

if (ProductosChocolate >= 1 && ProductosChocolate <= 4) {

    for (let index = 1; index <= ProductosChocolate; index++) {

        TotalDeCompra = TotalDeCompra + Precio;
    }

    alert("El precio total es: " + " $" + TotalDeCompra)

}
else if (ProductosChocolate >= 5) {
    for (let index = 1; index <= ProductosChocolate; index++) {

        TotalDeCompra = TotalDeCompra + Precio;
    }

    TotalDeCompra = TotalDeCompra - 500;

    alert("El precio total es: " + " $" + TotalDeCompra)

}
else {
    alert("Por favor ingrese una cantidad de producto.")
    Chocolates();
}
}

Chocolates();

let productos = []
function eleccion() {
    let ask = prompt("¿Qué productos desea llevar? tenes chocolate, alfajor, huevo de chocolote, kit oreo...");
    while (ask !== "" && ask !== undefined && ask !== null) {
        productos.push(ask);
        ask = prompt("¿Qué otro producto deseas llevar? Si ya terminó de elegir, pulse ENTER u 'OK'");
    }
}
function makeList() {
    let prodList = '';
    for (let index = 0; index < productos.length; index++) {
        if (index == 0 || index == productos.length) {
            prodList = prodList + productos[index].toString();
        } else {
            prodList = prodList + ", " + productos[index].toString();
        }
    }
    if (prodList.length == 0) {
        alert("Agregue un producto");
        eleccion();
        makeList();
    } else {
        alert("Los productos que vas a llevar son: " + prodList + ". Pronto serás contactado. ¡Muchas gracias!");
    }
}

eleccion();
makeList();










