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








