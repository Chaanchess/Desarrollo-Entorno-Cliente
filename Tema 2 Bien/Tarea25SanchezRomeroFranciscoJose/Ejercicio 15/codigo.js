{
  let elementoDiv;

  let informacion = function (evento) {
    // let evento = elEvento || window.event;
    switch(evento.type){
      case "mousemove":
      elementoDiv.style.backgroundColor = '#FFFFFF';
      let coordenadaX = evento.clientX;
      let coordenadaY = evento.clientY;

      let coordenadaXabsoluta = evento.pageX;
      let coordenadaYabsoluta = evento.pageY;
  
      muestraInformacion(['Ratón', 'Navegador ['+coordenadaX+', '+coordenadaY+']', 'Pagina ['+coordenadaXabsoluta+', '+coordenadaYabsoluta+']']);
      break;
      case "keypress":
          elementoDiv.style.backgroundColor = '#CCE6FF';
          muestraInformacion(['Teclado', 'Carácter ['+evento.key+']', 'Código ['+evento.keyCode+']']);
          break;
      case "click":
          elementoDiv.style.backgroundColor = '#FFFFCC';
          break;
    }
    
  }



  let muestraInformacion = function (mensaje) {
    let texto = '<h1>' + mensaje[0] + '</h1>';
    for (var i = 1; i < mensaje.length; i++) {
      texto += '<p>' + mensaje[i] + '</p>';
    }
    elementoDiv.innerHTML = texto;
  };



  document.addEventListener("DOMContentLoaded", function init() {
    //Elemento del DOM
    elementoDiv = document.getElementById("info");

    //manejadores de eventos
    document.addEventListener("mousemove", informacion);
    document.addEventListener("keypress", informacion);
    document.addEventListener("click", informacion);

    //document.onclick = informacion;

  });
}