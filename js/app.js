// La funcionalidad de tu proyecto
function initMap() {
  var chile = {lat: -33.45, lng: -70.6667};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: chile
 });
        
  var marker = new google.maps.Marker({
    position: chile,
    map: map
	});
}