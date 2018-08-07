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

function panHome(){
    view.animate({
        center: ourLoc,
        duration: 2000
    });
} 

    



function panToLocation(){
    var countryName = document.getElementById("country-name").value;

    if(countryName ===""){
    alert("You didn't enter a country name!");
    return;
    }
    var lon = 0.0;
    var lat = 0.0;
    var location = ol.proj.fromLonLat([lon,lat]);

    //
    var query = "https://restcountries.eu/rest/v2/name/"+countryName;
    query = query.replace(/ /g, "%20")
    alert(query);
    //
    var countryRequest = new XMLHttpRequest();
    countryRequest.open('GET', query, false);

    countryRequest.send();


    view.animate({
        center:location,
        duration:2000
    });
}

