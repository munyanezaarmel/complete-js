"use strict";
let secret = Math.trunc(Math.random() * 20) + 1;
let score=20
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
      document.querySelector('.message').textContent =
        'no number enter number to play again';
    } else if (guess === secret) {
      document.querySelector('.message').textContent = 'correct number';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secret;
        document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    } else if (guess > secret) {
        document.querySelector('.message').textContent = 'too high';
        score--
        document.querySelector('.score').textContent=score
    } else if (guess < secret) {
        if (score > 1) {
               document.querySelector('.message').textContent = 'too low';
               score--;
               document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'you lost game';
            document.querySelector('body').style.backgroundColor = 'red';
        }
     
    }

})
document.querySelector(".again").addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value.textContent = '';
    document.querySelector('.message').textContent = 'Start guessing..';
    score=20
  })