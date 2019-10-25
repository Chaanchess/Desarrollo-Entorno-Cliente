/**
 * @author Francisco José Sánchez Romero
 */
{
    let contenido1;
    let contenido2;
    let contenido3;
    let enlace1;
    let enlace2;
    let enlace3;

    let mostrarOcultar1 = function(){
        if(contenido1.style.display=="" || contenido1.style.display=="block" || contenido1.style.display==null){
            contenido1.style.display="none";
            enlace1.innerHTML="Mostrar contenido";
        }else{
            contenido1.style.display="block";
            enlace1.innerHTML="Ocultar contenido";
        }
    }

    let mostrarOcultar2 = function(){
        if(contenido2.style.display=="" || contenido2.style.display=="block" || contenido2.style.display==null){
            contenido2.style.display="none";
            enlace2.innerHTML="Mostrar contenido";
        }else{
            contenido2.style.display="block";
            enlace2.innerHTML="Ocultar contenido";
        }
    }

    let mostrarOcultar3 = function(){
        if(contenido3.style.display=="" || contenido3.style.display=="block" || contenido3.style.display==null){
            contenido3.style.display="none";
            enlace3.innerHTML="Mostrar contenido";
        }else{
            contenido3.style.display="block";
            enlace3.innerHTML="Ocultar contenido";
        }
    }

document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    contenido1=document.getElementById("contenidos_1");
    contenido2=document.getElementById("contenidos_2");
    contenido3=document.getElementById("contenidos_3");

    enlace1=document.getElementById("enlace_1");
    enlace2=document.getElementById("enlace_2");
    enlace3=document.getElementById("enlace_3");
    
    enlace1.addEventListener("click",mostrarOcultar1);
    enlace2.addEventListener("click",mostrarOcultar2);
    enlace3.addEventListener("click",mostrarOcultar3);

});
}