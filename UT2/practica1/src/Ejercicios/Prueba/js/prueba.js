/**
 * En este documento podemos probar pequeños fragmentos de javascript
 */
//PRUEBA 1
/*let nombre="Jesus";
console.log(nombre);
console.log(typeof nombre);
var altura= 180;
console.log(altura);
console.log(typeof altura);
altura="uno con ochenta";
console.log(altura);
console.log(typeof altura);
*/
//PRUEBA2
/*let variable;
console.log(variable);
console.log(typeof variable);
console.log(variable1);
console.log(typeof variable1);
*/
//PRUEBA 3
/*
/**
*Pinta por consola hola y el nombre recibido
* @nombre nombre de usuario
* /
function saludoBienvenida(nombre){
  console.log("Hola "+nombre);
}
saludoBienvenida("Paco");
saludoBienvenida();
saludoBienvenida("Paco","Pepe","Pedro");
*/
//PRUEBA 4
/*
/**
*Dado un precio y una cantidad calcula el precio total
* @precio
* @cantidad
* /
function calcularPrecio(precio,cantidad) {
  console.log("El precio de "+cantidad+" artículos a "+precio+" es de: "+(precio*cantidad));
}
calcularPrecio(3,30);
 */
//PRUEBA 5
  /*
let funcionEnVariable=function (valor) {

  return valor+1;
}
console.log(funcionEnVariable(1));
*/
//PRUEBA 6
  /*
  let procesa3=function (elemento1,elemento2,elemento3,funcionProcesadora) {
    return funcionProcesadora(elemento1,elemento2,elemento3);
  }
  console.log(procesa3(2,5,4,(p1,p2,p3)=>p1+p2+p3));
console.log(procesa3(2,5,4,(p1,p2,p3)=>{
  if(p1>p2&&p1>p3){
  return p1;
}else if(p2>p1&&p2>p3){
  return p2;
}else{
  return p3;
}
}));
console.log(procesa3(2,5,4,(p1,p2,p3)=>{
  if(p1<p2&&p1<p3){
  return p1;
}else if(p2<p1&&p2<p3){
  return p2;
}else{
  return p3;
}
}));
console.log(procesa3(2,5,4,(p1,p2,p3)=>(p1+p3)/p2));
*///Prueba 7
/*function cambiarContenido(a,b,c) {
    a=a*10;
    b.item="cambiar";
    c={item: "cambiar"};
  }
  var num=10;
var obj1={item:"inicial"};
var obj2={item:"inicial"};
cambiarContenido(num,obj1,obj2);
console.log(num);
console.log(obj1.item);
console.log(obj2.item);
*/
//PRUEBA 8
/*
function calcularPrecioConImpuesto(valor,impuesto=(valor/10)) {
  return valor+impuesto;
}
console.log("100 sin entrada de impuesto "+calcularPrecioConImpuesto(100));
console.log("100 con 30 de impuesto "+calcularPrecioConImpuesto(100,30));
 */

/*
console.log("PreIncremento");
let i=1;
while (i<5){
  console.log(i++);
}
console.log("\nPostIncremento");
let j=1;
while(j<5){
  console.log(++j);
}
 */
/*
console.log("For que solo muestra los impares de 0 a 5");
for (let i=0;i<5;i++){
  if(i%2==0){
    continue;
  }
  console.log(i);
}**/
/*
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*2);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(typeof Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY/2);
*/
/*
let c=3;
let d="12";
console.log(c * d);
console.log(c + d);//concatena
console.log(c + +d);//suma
*/
/*
let s1="esto es una cadena";
console.log(s1.length);
console.log(s1.charAt(0));
console.log(s1.indexOf("es"));
console.log(s1.lastIndexOf("es"));
console.log(s1.match(/.n/g));
console.log(s1.search(/[aeiou]/));
console.log(s1.replace(/e/g,"i"));
console.log(s1.slice(5,7));
console.log(s1.substring(5,7));
console.log(s1.substr(5,7));
console.log(s1.toLocaleUpperCase());
console.log("Cadena    con    \t\t   espacios".trim());
console.log("la".repeat(6));
console.log("\u{1f3c4}");
*/
/*
let cadena=prompt("cadena");
let vocales=0, consonantes=0;
for (let letra of cadena){
  if (letra.match(/[aeiou]/gi)){
    vocales++;
  }else{
    consonantes++;
  }
}
console.log(consonantes+" consonantes");
console.log(vocales+" vocales" );
*/
/*
function ordenaEnteros(entero1,entero2) {
  if(parseInt(entero1)>parseInt(entero2)){
    return 1;
  }else if(parseInt(entero1)<parseInt(entero2)){
    return -1;
  }else{
    return 0;
  }
}
let a =[20,6,100,51,28,9];
a.sort((n,n2)=>n-n2);
console.log(a);
*/
/*
/**
 * Objeto Persona
 * @param nombre el nombre de la persona
 * @param edad la edad de la persona
 * @constructor crea una persona con su edad y nombre
 *//*
function Persona(nombre,edad) {
  this.nombre =nombre;
  this.edad=edad;
  this.toString= function () {
    return this.nombre+" ("+this.edad+")";
  }

}
let personas=[
  new Persona("Marcos",33),
  new Persona("María",19),
  new Persona("Santiago",28),
  new Persona("Cristina",40)
];
personas.sort();
console.log("Ordenadas alfabeticamente");
console.log(personas.toString());
personas.sort((p1,p2)=>p1.edad-p2.edad);
console.log("Ordenadas por edad");
console.log(personas.toString());
*/

/*
function devuelveMaximo(...numeros) {
  let max=Number.MIN_VALUE;
  if(numeros.every((num)=>Number.isNaN(num))){
    return undefined;
  }else{
    //for (let numero of numeros) {
      //if(numero>max){
        //max=numero;
      //}
    //}
    numeros.every((num) => num >max ? max=num : 0);
    return max;
  }
}
let array=[1,2,3,4,5,6,10,100,259];
console.log(array.toString());
console.log("El mayor es "+devuelveMaximo(...array));
*/
let persona1={name:"Pedro",age:21};
let persona2={name:"Juan",age:22};
let hobbies=new Map();
hobbies.set(persona1,["tenis","ordenadores","peliculas"]);
hobbies.set(persona2,["Musica","Andar"]);
console.log(hobbies);


