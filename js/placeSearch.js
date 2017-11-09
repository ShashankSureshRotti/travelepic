function searchPetrolBunks()
{
	var latlng = new google.maps.LatLng(pos.lat,pos.lng);

	var request = {
		location: latlng,
		radius: '5000',
		types: ['store','gas_station']
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, placeMarkers);
}

function placeMarkers(results,status)
{
	if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      console.log(results[i]);
	      //createMarkers(place);
	    }
	}
	else
		alert(status)
}