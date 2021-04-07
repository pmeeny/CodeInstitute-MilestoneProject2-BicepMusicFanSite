var position = 0, choices, choiceOne, choiceTwo, choiceThree, choiceFour, correctAnswers = 0;
var usersAnswer;
var percentage=0;
var allAnswers = [];
allAnswers[0] = [];
allAnswers[1] = [];
allAnswers[2] = [];
allAnswers[3] = [];
var answerInformation=0;

var h1 = document.getElementsByTagName('time')[0], seconds = 0, minutes = 0, time;

var shuffledQuestions;

function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}


function displayQuestions(){
  if(position >= shuffledQuestions.length){

    $('#overall_result').html("You got "+correctAnswers+" of "+shuffledQuestions.length+" questions correct")
    $("#test_status").hide();
    $("#question").hide()
    $("#quiz_options").hide()
    $("#submit_answer").hide();
    $("#total_time_spent").html(document.getElementById("stopwatch").textContent);
    $(".results_table").show();

    updatePercentage();
    displayQuizResults();
    stopTimer();
    position = 0;
    correctAnswers = 0;
    return false;
  }

$("#test_status").html("Question "+(position+1)+" of "+shuffledQuestions.length);

question = questions[position].question;
choiceOne = shuffledQuestions[position].a;
choiceTwo = shuffledQuestions[position].b;
choiceThree = shuffledQuestions[position].c;
choiceFour = shuffledQuestions[position].d;

$('#question').html(position+1+ ". " +"<span>"+question+"</span>")
$('#optionA_label').html(choiceOne);
$('#optionB_label').html(choiceTwo);
$('#optionC_label').html(choiceThree);
$('#optionD_label').html(choiceFour);

updatePercentage();
}

$("#submit_answer").click(function submitAnswerClicked(){
  checkAnswer();
});


function updatePercentage(){
  percentage = percentage + 10;
  $(".progress-bar").html(percentage + "%");
  $('.progress-bar').css('width', percentage+'%').attr('aria-valuenow', percentage)
}

function displayQuizResults(){
    for (var i in allAnswers) {
      if(allAnswers[i][3] == true){
        $("#answers").append("<tr>")
        $("#answers").append("<td class='correct'>" + allAnswers[i][0] +"</td>");
        $("#answers").append("<td class='correct'>" + allAnswers[i][1] +"</td>");
        $("#answers").append("<td class='correct'>" + allAnswers[i][2] +"</td>");
        $("#answers").append("</tr>")
      }
      else{
        $("#answers").append("<tr>")
        $("#answers").append("<td class='incorrect'>" + allAnswers[i][0] +"</td>");
        $("#answers").append("<td class='incorrect'>" + allAnswers[i][1] +"</td>");
        $("#answers").append("<td class='incorrect'>" + allAnswers[i][2] +"</td>");
        $("#answers").append("<tr>")
      }
    }
  }

function checkAnswer(){
  choices = document.getElementsByName("choices");
 
  for(var selected=0; selected<choices.length; selected++){
    if(choices[selected].checked){
      usersAnswer = choices[selected].nextElementSibling.innerHTML;

      allAnswers[answerInformation][0] = shuffledQuestions[position].question;
      allAnswers[answerInformation][1] = usersAnswer;
      allAnswers[answerInformation][2] = shuffledQuestions[position].answer;

     // Users answer is correct 
     if(usersAnswer == shuffledQuestions[position].answer){
        allAnswers[answerInformation][3] = true;                               
      }
      else {
        allAnswers[answerInformation][3] = false;      
      }
      answerInformation++ 
    }
  }
  if(usersAnswer == shuffledQuestions[position].answer){
    correctAnswers++;
 
  }
  position++;
  displayQuestions();
}


shuffleQuestions()
displayQuestions();
startTimer();

// https://jsfiddle.net/Daniel_Hug/pvk6p/

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
        }
    }
    
    h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startTimer();
}
function startTimer() {
    time = setTimeout(add, 1000);
}

/* Stop timer */
function stopTimer() {
  console.log("in here")
    clearTimeout(time);
}
