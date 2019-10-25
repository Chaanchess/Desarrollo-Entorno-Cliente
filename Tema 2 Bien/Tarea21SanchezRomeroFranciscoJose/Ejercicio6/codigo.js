
/**
 * @author Francisco José Sánchez Romero
 */
{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let dni;
    let error;
    let calculaLetra
    let numeros;
    let letra;

    document.addEventListener("DOMContentLoaded", function init() {
        //Elemento del DOM
        dni = document.getElementById("dni");
        error=document.getElementById("error");
        numeros = prompt("Introduce solamente los números de tu DNI: ");
        letra = prompt("Introduce la letra de tu DNI: ");
        letra = letra.toUpperCase()

        if (numeros.length!=8) {
            error.innerHTML="El número introducido no es correcto";
        } else {
            calculaLetra = letras[numeros % 23];
        
            if (calculaLetra != letra) {
        
                dni.innerHTML="El número y la letra introducidos no son correctos, prueba de nuevo.";
        
            } else {
        
                dni.innerHTML="El número y letra introducidos crean un DNI correcto.";
            }
        }

    });
}