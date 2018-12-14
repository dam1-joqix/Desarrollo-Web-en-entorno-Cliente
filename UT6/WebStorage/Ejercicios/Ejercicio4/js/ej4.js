
cargarTabla();
let enviar=document.querySelector("#enviar");
let enviarEdad=document.querySelector("#enviarEdad");
enviar.addEventListener("click",function (event) {
    let anyade=document.querySelector("#noExiste");
    let p=document.querySelector("#edad");
    anyade.classList.add("d-none");
    p.classList.add("d-none");
   let nombreIn=document.querySelector("#nombre");
   let nombre=nombreIn.value;
   if(nombre==""||nombre==null){
       alert("debes escribir un nombre");
       return;
   }
   let hay=false;
   for(let i=0;i<localStorage.length;i++){
       let clave=localStorage.key(i);
       if(clave==nombre){
           hay=true;
           p.innerHTML=`${nombre} tiene ${localStorage.getItem(clave)}`;
           p.classList.remove("d-none");
       }
   }
    if(!hay){
        anyade.classList.remove("d-none");
    }
});
enviarEdad.addEventListener("click",function (event) {
    let nombreIn = document.querySelector("#nombre");
    let nombre = nombreIn.value;
    let edadIn = document.querySelector("#edadIn");
    let edad=edadIn.value;
    if(edad==null||edad<=0){
        alert("debes introducir una edad válida");
        return;
    }
    localStorage.setItem(nombre,edadIn.value);
    cargarTabla();
    let anyade=document.querySelector("#noExiste");
    let p=document.querySelector("#edad");
    anyade.classList.add("d-none");
    p.classList.add("d-none");
});
let mostrar=document.querySelector("#mostrar");
mostrar.addEventListener("click",function (event) {
    let tabla=document.querySelector("#registrados");
    tabla.classList.toggle("d-none");
    if(mostrar.innerHTML=="Mostrar todos"){
        mostrar.innerHTML="Ocultar";
    }else{
        mostrar.innerHTML="Mostrar todos";
    }
});

function cargarTabla(){
    let tabla=document.querySelector("#registrados");
    tabla.innerHTML= "<tr><th>Nombre</th><th>Edad</th></tr>";
    for(let i=0;i<localStorage.length;i++){
        let clave=localStorage.key(i);
        tabla.innerHTML+=`<tr><td>${clave}</td><td>${localStorage.getItem(clave)}</td></tr>`;
    }

}