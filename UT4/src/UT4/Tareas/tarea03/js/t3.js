'use strict';
let url="https://jsonplaceholder.typicode.com/posts";
let peticion=new XMLHttpRequest();
peticion.addEventListener("readystatechange",cargarElementos);
let url=`http://opendata.caceres.es/GetData/GetData?dataset=om:${valor}&format=json`;
peticion.open("GET",url);
peticion.send();
function cargarElementos(event) {

}
