/**
 * @author Francisco José Sánchez Romero
 */
{
	let palindromo;
	let cadena;

	let esPalindromo=function(cadena){
		let cadenaSinEspacios = cadena.replace(/ /g, "");
		for (var i = 0; i < cadenaSinEspacios.length; i++) {
			if (cadenaSinEspacios[i] != cadenaSinEspacios[cadenaSinEspacios.length - i - 1]) {
				return false;
			}
		}
		return true;
	}

	document.addEventListener("DOMContentLoaded", function init() {
		//Elemento del DOM
		palindromo = document.getElementById("palindromo");

		cadena = prompt("Introduce el texto deseado: ").toLowerCase();

		if(esPalindromo(cadena)){
			palindromo.innerHTML="La frase: '" + cadena + "' es un palíndromo";
		}else{
			palindromo.innerHTML="La frase: '" + cadena + "' no es un palíndromo";
		}

	});
}