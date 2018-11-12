
let contendedor=document.querySelector("#contenedorTabla");
let boton=document.querySelector("#boton");
boton.addEventListener("click",procesar);
function procesar(){
  fetch('http://opendata.caceres.es/GetData/GetData?dataset=om:Museo&format=json').then(function (response){
    return response.json();
  }).then(parsearTabla).catch(error => console.error('Error:', error));
}
function parsearTabla(json) {
  let tabla=document.createElement("TABLE");
  tabla.innerHTML="<tr><th>Nombre</th><th>Latitud</th><th>Longitud</th><th>URL</th></tr>";
  for(let museo of json.results.bindings){
   let tr=document.createElement("TR");
   let td=document.createElement("TD");
    let td2=document.createElement("TD");
    let td3=document.createElement("TD");
    let td4=document.createElement("TD");
    if(museo.rdfs_label){
      let nombre=museo.rdfs_label.value;
      td.appendChild(document.createTextNode(nombre));
    }else{
      td.appendChild(document.createTextNode("---"));
    }


    if(museo.geo_lat){
      let latitud=museo.geo_lat.value;
      td2.appendChild(document.createTextNode(latitud));
    }else{
      td2.appendChild(document.createTextNode("---"));
    }



    if(museo.geo_long){
      let longitud=museo.geo_long.value;
      td3.appendChild(document.createTextNode(longitud));
    }else{
      td3.appendChild(document.createTextNode("---"));
    }
    tabla.innerHTML+="</td><td>";
    if(museo.schema_url){
      let url=museo.schema_url.value;
      td4.appendChild(document.createTextNode(url));
    }else{
      td4.appendChild(document.createTextNode("---"));
    }
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tabla.appendChild(tr);
    contendedor.innerHTML="";
    contendedor.appendChild(tabla);

  }
}
