mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuYXNhc2hpIiwiYSI6ImNsMXhvNnpmeTA0b2EzY281NHd3eWp2bm8ifQ.FJ6hyKEqn4EnsT69WRMVsA';
const map = new mapboxgl.Map({
container: 'map3', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 7, // starting zoom
center: [43.6532, -79.3832] // starting center
});
 
map.on('load', () => {
map.addSource('data2017', {
type: 'geojson',
// Use a URL for the value for the `data` property.
data: 'data/data2017.geojson'
});
 
map.addLayer({
'id': 'parks-layer',
'type': 'polygon',
'source': 'data/parks.csv',
'paint': {
'polygon-stroke-width': 2,
'polygon-color': 'green',
'polygon-stroke-color': 'green'
}
});
});

