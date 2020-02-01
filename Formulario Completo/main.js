{
    let enviar;
    let nombre;
    let select;
    let dni;
    let email;
    let fecha
    let telefono;
    let url;
    let condiciones;
    let errorNombre;
    let errorSexo;
    let errorNacionalidad;
    let errorDNI;
    let errorEmail;
    let errorFecha;
    let errorTelefono;
    let errorURL;
    let errorCondiciones

    let expresiones = {
        nombre: [
            /^([A-Z][a-z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/,
            "Formato incorrecto, debes de introducir un nombre y un apellido y que comiencen por una mayúscula"
        ],

        dni: [
            /^([0-9]{8})([A-Z(^IÑOU)]$)/i, ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'], "Formato de DNI incorrecto, introduce un DNI correcto"
        ],
        email: [
            /^[\w]+@{1}[\w]+\.[a-z]{2,}/i,
            "Formato de email no válido"
        ],
        fecha: [
            /^\d{2}([-/ ])\d{2}\1\d{4}$/,
            "Formatos de fecha no válido debe de ser: dd/mm/YYYY, dd mm YYYY, dd-mm-YYYY"
        ],
        telefono: [
            /^\d{9}$/,
            "Introduce un número de teléfono válido"
        ],
        url: [
            /http[s]?:\/\/[\w]+([\.]+[\w]+)+/,
            "Formato de url incorrecto"
        ]
    };

    let comprobarNombre = function() {
        if (!expresiones.nombre[0].test(nombre.value)) {
            errorNombre.textContent = expresiones.nombre[1];
        } else {
            errorNombre.textContent = "";
        }
    }

    let compruebaSexo = function() {
        if (!document.querySelector("input[name='sexo']:checked"))
            errorSexo.textContent = "Debes de seleccionar un sexo";
        else
            errorSexo.textContent = "";
    }

    let compruebaNacionalidad = function() {
        if (nacion.selectedIndex == 0) {
            errorNacionalidad.textContent = "Debes de seleccionar una nacionalidad";
        } else {
            errorNacionalidad.textContent = "";
        }

    }

    let compruebaDNI = function() {
        let dniMayus = (dni.value).toUpperCase();
        if (!expresiones.dni[0].test(dniMayus)) {
            errorDNI.textContent = expresiones.dni[2];
        } else {
            let [, numeroDNI, letraDNI] = expresiones.dni[0].exec(dniMayus);
            if (expresiones.dni[1][numeroDNI % 23] != letraDNI) {
                errorDNI.textContent = "Letra incorrecta";
            } else {
                errorDNI.textContent = "";
            }

        }
    }

    let compruebaEmail = function() {
        if (!expresiones.email[0].test(email.value)) {
            errorEmail.textContent = expresiones.email[1];
        } else {
            errorEmail.textContent = "";
        }
    }

    let compruebaFecha = function(){
        if (!expresiones.fecha[0].test(fecha.value)) {
            errorFecha.textContent = expresiones.fecha[1];
        } else {
            errorFecha.textContent = "";
        }
    }

    let compruebaTelefono = function(){
        if (!expresiones.telefono[0].test(telefono.value)) {
            errorTelefono.textContent = expresiones.telefono[1];
        } else {
            errorTelefono.textContent = "";
        }
    }

    let compruebaURL = function(){
        if (!expresiones.url[0].test(url.value)) {
            errorURL.textContent = expresiones.url[1];
        } else {
            errorURL.textContent = "";
        }
    }

    let compruebaCheckbox = function(){
        if(!condiciones.checked){
            errorCondiciones.textContent="Debes de aceptar los términos y condiciones";
        }else {
            errorCondiciones.textContent="";
        }
    }

    let compruebaTodo = function() {
        comprobarNombre();
        compruebaSexo();
        compruebaNacionalidad();
        compruebaDNI();
        compruebaEmail();
        compruebaFecha();
        compruebaTelefono();
        compruebaURL();
        compruebaCheckbox();
    }

    document.addEventListener("DOMContentLoaded", function init() {
        nombre = document.getElementById("nombre");
        nombre.addEventListener("blur", comprobarNombre);
        errorNombre = document.getElementById("errornombre");

        errorSexo = document.getElementById("errorsexo");

        select = document.getElementById("nacion");
        select.addEventListener("blur", compruebaNacionalidad);
        errorNacionalidad = document.getElementById("errorNacionalidad");

        dni = document.getElementById("DNI");
        dni.addEventListener("blur", compruebaDNI);
        errorDNI = document.getElementById("errorDNI");

        email = document.getElementById("email");
        email.addEventListener("blur", compruebaEmail);
        errorEmail = document.getElementById("erroremail");

        fecha = document.getElementById("fechaNacimiento");
        fecha.addEventListener("blur",compruebaFecha);
        errorFecha = document.getElementById("errorfechaNacimiento");

        telefono = document.getElementById("telefono");
        telefono.addEventListener("blur",compruebaTelefono);
        errorTelefono = document.getElementById("errortelefono");

        url = document.getElementById("url");
        url.addEventListener("blur",compruebaURL);
        errorURL= document.getElementById("errorURL");

        condiciones = document.getElementById("condiciones");
        condiciones.addEventListener("blur",compruebaCheckbox);
        errorCondiciones = document.getElementById("errorCondiciones");

        enviar = document.getElementById("enviar");
        enviar.addEventListener("click", compruebaTodo);

    });
}
