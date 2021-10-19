'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener('click', function() {
    const quess = Number(document.querySelector('.guess').value);
    if (!quess) {
        displayMessage("⛔️ No number!");
    } else if (quess === secretNumber) {
        displayMessage("🎉 Correct Number!")
        document.querySelector('.number').textContent = secretNumber;
        document.body.style.backgroundColor = "#24a102";
        document.getElementById('#title').style.border= "thick solid #0000FF";
    
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else {
        if (score > 1) {
            let message = quess < secretNumber ? '📉 Too low!' : '📈 Too high!';
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(message);
        } else {
            displayMessage('💥 You lost the game!');
            document.body.style.backgroundColor = "red";
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector(".again").addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector(".score").textContent = 20;
    document.body.style.backgroundColor = "#222";
});
