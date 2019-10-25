
/**
 * @author Francisco José Sánchez Romero
 */
{
    let cadenaDOM;
    let cadena;

    let compruebaCadena = function(cadena){
        if(cadena==cadena.toUpperCase()){
            cadenaDOM.innerHTML="La cadena de texto introducida está escrita en mayúscula.";
        }else if(cadena==cadena.toLowerCase()){
            cadenaDOM.innerHTML="La cadena de texto introducida está escrita en minúscula.";
        }else{
            cadenaDOM.innerHTML="La cadena de texto introducida tiene carácteres mixtos.";
        }
    }

document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    cadenaDOM=document.getElementById("cadena");
    cadena = prompt("Introduce algo de texto: ");
    compruebaCadena(cadena);

});
}
