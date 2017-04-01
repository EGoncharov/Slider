var btnPrev = document.querySelector(".prev");
var btnNext = document.querySelector(".next");

var img = document.querySelectorAll("img");
var i = 0;

btnPrev.onclick = function() {
	img[i].className="";
	i--;
	if(i<0) {
		i = img.length - 1;
	}
	img[i].className= "show";
};
btnNext.onclick = function() {
	img[i].className="";
	i++;
	if(i>=img.length) {
		i=0;
	}
	img[i].className= "show";
};