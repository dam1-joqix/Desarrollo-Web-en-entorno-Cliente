'use strict';
let contIzquierda = document.getElementById("contenedorIzquierda");
let contDerecha = document.getElementById("contenedorDerecha");
let botonIzq = document.getElementById("moverIzquierda");
let botonDer= document.getElementById("moverDerecha");
let botonLimpiar = document.getElementById("limpiar");
let inputTexto = document.getElementById("nuevaEntrada");
let botonCrear = document.getElementById("creaEntrada");
botonCrear.addEventListener("click",function () {
  if(inputTexto.value==""){
    alert("Debes introducir contenido para la nueva entrada");
  }else{
    let texto=inputTexto.value;
    let li=document.createElement("LI");
    li.appendChild(document.createTextNode(texto));
    contIzquierda.appendChild(li);
  }
});
function seleccion(event) {
  if(event.target.nodeName=="LI"){
    event.target.classList.toggle("seleccionado");
  }
}
function deseleccionar(event){
  let seleccionadosd=contDerecha.querySelectorAll(".seleccionado");
  let seleccionadosi=contIzquierda.querySelectorAll(".seleccionado");
  for(let seleccionado of seleccionadosd){
    seleccionado.classList.remove("seleccionado");
  }
  for(let seleccionado of seleccionadosi){
    seleccionado.classList.remove("seleccionado");
  }
}
function moverADerecha(event) {
  let seleccionadosi=contIzquierda.querySelectorAll(".seleccionado");
  for (let seleccionado of seleccionadosi){
    contDerecha.appendChild(seleccionado);
  }
}
function moverAIzquierda(event) {
  let seleccionadosd=contDerecha.querySelectorAll(".seleccionado");
  for (let seleccionado of seleccionadosd){
    contIzquierda.appendChild(seleccionado);
  }
}
function elimina(event){
  if(event.target.nodeName=="LI"){
    event.target.remove();
  }
}
contIzquierda.addEventListener("click",seleccion);
contDerecha.addEventListener("click",seleccion);
botonLimpiar.addEventListener("click",deseleccionar);
botonDer.addEventListener("click",moverADerecha);
botonIzq.addEventListener("click",moverAIzquierda);
contDerecha.addEventListener("dblclick",elimina);
contIzquierda.addEventListener("dblclick",elimina);
