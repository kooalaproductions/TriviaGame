$(document).ready(function () {

  // event listeners
  $("#remaining-time").hide();
  $("#choices").hide();
  $("#results").hide();



var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timeLeft =21;//1 more second than displayed because it lags to display current run time
var currentSet = 0;//use this to loop through the questions and answer choices

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


]
//game starts when start button is clicked
$("#start").on('click', function (event) {
  $("#remaining-time").show();
  
  startGame();
  

});

function startGame() {
  $("#start").hide();
  timer();
  

}

function timer() { //timer for quiz
  var downloadTimer = setInterval(function () {
    $("#timer").html("Time Remaining: " + timeLeft + " Seconds");
    timeLeft = timeLeft -1;
    $("#timer").html("Time Remaining: " + timeLeft + " Seconds");

    if (timeLeft <= 0) {

      clearInterval(downloadTimer);
      console.log("time is up");
      endGame();

    }
  }, 1000);
  nextQuestion();
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
      $("#question").append('<label><input type="radio" value="' + check + '" name="choice">' + check + " " + '</input></label>');
    }

    //submit button
    $("#question").append("<br>" + "<button id = submit>" + "Submit" + "</button>");

    $("#submit").on('click', function (event) {

       var textValue = $('input:radio:checked').val(); //THIS WORKS FOR VALUES

      // var textValue = $('input:radio:checked')[0].nextSibling.data;//this works for text
      console.log(textValue);
      results(textValue);
      if(currentSet === trivia.length){
        endGame();
      }
    });
  }
}

function results(e) {

  var userAnswer = e;

  console.log("the user picked: " + userAnswer);
  console.log("this is the type of USER choise----: " + typeof userAnswer);

  console.log("-----------------------");
  var computerAnswer = trivia[currentSet].answer;

  console.log("this is the computer answer: ==> " + computerAnswer);
  console.log("this is the type of computer choice:" + typeof computerAnswer);

  if (userAnswer === computerAnswer) {

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
  unanswered = trivia.length - currentSet;

}

function endGame(){

  $("#question").empty();
  timeLeft = 0
  $("#timer").html("All Done!!!");

  // $("#timer").html("Time Remaining: " + timeLeft + " Seconds");
  $("#question").html("<div class= correct>" + " Correct answers: " + correct + "</div>" +"<br>");
  $("#question").append("<div class= incorrect>" + " Incorrect answers: " + incorrect + "</div>" +"<br>");
  $("#question").append("<div class= unanswered>" + " Unanswered: " + unanswered + "</div>" +"<br>");
 
}

});

//print out results 
//correct answers: 
//incorrect answers: 
//unanswered:
