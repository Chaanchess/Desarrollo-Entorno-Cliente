/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;
    let long;


    let mostrarArray = function() {
        let dimesion = long.value;
        let array = creaArray(dimesion);
        info.innerHTML = "El array con dimensión " + dimesion + " es así: " + array;
    }

    let creaArray = function(dimesion) {
        let array = new Array(dimesion);
        for (let i = 0; i < dimesion; i++) {
            array[i] = i;
        }
        return array;
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");
        long = document.getElementById("longitud");

        document.getElementById("boton").addEventListener("click", mostrarArray);

    });
}