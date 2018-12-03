'use strict';
navigator.geolocation.getCurrentPosition(function (pos) {
   let p=document.querySelector("#coordenadas");
   p.textContent="Latitud: "+pos.coords.latitude+". Longitud: "+pos.coords.longitude+" (exactitud: "+pos.coords.accuracy+")";
}, function(error){
    let p=document.querySelector("#coordenadas");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            p.textContent="El usuario no deja acceder a la localización";
            break;
        case error.POSITION_UNAVAILABLE:
            p.textContent="La localización es inaccesible";
            break;
        case error.TIMEOUT:
            p.textContent="Se ha excedido el tiempo máximo de la petición";
            break;
        default:
            p.textContent="Ha ocurrido un error desconocido";
            break;
    }
});
