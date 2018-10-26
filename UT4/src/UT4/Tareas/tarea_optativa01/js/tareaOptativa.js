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
  peticion.addEventListener("readystatechange",cargarElementos);
  let url=`http://opendata.caceres.es/GetData/GetData?dataset=om:${valor}&format=json`;
  peticion.open("GET",url);
  peticion.send();
}
function cargarElementos(event) {
  console.log("cargar");
  let tabla=document.querySelector("#tabla");
  if(this.readyState==4&&this.status==200){
    tabla.innerHTML="";
    numero=0;
    console.log(this.responseText);
    let resultado=JSON.parse(this.responseText);
    console.log(resultado);
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
    for(let elemento of resultado.results.bindings){
      let tr2=document.createElement("tr");
      let th2=document.createElement("th");
      numero++;
      th2.appendChild(document.createTextNode(numero));
      tr2.appendChild(th2);
      for(let cabecera of cabeceras){
        let tdElemento=document.createElement("td");
        if(elemento[cabecera]!=undefined){
          tdElemento.appendChild(document.createTextNode(elemento[cabecera].value));
        }else{
          tdElemento.appendChild(document.createTextNode("---"));
        }
        tr2.appendChild(tdElemento);
      }
      tabla.appendChild(tr2);
    }

    tabla.appendChild(tr2);
  }
}
