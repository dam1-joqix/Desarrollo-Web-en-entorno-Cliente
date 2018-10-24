//EJERCICIO 1
/**
 * @author Joaquin Alonso Perianez
 */
/**
 * Compara dos cadenas y muestra cual de ellas es la más larga.
 * Si uno de los valores introducidos no se considera cadena, nos informará de ello
 * @param cadena1 primera cadena
 * @param cadena2 segunda cadena
 */
function cadenaMasLarga(cadena1, cadena2){
  if(typeof cadena1=="string"&&typeof cadena2=="string") {
    if (cadena1.length > cadena2.length) {
      console.log(cadena1);
    } else {
      console.log(cadena2);
    }
  }else{
    console.log("Uno de los valores no es una cadena");
  }
}

//EJercicio 2
/**
 * Dadas dos cadenas, comprueba si son iguales a la inversa,
 * Informa si lo son o no, en caso de que uno de los valores
 * no sea una cadena tendremos un mensaje de error
 * @param cadena1 primera cadena
 * @param cadena2 segunda cadena
 */
function palindromas(cadena1, cadena2){
  if(typeof cadena1=="string"&&typeof cadena2=="string") {

    if(cadena1==cadena2.split("").reverse().join("")){
      console.log("Son palindromas");
    }else {
      console.log("no son palindromas");
    }
  }else{
    console.log("ERROR: Uno de los valores no es una cadena");
  }
}

//EJERCICIO 3
/**
 * Recibe un array y muestra las cadenas,
 * los números y otros indicando cuantos
 * elemntos hay de cada tipo
 * @param array
 */
function comprobarArray(array){
  let numeros=[], cadenas=[], otros=[];
  for(let elemento of array){
    if(typeof elemento=="string"){
      cadenas.push(elemento);
    }else{
      if(isNaN(+elemento)) {
        otros.push(elemento);
      }else{
        numeros.push(elemento);
      }
    }
  }
  console.log(numeros.length+" elementos son numeros");
  for(let num of numeros){
    console.log(num);
  }
  console.log(cadenas.length+" elementos son cadena");
  for(let cad of cadenas){
    console.log(cad);
  }
  console.log(otros.length+" elementos no son ni numero ni cadena");
  for(let ot of otros){
    console.log(ot);
  }
}
//Ejercicio 4
/**
 * Recibe una cadena un numero y un numero
 * si uno de los datos no es del tipo pedido
 * se pondrá el valor por defecto llamando de nuevo a la función
 * Al final mostrará los datos
 * @param producto
 * @param precio
 * @param impuestos
 */
function productoPrecio(producto="Producto Genérico",precio=100,impuestos=21){
  if(typeof producto!="string"){
    productoPrecio("Producto Genérico",precio,impuestos);
  }else if(typeof precio!="number"){
    productoPrecio(producto,100,impuestos);
  }else if(typeof impuestos!="number"){
    productoPrecio(producto,precio,21);
  }else{
    console.log(producto);
    console.log(precio);
    console.log(impuestos);
  }

}

/**
 * Esta funcion recibe un array de numeros
 * y devuelve otro ordenado de menor a mayor,
 * no se modifica el array original
 * @param array array que se recibe
 * @returns {Array} array ordenado
 */
function ordenarArray(array) {
  let arrayAux1 = [];
  let arrayAux2 = [];
  for (let item of array) {
    arrayAux1.push(item);
  }
  let min = Number.MAX_VALUE;
  for (let item of array) {
    for (let item2 of arrayAux1) {
      if(item2<min){
        min=item2;
      }
    }
    arrayAux2.push(min);
    arrayAux1.splice(arrayAux1.indexOf(min), 1);
    min=Number.MAX_VALUE;
  }
  return arrayAux2;
}

//7
/**
 * Recibe un array de números
 * Si todos son pares devuelve true
 * Si alguno no es par devuelve false
 * @param array array de numeros
 * @returns {boolean} es par?
 */
function arrayEsPar(array){
  return (array.every((a)=>a%2==0));
}
//8
function procesarArray(array){
  console.log(array);
  if(array.every((a)=>!isNaN(a))){
    for (let i = 0; i <array.length ; i++) {
      array[i]*=2;
    }
    console.log(array);
    if(array.every(a=>a%2==0)){
      alert("Éxito");
    }else{
      alert("Error no son pares");
    }
  }else{
    alert("ERROR alguno no es un numero");

  }
}

//9
function PlatoCocina( nombrePlato, duracionMinutos,dificultad) {
  this.nombrePlato=nombrePlato;
  this.duracionMinutos=duracionMinutos;
  this.dificultad=dificultad;

  this.toString=function () {
    return this.nombrePlato+" Duración: "+duracionMinutos+" Dificultad: "+dificultad;
  }
}

//EJECUCIÓN
console.log("\n\n----EJERCICIO 1---- ");
console.log("Valores 'Hola' y 'Hola que tal'");
cadenaMasLarga("Hola","Hola que tal");
console.log("\n\n----EJERCICIO 2:----");
console.log("Valores 'Hola' y 'ANA'");
palindromas("HOLA","ANA");
console.log("Valores 'HOLA' y 'ALOH'");
palindromas("HOLA","ALOH");
console.log("\n\n----EJERCICIO 3----");
arrayComprobar=[1,2,3,45,6,8,"28","hola",null,undefined,["Hola","que","tal"]];
console.log("El array es; ");
for(let elemento of arrayComprobar){
  console.log(elemento);
}
comprobarArray(arrayComprobar);
console.log("\n\n----EJERCICIO 4----");
productoPrecio();
console.log("---");
productoPrecio("Producto1",200,10);
console.log("---");
productoPrecio("Producto1","200","10");
console.log("---");
productoPrecio(452,[200,100],10);
console.log("---");
console.log("\n\n----EJERCICIO 5----");
let array=[25,3,65,10,2,1,65,8,45,18];
console.log(array);
console.log("Ordenado: ");
console.log(ordenarArray(array));
console.log("\n\n----EJERCICIO 6----");
let arrayEj6=[1,2,3,4];
console.log(arrayEj6.join("#"));
arrayEj6.unshift(5,6);
console.log(arrayEj6.join("#"));
arrayEj6.push(7,8);
console.log(arrayEj6.join("#"));
arrayEj6.splice(3,3);
console.log(arrayEj6.join("#"));
arrayEj6.splice(arrayEj6.length-1, 0, 9,10);
console.log(arrayEj6.join("#"));
console.log("\n\n----EJERCICIO 7----");
let arrayImpar=[1,2,3,4,5,6,7,8,9,10];
let arrayPar=[2,4,6,8,10,12,14,16,18,20];
console.log("Array 1"+arrayImpar.join()+" "+arrayEsPar(arrayImpar));
console.log("Array2 "+arrayPar.join()+" "+arrayEsPar(arrayPar));
console.log("\n\n----EJERCICIO 8----");
let array8=[1,2,3,4,5,6,7,"PEPE"];
console.log(array8);
procesarArray(array8);
array8=[1,2,3,4,5,6,7];
console.log(array8);
procesarArray(array8);
console.log("\n\n----EJERCICIO 9----");
let plato1=new PlatoCocina("Tortilla",5,1);
let plato2=new PlatoCocina("Macarrones",20,2);
let ingredientes=new Map();
ingredientes.set(plato1,["Huevo","Sal"]);
ingredientes.set(plato2,["Macarrones","Atún","Tomate","Sal"]);
console.log(ingredientes);
