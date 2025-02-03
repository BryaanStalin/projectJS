/* 
?OBJETOS

- LOS MÉTODOS SON FUNCIONES DENTRO DEL OBJETO

*/

const producto = {
    nombre: "zapatillas nike",
    precio: 100,
    stock: 25,

    mostrarInfo: function () {
        console.log(`${this.nombre} cuesta ${this.precio}`);
    }
};

console.log(producto.nombre);
producto.mostrarInfo();


const miMascota = {
    nombre: "Pelusa",
    edad: "9",
    tipo: "Mestiza",

    mostrarDatos: function(){
        console.log(`Hola, me llamo ${this.nombre} tengo ${this.edad} años y soy de raza ${this.tipo}`);
    }
};

miMascota.mostrarDatos();

/*
?LOS OBJETOS PERMITEN AGRUPAR Y ORGANIZAR DATOS RELACIONADOS.
    ?OBJETOS SE USAN PARA MANIPULAR O REPRESENTAR DATOS
*/

const listaAlumnos = [];

function agregarAlumno(){

    mensajeNombre = "Ingrese el nombre del Alumno :"
    mensajeCurso = "Ingrese el nombre del Curso Matriculado :"
    mensajeEdad = "Ingrese la edad del Alumno :"

    const valorNombre = String(prompt(mensajeNombre));
    const valorCurso = String(prompt(mensajeCurso));
    const valorEdad = Number(prompt(mensajeEdad));

    const datosAlumnos = {
        nombre : valorNombre,
        curso : valorCurso,
        edad : valorEdad
    }


}