alert("Bienvenidos a El Rincon");

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
    let productos = Number(prompt(`
        Productos Disponibles:
        1. Air Max 90 - UYU 7.990
        2. Air Face 1 - UYU 7.690 
        3. Air Jordan Retro 3 - UYU 12.990 
        4. Volver al menú
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





