/**
 * @author Amy
 */
  				function storeLocation(){
		      	    //Local Storage add X & Y to the name and store
 			 	    var m = marker.getLatLng();
    				//coordinates.innerHTML = 'Latitude: ' + m.lat + '<br />Longitude: ' + m.lng;
 			 	    
 			 	    var XdataToStore = JSON.stringify(m.lat);
 			 	    var YdataToStore = JSON.stringify(m.lng);
 			 	    
 			 	    var localNameData = JSON.parse(localStorage.getItem('nameData'));
  			 	    var dataToStore = localNameData+", "+XdataToStore+", "+YdataToStore+"\n";				
		    	    //test oneFile for previous data, add new data to
				    if (localStorage.getItem('oneFile')===null){
  			 	    	localStorage.setItem('oneFile', dataToStore);
  				    }else{
  				    	var keepData = localStorage.getItem('oneFile');
  				    	localStorage.setItem('oneFile',keepData+dataToStore);
  				    }	}