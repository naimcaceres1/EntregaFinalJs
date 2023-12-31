
//Primer PreEntrega #1


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

//Segunda PreEntrega #2


/* 
alert("Bienvenidos a El Rincon");

let total = 0;
let carrito = [];

const productos = [
    {
        marca: `Nike`, genero: `Calzado`, disciplina: `Running`, modelo: `Flex Experience Run 11`, precio: 4690,
    },
    {
        marca: `Nike`, genero: `Calzado`, disciplina: `Sportwear`, modelo: `Jordan Retro 3 White Cement (Reimagined)`, precio: 12990,
    },
    {
        marca: `Adidas`, genero: `Calzado`, disciplina: `Sportwear`, modelo: `Court Plataform`, precio: 3690,
    },
    {
        marca: `Puma`, genero: `Calzado`, disciplina: `Sportwear`, modelo: `Smash 3.0`, precio: 3990,
    },
    {
        marca: `Nike`, genero: `Calzado`, disciplina: `Futbol`, modelo: `Zoom Superfly 9 Academy`, precio: 5290,
    },
    {
        marca: `Adidas`, genero: `Indumentaria`, disciplina: `Sportwear`, modelo: `Remera Brand Love`, precio: 1990,
    },
    {
        marca: `Adidas`, genero: `Indumentaria`, disciplina: `Sportwear`, modelo: `Buzo Essential Brand Love`, precio: 5290,
    },
    {
        marca: `Puma`, genero: `Indumentraria`, disciplina: `Training`, modelo: `Remera Uruguay Training`, precio: 2590,
    },
    {
        marca: `Puma`, genero: `Indumentaria`, disciplina: `Training`, modelo: `W Calza Favorite Forever High Wasit`, precio: 2690,
    },
    {
        marca: `Nike`, genero: `Indumentaria`, disciplina: `Sportwear`, modelo: `W Campera Club Hoodie Fz`, precio: 5290,
    },
    {
        marca: `Puma`, genero: `Accesorios`, disciplina: `Futbol`, modelo: `Pelota Orbita La Liga`, precio: 1690,
    },
    {
        marca: `Nike`, genero: `Accesorios`, disciplina: `Mochilas`, modelo: `Mochila Element`, precio: 1690,
    },
];

function agregarCarrito(producto) {
    carrito.push(producto);
    total += producto.precio;
    alert(`${producto.marca} - ${producto.modelo} agregado al carrito.`);
}

function buscarPorMarca() {
    const marcas = [...new Set(productos.map(producto => producto.marca))];

    let marcasDisp = "Marcas disponibles:\n";
    marcasDisp += marcas.map((marca, index) => `${index + 1}. ${marca}`).join('\n');
    marcasDisp += '\nElija el número de la marca que desea buscar:';
    
    const marcaBuscada = Number(prompt(marcasDisp));

    if (marcaBuscada >= 1 && marcaBuscada <= marcas.length) {
        const marcaElegida = marcas[marcaBuscada - 1];
        const productosMarca = productos.filter(producto => producto.marca === marcaElegida);
        mostrarResultados(productosMarca);
    } else {
        alert("Opción no válida. Ingrese un número válido.");
        buscarProductos();
    }
}

function buscarPorGenero() {
    const generos = [...new Set(productos.map(producto => producto.genero))];

    let generosDisp = "Géneros disponibles:\n";
    generosDisp += generos.map((genero, index) => `${index + 1}. ${genero}`).join('\n');
    generosDisp += '\nElija el número del género que desea buscar:';
    
    const generoBuscado = Number(prompt(generosDisp));

    if (generoBuscado >= 1 && generoBuscado <= generos.length) {
        const generoElegido = generos[generoBuscado - 1];
        const productosGenero = productos.filter(producto => producto.genero === generoElegido);
        mostrarResultados(productosGenero);
    } else {
        alert("Opción no válida. Ingrese un número válido.");
        buscarProductos();
    }
}

function buscarPorDisciplina() {
    const disciplinas = [...new Set(productos.map(producto => producto.disciplina))];

    let disciplinasDisp = "Disciplinas disponibles:\n";
    disciplinasDisp += disciplinas.map((disciplina, index) => `${index + 1}. ${disciplina}`).join('\n');
    disciplinasDisp += '\nElija el número de la disciplina que desea buscar:';
    
    const disciplinaBuscada = Number(prompt(disciplinasDisp));

    if (disciplinaBuscada >= 1 && disciplinaBuscada <= disciplinas.length) {
        const disciplinaElegida = disciplinas[disciplinaBuscada - 1];
        const productosDisciplina = productos.filter(producto => producto.disciplina === disciplinaElegida);
        mostrarResultados(productosDisciplina);
    } else {
        alert("Opción no válida. Ingrese un número válido.");
        buscarProductos();
    }
}

function buscarPorModelo() {
    const modeloBuscado = prompt("Ingrese el modelo que desea buscar:");

    if (modeloBuscado) {
        const productosModelo = productos.filter(producto => producto.modelo.toLowerCase().includes(modeloBuscado.toLowerCase()));
        mostrarResultados(productosModelo);
    } else {
        alert("Debe ingresar un modelo válido.");
        buscarProductos();
    }
}


function buscarProductos() {
    let opcionBusqueda;
    do {
        opcionBusqueda = prompt(`Elija la opción deseada:\n1. Buscar por marca\n2. Buscar por genero\n3. Buscar por disciplina\n4. Buscar por modelo\n5. Volver`);

        switch (opcionBusqueda) {
            case "1":
                buscarPorMarca();
                break;
            case "2":
                buscarPorGenero();
                break;
            case "3":
                buscarPorDisciplina();
                break;
            case "4":
                buscarPorModelo();
                break;
            case "5":
                verMenu();
                return;
            default:
                alert("Opción incorrecta. Elija una opción válida.");
                break;
        }
    } while (opcionBusqueda !== "5");
}


function mostrarResultados(productosEncontrados) {
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


function calcularPrecioTotal() {
    total = 0;
    for (const producto of carrito) {
        total += producto.precio;
    }
}




function quitarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        verMenu();
        return;
    }

    let mensaje = "Productos en el carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
    });
    mensaje += `${carrito.length + 1}. Volver`;

    const respuesta = prompt(mensaje);

    if (respuesta <= carrito.length) {
        const productoQuitado = carrito.splice(respuesta - 1, 1)[0];
        total -= productoQuitado.precio;
        alert(`${productoQuitado.marca} ${productoQuitado.modelo} ha sido quitado del carrito.`);
        quitarDelCarrito();
    } else if (respuesta == carrito.length + 1) {
        verMenu();
    } else {
        alert("Elija una opción válida.");
        quitarDelCarrito();
    }
}



function verCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        verMenu();
        return;
    }

    let mensaje = "Productos en el carrito:\n";
    carrito.forEach((producto, index) => {
        mensaje += `${index + 1}. ${producto.marca} ${producto.modelo} - Precio: ${producto.precio}\n`;
    });

    calcularPrecioTotal();

    mensaje += `Precio total: UYU ${total}\n${carrito.length + 1}. Quitar productos del Carrito\n${carrito.length + 2}. Volver`;

    const respuesta = prompt(mensaje);
    if (respuesta == carrito.length + 1) {
        quitarDelCarrito();
    } else if (respuesta == carrito.length + 2) {
        verMenu();
    } else {
        alert(`Elija una opción correcta`);
        verCarrito();
    }
}  


function verMenu() {
    let menu;
    do {
        menu = Number(prompt("Elija la opción que desea:\n1. Buscar productos\n2. Ver Carrito\n3. Salir"));
        switch (menu) {
            case 1:
                buscarProductos();
                break;
            case 2:
                verCarrito();
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

verMenu(); */






