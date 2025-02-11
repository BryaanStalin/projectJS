
// 1. INICIO DEL PROYECTO: Mini E-commerce
// -------------------------------------------------------
// Vamos a crear una mini tienda virtual donde mostraremos una lista de productos,
// permitiendo agregar productos a un carrito, y calcular el total de la compra.

// Primero, creamos un array de productos. Cada producto tiene nombre, precio y categoría.

const productos = [
    { nombre: "Manzana", precio: 100, categoria: "Frutas" },
    { nombre: "Lechuga", precio: 50, categoria: "Verduras" },
    { nombre: "Pan", precio: 200, categoria: "Panadería" },
    { nombre: "Leche", precio: 150, categoria: "Lácteos" }
];

// Seleccionamos los elementos del DOM para la tienda y el carrito
const listaProductos = document.getElementById('listaProductos');
const carrito = document.getElementById('carrito');
const total = document.getElementById('total');

let totalCompra = 0;  // Inicializamos el total de la compra en 0

// -------------------------------------------------------


// 2. MOSTRAR PRODUCTOS EN LA TIENDA
// -------------------------------------------------------
// Usamos un forEach para recorrer el array de productos y crear dinámicamente
// cada elemento del producto en el DOM, mostrando su nombre y precio.

function CrearCartas()  { productos.forEach((producto) => {
    // Creamos un contenedor para cada producto
    const item = document.createElement('div');
    item.classList.add('producto');  // Le damos una clase para poder estilizarlo

    // Agregamos nombre y precio del producto
    item.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
    `;

    // Evento para agregar al carrito al hacer clic en "Agregar al carrito"
    const botonAgregar = item.querySelector('.agregar-carrito');
    botonAgregar.addEventListener('click', () => agregarAlCarrito(producto));

    // Agregamos el item de producto a la lista de productos en el DOM
    listaProductos.appendChild(item);
});
}

listaProductos.innerHTML = "<h1>Cargando productos</h1>"

setTimeout(() => {
    listaProductos.innerHTML = ''
    CrearCartas()
},5000)


console.log("sigue funcionando normalmente")









// -------------------------------------------------------


// 3. FUNCIONALIDAD DE AGREGAR AL CARRITO
// -------------------------------------------------------
// Función para agregar un producto al carrito y actualizar el total

function agregarAlCarrito(producto) {
    // Creamos un nuevo elemento en el carrito para este producto
    const itemCarrito = document.createElement('li');
    itemCarrito.textContent = `${producto.nombre} - $${producto.precio}`;

    // Agregamos el elemento al carrito en el DOM
    carrito.appendChild(itemCarrito);

    // Actualizamos el total de la compra
    totalCompra += producto.precio;
    total.textContent = `Total: $${totalCompra}`;
}

// -------------------------------------------------------


// 4. ELIMINAR PRODUCTOS DEL CARRITO (Opcional)
// -------------------------------------------------------
// Añadimos la opción de quitar productos del carrito haciendo clic en ellos.

carrito.addEventListener('click', (evento) => {
    const item = evento.target;

    if (item.tagName === 'LI') {  // Verificamos que se haya hecho clic en un elemento de la lista
        const precioProducto = parseInt(item.textContent.split('$')[1]);
        totalCompra -= precioProducto;  // Restamos el precio del producto del total
        total.textContent = `Total: $${totalCompra}`;  // Actualizamos el total
        carrito.removeChild(item);  // Eliminamos el producto del carrito en el DOM
    }
});

// -------------------------------------------------------


// 5. RESETEAR EL CARRITO
// -------------------------------------------------------
// Creamos un botón para vaciar todo el carrito y reiniciar el total

const botonVaciar = document.getElementById('vaciarCarrito');
botonVaciar.addEventListener('click', () => {
    carrito.innerHTML = "";  // Limpiamos todos los elementos del carrito
    totalCompra = 0;  // Reiniciamos el total
    total.textContent = `Total: $${totalCompra}`;
});

// -------------------------------------------------------

/* 
Explicación Paso a Paso del Código
Inicializar Productos: Creamos un array de productos con nombre y precio para simular la tienda.

Mostrar Productos en la Tienda: Usamos forEach para recorrer cada producto en el array y crear elementos HTML dinámicamente. Mostramos el nombre, precio y un botón de "Agregar al carrito" para cada producto.

Funcionalidad para Agregar al Carrito: Cuando se hace clic en "Agregar al carrito", el producto se agrega a la lista del carrito, y el precio del producto se suma al total.

Eliminar Productos del Carrito: Al hacer clic en un producto del carrito, se resta su precio del total y se elimina de la lista. Esto refuerza el concepto de eventos en JavaScript.

Resetear el Carrito: El botón "Vaciar Carrito" elimina todos los elementos del carrito y reinicia el total, enseñando cómo manipular el DOM de forma más avanzada.

 */



