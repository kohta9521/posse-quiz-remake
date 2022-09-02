quiz = new Array();
// quiz[問題番号] = ["問題文", "問題画像url", "選択肢1", "選択肢2", "選択肢3", "正解番号"];
quiz[0] = [
    "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    "assets/img/quiz/img-quiz01.png",
    "約28万人",
    "約79万人",
    "約183万人",
    "1"
]
quiz[1] = [
    "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
    "assets/img/quiz/img-quiz02.png",
    "INTECH",
    "BIZZTECH",
    "X-TECH",
    "3"
]





function quizA (num) {
    var quizProblem = document.getElementById("quiz__problem--content");
    quizProblem.innerHTML = quiz[num][0];

    var quizImage = document.querySelector("#quiz__image--content");
    quizImage.src = quiz[num][1];

    var quizChoice1 = document.querySelector("#quiz__choice--1");
    quizChoice1.innerHTML =quiz[num][2];

    var quizChoice2 = document.querySelector("#quiz__choice--2");
    quizChoice2.innerHTML =quiz[num][3];

    var quizChoice3 = document.querySelector("#quiz__choice--3");
    quizChoice3.innerHTML =quiz[num][4];
}

quizA(0);

var quizA = document.querySelector("#quiz__answerbox--content1");
var quizF = document.querySelector("#quiz__answerbox--content2");

function go(num) {
    
}

