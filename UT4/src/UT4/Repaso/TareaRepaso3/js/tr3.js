'use strict';

let bNombres = document.getElementById("botonNombre");
let cNombres = document.getElementById("contenedorNombres");


let tPrecio = document.getElementById("precioMaximo");
let bPrecio = document.getElementById("botonPrecio");
let cPrecio = document.getElementById("contenedorPrecios");


let tServicios = document.getElementById("servicios");
let bServicios = document.getElementById("botonServicios");
let cServicios = document.getElementById("contenedorServicios");
bNombres.addEventListener("click",mostrarNombres);
bPrecio.addEventListener("click",mostrarPrecioInferior);
bServicios.addEventListener("click",mostrarServicio);

function mostrarServicio(event) {
  if(tServicios.value!=""){
    let peticion=new XMLHttpRequest();
    peticion.addEventListener("readystatechange",function (event) {
      if(this.readyState==4 && this.status==200) {
        let json = JSON.parse(this.responseText);
        let piscinas = json.results.bindings;
        let servicio=tServicios.value;
        cServicios.innerHTML = "";
        let expresion=RegExp(servicio,"i");
        for (let piscina of piscinas) {
          if (expresion.test(piscina.om_serviciosPiscina.value)) {
            let texto = piscina.rdfs_label.value + " " + piscina.om_serviciosPiscina.value ;
            let li = document.createElement("LI");
            li.appendChild(document.createTextNode(texto));
            cServicios.appendChild(li);
          }
        }
      }
    });
    peticion.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:PiscinaMunicipal&format=json");
    peticion.send();
  }else{
    alert("Inserte un servicio válido");
  }
}

function mostrarNombres(event) {
  let peticion=new XMLHttpRequest();
  peticion.addEventListener("readystatechange",mostrarNombresPiscinas);
  peticion.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:PiscinaMunicipal&format=json");
  peticion.send();
}
function mostrarNombresPiscinas(event) {
  if(this.readyState==4 && this.status==200){
    let json=JSON.parse(this.responseText);
    let piscinas=json.results.bindings;
    cNombres.innerHTML="";
    for(let piscina of piscinas){
      let li=document.createElement("LI");
      let texto=document.createTextNode(piscina.rdfs_label.value);
      li.appendChild(texto);
      cNombres.appendChild(li);
    }
  }
}
function mostrarPrecioInferior(event){
  if(tPrecio.value!=""){
    let peticion=new XMLHttpRequest();
    peticion.addEventListener("readystatechange",function (event) {
      if(this.readyState==4 && this.status==200) {
        let json = JSON.parse(this.responseText);
        let piscinas = json.results.bindings;
        let max = tPrecio.value;
        cPrecio.innerHTML = "";
        for (let piscina of piscinas) {
          if (Number(piscina.om_precioAdultoDiario.value) < Number(max)) {
            let texto = piscina.rdfs_label.value + " " + piscina.om_precioAdultoDiario.value + " euros";
            let li = document.createElement("LI");
            li.appendChild(document.createTextNode(texto));
            cPrecio.appendChild(li);
          }
        }
      }
      });
    peticion.open("GET","http://opendata.caceres.es/GetData/GetData?dataset=om:PiscinaMunicipal&format=json");
    peticion.send();
  }else{
    alert("Inserte un precio válido");
  }
}
