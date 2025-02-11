const titulo = document.getElementById("titulo")

titulo.textContent="hola mundo desde javascript"

titulo.style.color="red"

titulo.style.backgroundColor="black"

titulo.style.fontSize = "50px"





const titulos = document.getElementsByClassName("ClaseTitulo")



console.log(titulos)

for (const titulo of titulos) {
    titulo.style.color = "green"
}