document.addEventListener("DOMContentLoaded",function () {
  let div=document.querySelector("#ContenedorGeneral");
  div.style.width="200px";
  div.style.height="200px";
  div.style.backgroundColor="#9e9e9e";
  div.style.color="blue";
  div.style.border="1px solid red";
  window.addEventListener("resize",function () {
    div.innerHTML=window.innerWidth+" - "+window.innerHeight;
  });
});
window.onbeforeunload= function () {
  return "Se cierra";
};
