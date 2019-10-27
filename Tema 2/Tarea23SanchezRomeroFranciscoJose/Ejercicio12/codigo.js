/**
 * @author Francisco José Sánchez Romero
 */
{
    let adicional;
    let enlace;

    let muestra = function(){
        adicional.className = "visible";
        enlace.className="oculto";
    }

document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    adicional = document.getElementById("adicional");
    enlace = document.getElementById("enlace");
    enlace.addEventListener("click",muestra);
});
}