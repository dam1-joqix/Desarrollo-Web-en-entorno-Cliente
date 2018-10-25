'use strict';
let numero=0;
window.addEventListener("load",main);
function main() {
  let boton=document.querySelector("#cargarTabla");
  boton.addEventListener("click",cargar);
}
function cargar() {
  let selector=document.querySelector("#selectorDataset");
  let tabla=document.querySelector("#tabla");

  crearPeticion(selector.value);
}
function crearPeticion(valor) {
  let peticion=new XMLHttpRequest();
  peticion.addEventListener("redystatehange",cargarElementos);
  let url=`http://opendata.caceres.es/GetData/GetData?dataset=om:${valor}&format=json`;
  peticion.open("GET",url);
  peticion.send();
}
function cargarElementos(event) {
  console.log("peticion");
  let tabla=document.querySelector("#tabla");
  if(this.readyState==4&&this.status==200){
    tabla.innerHTML="";
    numero=0;
    let restultado=JSON.parse(this.responseText);
    console.log(restultado);
    let cabeceras=[];
    for(let cabecera of resultado.head.vars){
      cabeceras.push(cabecera);
    }
    let tr=document.createElement("tr");
    let th=document.createElement("th");
    numero++;
    let contenido=document.createTextNode(numero);
    th.appendChild(contenido);
    tr.appendChild(th);
    for(let cabecera of cabeceras){
      let th=document.createElement("th");
      let contenido=document.createTextNode(cabecera);
      th.appendChild(contenido);
      tr.appendChild(th);
    }
    tabla.appendChild(tr);
  }
}
