
/**
 * @author Francisco José Sánchez Romero
 */
{
    let cadenaDOM;

    let cadenaInput;

    let compruebaCadena = function () {
        let cadena= cadenaInput.value;
        if(cadena=="" || cadena==null){
            cadenaDOM.innerHTML = "La cadena no puede estar vacía";
        }else{
            if (cadena == cadena.toUpperCase()) {
                cadenaDOM.innerHTML = "La cadena de texto introducida está escrita en mayúscula.";
            } else if (cadena == cadena.toLowerCase()) {
                cadenaDOM.innerHTML = "La cadena de texto introducida está escrita en minúscula.";
            } else {
                cadenaDOM.innerHTML = "La cadena de texto introducida tiene carácteres mixtos.";
            }
        }
        
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        cadenaDOM = document.getElementById("cadena");
        cadenaInput = document.getElementById("cadenaInput");

        document.getElementById("boton").addEventListener("click",compruebaCadena);

    });
}
