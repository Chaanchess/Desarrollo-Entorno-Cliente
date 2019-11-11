/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarArray = function() {
        let array = [0, 1, 2, 3, "hola", 4, 5, 6, true, "adios", false];
        info.innerHTML += "Index 3 en el array: " + (3 in array) + ". Devuelve true porque existe ese índice<br/>";
        info.innerHTML += "Index 12 en el array: " + (12 in array) + ". Devuelve false porque no existe ese índice en el array<br/>";
        info.innerHTML += "Valor 'hola' en array: " + ('hola' in array) + ". Al ser un valor devuelve false, ya que hay que indicar el índice<br/>";
        info.innerHTML += "Length en array: " + (length in array) + ". Devuelve true porque length es una propiedad de Array<br/>";
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");


        mostrarArray();

    });
}