let a =document.querySelector("a");
//a.id="aTwitter";
a.setAttribute("id","aTwitter");
//a.href="http://www.twitter.com";
a.setAttribute("href","http://www.twitter.com");
if(a.hasAttribute("title")){
  //a.title="Ir a Twitter";
  a.setAttribute("title","Ir a Twitter");
}
a.textContent="Twitter";
