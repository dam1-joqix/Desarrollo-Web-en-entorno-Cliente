let mapa=L.map("map").
setView([39.472773,-6.3801657],15);
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(mapa);

fetch("http://opendata.caceres.es/GetData/GetData?dataset=om:BarCopas&format=json").
then(response=>response.json()).
then(json=>json.results.bindings).
then((json)=>{
    for(let bar of json){
        let nombre= bar.rdfs_label.value;
        let lat=bar.geo_lat.value;
        let long=bar.geo_long.value;
        let telefono="No";
        if(bar.schema_telephone){
            telefono=bar.schema_telephone.value;
        }

        let sirve=bar.om_sirveComida.value;
        var marker=L.marker([lat,long]).addTo(mapa);
        marker.bindPopup(`<h1>${nombre}</h1><p>Teléfono: ${telefono}</p><p>Sirve comida: ${sirve}</p>`);
    }
}).
catch(error=>alert("Se ha producido un error \n"+error.message));