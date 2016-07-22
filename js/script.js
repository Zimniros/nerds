document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelectorAll('#map').length > 0) {
    if (document.querySelector('html').lang) {
      lang = document.querySelector('html').lang
    } else {
      lang = 'en';
    }

    var js_file = document.createElement('script');
    js_file.type = 'text/javascript';
    js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyDkE4aHc2e-pcrU1hyTseGaqPWMOnXefjg&language=' + lang;
    document.getElementsByTagName('head')[0].appendChild(js_file);
  }

});

var map;

function initMap() {

  var coordinatesMarker = {
    lat: 59.938646,
    lng: 30.323091
  }

  var coordinatesCenter = {
    lat: 59.939106,
    lng: 30.319883
  }

  map = new google.maps.Map(document.getElementById('map'), {
    center: coordinatesCenter,
    zoom: 17
  });

  var image = {
    url: 'img/map-marker.png',
    size: new google.maps.Size(231, 190),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(60, 190),

  };

  var marker = new google.maps.Marker({
    position: coordinatesMarker,
    map: map,
    icon: image
  });
}
