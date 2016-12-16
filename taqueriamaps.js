var airtable_key = "keyjUyqxvapBphwo4";
var gmaps_key = "AIzaSyCO9Bmu58rNIQbqlT0MxdUtkwKM6wCEDEU";

function initMap() {
        var sf = {lat: 37.7729371, lng: -122.422864};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: sf
        });
        var places = [];
        console.log(restaurant_record);
   $.get(restaurant_record, function(data) {

    console.log(data.records);
    $(data.records).each(function(i, loc){  
      //add latitude/longitude to locations
      places[i] = {lat: parseFloat(loc.fields["Latitude"]), lng: parseFloat(loc.fields["Longitude"])};
  	
      //draw markers onto map
      var marker = new google.maps.Marker({
        position: places[i],
        map: map
      });
      
      //Draw labels onto markers
      infowindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent("<a href=\"detail.html?id=" + loc.id + "\">" + loc.fields["Name"] + "</a>");
          infowindow.open(map, this);
        });
    }); 	 
  });
        /*
        var marker = new google.maps.Marker({
          position: sf,
          map: map
        });
        */
      
  }
  
  
