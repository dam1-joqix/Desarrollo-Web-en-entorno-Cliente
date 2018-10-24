'use strict'

/**
 * Genera un elemento th con el texto dado
 * @param texto
 * @returns {HTMLElement}
 */
function generaTH(texto){
  let th=document.createElement("th");
  let contenido=document.createTextNode(texto);
  th.appendChild(contenido);
  return th;
}

/**
 * Devuelve un td con el texto dado
 * @param texto
 * @returns {HTMLElement}
 */
function generaPrimerTD(texto){
  let td=document.createElement("td");
  let contenido=document.createTextNode(texto);
  td.appendChild(contenido);
  return td;
}

/**
 * Crea un elemento td con un input como contenido
 * @returns {HTMLElement}
 */
function generaTD(){
  let td=document.createElement("td");
  let input=document.createElement("input");
  input.setAttribute("type","text");
  td.appendChild(input);
  return td;
}

/**
 * Cuenta los tr contenidos en #tabla
 * @returns {number}
 */
function contarFilas() {
  let filas=document.querySelectorAll("#tabla tr");
  return filas.length;
}

/**
 * Cuenta los th contenidos en un tr contenidos en #tabla
 * @returns {number}
 */
function contarColumnas() {
  let columnas=document.querySelectorAll("#tabla tr>th");
  return columnas.length;
}

/**
 * Genera una fila con tantos td como columnas en los tr anteriores
 */
function generarFila(){
  let tr=document.createElement("tr");
  let filasActuales=contarFilas();
  let columnasActuales=contarColumnas();
  for (let i = 0; i <columnasActuales ; i++) {
    if(i==0){
      let td=generaPrimerTD(filasActuales);
      tr.appendChild(td);
    }else{
      let td=generaTD();
      tr.appendChild(td);
    }
  }
  document.querySelector("#tabla").appendChild(tr);
}

/**
 * Recorre todos los tr y añade un td al final a excepción del primero en el que añade un th
 */
function anyadeColumna(){
  let filas=document.querySelectorAll("#tabla tr");
  let columnas=contarColumnas();
  for (let i = 0; i <filas.length ; i++) {
    if(i==0){
      filas[i].appendChild(generaTH(columnas));
    }else{
      filas[i].appendChild(generaTD());
    }
  }
}

/**
 * Resetea la tabla a su longitud inicial
 */
function resetearTabla(){
  if(contarFilas()>4){
    let filas=document.querySelectorAll("#tabla tr");
    let tabla=document.querySelector("#tabla");
    for (let i = 0; i <filas.length ; i++) {
      if(i>3){
        tabla.removeChild(filas[i]);
      }
    }
  }
  if(contarColumnas()>4){
    let filas=document.querySelectorAll("#tabla tr");
    for (let i = 0; i <filas.length ; i++) {
      let columnas=filas[i].children;
      for (let j = columnas.length-1; j >=0 ; j--) {
        if(j>3){
          filas[i].removeChild(columnas[j]);
        }
      }
    }
  }
}


/**
 * Al cargar todos los elementos visuales
 */
window.addEventListener("load",inicializar);

/**
 * Funcion con la que se iniciará la ejecución
 */
function inicializar(){
  console.log(contarFilas());
  console.log(contarColumnas());
  document.querySelector("#nuevaFila").addEventListener("click",generarFila);
  document.querySelector("#nuevaColumna").addEventListener("click",anyadeColumna);
  document.querySelector("#resetTabla").addEventListener("click",resetearTabla);
}
