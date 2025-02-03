// ?CREACIÓN DEL ARRAY PARA MENÚ DEL SISTEMA
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

// !EJECUTAMOS MENÚ DEL SISTEMA
menuOpcionesMedidas();

// ?FUNCIÓN PARA CREAR MENÚ DE UNIDADES DE CONVERSIÓN
function menuOpcionesMedidas() {
    
    let mensaje = '¡BIENVENIDOS AL CONVERSOR DE UNIDADES! \n';

    mensaje += "A continuación, ingrese una opción del listado."

    for(let i=0; i<MEDIDAS.length; i++) {
        mensaje += `\n [${i + 1}] Conversión de ${MEDIDAS[i].NOMBRE}`
    }

    let dato1;

    do {
        dato1 = Number(prompt(mensaje));
        if(dato1 <= 0 || isNaN(dato1) || dato1 > MEDIDAS.length){
            alert('Ingresar una opción válida, volverá al menú de opciones.');
        }

    } while (dato1 <= 0 || isNaN(dato1) || dato1 > MEDIDAS.length)

    return menuOpcionesConversiones(dato1);
}

// ?FUNCIÓN PARA SELECCIONAR MENÚ DE CONVERSIONES
function menuOpcionesConversiones(opcionSeleccionada){
    let mensaje = '';
    let unidad = opcionSeleccionada-1;
    
    mensaje += `Ha seleccionado la opción para Conversión de ${MEDIDAS[unidad].NOMBRE}. \n A continuación, ingrese una opción del listado.`

    for(let i=0; i<MEDIDAS[unidad].CONVERSIONES.length; i++){
        mensaje += `\n [${i + 1}] Conversión de ${MEDIDAS[unidad].CONVERSIONES[i]}`
    }

    let dato1;

    do {
        dato1 = Number(prompt(mensaje));
        if(dato1 <= 0 || isNaN(dato1) || dato1 > MEDIDAS[unidad].CONVERSIONES.length){
            alert('Ingresar una opción válida, volverá al menú de opciones.');
        }

    } while (dato1 <= 0 || isNaN(dato1) || dato1 > MEDIDAS[unidad].CONVERSIONES.length)

    return convertirUnidades(opcionSeleccionada,dato1);
}

// ?FUNCIÓN PARA INGRESAR VALOR DE MEDIDA A CONVERTIR
function convertirUnidades(unidad,opcionSeleccionada){

    let palabra = MEDIDAS[unidad - 1].CONVERSIONES[opcionSeleccionada - 1];

    let separador = " A ";

    palabra = palabra.split(separador);

    let unidadOrigen = palabra[0];
    let unidadDestino = palabra[1];

    let mensaje = `Ingrese el valor en ${unidadOrigen} :`;
    let dato1;


    if(unidad !== 3){
        do {
            dato1 = Number(prompt(mensaje));
            if(dato1 < 0 || isNaN(dato1)){
                alert('Sólo se aceptan valores positivos o "0".');
            }
    
        } while (dato1 < 0 || isNaN(dato1))
    } else {
        do {
            dato1 = Number(prompt(mensaje));
            if(isNaN(dato1)){
                alert('Sólo se aceptan valores positivos, negativos o "0".');
            }
    
        } while (isNaN(dato1))
    }

    return resultadoUnidades(unidad,opcionSeleccionada,unidadOrigen,unidadDestino,dato1);
}

// ?FUNCIÓN PARA REALIZAR LAS OPERACIONES DE CONVERSIÓN
function resultadoUnidades(unidad,conversion,origen,destino,valor){
    
    const mensajeOtraConversion = `\n \n ¿Desea realizar otra conversión? \n [1] Aceptar \n [0] Cancelar`;

    const operacionesConversion = {
        1 : {
            1 : valor => (valor / 1000).toFixed(2),         //METROS A KILÓMETROS
            2 : valor => (valor * 0.621371).toFixed(2),     //KILÓMETROS A MILLAS
            3 : valor => (valor * 0.3048).toFixed(2),       //PIES A METROS
        },
        2 : {
            1 : valor => (valor * 2.20462).toFixed(2),      //KILOGRAMOS A LIBRAS
            2 : valor => (valor * 453.592).toFixed(2),      //LIBRAS A GRAMOS
            3 : valor => (valor * 1000).toFixed(2),         //TONELADAS A KILOGRAMOS
        },
        3 : {
            1 : valor => ((valor * 9/5) + 32).toFixed(2),   //CELSIUS A FAHRENHEIT
            2 : valor => ((valor - 32) * 5/9).toFixed(2),   //FAHRENHEIT A CELSIUS
            3 : valor => (valor - 273.15).toFixed(2),       //KELVIN A CELSIUS
        }
    };

    let resultado = operacionesConversion[unidad][conversion](valor);

    let mensaje = `El resultado de la conversión de [${valor}] ${origen} a ${destino} es: ${resultado} !` + mensajeOtraConversion;

    let dato1;

    do {
        dato1 = Number(prompt(mensaje));
        if(dato1 !== 0 && dato1 !== 1){
            alert('Ingresar una opción válida, volverá al menú de opciones.');
        }
    } while (dato1 !== 0 && dato1 !== 1)


    return dato1 === 1 ? menuOpcionesMedidas() : console.log('SALIENDO DEL SIMULADOR');
}