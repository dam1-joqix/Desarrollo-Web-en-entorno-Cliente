'use strict';
document.addEventListener("DOMContentLoaded",main);
function main() {
  let formulario=document.querySelector("#formulario");
  formulario.addEventListener("submit",buscar);
}
function buscar(event) {
  event.preventDefault();
  let texto=document.querySelector("#texto");
  let latitud=document.querySelector("#latitud");
  let longitud=document.querySelector("#longitud");
  let idioma=document.querySelector("#idioma");
  let tipo=document.querySelector("#tipo");
  let numero=document.querySelector("#numero");
  let peticion="https://api.twitter.com/1.1/search/tweets.json?q="+texto.value+"&result_type="+tipo.value;
  alert(peticion);
  let peticionAJAX=new XMLHttpRequest();
  peticionAJAX.addEventListener("readystatechange",cargarElementos);
  peticionAJAX.open("GET",peticion);

  peticionAJAX.setRequestHeader("authorization: OAuth oauth_consumer_key", "aECNsxTWtCAu44h39QdXAU73t");
  peticionAJAX.setRequestHeader("oauth_signature_method", "HMAC-SHA1");
  peticionAJAX.send();
}
function cargarElementos(event) {
  alert(this.status);
  if(this.readyState==4&&this.status==200){
    alert(this.responseText);
  }
}
