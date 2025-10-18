
function as() {
    document.getElementById("a").innerHTML = "CORRECT 🏆";
}
function ab() {
    document.getElementById("a").innerHTML="WRONG"
}
function music() {
    document.getElementById("c").innerHTML="always Music"
    answeredQuestions++;
    checkScore();
    score++;
}
function games() {
    document.getElementById("c").innerHTML="Bad choice baby"
    answeredQuestions++;
    checkScore();
}
function checkScore() {
    if (answeredQuestions === 3) {
        document.getElementById("score").innerHTML = "🎯 Your Total Score: " + score + " / 3";
    }
}



