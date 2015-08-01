/**
 * @author Amy
 */
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key));
};

function isLocalStorageSupported(){
	if (typeof(Storage)!=="undefined" && window['localStorage' != null]){
		return true;
	} else {
		return false;
	}
}

function picChange(evt){
	//bring selected photo in
	//get files captured through input
	var fileInput = evt.target.files;

	//get the file
	//window url
	var windowURL = window.URL || window.webkitURL;
	//picture url
	var picURL= windowURL.createObjectURL(fileInput[0]);	
	
	//get canvas
	var photoCanvas = document.getElementById('capturedPhoto');
	var ctx = photoCanvas.getContext('2d');
	
	//create image
	var photo = new Image();
	
	photo.onload=function(){
	//draw photo into canvas when ready
	ctx.drawImage(photo, 0, 0, 200, 200);
	};
	//load photo into canvas
	photo.src=picURL;
}

	function handleFileSelect(evt) {
   		var files = evt.target.files; // FileList object
   			 		
    	// files is a FileList of File objects. List some properties.
    	//Handles grabbing the name of the file and then storing it in JSON
    	var output = [];
   			for (var i = 0, f; f = files[i]; i++) {
     			output.push("<br>"+ f.name);
     			var dataToStore = JSON.stringify(f.name);
     			localStorage.setItem('nameData',dataToStore);
   				}
   					 
   		document.getElementById('list').innerHTML = output.join('');
  		}
