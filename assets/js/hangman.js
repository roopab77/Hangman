 // DECLARE VARIABLES NEEDED FOR GAME

    var artists = [];
      artists[0] = {name: "kaytranada", youtube: "https://www.youtube.com/embed/rKlA5tRu6f0?rel=0"};
      artists[1] = {name: "the hotelier", youtube: "https://www.youtube.com/embed/AuEMMawhMZU?rel=0"};
      artists[2] = {name: "american football", youtube: "https://www.youtube.com/embed/-9f4dP6jw1Q?rel=0"};
      artists[3] = {name: "a tribe called quest", youtube: "https://www.youtube.com/embed/BDxKVYUHBdA?rel=0"};
      artists[4] = {name: "rufus du sol", youtube: "https://www.youtube.com/embed/Tx9zMFodNtA?rel=0"};
      artists[4] = {name: "st lucia", youtube: "https://www.youtube.com/embed/Hcm7VFDSU_0?rel=0"};
      artists[5] = {name: "badbadnotgood", youtube: "https://www.youtube.com/embed/UWIIPX_5rbM?rel=0"};
      artists[6] = {name: "pinegrove", youtube: "https://www.youtube.com/embed/w9mlfpTxwQA?rel=0"};

    var word;
    var youtube;
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var goesLeft;
    var randomArtist;
    var pickedArtist;
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
      randomArtist = Math.floor(Math.random() * artists.length); 
      pickedArtist = artists.splice(randomArtist, 1);
      word =  pickedArtist[0].name;
      youtube = pickedArtist[0].youtube;
      console.log(word); 
      // word = wordsArray[Math.floor(Math.random() * wordsArray.length)];

      wordLength = word.length;
      wordSubstring = word.substring;
    
    // ENTERS UNDERSCORES FOR LETTERS AND PREPOPULATES BLANK SPACES
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

    // SET VARIABLE TO CHECK IF YOU LOSE A TURN UPON INCORRECT GUESS
    var correct = 0;

    // LOOP THROUGH WORD TO CHECK IF LETTER IS CORRECT
    for (var i = 0; i < wordLength; i++) {
      if (key == word.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    // IF LETTER SELECTED WASN'T CORRECT
    if (correct == 0) {
      goesLeft--;
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
    }

    // WHEN YOU WIN
    if (placeholder == word) {
      wins++;
      document.querySelector("#message").innerHTML = "You win! You must have good music taste.<br/>Click the Restart Game button to play again!";

      document.querySelector("#wins").innerHTML = wins;
      
      document.querySelector("#name").innerHTML = "Artist Name<br/>" + word;
      
      document.querySelector("#youtube").innerHTML = '<iframe height="315" src="'+ youtube +'"" frameborder="0" allowfullscreen></iframe>';
      
    }
    // WHEN YOU LOSE
    if (goesLeft == 0) {
      losses++;
      
      document.querySelector("#message").innerHTML = "Tough break, but you should check out the music anyway.<br/>Click the Restart Game button to play again!";
      
      document.querySelector("#losses").innerHTML = losses;
    }

  }

  document.querySelector("#button").addEventListener("click", newGame);
