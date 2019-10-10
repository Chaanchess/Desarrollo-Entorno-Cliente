/**
 * @author Francisco José Sánchez Romero
 */

//se pide al usuario un número
let numero = prompt("Introduce el número del cual quieras obtener su factorial:");
//se inicia la variable en uno para que la multiplicación empiece correctamente
let resultado = 1;

//se recorren todos los números que hay hasta el número introducido y se van multiplicando entre ellos
for(i=1;i<=numero;i++){
    resultado*=i;
}

alert("El factorial de "+numero+" es: "+resultado);