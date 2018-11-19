'use strict';
class Post{

  constructor(json){
    this.titulo=json.title;
    this.contenido=json.body;
    this.id=json.id;
    this.userID=json.userId;

  }


  getDiv(){
    let div=document.createElement("DIV");
    div.classList.add("entrada");
    let inner=` <p><strong>TITULO</strong>${this.titulo}</p>
        <div>
            <p><strong>Contenido</strong>${this.contenido}</p>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                
            </div>
            <div class="comentarios d-none">
                <p><strong>Comentarios: </strong></p>`;

            inner+=`</div></div>`;
    div.innerHTML=inner;
                let mostrarUsuario=div.querySelector(".mostrarUsuario");
                mostrarUsuario.addEventListener("click",event=> {
                  let divUsuario=div.querySelector(".usuario");
                  fetch("https://jsonplaceholder.typicode.com/users/"+this.userID).
                  then(response=>response.json()).
                  then(json=>json.name).
                  then(nombre=>{divUsuario.innerHTML=`<strong>Usuario: </strong> ${nombre}`;}).
                  catch(error=>{console.log(error);console.error(error)});
                  divUsuario.classList.toggle("d-none");
                });

    div.querySelector(".mostrarComentarios").addEventListener("click",event=> {
        let divComentarios=div.querySelector(".comentarios");
        fetch("https://jsonplaceholder.typicode.com/posts/"+this.id+"/comments").
        then(response=>response.json()).then(comentarios=>{
          divComentarios.innerHTML=`<p><strong>Comentarios: </strong></p>`;
          for(let comentario of comentarios){
            divComentarios.innerHTML+=`<p>- ${comentario.body}</p>`;
          }

        }).catch(error=>{console.log(error);console.log(error.message);});
        divComentarios.classList.toggle("d-none");
    });
    return div;
  }
  toString(){
    return `${this.titulo} : ${this.contenido} ID: ${this.id} UserId: ${this.userID} Usuario: ${this._usuario}`;
  }
  getTitulo() {
    return this._titulo;
  }

  setTitulo(value) {
    this._titulo = value;
  }

  getContenido() {
    return this._contenido;
  }

  setContenido(value) {
    this._contenido = value;
  }

  getId() {
    return this._id;
  }

  setId(value) {
    this._id = value;
  }

  getUserID() {
    return this._userID;
  }

  setUserID(value) {
    this._userID = value;
  }
}
