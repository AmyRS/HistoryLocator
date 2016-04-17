/**
 * @author Amy
 */

		 L.mapbox.accessToken = 'pk.eyJ1IjoiYXJzZ2lzIiwiYSI6IjdmMThhNjU0OWRiYjJkNjBjYTljODk0MDI1NDM1OWViIn0.10Ig1Gc_8WjzqzdtMfWsGA';
		 var geolocate = document.getElementById('geolocate');		 
		 var map = new L.mapbox.map('map', 'mapbox.high-contrast').setView([40,-97], 3);
		 
		 var myLayer = L.mapbox.featureLayer().addTo(map);
		 var output = document.getElementById('output');

		 var geocoder = new google.maps.Geocoder();
   			 
   		 function googleGeocoding(text, callResponse){
			geocoder.geocode({address: text}, callResponse);}

			function filterJSONCall(rawjson){
				var json = {},
				key, loc, disp = [];

				for(var i in rawjson){
				key = rawjson[i].formatted_address;
				loc = L.latLng( rawjson[i].geometry.location.lat(), rawjson[i].geometry.location.lng() );
				json[ key ]= loc;}	//key,value format
				return json;
				}
					
				map.addControl( new L.Control.Search({
			    callData: googleGeocoding,
			    filterJSON: filterJSONCall,
			    markerLocation: false, 
			    autoType: false,
			    autoCollapse: true,
			    minLength: 2,
			    zoom: 10
		    	})
		    	);
						
			function onMapClick(e) {
    				m = new L.marker(e.latlng,
    				{draggable:true})
    				.addTo(map);
    				result = m.getLatLng();
    				console.log(result);
    				
    				m.on('dragend', function(event) {
    				m = event.target;  // you could also simply access the marker through the closure
    				result = m.getLatLng();  // but using the passed event is cleaner
    				console.log(result);
					});
				;}
			map.once('click', onMapClick);
			
		function storeLocation(){
 			mx = m.getLatLng();	 	    
 			var XdataToStore = JSON.stringify(mx.lat);
 			var YdataToStore = JSON.stringify(mx.lng);
 			 	    
 			//var localNameData = JSON.parse(localStorage.getItem('nameData'));
  			//var dataToStore = name+","+fileName+""+XdataToStore+", "+YdataToStore+"\n";	
  			//var headerData = 'File name*,Photo title (max 50 characters)*,Keywords (max 500 characters),Date (See instructions for format),"\ Interval (Years | 1, 2, 3, 5, 10, 15)\","\ Latitude , Longitude\",Story ,Use Date (TRUE or FALSE),Date Range? (Y or N),Licence (See instructions for options),Copyright holder,Author,Original Link  ,Repository or Archive ,Notes';
			//var headerData = headerData + '\n';
	
  			var g = localStorage.getItem('title');
  			var n = localStorage.getItem('fileName');
  			var dataToStore = n + "," + g +",,,," + '"' + XdataToStore  +","+YdataToStore + '"'+ "\n";
			//var dataToStore = dataToStore + '\n';
		
			//test oneFile for previous data, add new data to
			if (localStorage.getItem('oneFile')===null){
  				localStorage.setItem('oneFile', dataToStore);
  				}
  			else{
  				var keepData = localStorage.getItem('oneFile');
  				localStorage.setItem('oneFile',keepData + dataToStore);
  				}
			$("#storeData").addClass("disabled");
				
  				};	
		
		
	