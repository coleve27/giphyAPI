var questions = [
  {
    "q": "What is the fasted fish?",
    "c": ["Sailfish", "Starfish", "Dolphin"],
    "answer": 0
  },
  {
    "q": "How many varieties of goldfish are there?",
    "c": ["250", "92", "20"],
    "answer": 0
  },
  {
    "q": "How causes water to move?",
    "c": ["Wind", "Wind and Gravity", "Gravity"],
    "answer": 1
  },
  {
    "q": "What is the most poisonous fish?",
    "c": ["Baluga Whale", "Sea Snail", "Pufferfish"],
    "answer": 2
  },
  {
    "q": "What is the smallest ocean",
    "c": ["The Pacific Ocean", "The Arctic Ocean", "The Indian Ocean"],
    "answer": 1
  }

];

var correctAnswers = 0;
var incorrectAnswers = 0;
var count = 30;
var n = 0;

$(".stats").hide();
$(".right").hide();
$(".wrong").hide();
$(".restart").hide();
$(".timealert").hide();
var counter = setInterval(timer, 1000);

choiceData();
shiftQuestion();
setHandler();

$(".restart").on("click", restart);

function setHandler() {
  $(".choices > div").on("click", function() {
    var answerValue = ($(this).attr("data-answerValue"));
    answerValue = parseInt(answerValue);

    if (answerValue == questions[n].answer) {
      $(".choices > div").off("click");
      $(".right").show();
      correctAnswers++;
      clearInterval(counter);
      setTimeout(nextQuestion, 2000);
    } else {
      $(".choices > div").off("click");
      $(".wrong").show();
      incorrectAnswers++;
      clearInterval(counter);
      setTimeout(nextQuestion, 2000);
    }
  });
}

function endGame() {
  $(".choices > div").off("click");
  clearInterval(counter);
  $(".endGame").text("Game Over!");
  $(".correct").text("Right Answers: " + correctAnswers);
  $(".incorrect").text("Wrong Answers: " + incorrectAnswers);
  $(".stats").show();
  $(".restart").show();
}

function nextQuestion() {
  n++;
  count = 30;
  counter = setInterval(timer, 1000);
  $(".right").hide();
  $(".wrong").hide();
  $(".timealert").hide();
  if (questions.length === n) {
    endGame();
    return;
  }
  shiftQuestion();
  setHandler();
}

function timer() {
  count--;
  if (count <= -1) {
    clearInterval(counter);
    $(".choices > div").off("click");
    $(".timealert").show();
    count = 30
    setTimeout(nextQuestion, 2000);
    return;
  }
  $("#countdown").text("Time Remaining: " + count);
}

function choiceData() {
  $(".choice_a").attr("data-answerValue", 0);
  $(".choice_b").attr("data-answerValue", 1);
  $(".choice_c").attr("data-answerValue", 2);
}

function shiftQuestion() {
  $(".question").html("<h1>" + questions[n].q + "</h1>");
  $(".choice_a").html("<h1>" + questions[n].c[0] + "</h1>");
  $(".choice_b").html("<h1>" + questions[n].c[1] + "</h1>");
  $(".choice_c").html("<h1>" + questions[n].c[2] + "</h1>");
}

function restart() {
  correctAnswers = 0;
  incorrectAnswers = 0;
  n = 0;
  shiftQuestion();
  setHandler();
  count = 30;
  counter = setInterval(timer, 1000);
  $(".stats").hide();
  $(".right").hide();
  $(".wrong").hide();
  $(".restart").hide();
}
