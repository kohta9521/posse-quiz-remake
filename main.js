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

quiz[3] = {
    sentense: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
    image: "assets/img/quiz/img-quiz01.png",
    ans1: "約28万人",
    ans0: "約79万人",
    ans0: "約183万人"
}

console.log(quiz[3].sentense);




function quizA (num) {
    var quizProblem = document.getElementById("quiz__problem--content");
    quizProblem.innerHTML = quiz[num].sentense;

    var quizImage = document.querySelector("#quiz__image--content");
    quizImage.src = quiz[num].image;

    var quizChoice1 = document.querySelector("#quiz__choice--1");
    quizChoice1.innerHTML =quiz[num].ans1;

    var quizChoice2 = document.querySelector("#quiz__choice--2");
    quizChoice2.innerHTML =quiz[num].ans0;

    var quizChoice3 = document.querySelector("#quiz__choice--3");
    quizChoice3.innerHTML =quiz[num].ans0;
}

function quizC(num) {
    var quizPro = document.querySelector("#quiz__problem--content");
    quizPro.innerHTML = quiz[num].sentense;
}

quizC(3);

quizA(3);

var quizA = document.querySelector("#quiz__answerbox--content1");
var quizF = document.querySelector("#quiz__answerbox--content2");

function go(num) {
    
}

var ans = document.querySelector("#quiz__choice--1");
ans.addEventListener('click', () => {
    document.querySelector("#quiz__answerbox--content1").style.display="block";
});

var ans = document.querySelector("#quiz__choice--2");
ans.addEventListener('click', () => {
    document.querySelector("#quiz__answerbox--content2").style.display="block";
});

var ans = document.querySelector("#quiz__choice--3");
ans.addEventListener('click', () => {
    document.querySelector("#quiz__answerbox--content2").style.display="block";
});

function ans(number)
{
if (number == 0)
    {
    document.getElementById("quiz__answerbox--content1").style.display="block";
    }
    else
    {
    document.getElementById("quiz__answerbox--content2").style.display="block";
    }
}

ans();
