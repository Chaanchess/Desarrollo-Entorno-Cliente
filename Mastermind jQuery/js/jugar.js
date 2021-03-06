let $circulosComprobar, $circulosRellenar, $divIzqda, $pantallaNueva, contadorLinea;

let quitarEventoLineaAnterior = function () {
    $circulosRellenar.off("click");
}

let crearNuevaLinea = function () {
    quitarEventoLineaAnterior();

    let contenido = "<div class='filaRellenar intento" + contadorLinea + "'>"

    for (let i = 0; i < 4; i++) {
        contenido += "<div class='circuloRellenar circuloRellenar" + contadorLinea + "'></div>";
    }

    for (let i = 0; i < 4; i++) {
        contenido += "<div class='circuloComprobar circuloComprobar" + contadorLinea + "'></div>";
    }

    contenido += "</div>";

    $divIzqda.append(contenido);

    $(".intento" + contadorLinea).animate({
        'margin-bottom': '0px'
    }, 600);

    $circulosRellenar = $(".circuloRellenar" + contadorLinea)
        .on("click", quitarColor);

    $circulosComprobar = $(".circuloComprobar" + contadorLinea);

    contadorLinea++;

    $("h3").html("Intento número "+contadorLinea);
    if(contadorLinea>10){
        $("h3").html("Intento número "+contadorLinea+". No te estreses, ya casi lo tienes"); 
    }
}

let quitarColor = function () {
    $(this).css("backgroundColor","transparent");
    //.animate({"backgroundColor": "transparent"})
}

let addCircle = function () {
    for (let i = 0; i < $circulosRellenar.length; i++) {
        if ($circulosRellenar[i].style.backgroundColor == "" || $circulosRellenar[i].style.backgroundColor == "transparent") {
            $circulosRellenar[i].style.backgroundColor = this.id;
            $(this).css('display', 'none');
            $(this).fadeIn(500);
            break;
        }
    }
}


let comprobar = function () {
    let arrayColoresComprobar = [];
    let contador2 = 0;
    $circulosRellenar.each(function (clave, circulo) {
        if (circulo.style.backgroundColor != "" && circulo.style.backgroundColor != "transparent")
            arrayColoresComprobar.push(circulo.style.backgroundColor);
    });
    if (arrayColoresComprobar.length >= 4) {
        objetoComprobar = masterMind.comprobar(arrayColoresComprobar);

        if (objetoComprobar.enSuSitio > 0) {
            while (contador2 < objetoComprobar.enSuSitio) {
                $circulosComprobar[contador2].style.backgroundColor = "black";
                contador2++;
            }
        }

        if (contador2 == 4) {
            $pantallaNueva.dialog("open");
            return;
        }

        if (objetoComprobar.esta > 0) {
            for (let i = 0; i < objetoComprobar.esta; i++) {
                $circulosComprobar[contador2].style.backgroundColor = "white";
                contador2++;
            }
            contador2 = 0;
        }

        if (contador2 != 4) {
            crearNuevaLinea();
        }

        $divIzqda.scrollTop(0);

    }

}

$(function () {
    $('body').css('display', 'none');
    $('body').fadeIn(1000);
    masterMind.init();
    masterMind.mostrar();

    contadorLinea = 0;

    $circulosRellenar = $(".circuloRellenar");
    $circulosComprobar = $(".circuloComprobar");

    $divIzqda = $("#izquierda");
    $pantallaNueva = $("#pantallaFin");


    $pantallaNueva.dialog({
        modal: true,
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000,
        },
        hide: {
            effect: "fade",
            duration: 1000
        },
        buttons: {
            "Reiniciar": function () {
                $(this).dialog("close");
                setTimeout(function () {
                    window.location.reload();
                }, 1000)

            },
            "Salir": function () {
                window.close();
            }
        }
    });

    $(".circulo").click(addCircle);

    $("#check").click(comprobar);

    crearNuevaLinea();
})