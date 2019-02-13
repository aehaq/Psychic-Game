
// Linking classes from html

var winsCard = document.getElementById("win-count")

var lossCard = document.getElementById("lose-count")

var guessCard = document.getElementById("guess-count")

var trackerCard = document.getElementById("guess-tracker")

var messageCard = document.getElementById("message-box")

// Defining necessary Arrays

var cpuPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userPool = [];

// Defining initial values

var winCount = 0;
var lossCount = 0;
var guessCount = 9;
var guessTracker = "";
var cpuChoice = cpuPool[Math.floor(Math.random() * 25)];

// Prepping Message Prompts

messageCard.textContent = "Welcome! You can guess a letter by typing it on your keyboard. Give it a try!";

winPrompt = "Congratulations, You won this round! Press any key to go again.";
losePrompt = "Sorry, but you are out of guesses! You lose, but you can press any key to go again.";
invalidPrompt = "It seems you've already guessed that letter. Try one you haven't guessed.";
incorrectPrompt = "Sorry, that's not the letter I am thinking of. Guess again!";

//Display necessary functions.

winsCard.textContent = winCount;
lossCard.textContent = lossCount;
guessCard.textContent = guessCount;
trackerCard.textContent = "none";

//Create reset function

function reset() {
    userPool = [];
    guessCount = 9;
    guessTracker = "none";
    cpuChoice = cpuPool[Math.floor(Math.random() * 25)];

    guessCard.textContent = guessCount;
    trackerCard.textContent = guessTracker;
  }

//Behaviors on keypress

document.onkeyup = function(event) {

  var keyPressed = event.key;

  //checks if keypress is valid letter
  if (cpuPool.indexOf(keyPressed) != -1) {
    
    //checks if letter has been guessed
    if (userPool.indexOf(keyPressed) === -1) {

      //If the guess is incorrect
      if (keyPressed !== cpuChoice) {

        if (guessTracker === "none") {
          guessTracker = keyPressed;
        } else {
          guessTracker = guessTracker + " " + keyPressed;
        }
           
        trackerCard.textContent = guessTracker;
        guessCount = guessCount - 1;
        guessCard.textContent = guessCount;
        userPool.push(keyPressed)
        messageCard.textContent = incorrectPrompt;

      }

      //If user is out of guesses
      if (guessCount < 1) {

        lossCount = lossCount + 1;
        lossCard.textContent = lossCount;
        messageCard.textContent = losePrompt;
        reset()

      }

      //If user guessed correctly
      if (keyPressed === cpuChoice) {

        winCount = winCount + 1;
        winsCard.textContent = winCount;
        messageCard.textContent = winPrompt;
        reset();
      
      }
    } else {
      messageCard.textContent = invalidPrompt;
    }
  }

}