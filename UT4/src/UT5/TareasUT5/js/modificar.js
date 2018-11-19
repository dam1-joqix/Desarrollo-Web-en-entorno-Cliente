fetch("http://localhost:3000/tasks").
then(result=>result.json()).
then(function (json) {
  let tareas=[];
  for(let objeto of json){
    tareas.push(new Tarea(objeto));
  }
  return tareas;
}).then(function (tareas) {
  let contenedor=document.getElementById("contenedor");
  contenedor.innerHTML="";
  for(let tarea of tareas){
    contenedor.appendChild(tarea.obtenerDivModificar());
  }
}).
catch(error=>{console.log(error.message);console.log(error)});
