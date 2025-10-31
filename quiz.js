let score = 0;
let answeredQuestions = 0;

function as() {
    document.getElementById("a").innerHTML = "CORRECT 🏆";
    score++;
    answeredQuestions++;
    checkScore();
}

function ab() {
    document.getElementById("a").innerHTML = "WRONG ❌";
    answeredQuestions++;
    checkScore();
}

function im() {
    document.getElementById("b").innerHTML = "WRONG ❌";
    answeredQuestions++;
    checkScore();
}

function mr() {
    document.getElementById("b").innerHTML = "CORRECT 🏆";
    score++;
    answeredQuestions++;
    checkScore();
}

function music() {
    document.getElementById("c").innerHTML = "Always Music 🎵";
    answeredQuestions++;
    score++;
    checkScore();
}

function games() {
    document.getElementById("c").innerHTML = "Bad choice baby 😅";
    answeredQuestions++;
    checkScore();
}

function kholi() {
    document.getElementById("d").innerHTML = "CORRECT 🏆 Virat Kohli is a classical batsman!";
    score++;
    answeredQuestions++;
    checkScore();
}

function farhan() {
    document.getElementById("d").innerHTML = "Nah bro ❌";
    answeredQuestions++;
    checkScore();
}

function checkScore() {
    if (answeredQuestions === 4) {
        document.getElementById("score").innerHTML = "🎯 Your Total Score: " + score + " / 4";
    }
}

