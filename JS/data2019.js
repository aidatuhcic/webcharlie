mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuYXNhc2hpIiwiYSI6ImNsMjliODl4ZDBmN3EzZHJ0MTRiOXE2bmQifQ.cjzmlIr7bLvl4_s_7oY0Aw';
const map = new mapboxgl.Map({
container: 'map1', // container ID
style: 'mapbox://styles/mapbox/satellite-v9', // style URL
zoom: 7, // starting zoom
center: [43.6532, -79.3832] // starting center
});
 
map.on('load', () => {
map.addSource('data2019', {
type: 'geojson',
// Use a URL for the value for the `data` property.
data: 'data/data2019.geojson'
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

