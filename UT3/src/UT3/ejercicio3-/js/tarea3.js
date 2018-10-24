"use strict";

//TODA LA TAREA SE HACE EDITANDO EXCLUSIVAMENTE ESTE FICHERO

function comprobarNombre(){
  let nombre=document.querySelector("#nombre");
  let text=nombre.value;
  let reg=/^[a-zA-Z]{1}[a-zA-Z\s]*$/;
  if(text==""){
    nombre.className="form-control is-invalid";
    return false;
  }else if(reg.test(text)){
    nombre.className="form-control is-valid";
    return true;
  }else{
    nombre.className="form-control is-invalid";
    return false;
  }
}
function comprobarDescripcion(){
  let nombre=document.querySelector("#descripcion");
  let text=nombre.value;
  if(text==""){
    nombre.className="form-control is-invalid";
    return false;
  }else {
    nombre.className="form-control is-valid";
    return true;
  }
}
function comprobarDias(){
  let checks=document.querySelectorAll("[id^=check]");
  let dias=document.querySelector("#diasError");
  for (let i = 0; i < checks.length; i++) {
    if(checks[i].checked){
      dias.className="text-danger d-none";
      return true;
    }
  }
  dias.className="text-danger";
  return false;
}

function compruebaTFNO(){
  let tfno=document.querySelector("#telefono");
  let numero=tfno.value;
  let reg=/^[0-9]{9}$/;
  if(numero==""){
    tfno.className="form-control is-invalid";
    return false;
  }else if(reg.test(numero)){
    tfno.className="form-control is-valid";
    return true;
  }else{
    tfno.className="form-control is-invalid";
    return false;
  }
}
function compruebaFoto(){
  let img=document.querySelector("#imgPreview");
  if(img.src==""){
    return false;
  }else{
    return true;
  }
}
function compruebaCocina(){
  let cocina=document.querySelector("#cocina");
  let text=cocina.value;
  let reg=/^[\S]*$/;
  if(text==""){
    cocina.className="form-control is-invalid";
    return false;
  }else if(reg.test(text)){
    cocina.className="form-control is-valid";
    return true;
  }else{
    cocina.className="form-control is-invalid";
    return false;
  }
}


function enviar(){

  if(!comprobarNombre()){
    return false;
  }else if(!comprobarDescripcion()){
    return false;
  }else if(!compruebaCocina()){
    return false;
  }else if(!comprobarDias()){
    return false;
  }else if(!compruebaTFNO()){
    return false;
  }else if(!compruebaFoto()){
    return false;
  }else{
  //<!-- <div class="card">
    //   <img class="card-img-top" src="./rest1.jpg">
  //    <div class="card-body">
  //    <h5 class="card-title">Nombre del restaurante</h5>
  //  <p class="card-text">Aquí la descripción.</p>
  //  <div class="card-text">
   //   <small class="text-muted">
   //   <strong>Abre: </strong>Lun, Mar, Mié, Jue, Vie, Sáb, Dom
   // </small>
   // <span class="badge badge-success">Abierto</span>
   //   <span class="badge badge-danger">Cerrado</span>
   //   </div>
   //   <div class="card-text">
   //   <small class="text-muted">
   //   <strong>Teléfono: </strong>934823234
   // </small>
   // </div>
   // </div>
   // <div class="card-footer">
   //   <small class="text-muted">
   //   Tipo de Cocina
   // </small>
   // </div>
   // </div> -->
    return true;
  }
}

/**
 * En este metodo hay algun error que provoca que la página no cargue tras enviar uun formulario
 */
function anyadir(){

  var urlParams=new URLSearchParams(window.location.search);
  if(urlParams.has("nombre")){
    let placesContainer=document.querySelector("#placesContainer");
    let img=urlParams.get("foto");
    let html='<div class="card"><img class="card-img-top" src=""'+img+'">';
    html+='<div class="card-body"><h5 class="card-title">'+urlParams.get("nombre")+'</h5>';
    html+='<p class="card-text">'+urlParams.get("descripcion")+'</p>';
    let dias=[];
    let dia;
    while (urlParams.has("dias")){
      dia=urlParams.get("dias");
      switch (dia) {
        case 1:
          dias.push("Lunes");
          break;
        case 2:
          dias.push("Martes");
          break;
        case 3:
          dias.push("Miercoles");
          break;
        case 4:
          dias.push("Jueves");
          break;
        case 5:
          dias.push("Viernes");
          break;
        case 6:
          dias.push("Sábado");
          break;
        case 7:
          dias.push("Domingo");
          break;
      }



    }
    html+='<div class="card-text"><small class="text-muted"><strong>Abre: </strong>'+dias.join()+'</small>';
    html+='<span class="badge badge-success">Abierto</span>';
    html+='<span class="badge badge-danger">Cerrado</span>';
    html+='</div><div class="card-text"><small class="text-muted"><strong>Teléfono: </strong>'+urlParams.get("telefono");
    html+='</small></div></div><div class="card-footer"><small class="text-muted">'+urlParams.get("cocina")+'</small></div></div>';
    placesContainer.innerHTML+=html;
  }
}



window.addEventListener("load",function () {
  anyadir();

  let nombre=document.querySelector("#nombre");
  nombre.required="required";
  nombre.addEventListener("change",comprobarNombre);
  let descripcion=document.querySelector("#descripcion");
  descripcion.addEventListener("change",comprobarDescripcion);
  descripcion.required="required";
  let cocina=document.querySelector("#cocina");
  cocina.required="required";
  cocina.addEventListener("change",compruebaCocina);
  let checks=document.querySelectorAll("[id^=check]");
  for (let i = 0; i <checks.length ; i++) {
    checks[1].addEventListener("change",comprobarDias);

  }
  let telefono=document.querySelector("#telefono");
  telefono.required="required";
  telefono.addEventListener("change",compruebaTFNO);

  document.getElementById("foto").addEventListener("change",event=>{
    let file=event.target.files[0];
    let reader=new FileReader();
    if(file){
      reader.readAsDataURL(file);
    }
    reader.addEventListener("load", e=>{
      document.getElementById("imgPreview").src=reader.result;
    });
  });
  let imagen=document.querySelector("#foto");
  imagen.required="required";
  var formulario=document.querySelector("#newPlace");
  formulario.onsubmit=enviar;
 formulario.onsubmit=function () {
   let formulario=document.getElementById("newPlace")

 }
});


///^[a-zA-Z]{1}
///^([A-Z]{1})+([[A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]]?)+$

