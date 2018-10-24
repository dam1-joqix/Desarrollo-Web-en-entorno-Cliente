/**Prueba 1*/
/*
var obj=new Object();
obj.nombre="Pedro";
obj["edad"]=41;
obj.getInfo=function () {
  return "Mi nombre es "+this.nombre+" y tengo "+this.edad;
};
console.log(obj.getInfo());
console.log(obj.nombre);
console.log(obj["nombre"]);
var prop="nombre";
console.log(obj[prop]);


var obj2={
  nombre:"Paco",
  edad:42,
  getInfo:function () {
    return "Mi nombre es "+this.nombre+" y tengo "+this.edad;
  }
};
console.log(obj2.getInfo());
console.log(obj2.nombre);
console.log(obj2["nombre"]);
var prop="nombre";
console.log(obj2[prop]);
*/
/**Ejercicio 1*//*
var persona={
  nombre: "Marta",
  "edad": 23,
  trabajos:[
    {
      descripcion: "Payaso del cico",
      duracion: "2003-2005"
    },
    {
      descripcion: "Sexador de pollos",
      duracion: "2005-2019"
    }
  ],
  getInfo(){
    return "Mi nombre es "+this.nombre+" y tengo "+this.edad;
  }
};
persona.getInfo=function () {
  let cadenaDevuelta="Mi nombre es "+this.nombre+" y tengo "+this.edad+" años";

  for (let i = 0; i <persona.trabajos.length ; i++) {

    cadenaDevuelta+="\n\t->"+persona.trabajos[i].descripcion+" --> "+persona.trabajos[i].duracion;
  }
  return cadenaDevuelta;
};
console.log(persona.getInfo());
*/
let monumento={
  "uri": {
    "type": "uri",
    "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/23-concatedral-de-santa-maria"
  },
  "geo_long": {
    "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
    "type": "typed-literal",
    "value": "-6.37004029561"
  },
  "geo_lat": {
    "datatype": "http://www.w3.org/2001/XMLSchema#decimal",
    "type": "typed-literal",
    "value": "39.4745659792"
  },
  "owl_sameAs": {
    "type": "uri",
    "value": "http://opendata.caceres.es/recurso/cultura-ocio/religion/CentroReligioso/26-concatedral-de-santa-maria"
  },
  "om_tipoMonumento": {
    "type": "literal",
    "value": "Concatedral"
  },
  "rdfs_label": {
    "type": "literal",
    "value": "Concatedral de Santa Maria"
  },
  "om_tieneEnlaceSIG": {
    "type": "uri",
    "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1163"
  },
  "schema_address_addressLocality": {
    "type": "literal",
    "value": "Cáceres"
  },
  "schema_address_addressCountry": {
    "type": "literal",
    "value": "ES"
  }
};
monumento.pintarInfo=function(){
  //nombre tipo latitud longitud uri
  let cadena="---MONUMENTO---\nNombre: "+this.rdfs_label.value;
  cadena+="\nTipo: "+this.om_tipoMonumento.value;
  cadena+="\nLatitud: "+this.geo_lat.value;
  cadena+="\nLongitud: "+this.geo_long.value;
  cadena+="\nUri: "+this.owl_sameAs.value;
  cadena+="\n------"
  return cadena;

};
console.log(monumento);
console.log(monumento.rdfs_label.value);
console.log(monumento.pintarInfo());

/**HERENCIA**/
class Usuario{
  constructor(nombre){
    this.nombre=nombre;
    this.tipo=1;
  }
  saludo(){
    console.log(`Hola soy ${this.nombre}`);
  }
  decirTipo(){
    console.log(`Soy un usuario de tipo ${this.tipo}`);
  }
}
class Administrador extends Usuario{
  constructor(nombre){
    super(nombre);
    this.tipo=2
  }
  decirTipo(){
    super.decirTipo();
    console.log("Y tambien soy administrador");
  }
}
let admin=new Administrador("Antonio");
admin.saludo();
admin.decirTipo();
