var  wordBank=['REDSKINS', 'COWBOYS', 'GIANTS', 'FOOTBALL', 'BRONCOS', 'PACKERS',
'SEAHAWKS', 'EAGLES', 'FALCONS', 'PANTHERS', 'BEARS', 'LIONS', 'SAINTS', 'CARDINALS',
'RAMS', 'BUCCANEERS'];
var answerArray = [];
//var remainingLetters = word.length;
var  guessesAllow = 20;
var incorrectGuess = [];
var  correctGuess = [];
var  totalGuesses;
//var blanksAndSuccesses = [];
var words = "";
var countWins = 0;
var countLosses = 0;
var blankSpaces = 0;
var lettersInWord = [];


//****HOW DO WE DO THIS**
//Create words arrayy
//choose woods randomly
//create the number of underscores based on the word length
//take user input of guesses
///check if the guesses are correct
//if correct put in the correctGuess array
//if wrong put in the incorrectGuess array

function generateWord (){

  guessesAllow = 20;
  //pick a word randomly from word bank
  words = wordBank[Math.floor(Math.random() * wordBank.length)];

  console.log(words);

  //Break the word out in letters
    lettersInWord = words.split("");

  //records the number of letters
    blankSpaces = lettersInWord.length;

    console.log(words);
    /*set the blanks to zero for each round later in the code the
    blank will be set based on the number of letters in the word*/
    answerArray = [];

    /*this array will capture all of the incorrect guesses pushed to it in the code
    this particular line is reseting the incorrectGuess to 0 for each round*/
    incorrectGuess = [];


  //answerArray = [];

  //This will add an underscrore for each of the letters in the word
  for (var i = 0; i < words.length; i++) {
  // answerArray[i] = " _ ";
  answerArray.push("_");
  }

  //Test to make sure the underscroes matches the number of letters in the word
  console.log(answerArray);

  /*this line get the 'answer' id and the innerHTML places the answerArray
  in the DOM where the answer id is being called. The join('') simply removes the
  comma from the underscroes in the answerArray*/
  document.getElementById('answer').innerHTML = answerArray.join('');

  //check to see correct underscores are being displayed
  console.log(document.getElementById('answer'))

  /*in the DOM this will display 20 as the number of guesses allowed initially and
  on game reset*/

  console.log(guessesAllow);
  document.getElementById("guesses-allow").innerHTML = guessesAllow;

  /*this line will display in the DOM the number of blanks/underscores based off
  the random word selected*/
  document.getElementById("underscore-blanks").innerHTML = answerArray.join(" ");

  //this sets the incorrectGuess back to zero/0
  document.getElementById("incorrect-guess").innerHTML = incorrectGuess.join(" ");
}





function letterCheck(userInput) {

  //sets the lettersInWord bolean to false...this will toggle between true and false
   lettersInWord = false;

  //checks the word held in the Words variable to make sure the contents equal (===)
  //an actual letter
  for (var i = 0; i < blankSpaces; i++) {

    if (words[i] === userInput) {

    //if letters exist in the word from wordBank --> then change the bolean established
    //earlier to true

      lettersInWord = true;
console.log(lettersInWord);
  }
}

  //Now time to replace the underscore with the correct letter in the correct space
  if (lettersInWord) {

    //create a for loop that will loop through the word
    for (var j = 0; j < blankSpaces; j++) {

      //enter the letter into the underscore
      if (words[j] === userInput) {

    //here is where I need to rewrite so I understand...this is replaces the
    //underscores with the letters in the correct order.

    answerArray[j] = userInput;
    }
}

// Test to see if the blank spaces are being replaced
    console.log(answerArray);
  }

  //if the letter is not in the word we need to push it to an array so we can
  //use later to subtract from the remaining guesses

  else {

           incorrectGuess.push(userInput);

    //this line of code will subtract the number of guesses from the 20 established in the
    //guessesAllow variable
    guessesAllow--;
    }

  }

function  Completeround() {

  // display the status of the wins/losses for testing
console.log("WinCount: " + countWins + " | LossCount: " + countLosses + " | NumGuesses: " + guessesAllow);

//interact with the DOM by innserting id's using the innerHTML function
document.getElementById("guesses-allow").innerHTML = guessesAllow;

// This will print the array of guesses and blanks onto the page.
document.getElementById("underscore-blanks").innerHTML = answerArray.join(" ");

// This will print the wrong guesses onto the page.
document.getElementById("incorrect-guess").innerHTML = incorrectGuess.join(" ");

//this converts all the letters to strings and then compares them to the letters
//in blankSpaces after converting it to strings
if (lettersInWord.toString() === answerArray.toString()) {

  //if the above commented statment is true --> then use the below code to add to the win
  //count:
    countWins++;

    //Alert the user
      alert("You are the winner");

      // Interact with the DOM by updated the wins in the HTML
      document.getElementById("win-counter").innerHTML = countWins;

// Restart the game
      generateWord()

    }
    // check to see if you have used all your guesses
    else if (guessesAllow === 0) {

      // if the user has used all their guesses add to the variable lossCounter
      //with the following function
        lossCounter++;

      // use the alert function to alert the user
      alert("You lose");

      // Just as before - interact with the DOM to update the losses
      document.getElementById("loss-counter").innerHTML = lossCounter;

      // Restart the game
      generateWord();

    }

}

//this is the heart of the program this actually starts the game

// the game is started by generating a random word using the generateWord function
generateWord();

// run this function to capture the userInput
document.onkeyup = function(event) {

  // this function converts the userInput to upper case
  userInput = String.fromCharCode(event.keyCode).toUpperCase();

  // this runs the letterCheck function to check for userInput
  letterCheck(userInput);

  // this runs the function that ends each round
  Completeround();
};


/****NEED TO FIGURE OUT WHY THIS WORKED BUT COULD NOT GET IT TO REPLACE UNDERSCORE WITH
THE CORRECT LETTER*/
// document.onkeyup = function(event){
//   var userInput = String.fromCharCode(event.keyCode);
//   console.log(userInput);
//   if (words.indexOf(userInput) > -1) {
//      console.log(words.indexOf("userInput"));
//     //correctGuess.push(userInput);
//      console.log(correctGuess);
//     answerArray[words.indexOf(userInput)] = userInput;
//       if(answerArray.join('') == words) {
//         alert('You Win');
//       }
//   }
//   else {
//       incorrectGuess.push(userInput);
//       console.log(userInput);
//   }
// }
