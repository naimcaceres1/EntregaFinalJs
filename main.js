
//Pre-entrega 1


/* alert("Bienvenidos a El Rincon");

let carrito = ``;
let total = 0;

function mostrarMenu(){
    do {
        let menu = Number(prompt(`
            Elija la opcion deseada
            1. Ver productos
            2. Ver carrito
            3. Salir
        `));

        switch (menu){
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



function verProductos(){
    let productos = Number(prompt(`Productos Disponibles:\n1. Air Max 90 - UYU 7.990 \n2. Air Face 1 - UYU 7.690 \n3. Air Jordan Retro 3 - UYU 12.990 \n4. Volver al menú
    `))

    switch (productos){
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

function agregarCarrito(productos, precio){
    total = total + precio;
    return carrito += (`${productos} - UYU ${precio}
    
    `);
}


function mostrarCarrito(){
    if (carrito === ""){
        alert(`El carrito está vacío.`);
    } else{
        const carritoInfo = (`Carrito de compras:\n
        ${carrito} \n
        Total: UYU ${total}\n`);
        alert(carritoInfo);
    }
}

mostrarMenu()


 */



//Pre-entrega 2

alert("Bienvenidos a El Rincon");



let total = 0;
let carrito = [];



const productos = [
    {
        marca: `Nike`, genero: `calzado`, disciplina: `running`, modelo: `Flex Experience Run 11`, precio: 4690,
    },
    {
        marca: `Nike`, genero: `calzado`, disciplina: `sportwear`, modelo: `Jordan Retro 3 White Cement (Reimagined)`, precio: 12990,
    },
    {
        marca: `Adidas`, genero: `calzado`, disciplina: `sportwear`, modelo: `Court Plataform`, precio: 3690,
    },
    {
        marca: `Puma`, genero: `calzado`, disciplina: `sportwear`, modelo: `Smash 3.0`, precio: 3990,
    },
    {
        marca: `Nike`, genero: `calzado`, disciplina: `futbol`, modelo: `Zoom Superfly 9 Academy`, precio: 5290,
    },
    {
        marca: `Adias`, genero: `indumentaria`, disciplina: `sportwear`, modelo: `remera Brand Love`, precio: 1990,
    },
    {
        marca: `Adidas`, genero: `indumentaria`, disciplina: `sportwear`, modelo: `Buzo Essential Brand Love`, precio: 5290,
    },
    {
        marca: `Puma`, genero: `indumentraria`, disciplina: `training`, modelo: `Remera Uruguay Training`, precio: 2590,
    },
    {
        marca: `Puma`, genero: `indumentaria`, disciplina: `training`, modelo: `W Calza Favorite Forever High Wasit`, precio: 2690,
    },
    {
        marca: `Nike`, genero: `indumentaria`, disciplina: `sportwear`, modelo: `W Campera Club Hoodie Fz`, precio: 5290,
    },
    {
        marca: `Puma`, genero: `accesorios`, disciplina: `futbol`, modelo: `Pelota Orbita La Liga`, precio: 1690,
    },
    {
        marca: `Nike`, genero: `accesorios`, disciplina: `mochilas`, modelo: `Mochila Element`, precio: 1690,
    },

];



function agregarCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    alert(`${producto.marca} - ${producto.modelo} agregado al carrito.`);
}


function buscarProductos() {
    const opcionBusqueda = prompt(`Elija la opcion deseada:\n1. Buscar por marca\n2. Buscar por genero\n3. Buscar por disciplina\n4. Buscar por modelo\n5. Volver`);

    if (opcionBusqueda !== "1" && opcionBusqueda !== "2" && opcionBusqueda !== "3" && opcionBusqueda !== "4" && opcionBusqueda !== "5") {
        alert("Opción incorrecta. Elija una opción válida.");
        buscarProductos();
        return;
    }

    const palabraClave = prompt("Ingrese una palabra clave para buscar productos:");

    const valorBusqueda = palabraClave.toLowerCase();
    
    const buscarPorMarca = (producto) => producto.marca.toLowerCase().includes(valorBusqueda);
    
    const buscarPorGenero = (producto) => producto.genero.toLowerCase().includes(valorBusqueda);
    
    const buscarPorDisciplina = (producto) => producto.disciplina.toLowerCase().includes(valorBusqueda);
    
    const buscarPorModelo = (producto) => producto.modelo.toLowerCase().includes(valorBusqueda);


    const productosEncontrados = productos.filter((producto) => {
        switch (opcionBusqueda) {
            case "1":
                return buscarPorMarca(producto);
            case "2":
                return buscarPorGenero(producto);
            case "3":
                return buscarPorDisciplina(producto);
            case "4":
                return buscarPorModelo(producto);
            case "5":
                verMenu();
                return;
            default:
                alert("Opción incorrecta. Elija una opción válida.");
                break
        }
    });

    if (opcionBusqueda === "5") {
        verMenu();
        return;
    }

    if (productosEncontrados.length > 0) {
        let mensaje = "Productos encontrados:\n";
        productosEncontrados.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
        });
        mensaje += `${productosEncontrados.length + 1}. Volver`;

        const respuesta = prompt(mensaje);

        if (respuesta <= productosEncontrados.length) {
            agregarCarrito(productosEncontrados[respuesta - 1]);
            buscarProductos();
        } else if (respuesta == productosEncontrados.length + 1) {
            buscarProductos();
        } else {
            alert("Elija una opción válida.");
        }
    } else {
        alert("No se encontraron productos que coincidan con la búsqueda.");
        buscarProductos();
    }
}


function verCarrito() {
    if (carrito.length !== 0) {
        let carritoInfo = "Los productos agregados al carrito de compras son:\n";
        carrito.forEach((producto) => {
            carritoInfo += `${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
        });
        carritoInfo += `Total: UYU ${total}`;
        alert(carritoInfo);
    } else {
        alert("El carrito está vacío.");
    }
}


function verMenu() {
    do {
        let menu = Number(prompt("Elija la opción que desea:\n1. Buscar productos\n2. Ver Carrito\n3. Salir"));
        switch (menu) {
            case 1:
                buscarProductos();
                break;
            case 2:
                verCarrito();
                verMenu();
                break;
            case 3:
                alert("Muchas gracias por visitarnos, lo esperamos nuevamente.");
                break;
            default:
                alert("Opción no válida. Elija una opción válida.");
                break;
        }
    } while (menu !== 3);

    alert("Muchas gracias por visitarnos, lo esperamos nuevamente.");
}


verMenu();







