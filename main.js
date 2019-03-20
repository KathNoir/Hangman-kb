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