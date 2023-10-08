alert("Bienvenidos a El Rincon");

let carrito = ``;
let total = 0;

function mostrarMenu() {
    do {
        let menu = Number(prompt(`
            Elija la opcion deseada
            1. Ver productos
            2. Ver carrito
            3. Salir
        `));

        switch (menu) {
            case 1:
                verProductos();
                mostrarMenu();
                break;
            case 2:
                mostrarCarrito();
                mostrarMenu();
                break;
            case 3:
                break;
            case null:
                break;
            default:
                alert("Ingrese la opción correcta")
                break;
        }
    } while (menu === 3) {
        alert("Gracias por visitarnos");
        return;
    }
}



function verProductos() {
    let productos = Number(prompt(`
        Productos Disponibles:
        1. Air Max 90 - UYU 7.990
        2. Air Face 1 - UYU 7.690 
        3. Air Jordan Retro 3 - UYU 12.990 
        4. Volver al menú
    `))

    switch (productos) {
        case 1:
            alert(`Air Max 90 ha sido agrgado al carrito`);
            agregarCarrito("Air Max 90", 7990)
            break;
        case 2:
            alert(`Air Force 1 ha sido agregado al carrito`);
            agregarCarrito("Air Force 1", 7690)
            break;
        case 3:
            alert(`Air Jordan Retro 3 ha sido agregado al carrito`);
            agregarCarrito("Air Retro Jordan 3", 12990)
            break;
        case 4:
            mostrarMenu();
            break;
        default:
            alert(`Elija una opcion correcta`);
            break;
    }
}

function agregarCarrito(productos, precio) {
    total = total + precio;
    return carrito += (`${productos} - UYU ${precio}
    
    `);
}


function mostrarCarrito() {
    if (carrito === "") {
        alert(`El carrito está vacío.`);
    } else {
        const carritoInfo = (`Carrito de compras:\n${carrito}\nTotal: UYU ${total}`);
        alert(carritoInfo);
    }
}

mostrarMenu()








/* // Variables para el carrito y el total
let carrito = "";
let total = 0;

// Función para mostrar el menú y obtener la elección del usuario
function mostrarMenu() {
    let opcion;

    do {
        opcion = parseInt(prompt(
            "Menú:\n" +
            "1. Ver Productos y Agregar al Carrito\n" +
            "2. Ver Carrito\n" +
            "3. Salir"
        ));

        if (!isNaN(opcion)) {
            switch (opcion) {
                case 1:
                    verYAgregarProductos();
                    break;
                case 2:
                    mostrarCarrito();
                    break;
                case 3:
                    alert("Gracias por su visita. ¡Hasta luego!");
                    break;
                default:
                    alert("Opción no válida. Por favor, elija una opción válida.");
            }
        } else {
            alert("Opción no válida. Por favor, elija una opción válida.");
        }
    } while (opcion !== 3);
}

// Función para ver productos y agregar al carrito
function verYAgregarProductos() {
    let producto = prompt(
        "Productos Disponibles:\n" +
        "1. Producto A - $10.00\n" +
        "2. Producto B - $15.00\n" +
        "3. Producto C - $20.00\n" +
        "4. Volver al Menú Principal"
    );

    if (producto === "4") {
        return;
    }

    switch (producto) {
        case "1":
            agregarAlCarrito("Producto A", 10.00);
            break;
        case "2":
            agregarAlCarrito("Producto B", 15.00);
            break;
        case "3":
            agregarAlCarrito("Producto C", 20.00);
            break;
        default:
            alert("Opción no válida. Por favor, elija una opción válida.");
            verYAgregarProductos();
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(producto, precio) {
    carrito += `${producto} - $${precio}\n`;
    total += precio;
    alert(`${producto} ha sido agregado al carrito.`);
}

// Función para mostrar el contenido del carrito


// Iniciar la aplicación mostrando el menú
mostrarMenu(); */




