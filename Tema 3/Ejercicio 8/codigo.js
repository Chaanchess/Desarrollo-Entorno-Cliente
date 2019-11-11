/**
 * @author Francisco José Sánchez Romero
 */

{
    let info;


    let mostrarInfo = function() {
        let array = [0, 1, 2, 3, 4, 12, 20, 32, 40, 60, 80, 140, 265, 300, 350];
        info.innerHTML += "Contenido del array normal: " + array + "<br/><br/>";
        info.innerHTML += "<strong>forEach()</strong>: Recorremos el array mostrando clave y valor.</br>";
        array.forEach(function(valor, clave) {
            info.innerHTML += "Índice: " + clave + " Valor: " + valor + "<br/>";
        }) + "<br/></br>";
        info.innerHTML += "<br/>"
        info.innerHTML += "<strong>every()</strong>: Devuelve false, ya que no todos los elementos del array son mayores que 30. " +
            array.every(function(valor) {
                return valor > 30;
            }) + "</br></br>";

        info.innerHTML += "<strong>some()</strong>: Devuelve true o 1 ya que hay algún elemento mayor que 200. " +
            +array.some(function(valor) {
                return valor > 200;
            }) + "</br></br>";

        let array2 = array.filter(function(valor) { return valor > 50; })
        info.innerHTML += "<strong>filter()</strong>: Devuelve nuevo array con los valores mayores que 50: Nuevo array -->" + array2 + "</br>";
    }


    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        info = document.getElementById("informacion");

        mostrarInfo();

    });
}