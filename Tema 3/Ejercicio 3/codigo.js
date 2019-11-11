/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarArray = function() {
        let array = [0, 1, 2, 3, "hola", 4, 5, 6, true, "adios", false];
        info.innerHTML += "Le pasamos como parámetro nuestro array: <strong>" + (Array.isArray(array)) + "</strong>. Devuelve true ya que le hemos pasado un array.<br/>";
        info.innerHTML += "Le pasamos como parámetro la cadena 'hola': <strong>" + (Array.isArray("hola")) + "</strong>. Devuelve false ya que no se trata de un array.<br/>";
        info.innerHTML += "Le pasamos como parámetro el booleano 'true': <strong>" + (Array.isArray(true)) + "</strong>. Devuelve false ya que no se trata de un array.<br/>";
        info.innerHTML += "Le pasamos como parámetro 'undefined': <strong>" + (Array.isArray(undefined)) + "</strong>. Devuelve false ya que no se trata de un array.<br/>";
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");


        mostrarArray();

    });
}