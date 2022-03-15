// Variables
let map;

// Buttons
viewButton('satellite');
viewButton('roadmap');
viewButton('hybrid');
viewButton('terrain');

function viewButton (viewNameString) {
  let button = document.querySelector(`#${viewNameString}`);
  button.addEventListener('click', function() {
    map.setMapTypeId(`${viewNameString}`);
  });
}

// Main function

function initMap() {
  let mapOptions = {
    center: { lat: 40.740, lng: -74.18 },
    zoom: 13
  };

  map = new google.maps.Map(document.getElementById("map"),mapOptions);

  const imageBounds = {
    north: 40.773941,
    south: 40.712216,
    east: -74.12544,
    west: -74.22655,
  };

  const historicalOverlay = new google.maps.GroundOverlay(
    "https://storage.googleapis.com/geo-devrel-public-buckets/newark_nj_1922-661x516.jpeg",
    imageBounds, {
      map: map,
      opacity: 1,
      clickable: true
    });

  //historicalOverlay.setMap(map);
  historicalOverlay.addListener('click', function (e) {
    alert('Clicked');
  });
}

// Shows script map api key

function showMap (mapKey) {
  const mapScript = document.getElementById('mapScript');
  mapScript.src = "https://maps.googleapis.com/maps/api/js?key="+mapKey+"&callback=initMap";
  mapScript.defer = true;
  mapScript.async = true;
}

