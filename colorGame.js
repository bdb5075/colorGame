var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var buttonReset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

for(var i=0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();

	});
}

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	buttonReset.textContent = "New Colors";
	message.textContent = "";

	for(var i=0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}

	h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	buttonReset.textContent = "New Colors";
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor(colors);
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	buttonReset.textContent = "New Colors";
});
*/

buttonReset.addEventListener("click", function() {
	reset();
})

for(var i=0; i<squares.length; i++) {
	//assign color to square
	squares[i].style.backgroundColor = colors[i];

	//add click listener to square
	squares[i].addEventListener("click", function() {
		//grab color of square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			changeColors(clickedColor);
			message.textContent = "Correct!";
			h1.style.backgroundColor = pickedColor
			buttonReset.textContent = "Play again?";
		} else {
			message.textContent = "Try again";
			this.style.backgroundColor = "#232323";
		}

	});
}

function changeColors(color) {
	for (var i=0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
};

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];

	for (var i=0; i<num; i++) {
		arr.push(randomColors())
	}
	return arr;
}

function randomColors() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}