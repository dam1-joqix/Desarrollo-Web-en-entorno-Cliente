let prometoLimpiar=new Promise(function (resolve, reject) {
  setTimeout(()=>{let limpia=Math.random()>0.5;
    if(limpia){
      resolve("esta limpia");
    }else {
      reject("sigue sucia");
    }},500);
});
prometoLimpiar.then(x=>console.log(x)).catch(x=>console.log(x));

