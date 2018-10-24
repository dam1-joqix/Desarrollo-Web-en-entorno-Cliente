'use strict';
document.addEventListener("DOMContentLoaded",main);

/**
 * Guarda el id del elemento que se esta arrastrandi
 * @param event
 */
function dragstart(event){
  event.dataTransfer.setData("elementoOriginalId",event.srcElement.id);
}

/**
 * Eliminamos la ejecución por defecto de dragover
 * Cambuia la calse del contenedor al arrastrar la caja por encima
 * @param event
 */
function dragEnter(event) {

  event.preventDefault();
  let idCaja=event.dataTransfer.getData("elementoOriginalId");
  let caja=document.getElementById(idCaja);

  if(caja!=undefined && event.target!=caja) {
    console.log("enter");
    event.srcElement.classList.add("hovered");
  }
}
function dragOver(event){

  event.preventDefault();
  let idCaja=event.dataTransfer.getData("elementoOriginalId");
  let caja=document.getElementById(idCaja);
  console.log(caja);
  console.log(event.target);
  if(caja!=undefined && event.target!=caja) {
    console.log("over");
    event.srcElement.classList.add("hovered");
  }
}

/**
 * Elimina la clase hovered (si existe)
 * del contenedor al arrastrar la caja hacia fuera
 * @param event
 */
function dragleave(event) {
console.log("leave");
  event.srcElement.classList.remove("hovered");
}

/**
 * Al soltar un elemento comprobamos si es la caja
 * y si lo es lo cambiamos de ubicación
 * @param event
 */
function drop(event){
  let idCaja=event.dataTransfer.getData("elementoOriginalId");
  let caja=document.getElementById(idCaja);

  if(caja!=undefined && event.target!=caja){
    event.srcElement.appendChild(caja);
    event.srcElement.classList.remove("hovered");
  }
}


function main() {
  let caja=document.querySelector("#caja");
  caja.setAttribute("draggable","true");
  caja.addEventListener("dragstart",dragstart);
  let huecos=document.querySelectorAll(".hueco");
  for (let hueco of huecos){
    hueco.addEventListener("dragover",dragOver);
    hueco.addEventListener("drop",drop);
    hueco.addEventListener("dragleave",dragleave);
    hueco.addEventListener("dragenter",dragEnter);


  }
}
