// Word: Used to create an object representing the current word the user is attempting to guess.This should contain word specific logic and data.
var Letter = require('./letter.js');

function Word(word){
    this.word = word
    //store to an array
    this.wordArray = this.word.split("")
    console.log(this.wordArray)
    this.letterConArray = [];
    this.userGuessLeft = 9

    this.letterUnderscores = []
    //tie each letter to our constructor funct
    this.getLetterConArr = function(){
        for(var i = 0; i < this.wordArray.length; i++){
            this.letterConArray.push(new Letter(this.wordArray[i]))
        }
        console.log(this.letterConArray)
        this.getUnderscores()
    }
    //show this word to console as underscores or letters
    this.getUnderscores = function() {
        for(var i = 0; i < this.letterConArray.length; i++){
            this.letterUnderscores.push(this.letterConArray[i].showOrHide())
        }
        this.updateConsole()
    }
    this.updateConsole = function (params) {
        console.log(this.letterUnderscores.join(" "))
    }
    //see if letters are in words
    this.userGuess = function (letter) {

        for (var i = 0; i < this.letterConArray.length; i++) {
           if(this.letterConArray[i].userGuess(letter)){
               this.letterUnderscores[i] = this.letterConArray[i].showOrHide()
           }
        }
        this.updateGuessesLeft(letter)
        this.updateConsole()

    }
    this.updateGuessesLeft = function (letter) {
        if(this.letterUnderscores.indexOf(letter) == -1){
            --this.userGuessLeft
        }
    }
    //

}
module.exports = Word;