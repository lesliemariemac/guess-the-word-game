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
const playAgainButton = document.querySelector(".play again");
//starter word
const word = "magnolia";

//Function to add placeholders for each letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push ("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

//Event Listener Button
 
guessLetterButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});