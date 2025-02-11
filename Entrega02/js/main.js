/*

! Entrega N°2
! ===========
TODO: Mostrar tu simulador JS interactuando con HTML
? Integrar las herramientas JS aprendidas hasta aquí
    !  Objetivos específicos :
    * Modifica su estructura anterior, integrando JS con JavaScript mediante el uso de DOM y Eventos.
    * Programa el circuito de interacción completo de la lógica de tu aplicación web, agregando las nuevas herramientas JS aprendidas
    * Guarda tus objetos o arrays de objetos en localstorage para dejar disponible los datos agregados por el usuario ejemplo(los productos en un carrito de compras)
    ! Se debe entregar :
    * Documento HTML + CSS (al menos uno)
    * Archivo(s) JS referenciado(s) en el HTML
    ! Formato :
    * Archivo en formato .ZIP con la carpeta y los archivos del proyecto. 
    * Debe contener el nombre “Entregable2+Apellido”
    * Guarda los archivos JS, CSS y JSON en subcarpetas
? Sugerencias, en esta etapa debes integrar:
    !JavaScript :
    * Los algoritmos de JS deben ser invocados desde HTML, e interactuar con el contenido web, creando HTML, leyendo y procesando datos ingresados desde formularios, inputs, etc.
    !HTML : 
    * Elimina toda interacción con la Consola JS, convirtiendo esta interacción en el DOM del HTML.
    !CSS : 
    * Termina de diseñar la estética visual necesaria en tu webapp con CSS y/o un framework CSS.
? Criterios de evaluación
    ! Funcionalidad :
    * Se simula uno o más flujos de trabajo en términos de entrada, proceso y salida.
    * La funcionalidad es apropiada al contexto del simulador. 
    * Carece de errores de cómputo durante el procesamiento.
    ! Interactividad :
    * Se capturan entradas ingresadas por el usuario mediante eventos. 
    * Se efectúan una o más salidas por HTML modificando el DOM. 
    * Existe un control de ingreso de entradas y las salidas son coherentes en relación a los datos ingresados.
    ! Escalabilidad :
    * Se declaran funciones con parámetros para definir instrucciones con una tarea específica. 
    * Se emplean arrays para agrupar valores relacionados. Se definen objetos con propiedades y métodos relevantes al contexto. 
    * Se establece un criterio homogéneo para la detección de eventos.
    * Se almacena en storage datos relevantes generados durante la simulación
    !Integridad  :
    * Se define el código JavaScript en un archivo .js, referenciándolo correctamente desde el HTML. 
    * Se evitan métodos prompt() y alert() para evitar interrupciones durante el procesamiento y actualización del DOM. 
    * La información estática del proyecto se emplea adecuadamente
    !Legibilidad :
    * Los nombres de variables. funciones y objetos son significativos para el contexto. 
    * Las instrucciones se escriben de forma legible y se emplean comentarios oportunos. 
    * El código fuente es ordenado en términos de declaración y secuencia.

*/

// ?DECLARAMOS LAS VARIABLES GLOBALES
const btnConvertir = document.getElementById('convertirUnidad');
const resultadoDiv = document.getElementById('contenedor_conversiones');
const conversionSelect = document.getElementById('unidadesConversion');
const categoriaSelect = document.getElementById('categoria');
const saludoHistorial = document.getElementById('saludo_historial');

// ?CREACIÓN DEL ARRAY PARA CARGAR OPCIONES DE CONVERSION
const MEDIDAS = [
    {
        NOMBRE : 'LONGITUD',
        CONVERSIONES : [
        'METROS A KILÓMETROS',
        'KILÓMETROS A MILLAS',
        'PIES A METROS'
        ]
    },
    {
        NOMBRE : 'PESO',
        CONVERSIONES : [
        'KILOGRAMOS A LIBRAS',
        'LIBRAS A GRAMOS',
        'TONELADAS A KILOGRAMOS'
        ]
    },
    {
        NOMBRE : 'TEMPERATURA',
        CONVERSIONES : [
        'CELSIUS A FAHRENHEIT',
        'FAHRENHEIT A CELSIUS',
        'KELVIN A CELSIUS'
        ]
    },
];

// Cargamos todo el DOM, y la función para cargar historial de LocalStorage
document.addEventListener('DOMContentLoaded', cargarHistorial);

// Evento para cargar combo de opciones de conversión
categoriaSelect.addEventListener('change', function () {
    const categoriaSeleccionada = categoriaSelect.value;
    conversionSelect.innerHTML = ''; // Limpiar opciones anteriores

    if (categoriaSeleccionada !== '0') {
        const opciones = MEDIDAS.find(item => item.NOMBRE === categoriaSeleccionada).CONVERSIONES;
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

    if (isNaN(valorUnidad)) {
        alert('Por favor, ingresa un valor válido.');
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

    document.getElementById('conversion-form').reset();
    conversionSelect.innerHTML = '<option value="0">Seleccione una opción</option>';
});

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
}

// Creación del Botón para limpiar todo el historial
const limpiarHistorialBtn = document.createElement('button');
limpiarHistorialBtn.textContent = 'LIMPIAR TODO EL HISTORIAL';
limpiarHistorialBtn.classList.add('btn', 'btn-warning', 'w-100', 'mt-3');
resultadoDiv.appendChild(limpiarHistorialBtn);

// Evento para limpiar historial de conversiones
limpiarHistorialBtn.addEventListener('click', function () {
    localStorage.removeItem('historialConversiones');
    resultadoDiv.innerHTML = ''; // Limpia el contenedor
    saludoHistorial.textContent = 'Historial vacío';
});




