const lista = document.getElementById('listaTareas');
const inputTarea = document.getElementById('inputTarea');
const botonAgregar = document.getElementById('agregarTarea');

function agregarTarea() {
    const nuevaTarea = document.createElement('li');  // Crear nueva tarea
    nuevaTarea.textContent = inputTarea.value;  // Asignar el valor del input como texto
    nuevaTarea.addEventListener('click', () => nuevaTarea.style.textDecoration = "line-through");  // Marcar tarea como completada
    lista.appendChild(nuevaTarea);  // Agregar tarea a la lista
    inputTarea.value = "";  // Limpiar el input
}

botonAgregar.addEventListener('click', agregarTarea);