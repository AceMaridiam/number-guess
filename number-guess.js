// Button
var button = document.getElementById('myButton');
// Create a random number between 0-50
var num;
// Get input
var guess = document.getElementById('guess');
// Set number of attempts
var attempts = 5;

function newGame() {
	// Create a random number between 0-50
	num = Math.round(Math.random() * 50);
	guess.placeholder="Make your first guess";
	document.getElementById("output").innerHTML="You have five attempts to guess my number between 1 and 50";
}

function numCheck() {
	if(isNaN(guess.value)) {
		document.getElementById("output").innerHTML="That's not a number silly.";
	} if (attempts > 0) {
		attempts -= 1;
		document.getElementById("output").innerHTML="Guess number: " + guess.value + 
		"<br />You have " + attempts + " attempts left.";
	} if (attempts === 0) {
		attempts -= 1;
		document.getElementById("output").innerHTML="You ran out of attempts. <br /><button>Try Again?</button>";
		
	}
	guess.value="";
}

button.onclick=function() {
	console.log("User guess: " + Number(guess.value));
	console.log("Random Num: " + num);
	numCheck();
}

newGame();

