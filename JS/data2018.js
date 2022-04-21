mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuYXNhc2hpIiwiYSI6ImNsMXhvNnpmeTA0b2EzY281NHd3eWp2bm8ifQ.FJ6hyKEqn4EnsT69WRMVsA';
const map = new mapboxgl.Map({
container: 'map2', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 7, // starting zoom
center: [43.6532, -79.3832] // starting center
});
 
map.on('load', () => {
map.addSource('earthquakes', {
type: 'geojson',
// Use a URL for the value for the `data` property.
data: 'data2018.geojson'
});
 
map.addLayer({
'id': 'earthquakes-layer',
'type': 'circle',
'source': 'earthquakes',
'paint': {
'circle-radius': 8,
'circle-stroke-width': 2,
'circle-color': 'red',
'circle-stroke-color': 'white'
}
});
});
