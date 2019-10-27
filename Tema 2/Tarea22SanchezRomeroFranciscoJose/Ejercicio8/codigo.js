/**
 * @author Francisco José Sánchez Romero
 */
{
    let resultadoDOM;
    let numInput;

    let parImpar = function () {
        let numero = numInput.value;
        if (numero == null || numero == "") {
            resultadoDOM.innerHTML = "Debes de introducir un número";
        } else {
            if (numero % 2 == 0) {
                resultadoDOM.innerHTML = "El número " + numero + " es par.";
            } else {
                resultadoDOM.innerHTML = "El número " + numero + " es impar.";
            }
        }

    }

    document.addEventListener("DOMContentLoaded", function init() {
        resultadoDOM = document.getElementById("resultado");
        numInput = document.getElementById("numInput");
        document.getElementById("boton").addEventListener("click", parImpar);

    });
}