/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarArray = function() {
        let array = [0, undefined, "hola", 1, 2, 3, "adios", undefined, true, undefined, false, 4, 5, 6, "bienvenido"];
        info.innerHTML += "Array normal: " + array + "<br/>";
        info.innerHTML += "Array con undefined borrados: " + deleteUndefined(array);
    }

    let deleteUndefined = function(array) {

        array.forEach(element => {

            if (element === undefined) {

                array.splice(array.indexOf(element), 1);

            }

        });
        return array;
    }


    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");

        mostrarArray();

    });
}