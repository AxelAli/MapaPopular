var map;   
var myOptions ={enableHighAccuracy: true,mapTypeId: google.maps.MapTypeId.ROADMAP,disableDefaultUI: true};
var geocoder= new google.maps.Geocoder();
var Dirrecion;
function IniciarMapa() {
		
        var latlng = new google.maps.LatLng(-34.666667,-58.4);//argentina
        var myOptions ={zoom: 15,center: latlng,mapTypeId: google.maps.MapTypeId.ROADMAP,disableDefaultUI: true};
        map = new google.maps.Map(document.getElementById("map"), myOptions);
		BuscarGeo();
		
    }
function BuscarGeo(){
		if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		var timeout = setTimeout("geolocFail()", 10000);
		clearTimeout(timeout);
		var pos = {lat: position.coords.latitude,lng: position.coords.longitude};
		ActualizarMap(pos,15);
		geocodeLatLng(pos);
		}, 
		
		function() {handleLocationError(true, infoWindow, map.getCenter());
		});
		  } else {handleLocationError(false, infoWindow, map.getCenter());}
		 
		 
		}
function ActualizarMap(coordenada,zoom){
		map.setZoom(zoom);
		map.setCenter(coordenada);	
		}
function AgregarMarker(pos,mapa){
		var marker = new google.maps.Marker({position: pos,map: mapa});
		}
function buscarlugar() {
		
        geocoder = new google.maps.Geocoder();
		var dirrecion = document.getElementById("dirreciontxt").value+" argentina";//sino busca plaza italia en italia o anda a saber donde
		geocoder.geocode({ 'address': dirrecion }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
				//alert(dirrecion);
		ActualizarMap(results[0].geometry.location,15); 
		
            }
            else {
                alert("No se encontro");
            }
        });

}

function geocodeLatLng(latlng) {
	var geocoder= new google.maps.Geocoder();
geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
		  Dirrecion = results[1].formatted_address.replace(', Argentina','')
		  console.log(Dirrecion);
		document.getElementById("dirreciontxt").value = Dirrecion;


      }
    } 
});}
