/* 
?ESCRIBE UNA FUNCIÓN QUE ESCRIBA LOS NUMEROS DEL 1 AL 100 
*/

function pintarNumeros(cantNumero) {
    for(let i=1; i<=cantNumero; i++){
        console.log(i);
    }
}

//pintarNumeros(5);

function cuentaLetras(){
    let palabra = prompt('Ingresa una palabra:');

    let nuevaPalabra = palabra.split(" ");

    let nuevaPalabra2 = palabra.length;

    return console.log(nuevaPalabra,nuevaPalabra2);
}

//cuentaLetras();

/*
const IVA = 1.21;
let importe = prompt('Ingresa el importe sobre el cual quieres calcular el IVA:');

const precioConIVA = (imp, iva) => imp * iva;
precioConIVA(importe, IVA)

*/

function tipoNumero(){
    let numero = Number(prompt('Ingresa un número:'));

    if(numero % 2 == 0){
        console.log('Es numero PAR.');
    } else {
        console.log('Es numero IMPAR');
    }
}

tipoNumero();