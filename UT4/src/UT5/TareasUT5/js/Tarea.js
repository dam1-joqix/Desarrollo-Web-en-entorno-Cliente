class Tarea{

  constructor(json) {
    this.titulo=json.titulo;
    this.descripcion=json.descripcion;
    this.estado=json.estado[0];
    this.fecha=json.fecha_creacion;
    this.id=json._id;
  }
  toString(){
    return `${this.titulo} ${this.descripcion} ${this.estado} ${this.fecha}`;
  }
  obtenerDiv(){
    let div=document.createElement("DIV");
    let fondo="bg-info";
    switch (this.estado) {
      case 'pendiente':
        fondo="bg-danger";
        break;
      case 'haciendo':
        fondo="bg-warning";
        break;
      case 'completada':
        fondo="bg-success";
        break;
    }
    div.classList.add("col-sm-3","col-xs-12","col-md-3","mt-1","tarea");
    div.innerHTML=`<h4 class="bg-info text-center">${this.titulo}</h4>
      <p>${this.descripcion}</p>
      <div class="bg-secondary bt-1">
        <span class="estado ${fondo} text-white">
          ${this.estado}
        </span>
         ${this.fecha}
      </div>`;
    return div;
  }

  obtenerDivModificar(){
    let fecha_=this.fecha.split("T")[0];
    let hora_=this.fecha.split("T")[1];
    hora_=hora_.split(".")[0];
    let div=document.createElement("DIV");

    div.classList.add("col-sm-3","col-xs-12","col-md-3","mt-1","tarea");
    let inner=`<input type="text" value="${this.titulo}" class="form-control titulo">
      <textarea class="form-control descripcion" >${this.descripcion}</textarea>
      <select class="form-control estado">
      `;
    console.log(this.estado);
      if(this.estado==="pendiente"){
        inner+="<option value='pendiente' selected class='bg-danger'>Pendiente</option>";
      }else{
        inner+="<option value='pendiente' class='bg-danger'>Pendiente</option>";
      }
      if(this.estado==="completada"){
        inner+="<option value='completada' selected class='bg-success'>Completada</option>";
      }else{
        inner+="<option value='completada' class='bg-success'>Completada</option>";
      }
      if(this.estado==="haciendo"){
        inner+="<option value='haciendo' selected class='bg-warning'>Haciendo</option>";
      }else{
        inner+="<option value='haciendo' class='bg-warning'>Haciendo</option>";
      }
      inner+=`</select>
        <input type="date" value="${fecha_}" class="form-control fecha">
        <input type="time" value="${hora_}" class="form-control hora">
      <button class="enviar form-control bg-aqua">Enviar</button>`;
    div.innerHTML=inner;
    let boton=div.querySelector(".enviar");
    let titulo=div.querySelector(".titulo");
    let descripcion=div.querySelector(".descripcion");
    let estado=div.querySelector(".estado");
    let fecha=div.querySelector(".fecha");
    let hora=div.querySelector(".hora");
    let tarea={
      titulo:titulo.value,
      descripcion:descripcion.value,
      estado:estado.value,
      fecha_creacion:fecha.value+"T"+hora.value
    };
    boton.addEventListener("click",event=> {
      fetch("http://localhost:3000/tasks/" + this.id, {
        method: 'update',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
      })
    }).then(response=>response.json()).
    then(json=>{
      if(json.errors){
        console.log("error");
      }
    }).catch(error=>console.log(error));
    return div;
  }
  obtenerDivEliminar(){
    let div=document.createElement("DIV");
    let fondo="bg-info";
    switch (this.estado) {
      case 'pendiente':
        fondo="bg-danger";
        break;
      case 'haciendo':
        fondo="bg-warning";
        break;
      case 'completada':
        fondo="bg-success";
        break;
    }
    div.classList.add("col-sm-3","col-xs-12","col-md-3","mt-1","tarea");
    div.innerHTML=`<h4 class="bg-info text-center">${this.titulo}</h4>
      <p>${this.descripcion}</p>
      <div class="bg-secondary bt-1">
        <span class="estado ${fondo} text-white">
          ${this.estado}
        </span>
         ${this.fecha}
      </div>
        <button class="bg-danger eliminar">Eliminar</button>`;
    return div;
  }
  getTitulo() {
    return this.titulo;
  }

  setTitulo(value) {
    this.titulo = value;
  }

  getDescripcion() {
    return this.descripcion;
  }

  setDescripcion(value) {
    this.descripcion = value;
  }

  getEstado() {
    return this.estado;
  }

  setEstado(value) {
    this.estado = value;
  }

  getFecha() {
    return this.fecha;
  }

  setFecha(value) {
    this.fecha = value;
  }

}
