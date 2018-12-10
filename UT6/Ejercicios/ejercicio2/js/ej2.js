let mapa=L.map("map").
setView([40.037315,-6.085430],15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

var marker=L.marker([40.0299352,-6.0899426]).addTo(mapa);
marker.bindPopup("<h1>Ayuntamiento de plasencia</h1><p> Consistorio municipal</p> <small><a href='https://www.plasencia.es/'>Página Web</a></small>");

var poligono=L.polygon([
    [40.043417,-6.0871932],
    [40.043115,-6.0867052],
    [40.042394,-6.0877512],
    [40.04278,-6.0881052]
]).addTo(mapa);
poligono.bindPopup("<h1>IES Valle del Jerte</h1><p>Instituto de plasencia</p><small><a href='http://iesvjp.es'>Página web</a></small>");
var poligono2=L.polygon([
    [40.022576,-6.0999702],
    [40.022558,-6.0997632],
    [40.022022,-6.0998832],
    [40.022063,-6.1002062]
]).addTo(mapa);
poligono2.bindPopup("<h1>Estación de ferrocarril</h1><p>No llegues tarde</p><small><a href='http://www.ferropedia.es/wiki/Estaci%C3%B3n_de_Plasencia'>Página web</a></small>");
//
var circulo=L.circle([40.045037,-6.0873627], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity:0.5,
    radius:30
}).addTo(mapa);
circulo.bindPopup("<h1>Piscina bioclimática</h1> <p>Piscina climatizada</p> <small><a href='#'>Página web</a></small>")