//Ejemplos  

/* const productos = [
    {id: 1, nombre: "camisa", precio: 1000},
    {id: 2, nombre: "gorra", precio: 750},
];

localStorage.setItem("carrito", JSON.stringify(productos)); */
/* 
let eliminarBoton = document.getElementById("eliminarBoton");
let carrito;
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
} else {
    carrito = [];

    let div = document.createElement("div");
    div.innerHTML = "No hay elementos en el carrito";

    document.body.append(div);
}

carrito.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    `;

    document.body.append(div);
});

eliminarBoton.addEventListener("click", () => {
    alert("Carrito eliminado");
    localStorage.clear();
    location.reload();
});
 */

/* let cerrarSesionBoton = document.getElementById("cerrarSesionBoton");
let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
    usuario = usuarioStorage;
    alert(`Bienvenid@ nuevamente ${usuario}`);
    }else{
        usuario = prompt("Ingrese su usuario");
        alert(`Bienvenid@ por primera vez ${usuario}`);
        sessionStorage.setItem("usuario", usuario);
    };

cerrarSesionBoton.addEventListener("click", () => {
    alert("Sesion cerrada");
    sessionStorage.clear();
    location.reload();
});
 */




//Tercer PreEntrega #3

let total = 0;
let carrito = [];

function cargarProductos() {
    return new Promise((resolve, reject) => {
        fetch("../productos.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se están cargando los productos correctamente');
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos()
        .then(productos => {
            const contenedorProductos = document.getElementById('contenedorProductos');
            contenedorProductos.innerHTML = ''; // Limpiamos el contenedor

            productos.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('productos');
                productoDiv.innerHTML = `
                    <a href="">
                        <img src="${producto.imagen}" alt="${producto.modelo}">
                        <h3>${producto.marca} ${producto.modelo}</h3>
                        <div class="precios-contenedor">
                            <strong class="precio">
                                <span class="precio-moneda">UYU</span>
                                <span class="precio-monto">${producto.precio}</span>
                            </strong>
                        </div>
                    </a>
                    <button type="button" class="agregarCarrito">Agregar al carrito</button>
                `;
                contenedorProductos.appendChild(productoDiv);

                const botonesAgregarCarrito = productoDiv.querySelectorAll('.agregarCarrito');
                botonesAgregarCarrito.forEach(boton => {
                    boton.addEventListener('click', () => {
                        agregarCarrito(producto);
                        guardarCarrito();
                    });
                });
            });
        })
        .catch(error => {
            console.error(error);
        });
});



