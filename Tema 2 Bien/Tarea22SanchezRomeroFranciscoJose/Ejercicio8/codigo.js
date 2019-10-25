/**
 * @author Francisco José Sánchez Romero
 */
{
    let resultadoDOM;
    let numero;

let parImpar = function(numero){
    if(numero%2==0){
        resultadoDOM.innerHTML="El número "+numero+" es par.";
    }else{
        resultadoDOM.innerHTML="El número "+numero+" es impar.";
    }
}

document.addEventListener("DOMContentLoaded", function init() {
    resultadoDOM=document.getElementById("resultado");
    numero=prompt("Introduce un número entero: ");
    parImpar(numero);

});
}