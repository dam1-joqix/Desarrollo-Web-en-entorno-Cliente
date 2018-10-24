let peticion= new XMLHttpRequest();
peticion.addEventListener("readystatechange",procesarPeticion);
peticion.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:Monumento&format=json");
peticion.send();
function procesarPeticion(event){
  if(this.readyState===4&&this.status==200){
    let objetoResultado=JSON.parse(this.responseText);
    procesarResultado(objetoResultado);
  }
}
function procesarResultado(objeto) {
  for(let monumento of objeto.results.bindings){
    console.log(pintaInfoMonumento(monumento));
  }
}
function pintaInfoMonumento(monumento) {
  let cadena="---MONUMENTO---\nNombre: "+monumento.rdfs_label.value;
  cadena+="\nTipo: "+monumento.om_tipoMonumento.value;
  cadena+="\nLatitud: "+monumento.geo_lat.value;
  cadena+="\nLongitud: "+monumento.geo_long.value;
    cadena+="\nUri: "+monumento.uri.value;


  cadena+="\n------";
  return cadena;
}
