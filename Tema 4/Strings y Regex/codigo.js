/**
 * @author Francisco José Sánchez Romero
 */

{
    let ejercicio1;
    let input1;
    let ejercicio2;
    let input2;
    let ejercicio3;
    let input3;
    let ejercicio4;
    let input4;
    let ejercicio5;
    let inputPrimero5;
    let inputSegundo5;
    let ejercicio6;
    let inputPrimero6;
    let inputSegundo6;
    let ejercicio7;
    let input7;
    let ejercicio8;
    let input8;
    let ejercicio9;
    let input9;
    let ejercicio10;
    let input10;
    let ejercicio11;
    let input11;

    let capitaliza = function() {
        let cadena = input1.value.trim();
        let cadenaMayus = cadena.toLowerCase().split(' ');
        for (let i = 0; i < cadenaMayus.length; i++) {
            cadenaMayus[i] = cadenaMayus[i].charAt(0).toUpperCase() + cadenaMayus[i].substring(1);
        }
        ejercicio1.innerHTML = "Resultado: " + cadenaMayus.join(' ');
    }

    let invierte = function() {
        let cadena = input2.value.trim();
        let cadenaNueva = "";
        for (let i = 0; i < cadena.length; ++i) {
            c = cadena[i];
            if (c == c.toUpperCase()) {
                cadenaNueva += c.toLowerCase();
            } else if (c == c.toLowerCase()) {
                cadenaNueva += c.toUpperCase();
            } else {
                cadenaNueva += c;
            }
        }
        ejercicio2.innerHTML = "Resultado: " + cadenaNueva;
    }

    let camelCaser = function() {
        let cadena = input3.value.trim();
        let cadenaNueva = cadena.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function(match, chr) {
            return chr.toUpperCase();
        });

        ejercicio3.innerHTML = "Resultado: " + cadenaNueva;
    }

    let desCamelCaser = function() {
        let cadena = input4.value.trim();
        let cadenaNueva = cadena.split(/(?=[A-Z])/).join(' ');
        ejercicio4.innerHTML = "Resultado: " + cadenaNueva;
    }

    let finalizaEn = function() {
        let cadena1 = inputPrimero5.value.trim();
        let cadena2 = inputSegundo5.value.trim();
        if (cadena1.endsWith(cadena2)) {
            ejercicio5.innerHTML = "La cadena 1 finaliza con la cadena 2";
        } else {
            ejercicio5.innerHTML = "La cadena 1 no finaliza con la cadena 2";
        }

    }

    let empiezaEn = function() {
        let cadena1 = inputPrimero6.value.trim();
        let cadena2 = inputSegundo6.value.trim();
        if (cadena1.startsWith(cadena2)) {
            ejercicio6.innerHTML = "La cadena 1 empieza con la cadena 2";
        } else {
            ejercicio6.innerHTML = "La cadena 1 no empieza con la cadena 2";
        }

    }

    let compruebaDNI = function() {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
        let expresionRegDNI = /(\d{8})\s?-?([TRWAGMYFPDXBNJZSQVHLCKE])$/i;
        let cadena = input7.value.trim();
        let cadenaNueva = cadena.toUpperCase();
        if (!expresionRegDNI.test(cadenaNueva)) {
            ejercicio7.innerHTML = "El DNI introducido no tiene un formato correcto";
        } else {
            [, numero, letra] = expresionRegDNI.exec(cadenaNueva);
            if (letras[numero % 23] != letra) {
                ejercicio7.innerHTML = "La letra introducida es incorrecta";
            } else {
                ejercicio7.innerHTML = "¡DNI CORRECTO!";
            }
        }
    }

    let compruebaMatricula = function(){
        let cadena = (input8.value).trim();
        let expresionMatricula = /^[0-9]{4}[a-zA-Z]{3}$/;
        let cadenaNueva = cadena.toUpperCase();
        if(expresionMatricula.test(cadenaNueva)){
            ejercicio8.innerHTML="La matrícula '"+cadenaNueva+"' tiene un formato correcto."
        }else {
            ejercicio8.innerHTML="La matrícula '"+cadenaNueva+"' no tiene un formato correcto."
        }
    }

    let compruebaCodigoPostal = function(){
        let cadena = (input9.value).trim();
        let expresionCodigoPostal = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
        let cadenaNueva = cadena.toUpperCase();
        if(expresionCodigoPostal.test(cadenaNueva)){
            ejercicio9.innerHTML="El código postal '"+cadenaNueva+"' tiene un formato correcto."
        }else {
            ejercicio9.innerHTML="El código postal '"+cadenaNueva+"' no tiene un formato correcto."
        }
    }

    let compruebaMAC = function(){
        let cadena = (input10.value).trim();
        let expresionMAC = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        let cadenaNueva = cadena.toUpperCase();
        if(expresionMAC.test(cadenaNueva)){
            ejercicio10.innerHTML="La dirección MAC '"+cadenaNueva+"' tiene un formato correcto."
        }else {
            ejercicio10.innerHTML="La dirección MAC '"+cadenaNueva+"' no tiene un formato correcto."
        }
    }

    let compruebaIP = function(){
        let cadena = (input11.value).trim();
        let expresionIP = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
        let cadenaNueva = cadena.toUpperCase();
        if(expresionIP.test(cadenaNueva)){
            ejercicio11.innerHTML="La dirección IP '"+cadenaNueva+"' tiene un formato correcto."
        }else {
            ejercicio11.innerHTML="La dirección IP '"+cadenaNueva+"' no tiene un formato correcto."
        }
    }

    document.addEventListener("DOMContentLoaded", function init() {
        //INFORMACION EJERCICIO 1
        input1 = document.getElementById("cadenaEjercicio1");
        ejercicio1 = document.getElementById("info1");
        document.getElementById("boton1").addEventListener("click", capitaliza);

        //INFORMACION EJERCICIO 2
        input2 = document.getElementById("cadenaEjercicio2");
        ejercicio2 = document.getElementById("info2");
        document.getElementById("boton2").addEventListener("click", invierte);

        //INFORMACION EJERCICIO 3
        input3 = document.getElementById("cadenaEjercicio3");
        ejercicio3 = document.getElementById("info3");
        document.getElementById("boton3").addEventListener("click", camelCaser);

        //INFORMACION EJERCICIO 4
        input4 = document.getElementById("cadenaEjercicio4");
        ejercicio4 = document.getElementById("info4");
        document.getElementById("boton4").addEventListener("click", desCamelCaser);

        //INFORMACION EJERCICIO 5
        inputPrimero5 = document.getElementById("cadena1Ejercicio5");
        inputSegundo5 = document.getElementById("cadena2Ejercicio5");
        ejercicio5 = document.getElementById("info5");
        document.getElementById("boton5").addEventListener("click", finalizaEn);

        //INFORMACION EJERCICIO 6
        inputPrimero6 = document.getElementById("cadena1Ejercicio6");
        inputSegundo6 = document.getElementById("cadena2Ejercicio6");
        ejercicio6 = document.getElementById("info6");
        document.getElementById("boton6").addEventListener("click", empiezaEn);

        //INFORMACION EJERCICIO 7
        input7 = document.getElementById("cadenaEjercicio7");
        ejercicio7 = document.getElementById("info7");
        document.getElementById("boton7").addEventListener("click", compruebaDNI);

        //INFORMACION EJERCICIO 8
        input8 = document.getElementById("cadenaEjercicio8");
        ejercicio8 = document.getElementById("info8");
        document.getElementById("boton8").addEventListener("click", compruebaMatricula);

        //INFORMACION EJERCICIO 9
        input9 = document.getElementById("cadenaEjercicio9");
        ejercicio9 = document.getElementById("info9");
        document.getElementById("boton9").addEventListener("click", compruebaCodigoPostal);

        //INFORMACION EJERCICIO 10
        input10 = document.getElementById("cadenaEjercicio10");
        ejercicio10 = document.getElementById("info10");
        document.getElementById("boton10").addEventListener("click", compruebaMAC);

        //INFORMACION EJERCICIO 11
        input11 = document.getElementById("cadenaEjercicio11");
        ejercicio11 = document.getElementById("info11");
        document.getElementById("boton11").addEventListener("click", compruebaIP);

    });
}