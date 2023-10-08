/* let entrada = prompt ("Ingrese el usuario");

while(entrada!="pepito"){
    alert("Usuario incorrecto");
    
    entrada = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */



/* Pedir un numero mediante prompt y sumarle otro numero en cada repeticion, reralizando una salida por cada resultado */
/* Pedir un texto mediante promt y concatenrar un valor en cada repetricion, realizando una salida por cada resultadom hastas que se ingresa "ESC" */
/* Pedir un numero por prompt, repetir la salida del mensaje "Hola" la cantidad de veces */

/* 
for(let turno = 1; turno <= 10; turno++){
    let cedulaIdentidad = Number(prompt("Ingrese su cedula de identidad sin puntos ni guiones"));

    alert(`Turno # ${turno} C.I: ${cedulaIdentidad}`);
}

alert ("Turnos terminados, intente mas tarde"); */

/* let entrada = prompt ("Ingrese un nombre");

while(entrada != "ESC"){
    switch(entrada){
        case "ANA":
        alert("Hola ANA");
        break;
        case "Naim":
        alert("Hola Naim")
        break;
        
        default:
            alert("Quien eres?")
        break;

        
    }
    
    entrada = prompt("Ingrese un nombre")
    
} */



/* function armar(material) {
    return `muñeco armado con ${material}`;
}

function pintar(munecoArmado) {
    return `${munecoArmado} y pintado`;
}

function ropaBodega(munecoPintado) {
    console.log(`${munecoPintado} vestido y enviado a bodega`);
}

let armado = armar("madera");
let pintado  = pintar(armado);
ropaBodega (pintado);
 */

/* function calculadora(num1, operacion, num2) {
    switch (operacion) {
        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;

        case "*":
            return num1 * num2;
            break;

        case "/":
            return num1 / num2;
            break;

        default:
            return "Operación no identificada";
            break;
    }
}

let numeroUno = Number(prompt("Ingrese el número uno"));

let operacion = prompt("Ingrese la operación");

let numeroDos = Number(prompt("Ingrese el número dos"));

let resultado = calculadora(numeroUno, operacion, numeroDos);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`); */









/* let nombre = "";

while (true) {
    nombre = prompt("Ingrese su nombre");
    
    if (nombre === null) {
        // Si el usuario presiona Cancelar, salimos del bucle.
        break;
    }

    switch (nombre) {
        case "naim":
            alert("Hola Naim, bienvenido");
            break;
        case "juan":
            alert("Hola Juan, bienvenido");
            break;
        case "exit":
            // Si el usuario ingresa "exit", salimos del bucle.
            alert("Saliendo del programa.");
            break;
        default:
            alert("Quien eres?");
            break;
    }

    if (nombre === "exit") {
        // Si el usuario ingresó "exit", también salimos del bucle.

        break;
    }
}
 */

/* function saludar(nombre) {
    return "Hola " + nombre
}

let saludoANaim = saludar("Naim");
console.log(saludoANaim);


 */


/* function intercaccionMenu(){
    if(opcion === "1"){
        prompt(
            
        );
    }else if(opcion === "2"){

    }else if(opcion === "3"){

    }else if(opcion === "4"){

    }else if(opcion === "5"){

    }
    }
 */


/* // Variables para el carrito y el total
let carritoProducto = "";
let carritoTotal = 0;

// Función para mostrar el menú y obtener la elección del usuario
function mostrarMenu(){
    while(true){
        const opcion = prompt(
            `Menú:
            1. Calzados
            2. Indumentaria
            3. Accesorios
            4. Ver carrito
            5. Salir`
        );

        if(opcion === null || opcion === ""){
            alert("Por favor, ingrese una opción válida.");
        }else{
            switch (opcion){
                case "1":
                    verProductos();
                    break;
                case "2":
                    verProductos();
                    break;
                case "3":
                    verProductos();
                    break;   
                case "4":
                    verCarrito();
                    break;
                case "5":
                    alert("Gracias por su visita. ¡Hasta luego!");
                    return;
                default:
                    alert("Opción no válida. Por favor, elija una opción válida.");
            }
        }
    }
}

// Función para agregar un producto al carrito
function verProductos(Calzados){
    prompt(`
    1. Nike Air Jordan Retro 3
    2. Nike Air Vomero 16
    3. W Nike Air Winflo 9
    4. W Adidas Runfalcon
    5. Nike Air Jordan Retro 4
    `)
    switch(productos){
        case"1":
        alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
        break;
        case"1":
        alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
        break;
        case"1":
        alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
        break;
        case"1":
        alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
        break;
        case"1":
        alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
        break;
        default:
            alert(`Nike Air Jordan Retro 3 ha sido agregado al carrito.`);
    }


// Función para mostrar el contenido del carrito
function mostrarCarrito(){
    if (carritoProducto === ""){
        alert("El carrito está vacío.");
    }else{
        const carritoInfo = `Carrito de compras:\n${carritoProducto}\nTotal: $${carritoTotal}`;
        alert(carritoInfo);
    }
}

// Iniciar la aplicación mostrando el menú
mostrarMenu(); */



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
function mostrarCarrito() {
    if (carrito === "") {
        alert("El carrito está vacío.");
    } else {
        const carritoInfo = `Carrito de compras:\n${carrito}\nTotal: $${total}`;
        alert(carritoInfo);
    }
}

// Iniciar la aplicación mostrando el menú
mostrarMenu();
 */