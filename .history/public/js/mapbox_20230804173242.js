console.log('Hello from the client side!');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
//console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoieW91a25vd3dob2xhbGFsYSIsImEiOiJjbGt4OGgwOWEwcDB6M2xsbGVsdGt3ZjZ5In0.almjgyyEv4quNj6Rlys7EQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/youknowwholalala/clkx91o3n002u01pu8bjncc3j',
  center: [-118.113491, 34.111745],
  zoom: 10,
  interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  //Create maker
  const el = document.createElement('div');
  el.className = 'marker';

  //Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  //Add popup
  new mapboxgl.Popup().setLngLat(loc.coordinates).set;

  //Extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 200,
    left: 100,
    right: 100,
  },
});
