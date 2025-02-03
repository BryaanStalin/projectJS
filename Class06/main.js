/* 
?CONCEPTOS CLAVES DE OPERADORES AVANZADOS

- La idea es hacer menos código


    ?VALOR FALSY - valores que se consideran falsos:
        *0,null,undefinided,NaN,false,""

    ?VALOR NULLISH - valores que se consideran falsos:
    *null,undefinided


Con el array de productos creado vamos realizar ciertas funcionalidades 
con el objetivos de filtrar, buscar, actualizar precios de productos 
entre otras que con tus necesidades puedas llegar a desarrollar.


Filtrar los productos siguiendo un criterio por ejemplo que el nombre de un producto 
contenga una palabra o parte de ella. También puede filtrar por precio, cantidad, etc.

Utilice el método map para actualizar el precio en un 21% agregando el IVA u otro valor de 
aumento que desee aplicar sobre cada uno de los productos obteniendo un nuevo array de productos actualizado.


*/

const productos = [
    { id: 1, nombre: 'Laptop Gaming', precio: 1200, cantidad: 5 },
    { id: 2, nombre: 'Mouse Gamer', precio: 50, cantidad: 10 },
    { id: 3, nombre: 'Teclado RGB', precio: 100, cantidad: 8 },
    { id: 4, nombre: 'Monitor 144hz', precio: 300, cantidad: 3 }
];


//?Utiliza el método find de array para buscar si se encuentra un producto en nuestro array.


const buscarProductos = productos.find((elemento) => elemento.includes)