window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito') && localStorage.getItem('total')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        total = parseFloat(localStorage.getItem('total'));
        mostrarCarrito();
    }
});



const agregarCarrito = (producto) => {
    const { marca, modelo, precio, imagen } = producto;
    carrito.push({ marca, modelo, precio, imagen });
    total += precio;

    Swal.fire({
        title: "El producto ha sido agregado al carrito",
        html: `
            <div>
                <p>${marca} ${modelo}</p>
                <img src="${imagen}" alt="${modelo}" style="max-width: 100px; max-height: 100px;">
                <p>Precio: UYU ${precio}</p>
            </div>
        `
    });

    actualizarCarrito();
};


function quitarDelCarrito(index) {
    if (carrito.length > 0) {
        const [productoQuitado] = carrito.splice(index, 1);
        total -= productoQuitado.precio;
        Swal.fire("El producto ha sido eliminado el carrito");
        actualizarCarrito();
    }
};


function actualizarCarrito() {
    mostrarCarrito();
    guardarCarrito();

};

const mostrarCarrito = () => {
    const carritoContenedor = document.getElementById('carritoContenedor');
    carritoContenedor.innerHTML = '';

    let precioTotalCarrito = 0;

    const elementosCarrito = carrito.map(({ marca, modelo, precio, imagen }, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
        <h3>${marca} ${modelo}</h3>
        <img src="${imagen}" alt="${modelo}" class="imagen-carrito">
        <p>Precio: UYU ${precio}</p>
        <button onclick="quitarDelCarrito(${index})" class="quitarDelCarritoBtn">Quitar del carrito</button>
        `;
        carritoContenedor.appendChild(productoDiv);

        precioTotalCarrito += precio;

        return productoDiv;
    });

    if (precioTotalCarrito > 0) {
        const precioTotalDiv = document.createElement('div');
        precioTotalDiv.innerHTML = `
            <b>Precio total: UYU ${precioTotalCarrito}</b>
        `;
        carritoContenedor.appendChild(precioTotalDiv);
    }

    const vaciarCarritoBtn = document.getElementById('vaciarCarritoBtn');
    if (carrito.length > 0) {
        if (!vaciarCarritoBtn) {
            const nuevoVaciarCarritoBtn = document.createElement('button');
            nuevoVaciarCarritoBtn.textContent = 'Vaciar Carrito';
            nuevoVaciarCarritoBtn.className = 'vaciarCarritoBtn';
            nuevoVaciarCarritoBtn.addEventListener('click', vaciarCarrito);
            carritoContenedor.appendChild(nuevoVaciarCarritoBtn);
        }
    } else {
        vaciarCarritoBtn?.remove();
    }

    if (carrito.length > 0){
        const pagarBtn = document.createElement('button');
        pagarBtn.textContent = 'Pagar';
        pagarBtn.className = 'comprarBtn';
        pagarBtn.addEventListener('click', () => {
            confirmarCompra();
        });
        carritoContenedor.appendChild(pagarBtn);
    }else{
        pagarBtn?.remove();
    }


    return elementosCarrito;
};



const vaciarCarrito = () => {
    Swal.fire({
        title: "¿Estás seguro que quieres vaciar tu carrito?",
        text: "No podrás revertirlo",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro"
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            total = 0;
            localStorage.removeItem('carrito');
            localStorage.removeItem('total');

            const carritoContenedor = document.getElementById('carritoContenedor');
            carritoContenedor.innerHTML = '';
            
            Swal.fire({
                title: "¡Carrito vaciado!",
                text: "Tu carrito ha sido vaciado exitosamente.",
                icon: "success"
            });
        }
    }).catch((error) => {
        console.error(error);
    });
};



const confirmarCompra = () => {
    Swal.fire({
        title: "¿Estás seguro de querer realizar la compra?",
        text: "Una vez confirmada, se procesará el pago",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, confirmar compra"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "¡Compra realizada!",
                text: "Se ha procesado tu pago, muchas gracias por comprar en El Rincon. Te llegará un correo con tu recibo de pago correspondiente",
                icon: "success"
            }).then(() => {
                carrito = [];
                total = 0;
                mostrarCarrito();
                localStorage.removeItem('carrito');
                localStorage.removeItem('total');
            });
        }
    });
};



function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', total.toString());
};

