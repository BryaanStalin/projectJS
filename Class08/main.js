//inicio de proyecto

const productos = [
  { nombre: 'Manzana', precio: 100, categoria: 'Frutas' },
  { nombre: 'Lechuga', precio: 50, categoria: 'Verduras' },
  { nombre: 'Pan', precio: 200, categoria: 'Panadería' },
  { nombre: 'Leche', precio: 150, categoria: 'Lácteos' }
]

//selecionamos los elementos del dom para la tienda y el carrito

const listaProductos = document.getElementById('ListaProductos')
const carrito = document.getElementById('carrito')
const total = document.getElementById('Total')

let totalCompra = 0

productos.forEach(producto => {
  const item = document.createElement('div')
  item.classList.add('producto')

  item.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button class="agregar-carrito">Agregar al carrito</button>
                    `

  const botonAgregar = item.querySelector('.agregar-carrito')

  botonAgregar.addEventListener('click', () => agregarCarrito(producto))

  listaProductos.appendChild(item)
})


listacarrito = 
function agregarCarrito (producto) {
  const itemCarrito = document.createElement('li')
  itemCarrito.textContent = `${producto.nombre} y ${producto.precio}`

  carrito.appendChild(itemCarrito)

  totalCompra += producto.precio
  total.textContent = `TOTAL : $${totalCompra}`
}


