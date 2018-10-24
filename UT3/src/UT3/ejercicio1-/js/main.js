  let validarDNI=function (){
    let texto=document.querySelector("#text");
    let cadena=texto.value;
    if(cadena==""){
      alert("Debes introducir texo");
    }else{
      let reg=/^[0-9]{7,8}[A-Z]$/;
      if(reg.test(cadena)){
        alert("'"+cadena+"' es un dni válido");
      }else{
        alert("'"+cadena+"' no es un dni válido");
      }
  }
};
  let validarFecha=function () {
    let texto=document.querySelector("#text");
    let cadena=texto.value;
    if(cadena==""){
      alert("Debes introducir texo");
    }else{
    let reg=/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}$/;
    if(reg.test(cadena)){
      alert("'"+cadena+"' es una fecha válida");
    }else{
      alert("'"+cadena+"' es una fecha no válida");
    }
  }
};
  let validarId=function () {
    let texto=document.querySelector("#text");
    let cadena=texto.value;
    if(cadena==""){
      alert("Debes introducir texo");
    }else{
    let reg=/^[^0-9 A-Z][a-z A-Z 0-9 _]*$/;
    if(reg.test(cadena)){
      alert("'"+cadena+"' es un id válido");
    }else{
      alert("'"+cadena+"' no es un id válido");
    }
  }
};

window.addEventListener("load",function () {

  let dni=document.querySelector("#dni");
  let fecha=document.querySelector("#fecha");
  let id=document.querySelector("#id");
  dni.addEventListener("click",validarDNI);
  fecha.addEventListener("click",validarFecha);
  id.addEventListener("click",validarId);
});
