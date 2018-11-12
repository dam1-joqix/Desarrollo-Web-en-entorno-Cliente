let contendedor=document.querySelector("#contenedorTabla");
let boton=document.querySelector("#boton");
boton.addEventListener("click",procesar);
function procesar(){
  fetch('http://opendata.caceres.es/GetData/GetData?dataset=om:Museo&format=json').
  then(response=>response.json()).
  then(obtenerArray).
  then(mostrarMuseos).
  catch(error => console.error('Error:', error));
}
function obtenerArray(json) {
  let array=json.results.bindings;
  let museos=[];
  for(let objeto of array){
    let nombre="---",latitud="---",longitud="---",url="---";
    if(objeto.rdfs_label){
      nombre=objeto.rdfs_label.value;
    }
    if(objeto.geo_lat){
      latitud=objeto.geo_lat.value;
    }
    if(objeto.geo_long){
      longitud=objeto.geo_long.value;
    }
    if(objeto.schema_url){
      url=objeto.schema_url.value;
    }
    let museo=new Museo(nombre,latitud,longitud,url);
    museos.push(museo);
  }
  return museos;
}
function mostrarMuseos(museos) {
  contendedor.innerHTML="";
  for(let museo of museos){
    contendedor.appendChild(museo.getDivInfo());
  }
}
/******************************************************************************/
class Museo {
  constructor(nombre="---",latitud="---",longitud="---",url="---"){
    this.nombre=nombre;
    this.latitud=latitud;
    this.longitud=longitud;
    this.url=url;
  }
  getInfo(){
    console.log(`Nombre: ${this.nombre} Latitud: ${this.latitud} Longitud: ${this.longitud} URL: ${this.url}`);
  }
  getDivInfo(){
    let div=document.createElement("DIV");

    div.classList.add("col-sm-10","col-md-10","col-xs-12","text-center", "border","mx-auto");
    let div2=document.createElement("DIV");
    div2.classList.add("row","text-center","bg-secondary");
    let nombre=document.createElement("H2");
    nombre.appendChild(document.createTextNode(this.nombre));
    div2.appendChild(nombre);
    div.appendChild(div2);
    let div3=document.createElement("DIV");
    div3.classList.add("row");
    let tabla=document.createElement("TABLE");
    tabla.classList.add("table","table-center","table-borderless","text-center");
    let tr=document.createElement("TR");
    let th=document.createElement("TH");
    th.appendChild(document.createTextNode("URL"));
    tr.appendChild(th);
    th=document.createElement("TH");
    th.appendChild(document.createTextNode("Latitud"));
    tr.appendChild(th);
    th=document.createElement("TH");
    th.appendChild(document.createTextNode("Longitud"));
    tr.appendChild(th);
    tabla.appendChild(tr);
    tr=document.createElement("TR");
    let td=document.createElement("TD");
    let a=document.createElement("A");
    a.href=this.url;
    a.appendChild(document.createTextNode(this.url));
    td.appendChild(a);
    tr.append(td);
    td=document.createElement("TD");
    td.appendChild(document.createTextNode(this.latitud));
    tr.appendChild(td);
    td=document.createElement("TD");
    td.appendChild(document.createTextNode(this.longitud));
    tr.appendChild(td);
    tabla.appendChild(tr);
    div3.appendChild(tabla);
    div.appendChild(div3);

  return div;

  }
}

