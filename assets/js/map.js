//variables
let map;

// MapType

class MyMap {
  constructor(tileSize) {
    this.tileSize = tileSize;
    this.maxZoom = 18;
    this.name = 'MyMap';
    this.alt = 'O mapa não carregou'
  }

  getTile(coord, zoom, ownerDocument) {
    let div = ownerDocument.createElement('div');
    div.innerHTML = 'Hello Maps!';
    div.style.width = this.tileSize.width+'px';
    div.style.height = this.tileSize.width+'px';
    div.style.fontSize = '10px';
    div.style.backgroundColor = '#ddd';
    div.style.borderStyle = 'solid';
    div.style.borderWidth = '1px';
    div.style.borderColor = '#333';
    return div;
  }
}

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
    mapTypeId: 'MyMap',
    mapTypeControlOptions: {
      MapTypeIds: ['roadmap', 'MyMap']
    }
  };

  map = new google.maps.Map(document.getElementById("map"),mapOptions);

  map.mapTypes.set('MyMap', new MyMap(new google.maps.Size(256, 256)))
}

function viewButton (viewNameString) {
  let button = document.querySelector(`#${viewNameString}`);
  button.addEventListener('click', function() {
    map.setMapTypeId(`${viewNameString}`)
  });
}

function showMap (mapKey) {
  const mapScript = document.getElementById('mapScript');
  mapScript.src = "https://maps.googleapis.com/maps/api/js?key="+mapKey+"&callback=initMap";
  mapScript.defer = true;
  mapScript.async = true;
}