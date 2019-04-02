//GLOBAL VARIABLES
//-------------------------------------------

//aRRAY (WORD OPTIONS lowercase)
var wordList = ["zelda", "halo", "mario", "pokemon"]

//Solution goes here
var chosenWord = "";

//breaks solution into individual letters
var lettersInChosenWord = [];

//This will be the number of blanks we show based on the solution
var numBlanks = 0;

//holds some blank and some empty letters (ex: z_lda)
var blanksAndSuccesses = [];

//holds wrong guesses
var wrongGuesses = [];

//Game counter
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;




//functions
//------------------------------------------------------

// startGame() is not being run here; only for future use
function startGame() {

    //resets guesses
    numGuesses = 9;
    
    //solution is random from word list
    chosenWord = wordList[Math.floor(math.random() * wordList.length)];

    // word is made into individual letters
    lettersInChosenWord = chosenWord.split("");

    //number of letters in the word
    numBlanks = lettersInChosenWord.length;

    //print the solution in console for testing
    console.log(chosenWord);

    //CRITICAL LINE - RESETS GUESS AND SUCCESS ARRAY EACH ROUND
    blanksAndSuccesses = [];

    //CRITICAL LINE - RESETS WRONG GUESSSES EACH ROUND
    wrongGuesses = [];

    //fill up list with needed number of blanks and is based on num of letter in solution
    for (var i = 0; 1 < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //print blanks
    console.log(blanksAndSuccesses);

    //reprints the guessesLeft to 9
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //prints blanks at the beginning of the round
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

    //clears wrong guesses
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

//all comparisions for matches

function checkLetters(letter) {
   
    //boolean toggled on or off whether a letter is found
    var letterInWord = false;

    //checks if letter exists 
    for ( var i = 0; i < numBlanks; i++) {
    
        if (chosenWord[i] === letter) {
            // toggle true if letter is found
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var j = 0; j < numBlanks; j++) {

            if (chosenWord[j] === letter) {

                blanksAndSuccesses[j] = letter;

            }
        
        }

        console.log(blanksAndSuccesses);

    }
    //IF LETTER DOESNT EXIST   
    else {
        wrongGuesses.push(letter);
        numGuesses--;

    }
}

function roundComplete() {

    console.log(`WinCount: ${winCounter} | LossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    //update html through javascript
    document.getElementById("guesses-left").innerHTML = numGuesses;

    document.getElementById("word-blank").innerHTML = blanksAndSuccesses.join(" ");

    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //if you win
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        winCounter++;
        alert("You win!")

        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }

    else if (numGuesses === 0) {\
        lossCounter++;
        alert("Go home. You lost.")
        document.getElementById("loss-counter").innerHTML = lossCounter;
        startGame();
    }


}