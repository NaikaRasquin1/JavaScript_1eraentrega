const autos = [
    { marca: "Toyota", modelo: "Corolla", anio: 2021, precio: 25000000 },
    { marca: "Honda", modelo: "Civic", anio: 2022, precio: 28000000 },
    { marca: "Ford", modelo: "Mustang", anio: 2022, precio: 4000000 },
    { marca: "Nissan", modelo: "Sentra", anio: 2021, precio: 22000000 },
    { marca: "Chevrolet", modelo: "Camaro", anio: 2022, precio: 4500000 },
];

let autoSeleccionado;
let carritoCompra = [];
let totalValorCarrito = 0;
let seleccionCategoria;
let carritoVacio = "";

alert("Bienvenido a Auto Partes Rasquin spa.");
iniciarStore();

function iniciarStore() {
    seleccionCategoria = Number(
        prompt(
 `Favor selecciona la categoria de tu interés:
  1. Autos nuevos
  2. Autos usados
  3. accesorios  ${carritoVacio}
  4. Salir`

        )
    );
    switch (seleccionCategoria) {
      
        case 1:
            agregarAlCarritoProducto(autos);
            break;
        case 2:
            agregarAlCarritoProducto(autos.filter(auto => auto.anio < 2022));
            break;
        case 3:
            agregarAccesorios();
            break;
     
        case 4:
            alert("Gracias por visitarnos, vuelve pronto");
            break;
     
        default:
            alert(
                `No seleccionaste una opción valida, seras redireccionado a la tienda`
            );
            iniciarStore();
            break;
    }
}

function agregarAlCarritoProducto(itmes) {
    let seleccionProducto = Number(
        prompt(
            `Estos son nuestros 
            ${itmes.length} 
            autos disponibles. Ingresa el número correspondiente al que deseas comprar:\n${listarProductos(itmes)}`
        )
    );
    if (seleccionProducto <= 0 || seleccionProducto > itmes.length) {
        alert(`No seleccionaste una opción valida, seras redireccionado a la tienda`);
        iniciarStore();
    } else {
        autoSeleccionado = itmes[seleccionProducto - 1];
        carritoCompra.push(autoSeleccionado);
        totalValorCarrito += autoSeleccionado.precio;
        carritoVacio = ` (${carritoCompra.length} autos en el carrito - total: $${totalValorCarrito})`;
        let continuarComprando = confirm(
            `Has agregado al carrito el auto ${autoSeleccionado.marca} ${autoSeleccionado.modelo} ${autoSeleccionado.anio} por un valor de clp${autoSeleccionado.precio}. ¿Deseas seguir comprando?`
        );
        if (continuarComprando) {
            iniciarStore();
        } else {
            cesta();
        }
    }
}

function agregarAccesorios() {

    let opcion = prompt(
        `Selecciona el accesorio que deseas agregar al carrito:
         1. laminas de seguridad- Marca:aliexpress  - Precio: clp 200000
         2. Porta  bicicletas Marca:Scott - Precio: clp 80000
         3. Salir`
    );

    switch (opcion) {
        case "1":
            carritoCompra.push({ accesorio: "laminas de seguridad",marca:"aliexpress", precio: 200000 });
            totalValorCarrito += 200000;
            alert("laminas de seguridad agregado al carrito");
            break;
        case "2":
            carritoCompra.push({ accesorio: "Porta  bicicletas",marca:"Scott" ,precio: 80000 });
            totalValorCarrito += 80000;
            alert("Porta  bicicletas");
            break;

        case "3":
            alert("Cancelaste la operación");
            cesta();
            break;
        default:
            alert("Opción no válida");
            agregarAccesorios();
            break;
    }

    let continuar = confirm("¿Deseas agregar más accesorios al carrito?");
    if (continuar) {
        agregarAccesorios();
    } else {
        cesta();
    }
}
function agregarAlCarritoProducto(productos) {
    console.log("Lista de Autos:");
    productos.forEach((producto, index) => {
        console.log(
            `${index}.
            ${producto.marca ?  producto.marca:""} 
            ${producto.modelo ? producto.modelo : ""} 
            ${producto.anio ? producto.anio + '"' : ""}
            clp${producto.precio}`
        );
    });
    let seleccionProducto = Number(
        prompt("Favor selecciona el auto de tu interés:")
    );
    if (isNaN(seleccionProducto) || seleccionProducto >= productos.length) {
        alert("Selecciona una opción valida");
        agregarAlCarritoProducto(productos);
    } else {
        productoSeleccionado = productos[seleccionProducto];
        carritoCompra.push(productoSeleccionado);
        totalValorCarrito += productoSeleccionado.precio;
        console.log(
            `Agregaste 
             ${productoSeleccionado.marca ? productoSeleccionado.marca:""}
             ${productoSeleccionado.modelo ? productoSeleccionado.modelo : ""}
             ${productoSeleccionado.anio ? productoSeleccionado.anio + '"' : "" }
             a tu carrito`
        );
        iniciarStore();
    }
}

function cesta() {
    console.log("Productos en el carrito:");
    carritoCompra.forEach((producto) => {
        console.log(
            `${producto.marca} 
            ${producto.modelo ? producto.modelo : ""} 
            ${producto.accesorio ? producto.accesorio : ""} 
            ${producto.anio ? producto.anio + '"' : ""}
            clp ${producto.precio}`
        );
    });
    console.log(`Total a pagar: $${totalValorCarrito}`);
    let seguirComprando = prompt(
        "Deseas seguir comprando? Ingresa 's' para si o 'n' para no"
    );
    if (seguirComprando === "s") {
        iniciarStore();
    } else {
        carritoCompra = [];
        totalValorCarrito = 0;
        carritoVacio = "El carrito está vacio";
        iniciarStore();
    }
}