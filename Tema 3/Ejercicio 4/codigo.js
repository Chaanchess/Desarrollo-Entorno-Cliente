/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarArray = function() {
        let dimesion = 2;
        let elementos = 12;
        let array = creaArray(dimesion, elementos);
        info.innerHTML += "Dimensión: " + dimesion + " Números: " + elementos + "<br/><br/>"
        array.forEach(function(value, index) {
            info.innerHTML += "Index = " + index + " Value = " + value + "<br/>";
        });
    }

    let creaArray = function(dimesion, elementos) {
        let array = new Array(dimesion);
        for (let i = 0; i < array.length; i++) {
            array[i] = new Array(elementos);
            for (let j = 0; j < array[i].length; j++) {
                array[i][j] = j;
            }
        }
        return array;
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");

        mostrarArray();

    });
}