"use strict";

//TODA LA TAREA SE HACE EDITANDO EXCLUSIVAMENTE ESTE FICHERO

let diasSeleccionados=[];
let correspondenciaDias=["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];


/**
 * Carga la preview de la foto
 */
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
/**
 * Evita que se envie
 * Chekea si esta correcto
 * crea un restaurante
 */
document.getElementById("newPlace").addEventListener("submit",function (event) {
  event.preventDefault();
  let inputs=document.querySelectorAll("#newPlace input");
  for(let input of inputs){
    input.classList.remove("is-valid");
    input.classList.remove("is-invalid");
  }
  let textArea=document.querySelector("#newPlace textarea");
  textArea.classList.remove("is-valid");
  textArea.classList.remove("is-invalid");
  document.querySelector("#diasError").classList.add("d-none");
  document.getElementById("foto").classList.remove("is-invalid");document.getElementById("foto").classList.remove("is-invalid");

  if(!chekeaInput(/^[a-zA-Z][a-zA-Z\s]*$/,document.querySelector("#nombre"))){
    return;
  }
  if(!chekeaInput(/^[a-zA-Z][\w|\s]*$/,document.querySelector("#descripcion"))){
    return;
  }
  if(!chekeaInput(/^[\S]*$/,document.querySelector("#cocina"))){
    return;
  }
  if(!chekeaInput(/^[0-9]{9}$/,document.querySelector("#telefono"))){
    return;
  }
  diasSeleccionados=[];
  if(!chekeaDia()){
    return;
  }
  if(!chekeaFoto()){
    return;
  }
  crearRestaurante();

});
function chekeaInput(exp,input) {
  let valor=input.value;
  if(exp.test(valor)){
    input.classList.add("is-valid");
    return true;
  }else{
    input.classList.add("is-invalid");
    return false;
  }
}
function chekeaDia() {
  let checkboxs=document.querySelectorAll("input[id^=check]");
  for(let check of checkboxs){
    if(check.checked){
      diasSeleccionados.push(check.value);
    }
  }//
  if(diasSeleccionados.length>0){
    return true;
  }else{
    document.querySelector("#diasError").classList.remove("d-none");
    return false;
  }
}
function chekeaFoto(){
  let foto=document.getElementById("imgPreview");
  if(foto.getAttribute("src")!=""){
    document.getElementById("foto").classList.add("is-valid");
    return true;
  }else{
    document.getElementById("foto").classList.add("is-invalid");
    return false;
  }
}

function crearRestaurante() {
  let nombreR=document.getElementById("nombre").value;
  let descipcionR=document.getElementById("descripcion").value;
  let cocinaR=document.getElementById("cocina").value;
  let telefonoR=document.getElementById("telefono").value;
  let imgPreviewR=document.getElementById("imgPreview").getAttribute("src");
  let html="<div class=\"card\">\n" +
    "        <img class=\"card-img-top\" src=\"source\">\n" +
    "        <div class=\"card-body\">\n" +
    "          <h5 class=\"card-title\">nombre</h5>\n" +
    "          <p class=\"card-text\">descripcion</p>\n" +
    "          <div class=\"card-text\">\n" +
    "            <small class=\"text-muted\">\n" +
    "              <strong>Abre: </strong>dias\n" +
    "            </small>\n" +
    "            <span class=\"badge badge-success\">Abierto</span>\n" +
    "            <span class=\"badge badge-danger\">Cerrado</span>\n" +
    "          </div>\n" +
    "          <div class=\"card-text\">\n" +
    "            <small class=\"text-muted\">\n" +
    "              <strong>Teléfono: </strong>telefono\n" +
    "            </small>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"card-footer\">\n" +
    "          <small class=\"text-muted\">\n" +
    "            cocina\n" +
    "          </small>\n" +
    "        </div>\n" +
    "      </div>";
  let cadenaDias="";
  diasSeleccionados.forEach(x=>
  cadenaDias+=correspondenciaDias[x]+", ");
  cadenaDias.substr(0,cadenaDias.length-2);
  html=html.replace("source",imgPreviewR);
  html=html.replace("nombre",nombreR);
  html=html.replace("telefono",telefonoR);
  html=html.replace("descripcion",descipcionR);
  html=html.replace("cocina",cocinaR);
  html=html.replace("dias",cadenaDias);
  if(diasSeleccionados.includes(String(new Date().getDay()))){
    html=html.replace("<span class=\"badge badge-danger\">Cerrado</span>","");
  }else{
    html=html.replace("<span class=\"badge badge-success\">Abierto</span>","");
  }

  document.getElementById("placesContainer").innerHTML+=html;
}
