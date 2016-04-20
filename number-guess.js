// Button
var submit = document.getElementById('myButton');
// Reset
var reset = document.getElementById('reset');
// Create a random number between 0-50
var num;
// Get input
var guess = document.getElementById('guess');
// Set number of attempts
var attempts = 5;

// Starts a new game
function newGame() {
	num = Math.round(Math.random() * 50);
	guess.placeholder="Make your first guess";
	document.getElementById("output").innerHTML="You have five attempts to guess my number between 1 and 50";
	reset.style.display="none";
}

// Checks if input value is a number
function numCheck() {
	if(isNaN(guess.value)) {
		document.getElementById("output").innerHTML="That's not a number silly.";
	} if(guess.value=="") {
		document.getElementById("output").innerHTML="Nothing there...";
	} else {
		attemptCounter(guess.value);
		guess.value="";
	}
}

// Counts attempts
function attemptCounter() {
	if (attempts > 0) {
		attempts -= 1;
		document.getElementById("output").innerHTML="Guess number: " + guess.value + 
		"<br />You have " + attempts + " attempts left.";
	} if (attempts === 0) {
		attempts -= 1;
		document.getElementById("output").innerHTML="You ran out of attempts.";
		reset.style.display="block";
	} if ( guess.value === num ) {
		document.getElementById("output").innerHTML="You got it!";
	}
}

submit.onclick=function() {
	console.log("User guess: " + Number(guess.value));
	console.log("Random Num: " + num);
	numCheck();
}

reset.onclick=function(){
	newGame();
}

newGame();

