var randomNumber = Math.floor(Math.random() * 100) + 1;
var userGuessField = document.querySelector('#user-guess');
var submitGuess = document.querySelector('#submit-guess');
var lastGuess = document.querySelector('.last-guess');
var hiLoResult = document.querySelector('.guess-2');
var clearButton = document.querySelector('#clear-guess');
var resetButton = document.querySelector('#reset');
var guessed = userGuessField.addEventListener('keyup', enableOrDisable);
var maxInput = userGuessField.max;
var minInput = userGuessField.min;

submitGuess.addEventListener('click', checkGuess);

function enableOrDisable() {
  if (userGuessField.disable = true) {
    submitGuess.removeAttribute('disabled', false);
    clearButton.removeAttribute('disabled', false);
    resetButton.removeAttribute('disabled', false);
  }
}  

//.disable use .removeAttribute (gets rid of disable)
//.setAttribute('disabled', true) - resets the disable
function checkGuess() {
  var userGuess = parseInt(userGuessField.value);
  function lastGuessStore() {
    lastGuess.innerText = userGuess;
  }

  if (userGuess === randomNumber) {
    hiLoResult.innerText = 'BOOM!';
    lastGuessStore();
  }
  else if (userGuess > maxInput) {
    hiLoResult.innerText = 'Choose a # between ' + minInput + "-" + maxInput;
    lastGuess.innerText = 'Error';
  }
  else if (userGuess < minInput) {
    hiLoResult.innerText = 'Choose a # between ' + minInput + "-" + maxInput;
    lastGuess.innerText = 'Error';
  }
  else if (userGuess < randomNumber) {
    hiLoResult.innerText = 'That is too low';
    lastGuessStore();
  }
  else if (userGuess > randomNumber) {
    hiLoResult.innerText = 'That is too high';
    lastGuessStore();
  }
  else if (isNaN(userGuess)) {
    hiLoResult.innerText = 'NaN';
    lastGuessStore();
  }
}


