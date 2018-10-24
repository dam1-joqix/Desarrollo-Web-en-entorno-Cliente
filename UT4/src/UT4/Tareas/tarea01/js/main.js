let disco={
  "titulo":"Colapso Nerviozzo",
  "autor":"Nerviozzo",
  "anio":2017,
  "ventas":800,
  getInfo(){
    let cadena="Título: "+this.titulo;
    cadena+="\n\tAutor: "+this.autor;
    cadena+="\n\tAño: "+this.anio;
    cadena+="\n\tVentas: "+this.ventas;
    return cadena;
  }
};
let calle={
  "nombre":"Sol",
  "longitud":100,
  "establecimientos":[
    "Springfield",
    "Stradivarius",
    "Inside",
    "Casa Vegas"
  ],
  getInfo(){
    let cadena="Calle: "+this.nombre;
    cadena+="\n\tLongitud: "+this.longitud;
    cadena+="\n\tEstablecimientos: ";
    for(let establecimiento of this.establecimientos){
      cadena+="\n\t\t"+establecimiento;
    }
    return cadena;
  }
};
let coche={
  "modelo":"C4",
  "dueno":{
    "nombre":"Pepe",
    "edad":40,
  },
  "marca":{
    "nombre":"Citroen",
    "anyo":1956
  },
  getInfo(){
    return `Coche: ${this.marca.nombre} ${this.modelo} Propietario: ${this.dueno.nombre} (edad: ${this.dueno.edad})`;
  }
};
let obraDeTeatro={
  titulo:"Titulo",
  estreno:1995,
  director:{
    nombre:"Pepe",
    apellidos:"Perez Fernández",
    nacimiento:1956,
    obras:[
      "obra1",
      "obra2",
      "obra3"
    ]
  },
  actores:[
    {
      nombre:"Pedro",
      edad:40,
      veces:10
    },
    {
      nombre: "Juan",
      edad: 45,
      veces: 3
    },
    {
      nombre:"María",
      edad:30,
      veces:20
    }
  ],
  getInfo(){
    let cadena="Titulo: "+this.titulo+" estreno "+this.estreno+"\n";
    cadena+="Director "+this.director.nombre+" "+this.director.apellidos+" nacido en "+this.director.nacimiento;
    cadena+=" ha trabajado en:";
   for (let obra of this.director.obras){
     cadena+="\n\t-"+obra;
   }
   cadena+="\nActores:";
   for(let actor of this.actores){
     cadena+="\n-"+actor.nombre+" "+actor.edad+" años ha representado: "+actor.veces+" veces la obra";
   }
   return cadena;
  }
};
console.log(disco.getInfo());
console.log(calle.getInfo());
console.log(coche.getInfo());
console.log(obraDeTeatro.getInfo());
