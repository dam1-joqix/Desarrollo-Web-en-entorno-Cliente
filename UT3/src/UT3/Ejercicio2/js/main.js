let a=document.querySelector("#div1 a");
console.log(a.title);
let a2=document.querySelector("div > a");
console.log(a2);
let a3=document.querySelector("#div1 > p > a");
console.log(a3);
console.log(document.querySelector(".linkNormal"));
let a5=document.querySelector(".linkNormal[title^=Spider]");
console.log(a5.nodeType);
console.log(a5.innerHTML);
let a6=document.querySelector(".linkNormal[title^=Spider] + a");
console.log(a6);
let a7=document.querySelectorAll(".linkNormal");
for (let i = 0; i <a7.length ; i++) {
  console.log(a7[i].title);
}
let a8=document.querySelectorAll(".linkNormal[title=Spiderman] ~ a");
for (let i = 0; i <a8.length ; i++) {
  console.log(a8[i]);
}

