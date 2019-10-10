/**
 * @author Francisco José Sánchez Romero
 */

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//pedir al usuario un número y guardarlo en la variable numeros
let numeros = prompt("Introduce solamente los números de tu DNI: ");
//pedir al usuario una letra y guardarla en la variable letra
let letra = prompt("Introduce la letra de tu DNI: ");
//se convierte la letra a mayúscula para evitar errores
letra = letra.toUpperCase();

//comprueba que el número introducido sea correcto
if(numeros < 0 || numeros > 99999999) {
    alert("El número introducido no es válido");
}else{
    //en el caso de que este correcto, hace la operación para calcular la letra
    let calculaLetra = letras[numeros % 23];

    if(calculaLetra != letra) {

        alert("La letra o el número proporcionados no son correctos");

    }else {

        alert("El número y letra introducidos crean un DNI correcto.");
    }
}