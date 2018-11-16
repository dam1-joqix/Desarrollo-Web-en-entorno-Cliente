let form=document.querySelector("#nuevaTarea");
form.addEventListener("submit",guardarTarea);
function guardarTarea(event) {
  event.preventDefault();
  let titulo=document.querySelector("#titulo").value;
  let descripcion=document.querySelector("#descripcion").value;
  let estado=document.querySelector("#estado").value;
  let fecha=document.querySelector("#fecha").value;
  let hora=document.querySelector("#hora").value;
  let json=`{
  "titulo":"${titulo}",
  "descripcion":"${descripcion}",
  "estado":["${estado}"],
  `;
  if(fecha&&hora) {
    json += `"fecha_creacion":"${fecha}T${hora}"`;
  }
  json+="}";
  let tarea=JSON.parse(json);
  fetch('http://localhost:3000/tasks', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tarea)
  }).then((res)=>res.json())
    .then(function (json) {
      document.querySelector("#contenedorAlerta").innerHTML='<div class="alert alert-success alert-dismissible fade show" role="alert">\n' +
        '  <strong>Tarea enviada</strong> \n' +
        '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
        '    <span aria-hidden="true">&times;</span>\n' +
        '  </button>\n' +
        '</div>';
    }).catch(function (error) {
      console.error(error);
    document.querySelector("#contenedorAlerta").innerHTML='<div class="alert alert-error alert-dismissible fade show" role="alert">\n' +
      '  <strong>tarea no enviada</strong> '+error.message+'\n' +
      '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
      '    <span aria-hidden="true">&times;</span>\n' +
      '  </button>\n' +
      '</div>';
  });
}
