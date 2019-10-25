/**
 * @author Francisco José Sánchez Romero
 */
{
    let factorial;
    let numero;
    let resultado;
    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        factorial = document.getElementById("factorial");
        numero = prompt("Introduce el número del cual quieras obtener su factorial:");
        resultado = 1;

        for (i = 1; i <= numero; i++) {
            resultado *= i;
        }

        factorial.innerHTML = "El factorial de " + numero + " es: " + resultado;

    });
}