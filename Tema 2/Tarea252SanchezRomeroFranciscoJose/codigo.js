{
    let textArea;
    let info;
    let limita = function() {
        //let textArea = document.getElementById("texto");

        let evento = elEvento || window.event;
        let codigoCaracter = evento.code || evento.key;
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

    let actualizaInfo = function (maximoCaracteres) {
        //let textArea = document.getElementById("texto");
        //let info = document.getElementById("info");

        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - textArea.value.length) + " carácteres adicionales";
        if (textArea.value.length > maximoCaracteres) {
            info.innerHTML = "Has sobrepasado el límite de 100 carácteres, debes de borrar los " + (textArea.value.length - maximoCaracteres) + " últimos carácteres.";
        }
        else if (textArea.value.length === maximoCaracteres) {
            info.innerHTML = "Has llegado al máximo de 100 carácteres";
        }


    }

    window.onload = function () {
        textArea = document.getElementById("texto");
        info = document.getElementById("info");

        textArea.onkeypress = function () { limita() };
        textArea.onkeyup = function () { actualizaInfo(100) };
    }
}

