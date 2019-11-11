/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarArray = function() {
        let array = [0, 1, 2, 3, "hola", 4, 5, 6, true, "adios", false];
        for (let i = 0; i < array.length; i++) {
            info.innerHTML = "Contenido del array: " + array;
        }
    }


    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");

        mostrarArray();

    });
}