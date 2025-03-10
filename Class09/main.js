//ejemplo 1: PROMESAS CON ANALOGIA DE PIZZERIA

document.getElementById('btnPizza').addEventListener('click',() => {
    const cajaResultado = document.getElementById('resultadoPizza');

    cajaResultado.textContent = 'Preparando Pizza...';
    cajaResultado.style.color = 'black';

    const pedirPizza = new Promise((resolve,rejected) => {
        setTimeout(() => {
            const msjExito = Math.random() > 0.3;

            if(msjExito){
                resolve("Tu pedido está listo");
            }
            else{
                rejected("Lo sentimos, se malogró el horno");
            }

        },2000)

    });

    pedirPizza.then(mensaje => {
        cajaResultado.textContent = mensaje;
        cajaResultado.style.color = '#27ae60';
    }).catch(error => {
        cajaResultado.textContent = error;
        cajaResultado.style.color = '#e74c3c';
    })

});


//EJEMPLO 2: MANEJANDO LIBRERIAS

document.getElementById('btnConsultaLibreria').addEventListener('click',() => {

    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "success",
        html: `
          You can use <b>bold text</b>,
          <a href="#" autofocus>links</a>,
          and other HTML tags
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Great!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
          <i class="fa fa-thumbs-down">Not Great :(</i>
        `,
        cancelButtonAriaLabel: "Thumbs down"
      });

});

//EJEMPLO 3: MANEJANDO ALERTAS

document.getElementById('btnConsultaLibreria2').addEventListener('click',() => {

    Toastify({

        text: "Esto es una alerta",        
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
            background:"#27ae60",
            borderRadius: "8px",
            padding: "12px 24px"
        },

        }).showToast();

});

