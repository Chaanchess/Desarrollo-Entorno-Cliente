let cadena = prompt("Introduce el texto deseado: ").toLowerCase();
let resultado = esPalindromo(cadena);
if(resultado==true){
    console.log("La frase: '"+cadena+"' es un palíndromo")
}else{
    console.log("La frase: '"+cadena+"' no es un palíndromo")
}

function esPalindromo(cadena){
    let cadenaSinEspacios = cadena.replace(/ /g, "");
    for (var i=0;i<cadenaSinEspacios.length;i++){
		if(cadenaSinEspacios[i]!=cadenaSinEspacios[cadenaSinEspacios.length-i-1]){
			return false;
		}
	}
	return true;
}