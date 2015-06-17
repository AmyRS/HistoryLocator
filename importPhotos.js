/**
 * @author Amy
 */
function picChange(evt){
	//bring selected photo in
	//get files captured through input
	var fileInput = evt.target.files;
	if(fileInput.length>0){
		//get the file
		//window url
		var windowURL = window.URL || window.webkitURL;
		//picture url
		var picURL= windowURL.createObjectURL(fileInput[0]);}
	
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
