let mapa=L.map("map").
setView([40.037315,-6.085430],13);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);
/*Añadimos un marcador*/
var marker=L.marker([40.043459,-6.086898]).addTo(mapa);
marker.bindPopup("<h1>IES VALLE DEL JERTE</h1><br> Es un instituo de Plasencia")
/*Añadimos un circulo rojo*/
var circulo=L.circle([40.043327,-6.088700], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity:0.5,
    radius:100
}).addTo(mapa);
circulo.bindPopup("La ciudad deportiva de Plasencia");
/*Poligono*/
var poligono=L.polygon([
    [40.038722,-6.083077],
    [40.038520,-6.082875],
    [40.037236,-6.085227],
    [40.037380,-6.085366]
]).addTo(mapa);
poligono.bindPopup("<h1>Mercadillo</h1><small>Rebajas aseguradas</small>")