/**
 * @author Francisco José Sánchez Romero
 */
{
    let numEnlaces;
    let enlaces;
    let enlacePenultimo;
    let numEnlacesDirecc;
    let numEnlacesTercer;
    let parrafos;
    let contador;

    document.addEventListener("DOMContentLoaded", function init() {

        numEnlaces = document.getElementById("numEnlaces");
        enlacePenultimo = document.getElementById("enlacePenultimo");
        numEnlacesDirecc = document.getElementById("numEnlacesDirecc");
        numEnlacesTercer = document.getElementById("numEnlacesTercer");
        enlaces = document.getElementsByTagName("a");
        parrafos = document.getElementsByTagName("p");
        contador = 0;

        numEnlaces.innerHTML = "Número de enlaces = " + enlaces.length;
        enlacePenultimo.innerHTML = "El penúltimo enlace lleva a: " + enlaces[enlaces.length - 2];

        for (i = 0; i <= enlaces.length; i++) {
            if (enlaces[i] == "http://prueba/") {
                contador++;
            }
        }

        numEnlacesDirecc.innerHTML = "Hay un total de " + contador + " enlaces que llevan a 'http://prueba'";
        numEnlacesTercer.innerHTML = "En el tercer párrafo hay " + parrafos[2].getElementsByTagName("a").length + " enlaces.";

    });
}



