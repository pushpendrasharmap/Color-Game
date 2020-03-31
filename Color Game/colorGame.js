var numOfSquares = 6;
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;
for(var i = 0;i<squares.length;i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
            h1.style.background = clickedColor;
            reset.textContent = "Play Again";
            for(var i =0;i<squares.length;i++){
            	squares[i].style.background = pickedColor
            }

		}else{
			this.style.background = "#232323";
			message.textContent = "Try Again";
		}
	})
}
reset.addEventListener("click",function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
for(var i = 0;i<squares.length;i++){
	squares[i].style.background = colors[i];	
}
this.textContent = "New Colors";
h1.style.background = "steelblue";
message.textContent = "";
})

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numOfSquares = 3;
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i]
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue"
})
hard.addEventListener("click",function(){
	hard.classList.add("selected");
	easy.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0;i<squares.length;i++){
			squares[i].style.background = colors[i]
			squares[i].style.display = "block";
		
	}
	h1.style.background = "steelblue"
})
function changeColors(color){
	for(var i =0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}
function generateRandomColors(num){
	var colors = [];
	for(var i=0;i<num;i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var col = "rgb(" + r + ", " + g +  ", " + b + ")";
		colors.push(col);

	}
	return colors;
}
