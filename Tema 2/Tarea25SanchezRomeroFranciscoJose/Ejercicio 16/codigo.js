{
function informacion(elEvento) {
    let evento = elEvento || window.event;
  
    let coordenadaX = evento.clientX;
    let coordenadaY = evento.clientY;
  
    let dimensiones = tamanoVentanaNavegador();
    let tamanoX = dimensiones[0];
    let tamanoY = dimensiones[1];
  
    let posicionHorizontal = "";
    let posicionVertical = "";
  
    if(coordenadaX > tamanoX/2) {
      posicionHorizontal = "derecha";
    }
    else {
      posicionHorizontal = "izquierda";
    }
  
    if(coordenadaY > tamanoY/2) {
      posicionVertical = "abajo";
    }
    else {
      posicionVertical = "arriba";
    }
  
    muestraInformacion(['Posicion', posicionHorizontal, posicionVertical]);
  }
  
  function muestraInformacion(mensaje) {
    document.getElementById("info").innerHTML = '<h1>'+mensaje[0]+'</h1>';
    for(let i=1; i<mensaje.length; i++) {
      document.getElementById("info").innerHTML += '<p>'+mensaje[i]+'</p>';
    }
  }
  
  function tamanoVentanaNavegador(){
    let dimensiones = [];
  
    if(typeof(window.innerWidth) == 'number') {
      dimensiones = [window.innerWidth, window.innerHeight];
    } 
  
    return dimensiones;
  }

  document.onclick = informacion;

  window.onload=function(){
      informacion();
      muestraInformacion();
      tamanoVentanaNavegador();
  }
}