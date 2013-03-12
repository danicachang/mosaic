var MASAIC_WIDTH = 630;
var MASAIC_HEIGHT = 320;

var canvas=document.getElementById("myCanvas");
canvas.width = MASAIC_WIDTH;
canvas.height = MASAIC_HEIGHT;

var context=canvas.getContext("2d");
var sources = {
  ring1: 'images/ring1.jpg',
  ring7: 'images/ring7.jpg'
};

loadImages(sources, function(images) {
	context.drawImage(images.ring1, 10, 10, 300, 300);
	context.drawImage(images.ring7, 320, 10, 300, 300);
});

  function loadImages(sources, callback) {
	var images = {};
	var loadedImages = 0;
	var numImages = 0;
	// get num of sources
	for(var src in sources) {
	  numImages++;
	}
	for(var src in sources) {
	  images[src] = new Image();
	  images[src].onload = function() {
		if(++loadedImages >= numImages) {
		  callback(images);
		}
	  };
	  images[src].src = sources[src];
	}
  }
  
function putImage()
{
  var canvas = document.getElementById("myCanvas");        
  if (canvas.getContext) {
     var context = canvas.getContext("2d");                
     var myImage = canvas.toDataURL("image/png");      
  }
  var imageElement = document.getElementById("MyPix");  
  imageElement.src = myImage;                           

}