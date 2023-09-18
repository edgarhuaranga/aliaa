document.getElementById("checkboxes").addEventListener('click', function (event) {
    if (event.target && event.target.matches("input[type='radio']")) {
        // do something here ...
        console.log(event.target.value);
        sucioLayer.remove();
        palabra = event.target.value;
        sucioLayer = L.geoJSON(postalcodes, {
            filter(feature, layer) {
                if (feature.properties[palabra].presence) {
                    return true;
                }
                else
                    return true;
            },
            style: function (feature) {
                if (feature.properties[palabra].presence)
                    return {
                        color: 'blue',
                        fillColor: 'blue',
                        weight: 1
                    };
                else
                    return {
                        color: 'gray',
                        fillColor: 'gray',
                        weight: 1
                    }
            },
            onEachFeature
        }).addTo(map);
    }
});



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

    layer.bindPopup(popupContent);
}

function createData() {
    console.log(typeof postalcodes);
    Object.entries(postalcodes.features).map(entry => {
        let key = entry[0];
        console.log(postalcodes.features[key].properties);
    });
}

let sucioLayer = L.geoJSON(postalcodes, {
    filter(feature, layer) {
        if (feature.properties.sucio.presence) {
            return true;
        }
        else
            return WebTransportDatagramDuplexStream;
    },
    style: function (feature) {
        console.log(feature);
        if (feature.properties.sucio.presence)
            return {
                color: 'blue',
                fillColor: 'blue',
                weight: 1
            };
        else
            return {
                color: 'gray',
                fillColor: 'gray',
                weight: 1
            }
    },
    onEachFeature
}).addTo(map);


