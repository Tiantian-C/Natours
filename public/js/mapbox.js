export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoieW91a25vd3dob2xhbGFsYSIsImEiOiJjbGt4OGgwOWEwcDB6M2xsbGVsdGt3ZjZ5In0.almjgyyEv4quNj6Rlys7EQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/youknowwholalala/clkx91o3n002u01pu8bjncc3j',
    scrollZoom: false,
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
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}<p/>`)
      .addTo(map);

    //Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });

  
}


