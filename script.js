let indice = 0;
const elementos = document.querySelectorAll(".elemento");

function cambiarImagen() {
    elementos[indice].classList.remove("activo");  
    indice = (indice + 1) % elementos.length;         
    elementos[indice].classList.add("activo"); 
}

elementos[0].classList.add("activo");

setInterval(cambiarImagen, 5000);

