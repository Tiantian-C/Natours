console.log('Hello from the client side!');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoieW91a25vd3dob2xhbGFsYSIsImEiOiJjbGt4OGgwOWEwcDB6M2xsbGVsdGt3ZjZ5In0.almjgyyEv4quNj6Rlys7EQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/youknowwholalala/clkx91o3n002u01pu8bjncc3j',
  center: [-118.113491, 34.111745],
  zoom: 10,
  interactive: false,
});


const bounds = new mapboxgl.LatL
