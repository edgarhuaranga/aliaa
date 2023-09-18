const map = L.map('map').setView([37.442, -4.824], 7);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
const cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(map);


function onEachFeature(feature, layer) {
    let popupContent = `<p><strong>Lugar:</strong> ${feature.properties.name}<br><strong></p>`;

    coordinates = feature.geometry.coordinates[0][0]
    totalX = 0;
    totalY = 0;
    for (x in coordinates) {
        totalX += coordinates[x][0]
        totalY += coordinates[x][1]
    }
    avgX = totalX / coordinates.length;
    avgY = totalY / coordinates.length;

    L.marker([avgY, avgX], {
        icon: L.divIcon({
            className: 'text-labels',  
            html: feature.properties.name,
        }),
        zIndexOffset: 1000
    });

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }
    console.log(popupContent);

    layer.bindPopup(popupContent);
}

const freeBusLayer = L.geoJSON(postalcodes, {
    filter(feature, layer) {
        if (feature.properties.name.startsWith("21")) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            console.log(feature.properties.name)
            return true;
        }
        else
            return true;
    },
    onEachFeature
}).addTo(map);

