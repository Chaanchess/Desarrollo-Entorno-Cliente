{
    let textArea;
    let info;
    let limita = function(evento) {

        let codigoCaracter = evento.keyCode || evento.key;
        if (codigoCaracter == 37 || codigoCaracter == 39) {
            return true;
        }

        if (codigoCaracter == 8 || codigoCaracter == 46) {
            return true;
        }
        else if (textArea.value.length > maximoCaracteres) {
            return false;
        }
        else {
            return true;
        }
    }

    let actualizaInfo = function () {
        let maximoCaracteres=100;
        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - textArea.value.length) + " carácteres adicionales";
        if (textArea.value.length > maximoCaracteres) {
            info.innerHTML = "Has sobrepasado el límite de 100 carácteres, debes de borrar los " + (textArea.value.length - maximoCaracteres) + " últimos carácteres.";
        }
        else if (textArea.value.length === maximoCaracteres) {
            info.innerHTML = "Has llegado al máximo de 100 carácteres";
        }


    }

    document.addEventListener("DOMContentLoaded", function init() {
        textArea = document.getElementById("texto");
        info = document.getElementById("info");

        textArea.addEventListener("keypress",limita);
        textArea.addEventListener("keyup",actualizaInfo);
    });
}

