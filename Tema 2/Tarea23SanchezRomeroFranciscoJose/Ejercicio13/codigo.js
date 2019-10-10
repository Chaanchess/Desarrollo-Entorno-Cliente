function anade(){
    let lista = document.getElementById("lista");

    let nuevo = document.createElement("li");
    let texto = document.createTextNode("Me has introducido en la lista!");
    nuevo.appendChild(texto);

    lista.appendChild(nuevo);

}