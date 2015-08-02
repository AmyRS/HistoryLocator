/**
 * @author Amy
 */

			L.mapbox.accessToken = 'pk.eyJ1IjoiYXJzZ2lzIiwiYSI6IjdmMThhNjU0OWRiYjJkNjBjYTljODk0MDI1NDM1OWViIn0.10Ig1Gc_8WjzqzdtMfWsGA';
			var map = new L.mapbox.map('map', 'mapbox.high-contrast').setView([40,-97], 3);
		 
		 	var myLayer = L.mapbox.featureLayer().addTo(map);
			
			if (navigator.geolocation) {
   	    		 navigator.geolocation.getCurrentPosition(showPosition);
   	 		 	} else {
    	  		  alert("Geolocation is not supported by this browser.");
   			 	}
   			 	
   			 function showPosition(position){
 				xLat = position.coords.latitude;
 				yLong = position.coords.longitude;
 			 
 			   	
  				//Pan and Zoom
  				map.setZoom(15);	
  				map.panTo(new L.LatLng(xLat,yLong));
  				L.marker([xLat,yLong]).addTo(map)
  					.bindPopup(xLat.toString());
  			 }
			var x = document.getElementById("gnss");
			
			
			function storeLocation(){
				var XdataToStore = JSON.stringify(xLat);
 			 	var YdataToStore = JSON.stringify(yLong);
				
  				var g = localStorage.getItem('title');
  				var n = localStorage.getItem('fileName');			
				var dataToStore = n + "," + g +",,,," + '"' + XdataToStore  +","+YdataToStore + '"'+ "\n";
				
				//test oneFile for previous data, add new data to
				if (localStorage.getItem('oneFile')===null){
  					localStorage.setItem('oneFile', dataToStore);
  					}
  				else{
  					var keepData = localStorage.getItem('oneFile');
  					localStorage.setItem('oneFile',keepData + dataToStore);
  				}	
  				document.getElementById("storeData").disabled = true;
  				};	
	