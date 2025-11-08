let score = 0;
let answeredQuestions = 0;
let wrongAnswers = 0;
let hearts = 2;

// Show hearts at top right
function updateHearts() {
    document.getElementById('hearts').textContent = "❤️".repeat(hearts);
}

// Show lose popup
function showLosePopup() {
    document.getElementById('loseModal').style.display = 'flex';
    document.getElementById('loseRestartBtn').onclick = function() {
        window.location.reload();
    };
}

// Call this in every answer function after wrong answer
function handleWrongAnswer() {
    wrongAnswers++;
    hearts--;
    updateHearts();
    if (wrongAnswers >= 2) {
        showLosePopup();
    }
}

// Call this in every answer function after correct answer
function handleCorrectAnswer() {
    score++;
    updateHearts();
}

// Update all answer functions:
function as() {
    document.getElementById("a").innerHTML = "CORRECT 🏆";
    answeredQuestions++;
    handleCorrectAnswer();
    checkScore();
    enableHintButton();
}

function ab() {
    document.getElementById("a").innerHTML = "WRONG ❌";
    answeredQuestions++;
    handleWrongAnswer();
    checkScore();
    enableHintButton();
}

function im() {
    document.getElementById("b").innerHTML = "WRONG ❌";
    answeredQuestions++;
    handleWrongAnswer();
    checkScore();
    enableHintButton();
}

function mr() {
    document.getElementById("b").innerHTML = "CORRECT 🏆";
    answeredQuestions++;
    handleCorrectAnswer();
    checkScore();
    enableHintButton();
}

function music() {
    document.getElementById("c").innerHTML = "Always Music 🎵";
    answeredQuestions++;
    handleCorrectAnswer();
    checkScore();
    enableHintButton();
}

function games() {
    document.getElementById("c").innerHTML = "Bad choice 😅";
    answeredQuestions++;
    handleWrongAnswer();
    checkScore();
    enableHintButton();
}

function kholi() {
    document.getElementById("d").innerHTML = "CORRECT 🏆 Virat Kohli is a classical batsman!";
    answeredQuestions++;
    handleCorrectAnswer();
    checkScore();
    enableHintButton();
}

function farhan() {
    document.getElementById("d").innerHTML = "Nah bro ❌";
    answeredQuestions++;
    handleWrongAnswer();
    checkScore();
    enableHintButton();
}

function shaffeq() {
    document.getElementById("e").innerHTML = "CORRECT 🏆 Shaffeq Chushti is more powerful!";
    answeredQuestions++;
    handleCorrectAnswer();
    checkScore();
    enableHintButton();
}

function roman() {
    document.getElementById("e").innerHTML = "WRONG ❌";
    answeredQuestions++;
    handleWrongAnswer();
    checkScore();
    enableHintButton();
}

function checkScore() {
    if (answeredQuestions === 5 && wrongAnswers < 2) {
        document.getElementById("score").innerHTML = "🎯 Your Total Score: " + score + " / 5";
    }
}

/* show registered user name (if saved via registration page) */
document.addEventListener('DOMContentLoaded', function () {
    // Show modal for name entry
    const modal = document.getElementById('nameModal');
    const nameInput = document.getElementById('modalNameInput');
    const submitBtn = document.getElementById('modalSubmitBtn');
    const welcomeEl = document.getElementById('welcome');

    modal.style.display = 'flex';
    nameInput.focus();

    function submitName() {
        let name = nameInput.value.trim();
        if (!name) {
            nameInput.style.borderColor = "#e84545";
            nameInput.focus();
            return;
        }
        localStorage.setItem('username', name);
        welcomeEl.textContent = 'Welcome, ' + name;
        modal.style.display = 'none';
        updateHearts();
    }

    submitBtn.addEventListener('click', submitName);
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') submitName();
    });
});

