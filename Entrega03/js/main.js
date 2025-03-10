// ?DECLARAMOS LAS VARIABLES GLOBALES
const btnConvertir = document.getElementById('convertirUnidad');
const resultadoDiv = document.getElementById('contenedor_conversiones');
const conversionSelect = document.getElementById('unidadesConversion');
const categoriaSelect = document.getElementById('categoria');
const saludoHistorial = document.getElementById('saludo_historial');
const selectCategoria = document.getElementById("categoria");
const nombreJSON = 'unidades.json'
let dataCategorias = [];
let dataMedidas = [];

//Funcion para cargar combo de Categorias de conversión
function cargarCategorias() {
    fetch(nombreJSON)
        .then(response => response.json())
        .then(data => {
            data.forEach((item, index) => {
                let option = document.createElement("option");
                option.value = item.NOMBRE;
                option.textContent = item.NOMBRE;
                selectCategoria.appendChild(option);
            });
        })
        .catch(error => console.error("Error al cargar JSON:", error));
}

//Funcion para traer los datos del JSON de conversiones de unidades
function cargarOpcionesCategoria() {
    fetch('unidades.json')
    .then(response => response.json())
    .then(data => {
        dataMedidas = data;
        //console.log(dataMedidas);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}

// Funcion para cargar Historial de conversiones desde LocalStorage
function cargarHistorial() {
    const historial = JSON.parse(localStorage.getItem('historialConversiones')) || [];
    historial.forEach(conversion => mostrarConversionEnHistorial(conversion));
}

// Funcion para calcular las conversiones disponibles
function calcularResultado(conversionSeleccionada, valorUnidad) {
    switch (conversionSeleccionada) {
        case 'METROS A KILÓMETROS': return valorUnidad / 1000;
        case 'KILÓMETROS A MILLAS': return valorUnidad * 0.621371;
        case 'PIES A METROS': return valorUnidad * 0.3048;
        case 'KILOGRAMOS A LIBRAS': return valorUnidad * 2.20462;
        case 'LIBRAS A GRAMOS': return valorUnidad * 453.592;
        case 'TONELADAS A KILOGRAMOS': return valorUnidad * 1000;
        case 'CELSIUS A FAHRENHEIT': return (valorUnidad * 9 / 5) + 32;
        case 'FAHRENHEIT A CELSIUS': return (valorUnidad - 32) * 5 / 9;
        case 'KELVIN A CELSIUS': return valorUnidad - 273.15;
        default: return valorUnidad;
    }
}

// Función para cargar la conversión realizada en el contenedor de historial
function mostrarConversionEnHistorial(conversion) {
    const card = document.createElement('div');
    card.classList.add('card', 'mt-2');

    card.innerHTML = `
        <div class="card-header text-dark">Conversión de ${conversion.nombreUsuario}</div>
        <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">Categoría: <b>${conversion.categoria}</b></li>
            <li class="list-group-item">Conversión: <b>${conversion.conversion}</b></li>
            <li class="list-group-item">Valor Original: <b>${conversion.valorOriginal}</b></li>
            <li class="list-group-item">Resultado: <b>${conversion.resultado}</b></li>
        </ul>
        </div>
        <div class="card-footer text-muted text-center">
        <button class="btn btn-danger w-50 eliminar-conversion">ELIMINAR</button>
        </div>
    `;

    resultadoDiv.appendChild(card);

    //Evento para eliminar card al darle cick al botón
    card.querySelector('.eliminar-conversion').addEventListener('click', function () {
        resultadoDiv.removeChild(card);
        eliminarDeHistorial(conversion);
    });
}

// Función para guardar card en el contenedor historial
function guardarEnHistorial(conversion) {
    const historial = JSON.parse(localStorage.getItem('historialConversiones')) || [];
    historial.push(conversion);
    localStorage.setItem('historialConversiones', JSON.stringify(historial));
}

// Función para eliminar card del contenedor historial
function eliminarDeHistorial(conversion) {
    let historial = JSON.parse(localStorage.getItem('historialConversiones')) || [];
    historial = historial.filter(item => item.valorOriginal !== conversion.valorOriginal || item.conversion !== conversion.conversion);
    localStorage.setItem('historialConversiones', JSON.stringify(historial));

    Toastify({
        text: "Conversión eliminada del historial",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "#ff0000",
        },
    }).showToast();
}

// Creación del Botón para limpiar todo el historial
const limpiarHistorialBtn = document.createElement('button');
limpiarHistorialBtn.textContent = 'LIMPIAR TODO EL HISTORIAL';
limpiarHistorialBtn.classList.add('btn', 'btn-warning', 'w-100', 'mt-3');
resultadoDiv.appendChild(limpiarHistorialBtn);

// Cargamos todo el DOM, y las funciones para cargar historial Conversiones, cargar combo de Categorias y opciones de Conversión 
document.addEventListener('DOMContentLoaded', () => {
    cargarHistorial();
    cargarCategorias();
    cargarOpcionesCategoria();
});

// Evento para cargar combo de Opciones de conversión
categoriaSelect.addEventListener('change', function () {
    const categoriaSeleccionada = categoriaSelect.value; //console.log(categoriaSeleccionada);
    conversionSelect.innerHTML = ''; // Limpiar opciones anteriores

    if (categoriaSeleccionada !== '0') {
        const opciones = dataMedidas.find(item => item.NOMBRE === categoriaSeleccionada).CONVERSIONES;
        conversionSelect.innerHTML = '<option value="0">Seleccione una opción</option>';
        opciones.forEach(conversion => {
            const option = document.createElement('option');
            option.value = conversion;
            option.textContent = conversion;
            conversionSelect.appendChild(option);
    });
    } else {
        conversionSelect.innerHTML = '<option value="0">Seleccione una opción</option>';
    }
});

// Evento para realizar conversión y mostrar en div de Historial de conversiones
document.getElementById('conversion-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombreUsuario = document.getElementById('nombreUser').value;
    const valorUnidad = parseFloat(document.getElementById('valorUnidad').value);
    const categoriaSeleccionada = categoriaSelect.value;
    const conversionSeleccionada = conversionSelect.value;

    if (nombreUsuario.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Falta el nombre',
            text: 'Por favor, ingrese su nombre antes de continuar.',
        });
        return;
    }
    
    if (categoriaSeleccionada === "0") {
        Swal.fire({
            icon: 'error',
            title: 'Seleccione una categoría',
            text: 'Debe elegir una categoría antes de continuar.',
        });
        return;
    }
    
    if (conversionSeleccionada === "0") {
        Swal.fire({
            icon: 'error',
            title: 'Seleccione una opción de conversión',
            text: 'Debe elegir una de las opciones de conversión antes de continuar.',
        });
        return;
    }
    
    if (isNaN(valorUnidad)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor inválido',
            text: 'Ingrese un número válido para la conversión.',
        });
        return;
    }

    let resultado = calcularResultado(conversionSeleccionada, valorUnidad);

    const nuevaConversion = {
        nombreUsuario,
        categoria: categoriaSeleccionada,
        conversion: conversionSeleccionada,
        valorOriginal: valorUnidad,
        resultado: resultado.toFixed(2)
    };

    mostrarConversionEnHistorial(nuevaConversion);
    guardarEnHistorial(nuevaConversion);

    Toastify({
        text: "Conversión guardada en historial!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "#28a745",
        },
    }).showToast();

    //Limpiamos el formulario
    document.getElementById('conversion-form').reset();
    conversionSelect.innerHTML = '<option value="0">Seleccione una opción</option>';
});

// Evento para limpiar historial de conversiones
document.getElementById('contenedor_conversiones').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-warning')) {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción eliminará todo el historial.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('historialConversiones');
                saludoHistorial.textContent = 'Historial vacío';
                resultadoDiv.innerHTML = '';
                Swal.fire('Historial Eliminado', '', 'success');
            }
        });
    }
});