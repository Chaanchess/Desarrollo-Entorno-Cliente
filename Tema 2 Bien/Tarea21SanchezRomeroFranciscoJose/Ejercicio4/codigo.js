/**
 * @author Francisco José Sánchez Romero
 */

{
    let textoMayor;
    let booleanTrue;
    let booleanFalse;
    let opSuma;
    let opResta;
    let opMult;
    let opDiv;
    let opResto;
    let valores = [true, 5, false, "hola", "adios", 2];
    let texto1 = valores[3];
    let texto2 = valores[4];
    let boolean1 = valores[0];
    let boolean2 = valores[2];
    let resultadoTrue;
    let resultadoFalse;
    let num1 = valores[1];
    let num2 = valores[5];
    let suma;
    let resta;
    let multiplicacion;
    let division;
    let resto;

    document.addEventListener("DOMContentLoaded", function init() {
        textoMayor = document.getElementById("textoMayor");
        booleanTrue = document.getElementById("booleanT");
        booleanFalse = document.getElementById("booleanF");
        opSuma = document.getElementById("suma");
        opResta = document.getElementById("resta");
        opMult = document.getElementById("multiplicacion");
        opDiv = document.getElementById("division");
        opResto = document.getElementById("resto");

        if (texto1 > texto2) {
            textoMayor.innerHTML = "El texto mayor es: " + texto1;
        } else {
            textoMayor.innerHTML = "El texto mayor es: " + texto2;
        }

        resultadoTrue = boolean1 || boolean2;
        booleanTrue.innerHTML=resultadoTrue;

        resultadoFalse = boolean1 && boolean2;
        booleanFalse.innerHTML=resultadoFalse;

        suma= num1+num2;
        opSuma.innerHTML="El resultado de la suma de los números "+num1+ " y "+num2+" es: "+suma;
        resta= num1-num2;
        opResta.innerHTML="El resultado de la resta de los números "+num1+ " y "+num2+" es: "+resta;
        multiplicacion= num1*num2;
        opMult.innerHTML="El resultado de la multiplicación de los números "+num1+ " y "+num2+" es: "+multiplicacion;
        division= num1/num2;
        opDiv.innerHTML="El resultado de la división de los números "+num1+ " y "+num2+" es: "+division;
        resto= num1%num2;
        opResto.innerHTML="El resto de la división de los números "+num1+ " y "+num2+" es: "+resto;




    });

}