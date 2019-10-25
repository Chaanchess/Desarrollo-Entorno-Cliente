/**
 * @author Francisco José Sánchez Romero
 */
{
    let primerMensaje;
    let segundoMensaje;
document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    primerMensaje = document.getElementById("primerMensaje");
    segundoMensaje = document.getElementById("segundoMensaje");

    primerMensaje.innerHTML= "Hola, soy el primer mensaje!";
    segundoMensaje.innerHTML= "Hola, soy el segundo mensaje!";

});
}