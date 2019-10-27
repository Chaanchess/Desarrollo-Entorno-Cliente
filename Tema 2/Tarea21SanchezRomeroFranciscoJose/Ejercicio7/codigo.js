/**
 * @author Francisco José Sánchez Romero
 */
{
    let factorial;
    let numInput;

    let calculaFactorial = function () {
        let numero = numInput.value;
        let resultado = 1;
        if (numero == null || numero=="") {
            factorial.innerHTML = "Debes de introducir un número";
        } else {
            for (i = 1; i <= numero; i++) {
                resultado *= i;
            }

            factorial.innerHTML = "El factorial de " + numero + " es: " + resultado;
        }


    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        factorial = document.getElementById("factorial");
        numInput = document.getElementById("numInput");

        document.getElementById("boton").addEventListener("click", calculaFactorial);


    });
}