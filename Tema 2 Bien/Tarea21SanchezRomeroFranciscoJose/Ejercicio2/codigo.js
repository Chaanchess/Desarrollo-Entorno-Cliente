/**
 * @author Francisco José Sánchez Romero
 */

{
    let mensaje;
    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        mensaje = document.getElementById("mensaje");
    
        mensaje.innerHTML= "Hola Mundo! \nQué fácil es incluir 'comillas simples' \n y \"comillas dobles\" ";
    
    });
}