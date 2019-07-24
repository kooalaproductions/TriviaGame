$(document).ready(function () {

  // event listeners
  $("#remaining-time").hide();
  $("#choices").hide();
  // $("#start").on('click', trivia.startGame);
  // $(document).on('click' , '.option', trivia.guessChecker);

});

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clockRunning = true;
var intervalId;
var timeLeft = 4;
var currentSet = 0;

var trivia = [{

    //question 1
    question: "Which of the Weasleys went to Romania to study dragons?",
    choices: ["George", "Bill", "Percy", "Charlie"],
    answer: "Charlie"
  },

  { //question 2
    question: "Who destroyed the last remaining horcrux?",
    choices: ["Neville Longbottom", "Lord Voldemort", "Hermione Grander", "Harry Potter"],
    answer: "Neville Longbottom"
  },
  { //question 3
    question: "Whose corporeal patronus took the shape of a hare?",
    choices: ["Cho Chong", "Luna Lovegood", "Hermione Granger", "Ginny Weasley"],
    answer: "Luna Lovegood"

  },
  { //question 4
    question: "Which of the Deathly Hallows does Harry receive as a Christmas gift?",
    choices: ["Elder Wand", "Cloak of Invisibility", "Resurrection Stone"],
    answer: "Cloak of Invisibility"

  },

  { //question 5
    question: "Who destroys a horcrux first?",
    choices: ["Neville Longbottom", "Hermione Granger", "Harry Potter", "Albus Dumbledore"],
    answer: "Harry Potter"

  },

  { //question 6
    question: "What position on the Gryffindor Quidditch team did Oliver Wood play?",
    choices: ["Seeker", "Chaser", "Keeper", "Beater"],
    answer: "Keeper"

  },
  { //question 7
    question: "What establishment does Aberforth Dumbledore own and run?",
    choices: ["Honeydukes", "Hog's Head Inn", "Three Broomsticks", "Leaky Cauldron"],
    answer: "Hog's Head Inn"

  }


];

$("#start").on('click', function (event) {

  // console.log("hello");
  startGame();


});

function startGame() {
  $("#start").hide();

  $("#remaining-time").show();

  // $("#timer").text("00:10");
  timer();
  nextQuestion();

}

function timer() { //timer for quiz
  var downloadTimer = setInterval(function () {
    $("#timer").html(timeLeft);
    timeLeft -= 1;
    $("#timer").html(timeLeft);

    if (timeLeft <= 0) {

      clearInterval(downloadTimer);
      console.log("time is up");

    }
  }, 1000);
}

function nextQuestion() {
  // var questionContent = question;
  if (currentSet < trivia.length) {


    var questionContent = trivia[currentSet].question;
    console.log(trivia[currentSet].question);
    $("#question").append(questionContent + "<br>");

    var choicesLength = trivia[currentSet].choices.length;

    for (var i = 0; i < choicesLength; i++) {

      //prints out the answers with radios
      var check = (trivia[currentSet].choices[i]);
      $("#question").append("<label><input type=radio name=choice id=choices" + i +" value=" + check + " >" +" " +check +" " + "</input></label>");


    }

    //submit button
    $("#question").append("<br>" + "<button id = submit>" + "Submit" + "</button>");

    $("#submit").on('click', function (event) {

      //  var textValue = $('input:radio:checked').val(); //THIS WORKS FOR VALUES

      var textValue = $('input:radio:checked')[0].nextSibling.data;
      console.log(textValue);
      results(textValue);
      //  $("#question").empty();


    });

    // currentSet++;
    // console.log(currentSet);


  }



}

function results(e) {

  var userAnswer = e;

  console.log("the user picked: " + userAnswer);
  var computerAnswer = trivia[currentSet].answer
  console.log("this is the computer answer: ==> " + computerAnswer)

  if (userAnswer = computerAnswer) {
    correct++;
    currentSet++
    console.log(currentSet);
    console.log("correct answer");
    $("#question").empty();
    nextQuestion();
  } else {
    incorrect++;
    currentSet++
    console.log(currentSet);
    console.log("incorrect answer");
    $("#question").empty();
    nextQuestion();

  }



}