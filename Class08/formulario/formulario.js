const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();  // Evita que la página se recargue al enviar el formulario
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    console.log("Nombre: " + nombre);
    console.log("Email: " + email);
    
    alert(`Gracias, ${nombre}. ¡Tu formulario fue enviado!`);

    document.getElementById('nombre').value = ''
    document.getElementById('email').value = ''

    
});