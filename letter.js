// Letter: Used for each letter in the current word.Each letter object should either display an underlying character, or a blank placeholder(such as an underscore), depending on whether or not the user has guessed the letter.This should contain letter specific logic and data.
function Letter (letter) {
    //take in a letter and store it
    this.letter = letter
    //way to tell if letter should be shown or hidden
    this.visible = false;
    //need a way to show underscores or letter
    this.showOrHide = function (){
        if(this.visible){
            return this.letter
        }
        return "_"
    }
    //see if that letter the user guessed is eqal to this letter
    //
    this.userGuess = function (letter) {
        if (letter === this.letter) {
            this.visible = true
            return true;
        }
        return false
    }
    //
}
module.exports = Letter;