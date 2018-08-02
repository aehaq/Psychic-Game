
// Linking classes from html

var winsCard = document.getElementById("win-count")

var lossCard = document.getElementById("lose-count")

var guessCard = document.getElementById("guess-count")

var trackerCard = document.getElementById("guess-tracker")

// Defining necessary Arrays

var cpuPool = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userPool = cpuPool;

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
    userPool = cpuPool;
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

    //checks if keyPressed is a valid option

  if (userPool.indexOf(keyPressed) > -1) {

    if (keyPressed === cpuChoice) {

      winCount = winCount + 1;
      winsCard.textContent = winCount;

      reset();
  
    }
    
    if (keyPressed !== cpuChoice) {

      guessTracker = guessTracker + " " + keyPressed;
      trackerCard.textContent = guessTracker;

      guessCount = guessCount - 1;
      guessCard.textContent = guessCount;
    }

    if (guessCount < 1) {
      lossCount = lossCount + 1;
      lossCard.textContent = lossCount;
      reset()
      
    }

  }

}