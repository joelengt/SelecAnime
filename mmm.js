var geo= navigator.geolocation;
var options={};
function geo_ok(position)
{
	var lat=position.coords.latitude;
	var lon=position.coords.longitude;
	var maps= new Image();
	maps.src="http://maps.googleapis.com/maps/api/staticmap?zoom=15&size=450x400&sensor=false&center="+lat+","+lon;

	$('#geo').append(maps);
}
function geo_error()
{
	console.log("Error, not find your position");
}

geo.getCurrentPosition(geo_ok,geo_error,options);

