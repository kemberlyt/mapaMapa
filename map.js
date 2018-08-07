//create variable for our map
//write a function that initializes our map
// we're going to run that function 


var ourLoc;
var view;
var map;


function init (){
    ourLoc = ol.proj.fromLonLat([-73.98591909999999,40.7594997]);

    view = new ol.View({
        center: ourLoc,
        zoom: 18
    });

    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],

        loadTilesWhileAnimating: true,
        view:view
    });
}

document.addEventListener("DOMContentLoaded", function (e){
    init();
    
    });