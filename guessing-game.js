/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.
$(document).ready(function(){


console.log("hello world");

var playersGuess;
var winningNumber;
var counter = 0; 

$('#getInput').on('click', function(){
	console.log("button clicked"); 
	playersGuessSubmission(); 
}); 

$('#hint').on('click', function(){
	console.log("hint button clicked"); 
	provideHint(); 
}); 

$('#playAgain').on('click', function(){
	console.log("play button clicked");
	playAgain();

}); 

/* **** Guessing Game Functions **** */

// Generate the Winning Number

function generateWinningNumber(){
	winningNumber = Math.floor(Math.random() * 100); 
	// add code here
}


// Fetch the Players Guess

function playersGuessSubmission(){
	// add code here
	// playerGuess = document.getElementById("playerGuess").value;
	
	if(counter >= 5) {
		$("#message").text("Game Over!"); 
	} else { 
		playerGuess = Number($('#playerGuess').val()); 
		checkGuess(); 
		counter++; 
	}

}

// Determine if the next guess should be a lower or higher number

function lowerOrHigher(){
	// add code here
	var range = 10; 
	var lowerGuess = playerGuess - range;
	var higherGuess = playerGuess + range;  
	if(winningNumber >= lowerGuess && winningNumber <= higherGuess) {
		$('#message').text('You are warm!');
		console.log("test-warm"); 

	} else {
		$('#message').text('You are cold!');
		console.log("test-cold");
	}

}

// Check if the Player's Guess is the winning number 

function checkGuess(){
	// add code here
	if(playerGuess === winningNumber) {
		alert("Congratulations! You won!"); 

	} else {
		lowerOrHigher();

	}
}

// Create a provide hint button that provides additional clues to the "Player"

function provideHint(){
	// add code here
	$('#message').text(winningNumber); 

}

// Allow the "Player" to Play Again

function playAgain(){
	generateWinningNumber();
	counter = 0;
	$('#message').text("New game"); 
}

generateWinningNumber(); 

}); 

/* **** Event Listeners/Handlers ****  */
