'use strict';
fetch('https://jsonplaceholder.typicode.com/posts').
  then((response)=>response.json()).
  then(obtenerEntradas).
  then(obtenerDivs).
  catch(error=>{console.log("---Hubo un error---");console.log(error);console.error(error.message);});

function obtenerEntradas(json) {
  let entradas=[];
  for(let entrada of json){
    entradas.push(new Post(entrada));
  }
  return entradas;
}
function obtenerDivs(array){
  document.querySelector("#contenedorEntradas").innerHTML="";
  for(let post of array){
    document.querySelector("#contenedorEntradas").appendChild(post.getDiv());
  }
}
