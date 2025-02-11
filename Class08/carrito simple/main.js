


const productos = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 300 }
  ]
  
  
  const caja = document.getElementById('caja')
  const carrito = document.getElementById('carrito')
  
  
  const MOSTRARPRODUC = () => {
    productos.forEach(producto => {
      let carta = document.createElement('p')
      carta.innerHTML = `el producto es ${producto.nombre} y su precio es de ${producto.precio} `
  
      const boton = document.createElement('button')
      boton.textContent = 'comprar'
  
      boton.addEventListener('click', () => AgregarCompraCarrito(producto))
  
      carta.appendChild(boton)
      caja.appendChild(carta)
    })
  }
  
  const AgregarCompraCarrito = producto => {
    const itemCarrito = document.createElement('li')
    itemCarrito.textContent = `carrito ${producto.nombre},${producto.precio}`
  
    carrito.appendChild(itemCarrito)
  }
  
  MOSTRARPRODUC()
  







  document.addEventListener('keydown', (evento) => {
    console.log("Tecla presionada: " + evento.key);  // Muestra la tecla presionada en la consola
});