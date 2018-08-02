
// Linking classes from html

var winsCard = document.getElementById("win-count")

var lossCard = document.getElementById("lose-count")

var guessCard = document.getElementById("guess-count")

var trackerCard = document.getElementById("guess-tracker")

// Defining necessary Arrays

var cpuPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userPool = [];

// Defining initial values

var winCount = 0;
var lossCount = 0;
var guessCount = 9;
var guessTracker = "";
var cpuChoice = cpuPool[Math.floor(Math.random() * 25)];

//Display necessary functions.

winsCard.textContent = winCount;
lossCard.textContent = lossCount;
guessCard.textContent = guessCount;

//Create reset function

function reset() {
    userPool = [];
    guessCount = 9;
    guessTracker = "";
    cpuChoice = cpuPool[Math.floor(Math.random() * 25)];

    guessCard.textContent = guessCount;
    trackerCard.textContent = guessTracker;
  }

//Behaviors on keypress

console.log("Cpu Choice: " + cpuChoice)

document.onkeyup = function(event) {

  var keyPressed = event.key;

  console.log("key pressed: " + keyPressed)

  //checks if valid letter
  if (cpuPool.indexOf(keyPressed) != -1) {
    
    //checks if letter has been guessed
    if (userPool.indexOf(keyPressed) === -1) {

      if (keyPressed !== cpuChoice) {

        guessTracker = guessTracker + " " + keyPressed;
        trackerCard.textContent = guessTracker;
        guessCount = guessCount - 1;
        guessCard.textContent = guessCount;
        userPool.push(keyPressed)
      }

      if (guessCount < 1) {
        lossCount = lossCount + 1;
        lossCard.textContent = lossCount;
        reset()
      }

      if (keyPressed === cpuChoice) {

        winCount = winCount + 1;
        winsCard.textContent = winCount;
        reset();
    
      }
    }
  }

}