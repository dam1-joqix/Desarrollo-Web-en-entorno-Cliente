
function guardar(){
  let texto=document.querySelector("#texto").value;
  if(texto==""){
    alert("La nota esta vacia");
  }else{

    let nota=document.createElement("p");
    let contenido=document.createTextNode(texto);
    nota.appendChild(contenido);
    nota.setAttribute("class","nota");
    nota.addEventListener("click",pulsa);
    let notas=document.querySelector("#notas");
    notas.appendChild(nota);
  }
}

window.onload=function () {
  let boton=document.querySelector("#enviar");
  boton.addEventListener("click",guardar);
};
function pulsa(event) {
    if (event.ctrlKey) {
      event.srcElement.className="incompleto";
    } else {
      event.srcElement.remove();
    }

}
