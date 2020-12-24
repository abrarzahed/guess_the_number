'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    // WHEN THERE IS NO INPUT
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number found';
        displayMessage('⛔ No number found');


        // WHEN IS GUESS SAME AS SECRET NUMBER
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Win the game 🎉';
        displayMessage('Win the game 🎉');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.own').style.color = 'orangeRed';


        // HIGHSCORE FUNCTIONALITY
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }


        // WHEN GUESS DEFERENT THEN SECRET NUMBER
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '☝ Higher !' : '👇🏻 Lower !';
            displayMessage(guess > secretNumber ? '☝ Higher !' : '👇🏻 Lower !')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'Game Over 😭';
            displayMessage('Game Over 😭');
            document.querySelector('.score').textContent = 0;
        }
    }

    // WHEN GUESS IS GREATER THE SECRET NUMBER
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '☝ Higher !';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game Over 😭';
    //         document.querySelector('.score').textContent = 0;
    //     }


    //     // WHEN GUESS IS SMALLER THEN SECRET NUMBER
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '👇🏻 Lower !';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game Over 😭';
    //         document.querySelector('.score').textContent = 0;
    //     }

    // }
})


// PLAY AGAIN

document.querySelector('.again').addEventListener('click', function () {
    let score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.own').style.color = 'lime';

})