
var myImage =0;


function whichItem (myCLick){

var clickMessage = "fill content goes here";

switch (myCLick) {

	case 0:
		clickMessage = "Killing Floor 2 Analysis <br><br> An analysis of Killing Floor 2 that focuses on the immersion in the game world through animation, sound design, and gameplay mechanics. <br><br> <a href='Papers/Killing Floor 2.pdf'> Click here </a> to open this article. <br> <object data='Papers/Killing Floor 2.pdf' width='950' height='860' type='application/pdf'><embed src='Papers/Killing Floor 2.pdf' type='application/pdf' /> </object>" ;
		myImage=0;
		
		break;
	case 1:
		clickMessage = "Superbrothers: Sword & Sworcery EP <br><br> An analysis of Superbrothers: Sword & Sworcery EP refers to the art of the game and how it impacts mood and gameplay <br><br> <a href='Papers/casestudy1.pdf'> Click here </a> to open this article. <br> <a href='Papers/DesignDoc1.pdf'> <object data='Papers/casestudy1.pdf' width='950' height='820' type='application/pdf'><embed src='Papers/casestudy1.pdf' type='application/pdf' /> </object>";
		myImage=1;
		
		break;
	case 2:
		clickMessage = "This piece was writting for a psychology course. This paper identifies how children can develop violent tendencies by playing such video games while they are still developing psychologically and psychosocially. <br><br> <a href='Papers/psych.pdf'> Click here </a> to open this article. <br> <object data='Papers/psych.pdf' width='950' height='900' type='application/pdf'<embed src='Papers/psych.pdf' type='application/pdf' /> </object>";
		break;

	case 3:
		clickMessage = "Alan Wake Analysis <br><br> An analysis of Alan Wake's light mechanics, and how it impacts gameplay to make a unique third-person shooter. <br><br> <a href='Papers/Alan Wake.pdf'> Click here </a> to open this article. <br> <object data='Papers/Alan Wake.pdf' width='950' height='900' type='application/pdf' <embed src='Papers/Alan Wake.pdf' type='application/pdf' /> </object>";
		break;
	case 4:
		clickMessage = "The Forest Analysis <br><br> An analysis of the feelings that The Forest instills in a player. Specifically, I focused on the fear of the unknown and the way it impacts how the player plays the game.  <br><br><a href='Papers/The Forest.pdf'> Click here </a> to open this article <br> <object data='Papers/The Forest.pdf' width='950' height='875' type='application/pdf' <embed src='Papers/The Forest.pdf' type='application/pdf' /> </object>";
}


	replaceMe.innerHTML = clickMessage;
	caption.innerHTML = captions[myImage];
	
	var myPhoto = document.getElementById("imageTarget");
myPhoto.src=images[myImage];
console.log (myImage);
}

/*function playVideo(myVid) {
		
	var video = document.getElementById('myVideo');
    var sources = video.getElementsByTagName('source');
    sources[0].src = videos[myVid];
    
    
    video.load();
	console.log("called video player");
	} */