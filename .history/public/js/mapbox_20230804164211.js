console.log('Hello from the client side!');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations); 

<div id='map' style='width: 400px; height: 300px;'></div>
<script>
  mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });
</script>
