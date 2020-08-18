var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("#gradient");
changeBackground();

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

function changeBackground(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

var button = document.getElementById("random");

button.addEventListener("click", randomBackground, false);

function randomBackground(){
	// var colorRGB_1 = randomRGB();
	// var colorRGB_2 = randomRGB(); 
	// body.style.background = "linear-gradient(to right, " 
	// + colorRGB_1 + ", " + colorRGB_2 + ")";
	// h3.textContent = body.style.background + ";";
	color1.value = randomRGB();
	color2.value = randomRGB();
	changeBackground();
}

function randomRGB(){
 // from StackOverFlow
	// return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}
