function getNextHint() {
    // answeredQuestions is a global variable from quiz.js
    const hints = [
        "Hint: The answer to the first quiz is Australia.",
        "Hint: The answer to the second quiz is Nawaz Shareef.",
        "Hint: The answer to the third quiz is Music.",
        "Hint: The answer to the fourth quiz is Virat Kohli.",
        "Hint: The answer to the fifth quiz is Shaffeq Chushti."
    ];
    // Show hint for the next unanswered quiz
    if (answeredQuestions < hints.length) {
        return hints[answeredQuestions];
    } else {
        return "No more hints available!";
    }
}

document.getElementById('hintBtn').addEventListener('click', function() {
    document.getElementById('hintMsg').textContent = getNextHint();
    this.disabled = true;
});

// Reset hint button when a new question is answered
function enableHintButton() {
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.disabled = false;
    document.getElementById('hintMsg').textContent = "";
}

// Listen for answer events from quiz.js
window.enableHintButton = enableHintButton;