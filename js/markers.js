// Work Markers 
    L.mapbox.markerLayer({ type: 'Feature', 
    geometry: { 'type': 'Point', 'coordinates': [-94.60050908803947, 38.964248024548866] },
    properties: {
        'title': 'Geospatial Coordinator',
        'marker-size': 'large',
        'marker-color': '#f86767', // Red
        'marker-symbol': 'commercial' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-77.03838555077661, 38.906047471474984] },
    properties: {
        'title': 'Graduate Student Intern',
        'marker-size': 'large',
        'marker-color': '#f86767', // Red
        'marker-symbol': 'commercial' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-118.15131627590031, 34.14704875632763] },
    properties: {
        'title': 'Geospatial Intelligence Analyst',
        'marker-size': 'large',
        'marker-color': '#f86767', // Red
        'marker-symbol': 'commercial' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-118.60329166494263, 34.18997400323588] },
    properties: {
        'title': 'Genius (Technician)',
        'marker-size': 'large',
        'marker-color': '#f86767', // Red
        'marker-symbol': 'commercial' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-74.09575570022795, 40.30454309389716] },
    properties: {
        'title': 'Remote Sensing Coordinator',
        'marker-size': 'large',
        'marker-color': '#f86767', // Red
        'marker-symbol': 'commercial' }}).addTo(map);

// College Markers 
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-117.26091416622312, 34.05371514158555] },
    properties: {
        'title': 'Loma Linda University',
        'description': 'Masters of Global Health (MPH)',
        'marker-size': 'large',
        'marker-color': '#339966', // Green
        'marker-symbol': 'college' }}).addTo(map);
    L.mapbox.markerLayer({
    type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-117.42573738098143, 33.92824549720419] }, 
    properties: {
        'title': 'California Baptist University',
        'description': 'Bachelors of Applied Theology',
        'marker-size': 'large',
        'marker-color': '#339966', // Green
        'marker-symbol': 'college' }}).addTo(map);

// Volunteer Markers
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-238.9856, 14.56232] },
    properties: {
        'title': 'Rural Development Program',
        'description': 'Loma Linda University',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [32.650228792987576, -18.987309490031073] }, // Coordinates are wrong
    properties: {
        'title': 'Rural Orphanage/Clinic',
        'description': 'Volunteer',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-89.9602934107422, 29.942804338982693] },
    properties: {
        'title': 'Domestic Service Project - New Orleans',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-79.56557381546236, 8.96970416215249] },
    properties: {
        'title': 'Crew Staff',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);

// Other Markers
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-85.84074862392727, 10.324805855296699] },
    properties: {
        'title': 'Surfing Trip',
        'marker-size': 'large',
        'marker-color': '#f1f075', // Yellow
        'marker-symbol': 'pitch' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [37.98363136718436, 23.724580444335942] },
    properties: {
        'title': 'International Service Project',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-117.05203555476321, 32.522665809508965] },
    properties: {
        'title': 'Domestic Service Project',
        'description': 'Mexico',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);
    L.mapbox.markerLayer({ type: 'Feature',
    geometry: { 'type': 'Point', coordinates: [-122.45902443945312, 37.76959774425483] },
    properties: {
        'title': 'Domestic Service Project',
        'description': 'San Francisco',
        'marker-size': 'large',
        'marker-color': '#3ca0d3', // Blue
        'marker-symbol': 'hospital' }}).addTo(map);