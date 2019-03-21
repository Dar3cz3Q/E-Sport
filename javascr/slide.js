	var i = 0; 			// Start Point
	var images = [];	// Images Array
	var time = 3000;	// Time Between Switch
	 
	// Image List
	images[0] = "img/esport.png";
	images[1] = "img/esport.v2.png";
	images[2] = "img/esport.v3.png";
	images[3] = "img/esport.v4.png";
	images[4] = "img/esport.v5.png";

	// Change Image
	function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
	}

	// Run function when page loads
	window.onload=changeImg;