/**
 * @author Francisco José Sánchez Romero
 */

{
    let calculadora = {

        inputResultado: 0,
        numero1: 0,
        numero2: 0,
        suma: false,
        resta: false,
        multiplicacion: false,
        division: false,
        porcentaje: false,
        segundoNumero: false,
        realizarOperacion: false,
        operacionActual: false,
        operacionPosterior: false,
        primerNumero: true,

        iniciar() {
            this.crearDivContenedor();
            this.creaBotones();
            let inputs = document.getElementsByTagName("input");
            inputResultado = document.getElementById("inputResultado");
            inputResultado.value = "0";
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("click", calculadora.pulsaBoton);
            }

        },

        creaBotones() {
            let botones = ['CE', '←', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'X', '1', '2', '3', '÷', '0', '±', ',', '='];
            let input;
            let divContenedor = document.getElementById('divContenedor');
            let inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.id = 'inputResultado';
            inputText.style.width = '226px';
            inputText.style.fontSize = '20px';
            inputText.style.height = '30px';
            inputText.style.margin = '5px';
            inputText.style.textAlign = 'right';
            inputText.style.backgroundColor = '#a6e3e9';
            inputText.style.borderRadius = '5px';
            inputText.readOnly = true;
            divContenedor.appendChild(inputText);
            for (let i = 1; i <= botones.length; i++) {
                input = document.createElement('input');
                input.type = 'button';
                input.value = botones[i - 1];
                input.id = botones[i - 1];
                input.style.height = '50px';
                input.style.width = '50px';
                input.style.margin = '5px';
                input.style.fontSize = '20px';
                input.style.backgroundColor = '#f08a5d';
                input.style.borderRadius = '5px';
                divContenedor.appendChild(input);
            }
        },

        crearDivContenedor() {
            let titulo = document.createElement("h1");
            let tituloH1 = document.createTextNode("Calculadora de Fco. Sánchez Romero");
            titulo.style.display = "flex";
            titulo.style.justifyContent = "center";
            document.body.appendChild(titulo);
            titulo.appendChild(tituloH1);
            let div = document.createElement('div');
            div.id = 'divContenedor';
            div.style.backgroundColor = '#393e46'
            div.style.margin = "0 auto";
            div.style.width = '242px';
            div.style.marginTop = '50px';
            div.style.borderRadius = '5px';
            document.body.appendChild(div);
        },

        pulsaBoton() {
            let btn = this.value;
            if (inputResultado.value == "Error") {
                inputResultado.value = 0;
                calculadora.numero1 = 0;
                calculadora.numero2 = 0;
                calculadora.anularOperador();
                calculadora.operacionActual = false;
                calculadora.operacionPosterior = false;
                calculadora.primerNumero = true;
            }
            switch (btn) {
                case "0":
                    if (calculadora.segundoNumero) {
                        inputResultado.value = btn;
                        calculadora.segundoNumero = false;
                    } else if (inputResultado.value != 0 || inputResultado.value.length == 0 || inputResultado.value.includes("."))
                        inputResultado.value += btn;
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    if (inputResultado.value == 0 && inputResultado.value.length <= 1 || calculadora.segundoNumero)
                        inputResultado.value = btn;
                    else
                        inputResultado.value += btn;
                    calculadora.segundoNumero = false;
                    break;
                case "±":
                    if (inputResultado.value > 0)
                        inputResultado.value = -Math.abs(inputResultado.value);
                    else
                        inputResultado.value = Math.abs(inputResultado.value);
                    break;
                case "←":
                    inputResultado.value = inputResultado.value.substring(0, inputResultado.value.length - 1);
                    if (inputResultado.value == "")
                        inputResultado.value = "0";


                    break;
                case ",":
                    if (!inputResultado.value.includes("."))
                        inputResultado.value += ".";
                    break;
                case "CE":
                    inputResultado.value = 0;
                    calculadora.numero1 = 0;
                    calculadora.numero2 = 0;
                    calculadora.anularOperador();
                    calculadora.operacionActual = false;
                    calculadora.operacionPosterior = false;
                    calculadora.primerNumero = true;
                    break;
                case "+":
                case "-":
                case "X":
                case "÷":
                case "%":
                    if (calculadora.primerNumero) {
                        calculadora.numero1 = inputResultado.value;
                        calculadora.operacionPosterior = btn;
                        calculadora.primerNumero = false;
                    } else {
                        calculadora.numero2 = inputResultado.value;
                        calculadora.realizarOperacion = true;
                        calculadora.operacionActual = calculadora.operacionPosterior;
                        calculadora.operacionPosterior = btn;
                    }
                    calculadora.estableceOperador(calculadora.operacionActual);
                    if (calculadora.realizarOperacion && !calculadora.segundoNumero)
                        calculadora.comprobarOperacion(inputResultado.value);
                    calculadora.segundoNumero = true;
                    break;
                case "=":
                    if (calculadora.operacionActual == false && calculadora.operacionPosterior != "+" || calculadora.operacionPosterior != "-" || calculadora.operacionPosterior != "X" || calculadora.operacionPosterior != "/")
                        calculadora.estableceOperador(calculadora.operacionPosterior);
                    calculadora.comprobarOperacion(inputResultado.value);
                    calculadora.segundoNumero = true;
                    break;
            }
        },

        comprobarOperacion(btn) {
            if (calculadora.suma || calculadora.resta || calculadora.multiplicacion || calculadora.division || calculadora.porcentaje) {
                calculadora.numero2 = btn;
                calculadora.realizarCalculo();
            }
        },

        anularOperador() {
            calculadora.suma = false;
            calculadora.resta = false;
            calculadora.multiplicacion = false;
            calculadora.division = false;
            calculadora.porcentaje = false;
        },

        estableceOperador(btn) {
            calculadora.anularOperador();
            switch (btn) {
                case "+":
                    calculadora.suma = true;
                    break;
                case "-":
                    calculadora.resta = true;
                    break;
                case "X":
                    calculadora.multiplicacion = true;
                    break;
                case "÷":
                    calculadora.division = true;
                    break;
                case "%":
                    calculadora.porcentaje = true;
                    break;
            }
        },

        realizarCalculo() {
            if (calculadora.suma) {
                inputResultado.value = parseFloat(calculadora.numero1) + parseFloat(calculadora.numero2);
            } else if (calculadora.resta) {
                inputResultado.value = parseFloat(calculadora.numero1) - parseFloat(calculadora.numero2);
            } else if (calculadora.multiplicacion) {
                inputResultado.value = parseFloat(calculadora.numero1) * parseFloat(calculadora.numero2);
            } else if (calculadora.division) {
                inputResultado.value = parseFloat(calculadora.numero1) / parseFloat(calculadora.numero2);
            } else {
                inputResultado.value = (parseFloat(calculadora.numero1) * parseFloat(calculadora.numero2)) / 100;
            }
            calculadora.numero1 = inputResultado.value;
            calculadora.numero2 = 0;
            if (inputResultado.value == "Infinity" || inputResultado.value == "NaN") {
                inputResultado.value = "Error";
            }
        }
    };

    document.addEventListener("DOMContentLoaded", function init() {
        calculadora.iniciar();
    });
}