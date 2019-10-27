/**
 * @author Francisco José Sánchez Romero
 */
{
	let palindromo;
	
	let cadenaInput;

	let esPalindromo=function(){
		if(cadenaInput.value=="" || cadenaInput.value==null){
			palindromo.innerHTML="La cadena no puede estar vacía";
		}else{
			let cadena=cadenaInput.value;
			let cadenaSinEspacios = cadena.replace(/ /g, "");
			for (let i = 0; i < cadenaSinEspacios.length; i++) {
				if (cadenaSinEspacios[i] != cadenaSinEspacios[cadenaSinEspacios.length - i - 1]) {
					palindromo.innerHTML="La cadena "+"'"+cadena+"'"+" no es un palíndromo";
				}else{
					palindromo.innerHTML="La cadena "+"'"+cadena+"'"+" es un palíndromo";
				}
			}
		}
		
		
	}

	document.addEventListener("DOMContentLoaded", function init() {
		//Elemento del DOM
		palindromo = document.getElementById("palindromo");
		cadenaInput= document.getElementById("cadenaInput");

		document.getElementById("boton").addEventListener("click",esPalindromo);



	});
}