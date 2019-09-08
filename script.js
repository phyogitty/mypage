var rotateFactor1 = 0;
var rotateFactor2 = 0;
function displayUCB() {
	var berk = document.getElementById("ucb");
	if (berk.style.display === "none") {
        berk.style.display = "block";
    } else {
        berk.style.display = "none";
    }
    rotateFactor1 += 1;
    upsideDown("white-down1", rotateFactor1);
}

function displayCCSF() {
	var ccsf = document.getElementById("ccsf");
	if (ccsf.style.display === "none") {
        ccsf.style.display = "block";
    } else {
        ccsf.style.display = "none";
    }
    rotateFactor2 += 1;
    upsideDown("white-down2", rotateFactor2);
}




function upsideDown(which, factor) {
	
	// var degree = (factor * 180) % 360;
	var image =document.getElementById(which);
    if (factor % 2 === 1) {
    	image.src = "images/white-down copy.png";
    } else {
    	image.src = "images/white-down.png";
    }
	// imgage.setAttribute("style",'transform:rotate(${degree}deg)');

}

// For album
var album_content = document.getElementById("box");
var images = ["wecode1.jpg", "wecode2.jpg", "wecode3.jpg", "wecode4.jpg"];
var i = images.length;
var count = document.getElementById("count");
function nextImage() {
	if (i < images.length) {
		i = i + 1;
	} else {
		i = 1;
	}

	album_content.innerHTML = "<img id=\"album-image\" src=\"images/" + images[i-1] + "\" alt=\"image\">";
		var img = document.getElementById("album-image");
    img.style.animation = "animateright 0.7s";
    count.innerHTML = i + " / " + images.length;
}

function prevImage() {
	if (i < images.length+1 && i > 1) {
       	i = i - 1;
    } else {
    	i = images.length;
    }
    
    album_content.innerHTML = "<img id=\"album-image\" src=\"images/" + images[i-1] + "\" alt=\"image\">";
    var img = document.getElementById("album-image");
    img.style.animation = "animateleft 0.7s";
    count.innerHTML = i + " / " + images.length;
}


var myIndex = 0;
autoShow();


function autoShow() {
  var i;
  var x = document.getElementsByClassName("display-row");
  var currDot = document.getElementsByClassName("dot");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
    currDot[i].style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  }

  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "flex";  
  
  currDot[myIndex-1].style.backgroundColor = "white";
  setTimeout(autoShow, 4000); // Change image every 2 seconds
}



