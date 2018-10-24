var elementoActual=document.getElementById("primerElemento");
while(elementoActual!=null){
  console.log("node name");
  console.log(elementoActual.nodeName);
  console.log("node type");
  console.log(elementoActual.nodeType);
  console.log("node value");
  console.log(elementoActual.nodeValue);
  console.log("Text content");
  console.log(elementoActual.textContent);
  console.log("---------");
  elementoActual=elementoActual.nextElementSibling;
}
