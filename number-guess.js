// Create a random number between 0-50
var num = Math.round(Math.random() * 50);
// Button
var button = document.getElementById('myButton');

button.onclick=function() {
	var guess = document.getElementById('guess').value;
	console.log("User guess: " + Number(guess));
	console.log("Random Num: " + num);
}

