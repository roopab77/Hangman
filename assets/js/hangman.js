 

 // DECLARE VARIABLES NEEDED FOR GAME
    var wordsArray = ['kaytranada','hotelier','american football','restorations', 'a tribe called quest', 'rufus du sol'];
    var word;
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var goesLeft;
    var placeholder;
    var input;
    var wordLength;
    var wordSubstring;
    var currentWord;
    var key;

    // CREATE FUNCTION TO INITIALIZE NEW GAME
    function newGame() {
      placeholder = "";
      goesLeft = 10;
      lettersGuessed = [];
      word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

      wordLength = word.length;
      wordSubstring = word.substring;
    
    // ENTERS UNDERSCORES FOR LETTERS
    for (var i = 0; i < word.length; i++) {
      if (word.substring(i, i + 1) === " "){
        placeholder =  placeholder + " ";
      }
      else {
        placeholder = placeholder + "_";
      }
     
    }

      document.querySelector("#placeholder").innerHTML = placeholder;
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#message").innerHTML = "Try and guess who my favorite artists were this year.<br/> Press any key to get started!";
      document.querySelector("#guessesLeft").innerHTML = goesLeft;

    }

  // INITIALIZE GAME
  newGame();
 
  // LOG KEYSTROKE TO BEGIN LOGIC CHECK
  document.onkeyup = function(event){
    key = event.key;
    document.querySelector("#message").innerHTML = "Try and guess who my favorite artists were this year.<br/> Good luck!";
    var correct = 0;

    for (var i = 0; i < wordLength; i++) {
      if (key == word.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    if (correct == 0) {
      goesLeft--;
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
    }

    if (placeholder == word) {
      wins++;
      document.querySelector("#message").innerHTML = "You win! You must have good music taste.<br/>Click the Restart Game button to play again!";
      document.querySelector("#wins").innerHTML = wins;

    }

    if (goesLeft == 0) {
      losses++;
      document.querySelector("#message").innerHTML = "Tough break, but you should check out the music anyway.<br/>Click the Restart Game button to play again!";
      document.querySelector("#losses").innerHTML = losses;
    }

  }

  document.querySelector("#button").addEventListener("click", newGame);
