/**
 * @author Francisco José Sánchez Romero
 */

//indica que cadena de texto es mayor
let valores = [true, 5, false, "hola", "adios", 2];
let texto1=valores[3];
let texto2=valores[4];
if (texto1 > texto2){
    alert("El texto mayor es: " +texto1);
}else{
    alert("El texto mayor es: "+texto2);
}

//operaciones necesarias para mostrar true o false
let boolean1 = valores[0];
let boolean2 = valores[2];
let resultadoTrue = boolean1 || boolean2;
alert(resultadoTrue);

let resultadoFalse = boolean1 && boolean2;
alert(resultadoFalse);

//distintas operaciones aritméticas con los valores numéricos del array
let num1= valores[1];
let num2 = valores[5];

let suma = num1+num2;
alert("El resultado de la suma es: "+suma);

let resta = num1-num2;
alert("El resultado de la resta es: "+resta);

let multiplicacion = num1*num2;
alert("El resultado de la multiplicacion es: "+multiplicacion);

let divison = num1/num2;
alert("El cociente de la división es: "+divison);

let resto = num1%num2;
alert("El resto de la division es: "+resto);
