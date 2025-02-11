// 1. INTRODUCCIÓN AL DOM
// -------------------------------------------------------
// El DOM (Document Object Model) es una representación estructurada del HTML.
// Cada elemento HTML se convierte en un "nodo" en el árbol del DOM, permitiendo
// que JavaScript lo manipule para cambiar el contenido y el estilo de la página.


/* 
Document: El nodo raíz que representa todo el documento.

Element: Nodos que representan elementos HTML (e.g., <div>, <p>).

Text: Nodos que representan el texto dentro de los elementos.

Attribute: Nodos que representan los atributos de los elementos.

*/

/* 

getElementById(): Selecciona un elemento por su id.

getElementsByClassName(): Selecciona todos los elementos con una clase específica.

getElementsByTagName(): Selecciona todos los elementos de un tipo específico.

querySelector(): Selecciona el primer elemento que coincide con el selector CSS.

querySelectorAll(): Selecciona todos los elementos que coinciden con el selector CSS.





*/



// Ejemplo: Seleccionando un elemento por su id en el DOM y modificando su contenido
const titulo = document.getElementById('titulo');
titulo.textContent = "¡Hola, DOM!";  // Cambiamos el texto del elemento con id "titulo"
titulo.style.color = "purple";  // Cambia el color del texto
titulo.style.fontSize = "24px";  // Cambia el tamaño de la fuente
titulo.style.textAlign = "center";  // Centra el texto

const cuadro = document.getElementById('titulo');
//cuadro.classList.add('activo');  // Agrega la clase "activo"
//cuadro.classList.remove('activo');  // Elimina la clase "activo"
//cuadro.classList.toggle('resaltado');  // Alterna la clase "resaltado"

// -------------------------------------------------------


//atributos

const enlace = document.getElementById('enlace');
console.log(enlace.href);  // Muestra el valor del atributo "href" del enlace

enlace.setAttribute('href', 'https://www.google.com');  // Cambia el valor del atributo "href"
enlace.setAttribute('target', '_blank');  // Hace que el enlace se abra en una nueva pestaña

//enlace.removeAttribute('target');  // Elimina el atributo "target"


// 2. MÉTODOS DE ACCESO AL DOM
// -------------------------------------------------------
// Existen varios métodos para seleccionar elementos en el DOM:

// 2.1 getElementById() - Selecciona un único elemento por su id
const parrafoId = document.getElementById('parrafo');
parrafoId.textContent = "Texto cambiado usando getElementById";

// 2.2 getElementsByClassName() - Selecciona todos los elementos con una clase específica
const elementosClase = document.getElementsByClassName('items');
for (let item of elementosClase) {
    item.style.color = "red";  // Cambiamos el color de texto a azul para todos los elementos con clase "items"
}

// 2.3 getElementsByTagName() - Selecciona todos los elementos de un tipo específico
const parrafos = document.getElementsByTagName('p');
for (let parrafo of parrafos) {
    parrafo.style.color = "green";  // Cambiamos el estilo a negrita para todos los párrafos
}

// -------------------------------------------------------


// 3. QUERY SELECTOR Y QUERY SELECTOR ALL
// -------------------------------------------------------
// Estos métodos permiten seleccionar elementos usando selectores de CSS:

// 3.1 querySelector - Selecciona el primer elemento que coincide con el selector
const primerParrafo = document.querySelector('.items'); // Selecciona el primer elemento con la clase "items"
primerParrafo.style.backgroundColor = "yellow";  // Cambia el fondo a amarillo

// 3.2 querySelectorAll - Selecciona todos los elementos que coinciden con el selector
const todosLosItems = document.querySelectorAll('.items');
todosLosItems.forEach(item => item.style.border = "1px solid red");  // Agrega un borde rojo a cada elemento

// -------------------------------------------------------


// 4. PLANTILLAS LITERALES (Template Literals)
// -------------------------------------------------------
// Las plantillas literales permiten incluir variables dentro de strings usando backticks (` `).

