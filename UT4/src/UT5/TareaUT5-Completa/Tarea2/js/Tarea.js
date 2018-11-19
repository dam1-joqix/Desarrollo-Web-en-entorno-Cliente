class Tarea{

  constructor(json) {
    this.titulo=json.titulo;
    this.descripcion=json.descripcion;
    this.estado=json.estado[0];
    this.fecha=json.fecha_creacion;
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
