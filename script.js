var userGuessField = document.querySelector('#user-guess');
var submitGuess = document.querySelector('#submit-guess');
var lastGuess = document.querySelector('.last-guess');
var hiLoResult = document.querySelector('.guess-2');
var clearButton = document.querySelector('#clear-guess');
var resetButton = document.querySelector('#reset');
var maxInput = parseInt(document.getElementById('max').value) || 100;
var minInput = parseInt(document.getElementById('min').value) || 0;
var changeRangeButton = document.querySelector('#change-range'); 
var maxInputChange = document.querySelector('#max');
var minInputChange = document.querySelector('#min');
var randomNumber = generateRandomNumber();
var guessCounter = 1;

userGuessField.addEventListener('keyup', enableOrDisable);
maxInputChange.addEventListener('keyup', enableOrDisable);
minInputChange.addEventListener('keyup', enableOrDisable);

function enableOrDisable() {
  if (userGuessField.disable = true) {
    submitGuess.removeAttribute('disabled', false);
    clearButton.removeAttribute('disabled', false);
    resetButton.removeAttribute('disabled', false);
    changeRangeButton.removeAttribute('disabled', false);
  }
}

changeRangeButton.addEventListener('click', changeRange);

function changeRange() {
  maxInput = parseInt(maxInputChange.value) || maxInput;
  minInput = parseInt(minInputChange.value) || minInput;

  randomNumber = generateRandomNumber();
console.log(minInput);
console.log(maxInput);
console.log(randomNumber);
}


function generateRandomNumber() {
  return Math.floor(Math.random() * (maxInput - minInput + 1)) + minInput;
}

submitGuess.addEventListener('click', checkGuess);

function checkGuess(event) {
  event.preventDefault();
  var userGuess = parseInt(userGuessField.value);
  
  function lastGuessStore() {
    lastGuess.innerText = userGuess;
  }

  if (userGuess === randomNumber) {
    hiLoResult.innerText = 'BOOM!';
    lastGuessStore();
    winRangeChange();
    score();
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
  
  guessCounter ++;
  console.log(guessCounter);
}

function score() {
  if(guessCounter === 1) {
    alert("Amazing! You guessed it in 1 try. You have earned a Master Number Ninja Medal");
  }
  else if(guessCounter <= 10) {
    alert("Nice job! You guessed the number in " + guessCounter + " tries. You have earned a Number Ninja Medal");
  }
  else if(guessCounter > 10) {
    alert("Nice effor! You guessed the number in " + guessCounter + " tries. You have earned a Number Ninja in Training Medal");
  }
}

function winRangeChange() {
  maxInput += 10;
  minInput -= 10;
  randomNumber = generateRandomNumber();

console.log(minInput);
console.log(maxInput);
console.log(randomNumber);
}

console.log(minInput);
console.log(maxInput);
console.log(randomNumber);


clearButton.addEventListener('click', clearGuess);

function clearGuess() {
  userGuessField.value = '';
}

resetButton.addEventListener('click', resetPage);

function resetPage() {
  document.getElementById('form').reset();
  generateRandomNumber();
}

