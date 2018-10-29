'use strict';
let url="https://jsonplaceholder.typicode.com/posts";
let peticion=new XMLHttpRequest();
peticion.addEventListener("readystatechange",cargarElementos);
peticion.open("GET",url);
peticion.send();
function cargarElementos(event) {
  let contenedor=document.querySelector("#contenedorEntradas");
  if(this.readyState==4&&this.status==200){
    contenedor.innerHTML="";
    let json=JSON.parse(this.responseText);
    for(let objeto of json){
      let URLusuario="https://jsonplaceholder.typicode.com/users/"+objeto.userId;
      let URLComents="https://jsonplaceholder.typicode.com/posts/"+objeto.id+"/comments";
      let div=document.createElement("div");//<div class="entrada">
      div.classList.add("entrada");
      let p=document.createElement("p");//<p>
      let strong=document.createElement("strong");//<strong>
      strong.appendChild(document.createTextNode("TITULO: "));
      p.appendChild(strong);//</strong>
      let titulo=document.createTextNode(objeto.title);
      p.appendChild(titulo);
      div.appendChild(p);//</p>
      let div2=document.createElement("div");//<div>
      let p2=document.createElement("p");//<p>
      let strong2=document.createElement("strong");//<strong>
      strong2.appendChild(document.createTextNode("CONTENIDO: "));
      p2.appendChild(strong2);//</strong>
      p2.appendChild(document.createTextNode(objeto.body));
      div2.appendChild(p2);//</p>
      let mostrarUsuarios=document.createElement("button");
      mostrarUsuarios.classList.add("mostrarUsuarios");
      mostrarUsuarios.appendChild(document.createTextNode("Usuario del post"));

      div2.appendChild(mostrarUsuarios);
      let mostrarComentarios=document.createElement("button");
      mostrarComentarios.classList.add("mostrarComentarios");
      mostrarComentarios.appendChild(document.createTextNode("Mostrar comentarios"));

      div2.appendChild(mostrarComentarios);
      let div3=document.createElement("div");
      div3.classList.add("d-none");
      div3.classList.add("usuario");
      let pU=document.createElement("p");
      let strongp=document.createElement("strong");
      strongp.appendChild(document.createTextNode("USUARIO: "));
      pU.appendChild(strongp);
      div3.appendChild(pU);
      div2.appendChild(div3);
      let div4=document.createElement("div");
      div4.classList.add("d-none");
      div4.classList.add("comentarios");
      div4.innerHTML=" <p><strong>Comentarios: </strong></p>";
      div2.appendChild(div4);
      div.appendChild(div2);//</div>
      contenedor.appendChild(div);//</div>
      mostrarUsuarios.onclick=function(){
        mostrarUsuario(URLusuario,div3);
      };
      mostrarComentarios.onclick=function(){
        mostrarComentario(URLComents,div4);
      };
    }
  }
}
function mostrarUsuario(url,div) {
  let lista=div.classList;
  let esta=false;
  for (let i = 0; i <lista.length ; i++) {
    if(lista[i]=="d-none"){
      esta=true;
    }
  }
  if(esta){
    div.classList.remove("d-none");
    let peticion=new XMLHttpRequest();
    peticion.open("GET",url);
    peticion.send();
    peticion.onreadystatechange=function (event) {
      if(this.readyState==4&&this.status==200){
        let usuario=JSON.parse(this.responseText);
        div.innerHTML="<p><strong>NOMBRE USUARIO: </strong> "+usuario.name+"</p>";
      }
    }
  }else{
    div.classList.add("d-none")
  }
}
function mostrarComentario(url,div) {
  let lista=div.classList;
  let esta=false;
  for (let i = 0; i <lista.length ; i++) {
    if(lista[i]=="d-none"){
      esta=true;
    }
  }
  if(esta){
    div.classList.remove("d-none");
    let peticion=new XMLHttpRequest();
    peticion.open("GET",url);
    peticion.send();
    peticion.onreadystatechange=function (event) {
      if(this.readyState==4&&this.status==200) {
        let comentarios = JSON.parse(this.responseText);
        div.innerHTML="<p><strong>Comentarios: </strong></p>";
        for(let comentario of comentarios){
          let p=document.createElement("p");
          let texto=document.createTextNode("-"+comentario.body);
          p.appendChild(texto);
          div.appendChild(p);
        }
      }
      }
  }else{
    div.classList.add("d-none")
  }
}
