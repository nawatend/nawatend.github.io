//initiate map
//map
let profileLong = 75;
let profileLat = 41;




mapboxgl.accessToken =
  "pk.eyJ1IjoibmF3YW5ndGVuZCIsImEiOiJjam40aXZhN2EwcDNrM3FxeWR1cXpwNDQxIn0.QJHY3Gs8J2UaypqDj77NhA";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/outdoors-v10",
  zoom: 10,
  center: [profileLong, profileLat] // starting position
});