/**
 * @author Francisco José Sánchez Romero
 */
{

    let lista;
    let boton;

    let anade = function () {
        let nuevo = document.createElement("li");
        let texto = document.createTextNode("¡Me has introducido en la lista!");
        nuevo.appendChild(texto);
        lista.appendChild(nuevo);
    }

    document.addEventListener("DOMContentLoaded", function init() {
        lista = document.getElementById("lista");
        boton = document.getElementById("boton");

        boton.addEventListener("click",anade);
    });
}