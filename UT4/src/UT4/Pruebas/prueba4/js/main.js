let peticion=new XMLHttpRequest();
peticion.addEventListener("redystatechange",procesarPeticion);
peticion.open("GET","https://www.google.es");
peticion.send();
function procesarPeticion(event) {
  if(this.readyState==4&&this.status==200){
    console.log(this.responseText);
  }

}
