/**
 * @author Amy
 */
 	
 function runNewCSV(){	
 	//Delete local Storage data
	localStorage.clear();
		
	//store template CSV in local
	var headerData = 'File name*,Photo title (max 50 characters)*,Keywords (max 500 characters),Date (See instructions for format),"\ Interval (Years | 1, 2, 3, 5, 10, 15)\","\ Latitude , Longitude\",Story ,Use Date (TRUE or FALSE),Date Range? (Y or N),License (See instructions for options),Copyright holder,Author,Original Link  ,Repository or Archive ,Notes';
	var headerData = headerData + '\n';
	
	//Puts into local 			 	    
 	//var localNameData = JSON.parse(localStorage.getItem('nameData'));
  	//var dataToStore = localNameData+", "+XdataToStore+", "+YdataToStore+"\n";				
  	localStorage.setItem('oneFile',headerData);
  					
  	document.getElementById("storeData").disabled = true;
	
	//This will make it all work?
	return true;
  		};