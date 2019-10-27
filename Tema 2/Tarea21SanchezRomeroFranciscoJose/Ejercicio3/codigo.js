/**
 * @author Francisco José Sánchez Romero
 */
{
        let mesesDOM;
        let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    document.addEventListener("DOMContentLoaded", function init() {
        mesesDOM = document.getElementById("meses");


        for (i = 0; i < meses.length; i++) {
            mesesDOM.innerHTML += " " + (i + 1) + ":" + meses[i];
        }


    });

}