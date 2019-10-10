/**
 * @author Francisco José Sánchez Romero
 */

let numero = prompt("Introduce un número entero: ");
let resultado = parImpar(numero);

function parImpar(numero){
    if(numero%2==0){
        console.log("El número "+numero+" es par.");
    }else{
        console.log("El número "+numero+" es impar.");
    }
}