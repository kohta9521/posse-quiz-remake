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



var quizProblem = document.getElementById("quiz__problem--content");
quizProblem.innerHTML = quiz[0][0];

var quizImage = document.querySelector("#quiz__image--content");
quizImage.src = quiz[0][1];
