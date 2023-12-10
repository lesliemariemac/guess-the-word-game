//Guessed letters
const guessedLettersElement = document.querySelector(".guessed-letters");
//Guess Button
const guessLetterButton = document.querySelector(".guess");
//Input for letter
const letterInput = document.querySelector(".letter");
//Word in progress
const wordInProgress = document.querySelector(".word-in-progress");
//Remaining guesses
const remainingGuessesElement = document.querySelector(".remaining");
//Remaining guesses display span
const remainingGuessesSpan = document.querySelector(".remaining span");
//message
const message = document.querySelector(".message");
//hidden button
const playAgainButton = document.querySelector(".play-again");
//starter word
const word = "magnolia";
const guessedLetters = [];

//Function to add placeholders for each letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

//Event Listener Button
 
guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Empty message paragraph
    message.innerText = "";
    const guess = letterInput.value;
    const correctGuess = validateInput(guess);

    if (correctGuess) {
        makeGuess(guess);
    }
    //console.log(guess);
    letterInput.value = "";
});

//Function to validate input letter

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Only enter one letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

//Function to capture input

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes (guess)) {
        message.innerText = "Try again! You already guessed that letter."; 
    } else { 
        guessedLetters.push(guess);
        console.log(guessedLetters);
}
};
    
