/**
 * @author Francisco José Sánchez Romero
 */

{
    let input1;
    let infoDecimal;
    let input2numero1;
    let input2numero2;
    let infoOperacion;
    let input3;
    let infoArea;

    let conversor = function() {
        if (input1.value == "" || input1.value == null) {
            infoDecimal.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            if (document.getElementById("decimal").checked) {
                let numero = parseInt(input1.value);
                infoDecimal.innerHTML = "Decimal: " + numero + "<br>";
                infoDecimal.innerHTML += "Binario: " + numero.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numero.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numero.toString(16);
            }
            if (document.getElementById("binario").checked) {
                let numero = input1.value;
                let numeroDecimal = parseInt(numero, 2)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numero + "<br>";
                infoDecimal.innerHTML += "Octal: " + numeroDecimal.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numeroDecimal.toString(16);
            }

            if (document.getElementById("octal").checked) {
                let numero = input1.value;
                let numeroDecimal = parseInt(numero, 8)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numeroDecimal.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numero + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numeroDecimal.toString(16);
            }

            if (document.getElementById("hexadecimal").checked) {
                let numero = input1.value;
                let numeroDecimal = parseInt(numero, 16)
                infoDecimal.innerHTML = "Decimal: " + numeroDecimal + "<br>";
                infoDecimal.innerHTML += "Binario: " + numeroDecimal.toString(2) + "<br>";
                infoDecimal.innerHTML += "Octal: " + numeroDecimal.toString(8) + "<br>";
                infoDecimal.innerHTML += "Hexadecimal: " + numero;
            }
        }

    }

    let sumar = function(){
        if (input2numero1.value == "" || input2numero1.value == null || input2numero2.value == "" || input2numero2.value == null) {
            infoOperacion.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            let numero1 = parseInt(input2numero1.value);
            let numero2 = parseInt(input2numero2.value);
            if (document.getElementById("decimal").checked) {
                numero1 = parseInt(input2numero1.value);
            }
            if (document.getElementById("binario").checked) {
                numero1 = parseInt(numero1, 2);
            }

            if (document.getElementById("octal").checked) {
                numero1 = parseInt(numero1, 8);
            }

            if (document.getElementById("hexadecimal").checked) {
                numero1 = parseInt(numero1, 16);
            }

            if (document.getElementById("decimal2").checked) {
                numero2 = parseInt(input2numero2.value);
            }
            if (document.getElementById("binario2").checked) {
                numero2 = parseInt(numero2, 2);
            }

            if (document.getElementById("octal2").checked) {
                numero2 = parseInt(numero2, 8);
            }

            if (document.getElementById("hexadecimal2").checked) {
                numero2 = parseInt(numero2, 16);
            }
            infoOperacion.innerHTML="El resultado de la suma de los números es igual a: "+(numero1+numero2);
        }

        

    }

    let multiplicar = function(){
        if (input2numero1.value == "" || input2numero1.value == null || input2numero2.value == "" || input2numero2.value == null) {
            infoOperacion.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        } else {
            let numero1 = parseInt(input2numero1.value);
            let numero2 = parseInt(input2numero2.value);
            if (document.getElementById("decimal").checked) {
                numero1 = parseInt(input2numero1.value);
            }
            if (document.getElementById("binario").checked) {
                numero1 = parseInt(numero1, 2);
            }

            if (document.getElementById("octal").checked) {
                numero1 = parseInt(numero1, 8);
            }

            if (document.getElementById("hexadecimal").checked) {
                numero1 = parseInt(numero1, 16);
            }

            if (document.getElementById("decimal2").checked) {
                numero2 = parseInt(input2numero2.value);
            }
            if (document.getElementById("binario2").checked) {
                numero2 = parseInt(numero2, 2);
            }

            if (document.getElementById("octal2").checked) {
                numero2 = parseInt(numero2, 8);
            }

            if (document.getElementById("hexadecimal2").checked) {
                numero2 = parseInt(numero2, 16);
            }
            infoOperacion.innerHTML="El resultado de la multiplicación de los números es igual a: "+(numero1*numero2);
        }

        

    }

    let calcularArea = function(){
        if(input3.value=="" || input3.value==null){
            infoArea.innerHTML = "Debes de introducir un número para poder hacer el cálculo";
        }else{
            let radio = input3.value;
            let area=  Math.PI * Math.pow(radio,2);
            infoArea.innerHTML = "El área de la circunferencia de radio "+radio+" es: "+area.toFixed(4)+" cm<sup>2</sup>";
        }
        
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //INFORMACIÓN EJERCICIO 1
        input1 = document.getElementById("numeroEjercicio1");
        infoDecimal = document.getElementById("info1");
        document.getElementById("convertir").addEventListener("click", conversor);

        //INFORMACIÓN EJERCICIO 2
        input2numero1 = document.getElementById("numero1Ejercicio2");
        input2numero2 = document.getElementById("numero2Ejercicio2");
        infoOperacion = document.getElementById("info2");
        document.getElementById("sumar").addEventListener("click", sumar);
        document.getElementById("multiplicar").addEventListener("click", multiplicar);

        //INFORMACIÓN EJERCICIO 2
        input3 = document.getElementById("numeroEjercicio3");
        infoArea = document.getElementById("info3");
        document.getElementById("area").addEventListener("click", calcularArea);

    });
}