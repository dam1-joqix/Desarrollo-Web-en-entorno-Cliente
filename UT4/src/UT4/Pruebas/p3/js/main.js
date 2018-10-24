/**
 * Guarda los datos de una moto
 */
class CicloMotor{
  constructor(marca,aceleracion,desaceleracion){
    this.numRuedas=2;
    this.velocidadMaxima=120;
    this.velocidadActual=0;
    this.marca=marca;
    this.aceleracion=aceleracion;
    this.desaceleracion=desaceleracion;
    this.encendida=false;
  }
  arrancar(){
    if(!this.encendida){
      console.log("Se mete y gira la llave, la moto arranca");
      this.encendida=true;
    }
  }
  acelerar(){
    if(this.encendida){
      this.velocidadActual=this.velocidadActual+this.aceleracion;
      if(this.velocidadActual>this.velocidadMaxima){
        this.velocidadActual=this.velocidadMaxima;
      }
    }
    //MATH MIN
  }
  frenar(){
    if(this.encendida){
      this.velocidadActual=this.velocidadActual-this.desaceleracion;
      if(this.velocidadActual<0){
        this.velocidadActual=0;
      }
    }
    //MATH MAX
  }
  mostrarInfo(){
    let info=`---${this.marca}---\n`;
    info+=`Número de ruedas: ${this.numRuedas}\n`;
    info+=`Velocidad máxima: ${this.velocidadMaxima}\n`;
    info+=`Velocidad Actual: ${this.velocidadActual}\n`;
    info+=`Aceleración: ${this.aceleracion}\n`;
    info+=`Desaceleración: ${this.desaceleracion}\n`;
    if(this.encendida){
      info+="Encendida: Sí\n";
    }else{
      info+="Encendida: No\n";
    }
    return info;
  }
}

/**
 * Moto de Motocros
 * @extends CicloMotor
 */
class MotoCross extends CicloMotor{
  constructor(marca,aceleracion,desaceleracion){
    super(marca,aceleracion,desaceleracion);
    this.velocidadMaxima=90;
    this.marchaActual=0;
  }
  arrancar(){
    console.log("se levanta la pata de cabra");
    super.arrancar();
  }
  mostrarInfo(){
    let cadena=super.mostrarInfo();
    cadena+=`Marcha Actual: ${this.marchaActual}`;
    return cadena;
  }
  acelerar(){
    super.acelerar();
    /**Actualizar marcha**/
    if(this.velocidadActual===0){
      this.marchaActual=0;
    }else if(this.velocidadActual<=10){
      this.marchaActual=1;
    }else if(this.velocidadActual<=30){
      this.marchaActual=2;
    }else{
      this.marchaActual=3;
    }

  }
}

/**
 * Scooter
 * @extends CicloMotor
 */
class Scooter extends CicloMotor{
  constructor(marca){
    super(marca,25,15);
  }
  arrancar(){
    if(!this.encendida){
      console.log("Se acerca la llave y se pulsa el botón, la moto arranca");
      this.encendida=true;
    }
  }

}
console.log("------CICLOMOTOR------");
let ciclomotor=new CicloMotor("Kawasaki",70,20);
console.log("LA MOTO INICIALMENTE");
console.log(ciclomotor.mostrarInfo());
console.log("LA MOTO TRAS ACELERAR");
ciclomotor.acelerar();
console.log(ciclomotor.mostrarInfo());
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR");
ciclomotor.arrancar();
ciclomotor.acelerar();
console.log(ciclomotor.mostrarInfo());
console.log("VOLVEMOS A ACELERAR");
ciclomotor.acelerar();
console.log(ciclomotor.mostrarInfo());
console.log("FRENAMOS LA MOTO");
ciclomotor.frenar();
console.log(ciclomotor.mostrarInfo());
console.log("------MOTOCROSS------");
let motoMotoCross=new MotoCross("Honda",10,5);
console.log("LA MOTO INICIALMENTE");
console.log(motoMotoCross.mostrarInfo());
console.log("LA MOTO TRAS ACELERAR");
motoMotoCross.acelerar();
console.log(motoMotoCross.mostrarInfo());
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR");
motoMotoCross.arrancar();
motoMotoCross.acelerar();
console.log(motoMotoCross.mostrarInfo());
console.log("VOLVEMOS A ACELERAR");
motoMotoCross.acelerar();
console.log(motoMotoCross.mostrarInfo());
console.log("FRENAMOS LA MOTO");
motoMotoCross.frenar();
console.log(motoMotoCross.mostrarInfo());
console.log("------SCOOTER------");
let scooter=new Scooter("Yamaha");
console.log("LA MOTO INICIALMENTE");
console.log(scooter.mostrarInfo());
console.log("LA MOTO TRAS ACELERAR");
scooter.acelerar();
console.log(motoMotoCross.mostrarInfo());
console.log("LA MOTO TRAS ARRANCAR Y ACELERAR");
scooter.arrancar();
scooter.acelerar();
console.log(scooter.mostrarInfo());
console.log("VOLVEMOS A ACELERAR");
scooter.acelerar();
console.log(scooter.mostrarInfo());
console.log("FRENAMOS LA MOTO");
scooter.frenar();
console.log(scooter.mostrarInfo());
