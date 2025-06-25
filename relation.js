const correctAnswer = "Brothers";

const form = document.getElementById('guessForm');
const input = document.getElementById('guessInput');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const guess = input.value.trim().toLowerCase();
  if (guess === correctAnswer.toLowerCase()) {
    resultDiv.textContent = "Correct! They are Brothers.";
    resultDiv.style.color = 'green';
  } else {
    resultDiv.textContent = "Wrong guess, try again.";
    resultDiv.style.color = 'red';
  }
  input.value = '';
  input.focus();
});