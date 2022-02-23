
//variables
let map;


//buttons
viewButton('satellite');
viewButton('roadmap');
viewButton('hybrid');
viewButton('terrain');


//functions

function initMap() {
  let mapOptions = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  };

  map = new google.maps.Map(document.getElementById("map"),mapOptions);
}

function viewButton (viewNameString) {
  let button = document.querySelector(`#${viewNameString}`);
  button.addEventListener('click', function() {
    map.setMapTypeId(`${viewNameString}`)
  });
}
