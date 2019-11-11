/**
 * @author Francisco José Sánchez Romero
 */
{
    let info;


    let mostrarArray = function() {
        let array = [0, 1, 2, 3, "hola", 4, 5, 6, true, "adios", false];
        array.forEach(function(value, index, array) {
            info.innerHTML += "<strong>Value</strong>: " + value + " <strong>Index</strong>: " + index + " <strong>Array</strong>: " + array + "<br/><br/>";
        })
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");


        mostrarArray();

    });
}