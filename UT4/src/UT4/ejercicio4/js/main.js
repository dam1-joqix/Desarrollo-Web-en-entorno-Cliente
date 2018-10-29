let numero=0;
function procesarPeticion(event){
  if(this.readyState===4&&this.status==200){
    let objetoResultado=JSON.parse(this.responseText);
    procesarResultado(objetoResultado);
  }
}
function procesarResultado(objeto) {
  for(let restaurante of objeto.results.bindings){
    console.log(pintaInfoRestaurante(restaurante));
  }
}
function pintaInfoRestaurante(restaurante) {
  let tr=document.createElement("tr");
  tr.classList.add("restaurante");
  let td1=document.createElement("td");
  numero++;
  let num=document.createTextNode(numero);
  td1.appendChild(num);
  td1.classList.add("azul");
  tr.appendChild(td1);
  let td2=document.createElement("td");
  td2.appendChild(document.createTextNode(restaurante.rdfs_label.value));
  let td2_=document.createElement("td");
  let contenido=document.createTextNode("---");
  if(restaurante.schema_url!=undefined){
    contenido=document.createTextNode(restaurante.schema_url.value);
  }
  td2_.appendChild(contenido);
  tr.appendChild(td2);
  tr.appendChild(td2_);
  let td3=document.createElement("td");
  let direccion=document.createTextNode(restaurante.schema_address_streetAddress.value);
  td3.appendChild(direccion);
  tr.appendChild(td3);
  let td4=document.createElement("td");
  let capacidad=document.createTextNode("---");
  if(restaurante.om_capacidadPersonas!=undefined){
    capacidad=document.createTextNode(restaurante.om_capacidadPersonas.value);
  }
  td4.appendChild(capacidad);
  tr.appendChild(td4);
  document.querySelector("#restaurantes").appendChild(tr);
}
window.onload=function () {
  console.log("load");
  let boton=document.querySelector("#cargar");
  boton.onclick=cargar;

};
function cargar(){
  let borrar=document.querySelectorAll(".restaurante");
  for(let borra of borrar){
    borra.remove();
  }
  numero=0;
  let peticion= new XMLHttpRequest();
  peticion.addEventListener("readystatechange",procesarPeticion);
  peticion.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:Restaurante&format=json");
  peticion.send();
}

