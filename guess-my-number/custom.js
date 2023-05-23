'use strict'
const check = document.querySelector('.check');
const input = document.querySelector('.input-number');
const guessingText = document.querySelector('.guessing-text');
const correctAnswer = document.querySelector('.game-correct-answer');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const playAgain = document.querySelector('.play-again');
const gameTitle = document.querySelector('.game-title');




let SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);
let SCORE = 20;
let HIGH_SCORE = 0;

function displayGuessingText(text) {
    guessingText.textContent = text;
}
check.addEventListener('click', function () {
    const inputNumber = Number(input.value);

    if (!inputNumber) displayGuessingText("Enter your valid number");
    else if (inputNumber === SECRET_NUMBER) {
        displayGuessingText("you win the game");
        correctAnswer.textContent = SECRET_NUMBER;
        document.body.style.backgroundColor = 'teal';
        correctAnswer.style.backgroundColor = '#222';

        if (SCORE > HIGH_SCORE) {
            HIGH_SCORE = SCORE;
            highScore.textContent = HIGH_SCORE;
        }

    } else if (inputNumber !== SECRET_NUMBER) {
        if (SCORE > 1) {
            displayGuessingText(
                (inputNumber > SECRET_NUMBER ? 'too high' : 'too low')
            )
            SCORE--;
            score.textContent = SCORE;
        } else {
            displayGuessingText('game over')
            score.textContent = '0';
        }
    }
})


playAgain.addEventListener('click', function () {
    SCORE = 20;
    SECRET_NUMBER = Math.trunc(Math.random() * 20 + 1);

    score.textContent = SCORE;
    displayGuessingText("start Guessing")
    document.body.style.backgroundColor = '#222';
    correctAnswer.style.backgroundColor = 'teal';
    correctAnswer.textContent = '?';
    input.value = '';
})















