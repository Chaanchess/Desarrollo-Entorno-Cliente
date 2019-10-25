/**
 * @author Francisco José Sánchez Romero
 */
{
    let numero1 = 5;
    let numero2 = 8;
    let mayor;
    let positivo;
    let negativo;
    let incremento;
    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        mayor=document.getElementById("mayor");
        positivo=document.getElementById("positivo");
        negativo=document.getElementById("negativo");
        incremento=document.getElementById("incremento");

        if (numero1 <= numero2) {
            mayor.innerHTML="" + numero1 + " no es mayor que " + numero2;
        }

        if (numero2 >= 0) {
            positivo.innerHTML="" + numero2 + " es positivo";
        }

        if (numero1 < 0 || numero1 != 0) {
            negativo.innerHTML="" + numero1 + " es negativo o distinto de cero";
        }

        if ((numero1 += 1) < numero2) {
            incremento.innerHTML="Incrementar en 1 unidad el valor del primer número no lo hace mayor o igual que " + numero2;
        }

    });
}