const nombre = "Coder";
const mensaje = `Hola, ${nombre}! Bienvenido a la clase de JavaScript.`;  // Usamos ${} para insertar la variable en el string
console.log(mensaje);  // Muestra el mensaje en la consola

// -------------------------------------------------------


// 5. AGREGAR Y ELIMINAR NODOS DEL DOM
// -------------------------------------------------------
// Podemos modificar el DOM agregando o eliminando elementos:

/* 


createElement(): Crea un nuevo elemento.

*appendChild()	Agrega un nodo como último hijo.	Agregar un elemento al final de un contenedor.
*insertBefore()	Inserta un nodo antes de un nodo de referencia.	Insertar un elemento en una posición específica.
*append()	Agrega múltiples nodos o texto como últimos hijos.	Agregar varios elementos o texto al final de un contenedor.
*prepend()	Agrega múltiples nodos o texto como primeros hijos.	Agregar elementos al inicio de un contenedor.
*insertAdjacentElement()	Inserta un elemento en una posición relativa a otro.	Insertar un elemento en una posición específica (antes, después, dentro).
*insertAdjacentHTML()	Inserta HTML en una posición relativa a otro.	Insertar HTML directamente sin crear nodos manualmente.
*replaceChild()	Reemplaza un nodo hijo existente por otro nuevo.	Sustituir un elemento por otro.

*/



// 5.1 Crear un nuevo nodo y agregarlo al DOM
const nuevoParrafo = document.createElement('p');  // Creamos un nuevo elemento <p>
nuevoParrafo.textContent = "Este es un nuevo párrafo agregado al DOM.";  // Le damos contenido
document.body.appendChild(nuevoParrafo);  // Agregamos el párrafo al final del body

// 5.2 Eliminar un nodo del DOM
const nodoAEliminar = document.getElementById('parrafo');  // Seleccionamos el elemento a eliminar

document.body.removeChild(nodoAEliminar);  // Eliminamos el elemento del DOM

// -------------------------------------------------------


// 6. EVENTOS
// -------------------------------------------------------
// Los eventos son acciones que ocurren en la página y que podemos "escuchar" para ejecutar código cuando ocurren:

// 6.1 Evento de clic (click)
const boton = document.getElementById('boton');
boton.addEventListener('click', () => {
    alert("¡Botón clickeado!");  // Muestra una alerta cuando se hace clic en el botón
});

// 6.2 Evento de cambio (change) en un input
const inputTexto = document.getElementById('input');
inputTexto.addEventListener('change', () => {
    console.log("El valor del input ha cambiado a: " + inputTexto.value);  // Muestra el nuevo valor del input
    inputTexto.value = ''
});

// 6.3 Evento de teclado (keydown)
document.addEventListener('keydown', (evento) => {
    console.log("Tecla presionada: " + evento.key);  // Muestra la tecla presionada en la consola
});

// -------------------------------------------------------


/* // 7. EJERCICIO FINAL - Lista de Tareas Interactiva (To-Do List)
// -------------------------------------------------------
// Creamos una pequeña aplicación de lista de tareas para aplicar todos los conceptos

// Selección de elementos del DOM
const lista = document.getElementById('listaTareas');
const inputTarea = document.getElementById('inputTarea');
const botonAgregar = document.getElementById('agregarTarea');

// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTarea = document.createElement('li');  // Creamos un nuevo elemento <li>
    nuevaTarea.textContent = inputTarea.value;  // Asignamos el valor del input como texto de la tarea
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = "line-through");  // Agrega línea al hacer clic
    lista.appendChild(nuevaTarea);  // Agregamos la tarea a la lista
    inputTarea.value = "";  // Limpiamos el input
}

// Evento para agregar tarea cuando se hace clic en el botón
botonAgregar.addEventListener('click', agregarTarea);

// -------------------------------------------------------

 */






