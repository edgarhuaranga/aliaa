document.getElementById("checkboxes").addEventListener('click', function (event) {
    console.log("=====")
    console.log(event.target);
    console.log("=====")
    if (event.target && event.target.matches("input[type='radio']")) {
        // do something here ...
        console.log(event.target.value);
        sucioLayer.remove();
        palabra = event.target.value;
        sucioLayer = L.geoJSON(postalcodes, {
            filter(feature, layer) {
                console.log("-----------")
                console.log(layer)
                console.log("-----------")
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



const map = L.map('map').setView([37.442, -4.824], 8);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.options.minZoom = 7;
const cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attribution">CARTO</a>';

/*const positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
}).addTo(map);*/


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

    
    // var ele = document.getElementsByName('checkbox-palabra');

    // for (i = 0; i < ele.length; i++) {
    //     if (ele[i].checked)
    //         console.log("Gender: " + ele[i].value);
    // }
    

    iname = feature.properties.name
    console.log("name: " + iname);
    var myTextLabel = L.marker([avgY, avgX], {
        icon: L.divIcon({
            className: 'text-labels '+iname,   // Set class for CSS styling
            html: feature.properties.name,
        }),
        zIndexOffset: 1000     // Make appear above other map features
    });
    
    //myTextLabel.addTo(map);


    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
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


