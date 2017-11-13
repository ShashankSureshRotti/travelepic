function searchPetrolBunks()
{
	var latlng = new google.maps.LatLng(pos.lat,pos.lng);

	var request1 = {
		location: latlng,
		radius: '5000',
		types: ["parking"]
	};
	
    var request2 = {
		location: latlng,
		radius: '5000',
		types: ["library"]
	};
	
	var request3 = {
		location: latlng,
		radius: '5000',
		types: ["museum"]
	};
	
	var request4 = {
		location: latlng,
		radius: '5000',
		types: ["police"]
	};
	
	var request5 = {
		location: latlng,
		radius: '5000',
		types: ["hindu_temple"]
	};
	
	var request6 = {
		location: latlng,
		radius: '5000',
		types: ["lodging"]
	};
	
	var request7 = {
		location: latlng,
		radius: '5000',
		types: ["shopping"]
	};
	
	var request8 = {
		location: latlng,
		radius: '5000',
		types: ["golf"]
	};
	
	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request1, placeMarkers);
	service.nearbySearch(request2, placeMarkers);
	service.nearbySearch(request3, placeMarkers);	
	service.nearbySearch(request4, placeMarkers);
        service.nearbySearch(request5, placeMarkers);
        service.nearbySearch(request6, placeMarkers);	
	service.nearbySearch(request7, placeMarkers);
        service.nearbySearch(request8, placeMarkers);	
}

function placeMarkers(results,status)
{
	if (status == google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      var place = results[i];
	      console.log(results[i]);
	      createMarkers(place);
	    }
	}
	else
		alert(status)
}

function createMarkers(place){
	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png',
			name: "parking"
          },
		  library: {
            icon: iconBase + 'library_maps.png',
			name: "library"
          },
		  museum: {
            icon: iconBase + 'museum_maps.png',
			name: "museum"
          },
		  police: {
            icon: iconBase + 'police_maps.png',
			name: "police"
          },
		  hindu_temple: {
            icon: iconBase + 'hindu_temple_maps.png',
			name: "hindu_temple"
          },
		  lodging: {
	    icon: iconBase + 'lodging_maps.png',
			name: "lodging"
		  },
		  shopping: {
	    icon: iconBase + 'shopping_maps.png',
			name: "shopping"
		  },
		  golf: {
	    icon: iconBase + 'golf_maps.png',
			name: "golf"
		  }
        };

	var iList=false; 
	var size = 0, key;
    for (key in icons) {
        if (icons.hasOwnProperty(key)) size++;
    }
	for(key in icons){
		if(place.types[0]==icons[key].name){
			iList=true;
			break;
		}
	}
	if(iList)
	var marker = new google.maps.Marker({
      map: map,
	  icon: icons[place.types[0]].icon,
      position: place.geometry.location
    });
}
