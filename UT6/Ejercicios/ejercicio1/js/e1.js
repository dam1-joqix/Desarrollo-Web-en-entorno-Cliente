let mapa=L.map("map").
setView([40.037315,-6.085430],15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

navigator.geolocation.getCurrentPosition(function (pos) {

    var marker=L.marker([pos.coords.latitude,pos.coords.longitude]).addTo(mapa);
    marker.bindPopup("<img src='http://www.hhgroups.com/imagenes/avatares/originals/xfeab5fa3216b03990189c8444ab1a680.jpg.pagespeed.ic.wJqGhpWgGa.jpg' class='img' alt='img'>");
}, function(error){

    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("El usuario no deja acceder a la localización");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("La localización es inaccesible");
            break;
        case error.TIMEOUT:
            alert("Se ha excedido el tiempo máximo de la petición");
            break;
        default:
            alert("Ha ocurrido un error desconocido");
            break;
    }
});