'use script';

let scret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let oldhighscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//eventhandler on "check"
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    //  document.querySelector('.message').textContent = ' ⛔ No Number !';
    displayMessage(' ⛔ No Number !');
  }

  //when guess is equal to secret number
  else if (guess === scret_number) {
    //document.querySelector('.message').textContent = ' 🎉 Correct Number!';
    displayMessage(' 🎉 Correct Number!');
    document.querySelector('.number').textContent = scret_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > oldhighscore) {
      oldhighscore = score;
      document.querySelector('.highscore').textContent = oldhighscore;
    }
  }

  //when guess is not equal to secret number( //when guess is too high, //when guess is too low)
  else if (guess !== scret_number) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > scret_number ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > scret_number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😢 You lost the Game';
      displayMessage('😢 You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //     //when guess is too high
  //     else if (guess > scret_number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }

  //   //when guess is too low
  //   else if (guess < scret_number) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '😢 You lost the Game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//event handler on 'again'
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '?';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
