// The completed game should be able to receive user input using the inquirer or prompt npm packages.

// Feel free to use as many different types of constructor functions as you are able to, but at a minimum, you must create the following constructor functions:

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// Each constructor function should be in it's own file and be exported and required wherever needed.

// Look into function prototypes and use them for a few of your constructor's methods.
var inquirer = require('inquirer');
var Word = require('./word.js');
console.log(Word)

//need to git a random word to start the game with
var wordArray = ["hi", "hello", "goodbye"]
var randoWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(randoWord)
var wordCon = new Word(randoWord)
console.log(wordCon);
wordCon.getLetterConArr()

function getUserGuesses (){
    inquirer.prompt({
        type: "input",
        message: "hey punk please type a letter to guess.",
        name: "userGuess"
    }).then(function(answer) {
        console.log(answer.userGuess)
        var userLetter = answer.userGuess
        wordCon.userGuess(userLetter)
        if(wordCon.userGuessLeft > 0 && wordCon.letterUnderscores.join('') !== randoWord ){
            console.log("you have "+ wordCon.userGuessLeft + " left" )
            getUserGuesses()
        }
        else if (wordCon.letterUnderscores.join('') == randoWord){
            console.log("great Job You Won")
        }else {
            console.log("You Lost Succa!")
        }
    })
}
getUserGuesses()