
    var map;
    var geocoder;

    function InitializeMap() {
		
        var latlng = new google.maps.LatLng(-34.666667,-58.4);//argentina
        var myOptions =
        {
            zoom: 4,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);
		
		

    }
	function BuscarGeo(){
		if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
	  
	  var myOptions =
        {
            zoom: 15,
            center: pos,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map"), myOptions);
		//var marker = new google.maps.Marker({position: {lat: -34.625971, lng:-58.425571},map: map});
      map.setPosition(pos);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
   
    handleLocationError(false, infoWindow, map.getCenter());
  }
}



	
    function buscarlugar() {
        geocoder = new google.maps.Geocoder();
        InitializeMap();

        var dirrecion = document.getElementById("dirreciontxt").value+" argentina";
        geocoder.geocode({ 'address': dirrecion }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
				var myOptions =
        {
            zoom: 15,
            center: results[0].geometry.location,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true
        };
		
        map = new google.maps.Map(document.getElementById("map"), myOptions);
		

            }
            else {
                alert("No se encontro");
            }
        });

    }

