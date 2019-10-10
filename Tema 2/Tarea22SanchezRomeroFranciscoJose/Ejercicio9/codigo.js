/**
 * @author Francisco José Sánchez Romero
 */

let cadena = prompt("Introduce algo de texto: ");
let comprobacion = compruebaCadena(cadena);

function compruebaCadena(cadena){
    if(cadena==cadena.toUpperCase()){
        console.log("La cadena de texto introducida está escrita en mayúscula.");
    }else if(cadena==cadena.toLowerCase()){
        console.log("La cadena de texto introducida está escrita en minúscula.");
    }else{
        console.log("La cadena de texto introducida tiene carácteres mixtos.");
    }
}
