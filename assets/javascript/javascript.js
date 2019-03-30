  // Creates an array that lists out all of the options.
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  // , "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z
  
  // Creating variables to hold the number of wins, losses, and ties. They start at 0.
  var wins = 0;
  var losses = 0;
  var guessesLeft = 8;

  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  console.log(directionsText);
  var userChoiceText = document.getElementById("userchoice-text");

  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var numGuesses = document.getElementById("guesses-left");

  // computer guesses a random letter from the array
  var computerGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Computer Guess " + computerGuess);

  function resetGame() {
    guessesLeft = 8;
  }
  // user guesses a letter
  document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log("User Guess " + userGuess);

    // winning condition
    if (userGuess === computerGuess) {
      guessesLeft--;
      console.log("correct");
      wins++;
      alert("You Win!");
      resetGame();
    } else {
      guessesLeft--;
      console.log("incorrect");
    }

   

    if (guessesLeft === 0) {
      losses++;
      // lossesText.textContent = "losses: " + losses;
      alert("You Lose!");
      resetGame();
      
      //  document.location.reload();
      // reset var guessesLeft to 3
      // numGuesses.onkeyup("click" , function() {
      //   guessReset();
    }
    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + userGuess;

    winsText.textContent = "wins: " + wins;
    numGuesses.textContent = "Guesses Left: " + guessesLeft;
    lossesText.textContent = "losses: " + losses;

    // somehow end this game and reset variables to what they were at the start of the game
  };