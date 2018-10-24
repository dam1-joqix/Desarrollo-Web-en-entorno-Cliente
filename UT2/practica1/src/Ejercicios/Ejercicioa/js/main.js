let num1=  pedirNum("Introduce el primer número ");
let num2= pedirNum("Introduce el segundo número ");
let num3= pedirNum("Introduce el tercer número ");
let suma= +num1 + +num2 + +num3;
if(suma==100){
  alert("Éxito");
}else{
  alert("Fracaso");
}

function pedirNum(mensaje) {
  let num;
  do{
    num=prompt(mensaje,0);
  }while (Number.isNaN(parseInt(num)));
  return num;
}
