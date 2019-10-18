{
function mostrarOcultar(idContenido, idEnlace){
    let contenido = document.getElementById(idContenido);
    let enlace = document.getElementById(idEnlace);

    if(contenido.style.display=="" || contenido.style.display=="block" || contenido.style.display==null){
        contenido.style.display="none";
        enlace.innerHTML="Mostrar contenido";
    }else{
        contenido.style.display="block";
        enlace.innerHTML="Ocultar contenido";
    }


}

window.onload = function(){
    mostrarOcultar();
}
}