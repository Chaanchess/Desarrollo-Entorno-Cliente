
/**
 * @author Francisco José Sánchez Romero
 */
{
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
        'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let dni;
    let numDNI;
    let letraDNI;

    let compruebaDNI = function () {
        numeros = numDNI.value;
        letra = letraDNI.value.toUpperCase()

        if (numeros.length != 8) {
            dni.innerHTML = "El número introducido no es correcto";
        } else {

            if (letras[numeros % 23] != letra) {

                dni.innerHTML = "El número y la letra introducidos no son correctos, prueba de nuevo.";

            } else {

                dni.innerHTML = "El número y letra introducidos crean un DNI correcto.";
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        dni = document.getElementById("dni");
        numDNI = document.getElementById("numDNI");
        letraDNI = document.getElementById("letraDNI");

        document.getElementById("boton").addEventListener("click", compruebaDNI);


    });
}