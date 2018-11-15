'use strict';




let peticionAjax = new XMLHttpRequest();
peticionAjax.addEventListener("readystatechange", procesarPeticion);
peticionAjax.open("GET","https://jsonplaceholder.typicode.com/posts");
peticionAjax.send();

function procesarPeticion(event){
    if(this.readyState == 4 && this.status == 200){ //Consultamos que la respuesta es correcta
        let posts = JSON.parse(this.responseText);
        procesarResultado(posts);
    }
}


function procesarResultado(posts){
    for(let post of posts){
        document.getElementById("contenedorEntradas").appendChild(crearPost(post));
    }
}



//Funciones auxiliares:
function crearPost(post) {
    let div = document.createElement("div");
    div.classList.add("entrada");
    div.innerHTML =
        `<p><strong>TITULO</strong>: ${post.title}</p>
        <div>
            <p><strong>Contenido</strong>: ${post.body}</p>
            <button class="mostrarUsuario">Usuario del Post</button>
            <button class="mostrarComentarios">Mostrar comentarios</button>
            <div class="usuario d-none">
                <p><strong>NOMBRE USUARIO: </strong> <span class="nombreUser">Nombre</span></p>
            </div>
            <div class="comentarios d-none">
                <p><strong>Comentarios: </strong></p>
                <p>- Comentario1: </p>
                <p>- Comentario 2: </p>
            </div>
        </div>`;

    div.querySelector(".mostrarUsuario").addEventListener("click",function () {
        let usuarioDiv = div.querySelector(".usuario");
        if(usuarioDiv.className.includes("d-none")){ //Sólo se carga cuando pasamos invisible a visible
            cargarUsuario(post.userId,div);
        }else{
            usuarioDiv.classList.toggle("d-none");
        }
    });


    div.querySelector(".mostrarComentarios").addEventListener("click",function () {
        let comentariosDiv =  div.querySelectorAll(".comentarios")[0];
        if(comentariosDiv.className.includes("d-none")) { //Sólo se carga cuando pasamos invisible a visible
            cargarComentarios(post.id,div);
        }
        else{
            comentariosDiv.classList.toggle("d-none");
        }
    });

    return div;
}


//Funciones para las peticiones de los usuarios:
function cargarUsuario(idUser,div) {
    let peticion = new XMLHttpRequest();
    peticion.addEventListener("readystatechange",function (event) {
        if(this.readyState == 4 && this.status==200){
            let usuario = JSON.parse(this.responseText);
            let spanUsuario = div.querySelector(".nombreUser");
            while(spanUsuario.firstChild){
                spanUsuario.firstChild.remove();
            }
            //spanUsuario.innerHTML = usuario.name;
            spanUsuario.appendChild(document.createTextNode(usuario.name));
            div.querySelector(".usuario").classList.remove("d-none");
        }
    });
    peticion.open("GET","https://jsonplaceholder.typicode.com/users/"+idUser+"\n");
    peticion.send();
}




function cargarComentarios(idPost,div){
    let peticion = new XMLHttpRequest();
    peticion.addEventListener("readystatechange",function (event) {
        if(this.readyState == 4 && this.status==200){
            let comentarios = JSON.parse(this.responseText);
            let comentariosDiv = div.querySelector(".comentarios");
            while(comentariosDiv.children.length>1){
                comentariosDiv.removeChild(comentariosDiv.lastChild);
            } //Sólo tengo "comentarios:"
            for(let comentario of comentarios){
                let p = document.createElement("p");
                p.appendChild(document.createTextNode("- "+comentario.name));
                comentariosDiv.appendChild(p);
            }
            div.querySelectorAll(".comentarios")[0].classList.toggle("d-none");
        }
    });
    peticion.open("GET","https://jsonplaceholder.typicode.com/posts/"+idPost+"/comments\n");
    peticion.send();
}