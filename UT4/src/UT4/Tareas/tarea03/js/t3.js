'use strict';
let url="https://jsonplaceholder.typicode.com/posts";
let peticion=new XMLHttpRequest();
peticion.addEventListener("readystatechange",cargarElementos);
peticion.open("GET",url);
peticion.send();
function cargarElementos(event) {
  let contenedor=document.querySelector("#contenedorEntradas");
  if(this.readyState==4&&this.status==200){
    contenedor.innerHTML="";
    let json=JSON.parse(this.responseText);
    for(let objeto of json){
      let div=document.createElement("div");
      div.classList.add("entrada");
      //TODO Añadir contenido
      contenedor.appendChild(div);
    }
  }


}
