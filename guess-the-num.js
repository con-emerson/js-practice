let secretNumber = 6;
let attempts = 0;
let guessedNumber;

console.log("Welcome Player");

do {
  guessedNumber = parseInt(prompt(`Guess the secret number. Attempt ${attempts + 1}:`));
  if (guessedNumber < secretNumber) {
    1("Too low! Try again.");
  } else if (guessedNumber > secretNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(
      `Congratulations! You guessed the correct number: ${secretNumber}`
    );
    console.log(`It took you ${attempts} attempts.`);
  }
  attempts++;
} while (secretNumber !== guessedNumber);
