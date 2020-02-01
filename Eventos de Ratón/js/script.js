{

    let canvas;

    let aleatorio = function(inferior, superior) {
        let numProbab = superior - inferior;
        let random = Math.random() * numProbab;
        return parseInt(random) + inferior;
    }

    let generaColores = function() {
        return "rgb(" + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ", " + aleatorio(0, 255) + ")";
    }

    let pintaCanvas = function(canvas, x, y, button, buttons) {

        if (canvas && canvas.getContext) {
            let contexto = canvas.getContext('2d');
            contexto.font = "16px Roboto";
            if (arguments.length === 1) {
                contexto.fillStyle = '#b83b5e';
            } else {
                contexto.fillStyle = generaColores();
            }
            contexto.fillRect(0, 0, 600, 600);
            contexto.fillStyle = "white";
            contexto.fillText(canvas.getAttribute("id"), 30, 35);
            if (arguments.length > 1) {
                contexto.fillText("x = " + x, 400, 40);
                contexto.fillText("y = " + y, 400, 70);
                contexto.fillText("button = " + button, 400, 100);
                contexto.fillText("buttons = " + buttons, 400, 130);

            }
        }
    }


    document.addEventListener("DOMContentLoaded", function init() {
        canvas = Array.from(document.getElementsByTagName("canvas"));
        let noContext = document.getElementById("auxclick");
        noContext.addEventListener('contextmenu', e => {
            e.preventDefault();
        });

        canvas.forEach(function(clave) {
            clave.addEventListener(clave.getAttribute("id"), function(event) {

                pintaCanvas(clave, event.offsetX, event.offsetY, event.button, event.buttons);
            });
            pintaCanvas(clave);
        });
    });
}