class Trabajador{
  constructor(nombre,horas,salario){
    this.nombre=nombre;
    this.numHorasSemanales=horas;
    this.salarioPorHora=salario;
  }
  pintarInfo(){
    return `${this.nombre} trabaja ${this.numHorasSemanales} horas semanales pagadas a ${this.salarioPorHora} euros`;
  }
  getSalarioSemanal(){
    return this.numHorasSemanales*this.salarioPorHora;
  }
}
class Restaurante{
  constructor(nombre){
    this.nombre=nombre;
    this.trabajadores=[];
  }
  pintarInfo(){
    let cadena=`Restaurante ${this.nombre} trabajadores:`;
    for(let trabajador of this.trabajadores){
      cadena+="\n"+trabajador.pintarInfo();
    }
    console.log(cadena);
  }
  getPagosSemanales(){
    let pago=0;
    for(let trabajador of this.trabajadores){
      pago+=trabajador.getSalarioSemanal();
    }
    return pago;
  }
  anadirTrabajador(trabajador){
    this.trabajadores.push(trabajador);
  }
}
let restaurante=new Restaurante("La taperia");
restaurante.pintarInfo();
restaurante.anadirTrabajador(new Trabajador("Pepe",40,10));
restaurante.anadirTrabajador(new Trabajador("Laura",35,15));
restaurante.anadirTrabajador(new Trabajador("Marcos",20,10));
restaurante.pintarInfo();
console.log("Mantener a los trabajadores del restaurante cuesta: "+restaurante.getPagosSemanales());
