 // DECLARE VARIABLES NEEDED FOR GAME

    var artists = [];
      artists[0] = {name: "kaytranada", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A1dZZh7PvVgce1DDsDPzy8Z" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[1] = {name: "the hotelier", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5SYW9HBk4WxetFTcbcK3nk" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[2] = {name: "american football", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3ZNPecXBFDaZd7LwVd9yER" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[3] = {name: "a tribe called quest", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3WvQpufOsPzkZvcSuynCf3" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[4] = {name: "rufus du sol", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A0gIAWTyvnOntQSd3yxyiW5" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[4] = {name: "st lucia", spotify:'<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A4qH5TQZxM5v7tKT0E09WAK" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[5] = {name: "badbadnotgood", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A6uqcZu1it9k6zz3UVKZzPo" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[6] = {name: "pinegrove", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A2SmrUzUMMOYQqoPuOhlhjw" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[7] = {name: "butch walker", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5P5zNgtbPxKkkMVlRNRHDm" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};
      
      artists[8] = {name: "kevin devine", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5UQRV702UqWACXK6CLvLyS" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[9] = {name: "look mexico", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A4DYnOfcfLFYSKO9JXS0Kqq" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[10] = {name: "blood orange", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A3Z2XUjgVj5ZkCGpU7b2qtY" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[11] = {name: "diiv", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A5PPPABn2aZ0jRuHPMONwSR" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[12] = {name: "flamingosis", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A79A60jmAsN0A0vmbqosE6w" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

      artists[13] = {name: "jimmy eat world", spotify: '<iframe src="https://embed.spotify.com/?uri=spotify%3Aalbum%3A03hVtUfmQW3fhMbYoliIod" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'};

    var artistName;
    var spotify;
    var wins = 0;
    var losses = 0;
    var lettersGuessed;
    var goesLeft;
    var randomArtist;
    var pickedArtist;
    var placeholder;
    var input;
    var artistNameLength;
    var artistNameSubstring;
    var currentartistName;
    var key;

    // CREATE FUNCTION TO INITIALIZE NEW GAME
    function newGame() {
      placeholder = "";
      goesLeft = 10;
      lettersGuessed = [];
      randomArtist = Math.floor(Math.random() * artists.length); 
      pickedArtist = artists.splice(randomArtist, 1);
      artistName =  pickedArtist[0].name;
      spotify = pickedArtist[0].spotify;
      artistNameLength = artistName.length;
      artistNameSubstring = artistName.substring;
    
      // ENTERS UNDERSCORES FOR LETTERS AND PREPOPULATES BLANK SPACES
      for (var i = 0; i < artistName.length; i++) {
        if (artistName.substring(i, i + 1) === " "){
          placeholder =  placeholder + " ";
        }
        else {
          placeholder = placeholder + "_";
        }
      }

      // SETS INITIAL CONTENT ON PAGE
      document.querySelector("#placeholder").innerHTML = placeholder;
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#message").innerHTML = "Try and guess who my favorite artists are this year.<br/> Press any key to get started!";
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      document.querySelector("#name").innerHTML = " ";
      document.querySelector("#spotify").innerHTML = "";

    }

  // INITIALIZE FIRST GAME
  newGame();
 
  // LOG KEYSTROKE TO BEGIN LOGIC CHECK
  document.onkeyup = function(event){
    key = event.key;



    document.querySelector("#message").innerHTML = "Try and guess who my favorite artists are this year.<br/> Good luck!";

    // SET VARIABLE TO CHECK IF YOU LOSE A TURN UPON INCORRECT GUESS
    var correct = 0;

    // LOOP THROUGH artistName TO CHECK IF LETTER IS CORRECT
    for (var i = 0; i < artistNameLength; i++) {
      if (key == artistName.substring(i, i + 1)) {
        correct++;
        placeholder = placeholder.substring(0, i) + key + placeholder.substring(i + 1, placeholder.length + 1);
        document.querySelector("#placeholder").innerHTML = placeholder;
      }
    }

    // IF LETTER SELECTED WASN'T CORRECT
    if (correct == 0) {
      goesLeft--;
      lettersGuessed.push(key);
      document.querySelector("#lettersGuessedSpace").innerHTML = lettersGuessed;
      document.querySelector("#guessesLeft").innerHTML = goesLeft;
      
    }

    // WHEN YOU WIN
    if (placeholder == artistName) {
      wins++;
      document.querySelector("#message").innerHTML = "You win! You must have good music taste.<br/>Click the New Game button to play again!";
      document.querySelector("#wins").innerHTML = wins;
      document.querySelector("#name").innerHTML = "ANSWER: " + artistName;
      document.querySelector("#spotify").innerHTML = spotify;
      
    }
    // WHEN YOU LOSE
    if (goesLeft == 0) {
      losses++;
      
      document.querySelector("#message").innerHTML = "Tough break, but you should check out the music anyway.<br/>Click the New Game button to play again!";
      document.querySelector("#losses").innerHTML = losses;
      document.querySelector("#name").innerHTML = "ANSWER: " + artistName;
      document.querySelector("#spotify").innerHTML = spotify;
      
    }

  }
  // RUN NEW GAME ON BUTTON CLICK
  document.querySelector("#button").addEventListener("click", newGame);
