window.onload = function(){
    let numEnlaces = document.getElementById("numEnlaces");
    let enlaces = document.getElementsByTagName("a");
    numEnlaces.innerHTML = "Numero de enlaces = "+enlaces.length;


    let enlacePenultimo = document.getElementById("enlacePenultimo");
    let mensajePenultimo = enlaces[enlaces.length-2];
    enlacePenultimo.innerHTML= "El penúltimo enlace lleva a: "+mensajePenultimo;

    
    let numEnlacesDirecc = document.getElementById("numEnlacesDirecc");
    let contador=0;
    for (i=0;i<=enlaces.length;i++){
        if(enlaces[i]=="http://prueba/"){
            contador++;
        }
    }

    numEnlacesDirecc.innerHTML="Hay un total de "+contador+" enlaces que llevan a 'http://prueba'";

    let numEnlacesTercer = document.getElementById("numEnlacesTercer");
    let parrafos = document.getElementsByTagName("p");
    let tercerParrafo = parrafos[2];
    let enlacesTercer=tercerParrafo.getElementsByTagName("a");

    numEnlacesTercer.innerHTML= "En el tercer párrafo hay "+enlacesTercer.length+" enlaces.";
    
}



