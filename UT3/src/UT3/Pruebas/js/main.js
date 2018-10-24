/**console.log(window.outerWidth+"-"+window.outerHeight);
window.open("https://www.google.com");
console.log(window.screen.width+"-"+window.screen.height);
console.log(window.navigator.userAgent);
var variable="Hola";
console.log(window.variable);
console.log(history.length);

window.navigator.geolocation.getCurrentPosition(function (posicion) {
  console.log("Latitud: :"+posicion.coords.latitude+" Longitud: "+posicion.coords.longitude);
});


let id=setTimeout(function(){let fecha=new Date();console.log(fecha.toString());},5000);
if(prompt("Parar")=="YES"){
  clearTimeout(id);
}

let num=1;
let idInterval=setInterval(function () {console.log(num++);
if(num>10){
  clearInterval(idInterval);
}
},1000);
*/

window.onload = function() {
let parrafos=document.getElementsByTagName("p");

  for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i]);
  }
  let clase=document.getElementsByClassName("parrafos");
  console.log("----------");

    clase[0].remove();

  for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i]);
  }
};
/*
 let documento = document.documentElement;
 console.log("Document");
 console.log(documento);
 console.log("Head");
 let head = document.head;
 console.log(head);
 console.log("Body");
 let body = document.body;
 document.body;
 console.log(body);
 console.log("ID: p1");
 let p = document.getElementById("p1");
 console.log(p);
 console.log("Class clase");
 clase = document.getElementsByClassName("clase");
 console.log(clase);
 console.log("html tag a");
 let a = document.getElementsByTagName("a");
 console.log(a);
 console.log("Childnodes document");
 console.log(documento.childNodes);
 console.log("P1 children");
 console.log(p.children);
 console.log("P1 parent");
 console.log(p.parentNode);
 console.log(p.nextSibling);
console.log(p.previousSibling);
 console.log(p.nextSibling);
 console.log(p.nextElementSibling);
 console.log(p.previousElementSibling);
let pa=document.createElement("p");
//document.body.innerHTML+="<p>Último párrafo</p>";
 pa.innerHTML="Este es el ultimo párrafo";
 //let texto=document.createTextNode("Este es el último párrafo");
 //pa.appendChild(texto);
 document.body.appendChild(pa);
*/
