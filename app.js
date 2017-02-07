
var state = {
    questions: [
        {qText: "Which is considered an average credit score on the FICO scale?",
        answers: ["400", "630", "720", "1440"],
        correct: 1},
        {qText: "In order to avoid a penalty tax, distributions from an IRA must begin the year in which you attain the age of:",
        answers: ["55", "59 1/2", "65", "70 1/2"],
        correct: 3},
        {qText: "If you check your credit reports once a year, how much will that typically cost?",
        answers: ["$90", "$0", "$30", "$60"],
        correct: 1},
        {qText: "When do you pay taxes on the money you put into a traditional 401(k)?",
        answers: ["When you withdraw the money", "Never, if you wait until retirement", "When you earn the money", "Every year, by April 15"],
        correct: 0},
        {qText: "What is the biggest cause of personal bankruptcy in the United States?",
        answers: ["Job loss", "Medical bills", "Divorce", "Failure to stick to a budget"],
        correct: 1}],
    score: 0,
    qIndicator : 0,
    progTracker : [],
    answered: false, //We may not need this based on how we've solved the problem

}

function displayQuestion(state){
  //do we want to display the current score anywhere?
  $('#splash').addClass("hidden");
  $('#main').removeClass("hidden");
  var responses = state.questions[state.qIndicator].answers.map(function (answer, index){
    return ('<li> <button id="answer'+ index +'" class="answerBtn ">'+ answer +'</button></li>');
  });
  $('#question-number').html(state.qIndicator+1);
  $('#question-text').html(state.questions[state.qIndicator].qText);
  $('#responses').html(responses.join(""));
  //console.log(state.progTracker[state.qIndicator]);
  if (state.answered){
    if (state.progTracker[state.qIndicator]){
      $('#isCorrect').html("Correct!");
    } else if (state.progTracker[state.qIndicator] == false){
      $('#isCorrect').html("Incorrect");
    };
  };
  //console.log(state.progTracker);
};

function eventHandlers(){
  $('#begin').click(function(event){
      displayQuestion(state);
  });
  $('#next-button').click(function(event){
      state.qIndicator += 1;
      //console.log(state.questions[state.qIndicator]);
      if (state.questions[state.qIndicator] == undefined){
        $('#main').addClass("hidden");
        $('#end').removeClass("hidden");
        $('#correctCount').html(state.score);
        $('#totalCount').html(state.questions.length);
      } else {
      $("#next-button").prop('disabled', true);
      $('#isCorrect').html("");
      displayQuestion(state);
    };
  });
  $('#responses').on('click', '.answerBtn', function(event){
    state.answered = true;
    var correctAns = 'answer' + state.questions[state.qIndicator].correct
//        console.log(correctAns);
//        console.log($(this)[0].id);
    state.progTracker.push(correctAns === $(this)[0].id);
    if (correctAns === $(this)[0].id){
      state.score ++;
    };
    displayQuestion(state);
    $('.answerBtn').prop('disabled', true);
    $("#next-button").prop('disabled', false);
  });
  $('#goToStart').click(function(event){
    $('#splash').removeClass("hidden");
    $('#end').addClass("hidden");
    state.qIndicator = 0;
    state.score = 0;
    state.answered = false;
    state.progTracker = [];
    $('#isCorrect').html("");
  });
};
state.answered

$(eventHandlers);
