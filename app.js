let precioItem;
let nombreItem;
let cantidad;
let nombreUser;
let total = 0;
let opcion; /// 'si' 'no'

alert('Bienvenido al Portal de Ventas Autopartes C.A');
nombreUser = prompt('Ingrese su Usuario');

do {
    nombreItem = prompt("Ingrese nombre del producto");
    precioItem = Number(prompt("Ingrese precio"));

    if (precioItem < 0) {
        alert('Precio invalido');
    } else {
        cantidad = parseInt(promt("Ingrese cantidad"));
        if (cantidad <= 0) {
            alert('Cantidad invalida');
        } else {
            total = total + cantidad * precioItem;

        }
    }

    opcion = prompt("Desea ingresar otro item?");


} while (opcion == 'si');

alert(`El total para su compra ${nombreUser} es de: $${total}`);
//alert('El total para ' + nombreUser + 'es de'  + total);

