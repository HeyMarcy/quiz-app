
var state = {
    questions: [
        {qText: "1. Which is considered an average credit score on the FICO scale?",
        answers: ["400", "630", "720", "1440"],
        correct: 1},
        {qText: "2. In order to avoid a penalty tax, distributions from an IRA must begin the year in which you attain the age of:",
        answers: ["55", "59 1/2", "65", "70 1/2"],
        correct: 3},
        {qText: "3. If you check your credit reports once a year, how much will that typically cost?",
        answers: ["$90", "$0", "$30", "$60"],
        correct: 1},
        {qText: "4. When do you pay taxes on the money you put into a traditional 401(k)?",
        answers: ["When you withdraw the money", "Never, if you wait until retirement", "When you earn the money", "Every year, by April 15"],
        correct: 0},
        {qText: "5. What is the biggest cause of personal bankruptcy in the United States?",
        answers: ["Job loss", "Medical bills", "Divorce", "Failure to stick to a budget"],
        correct: 1}],
    score: 0,
    qIndicator : 0,
    progTracker : [],
    answered: false,

}

function displayQuestion(state){
  $('#splash').addClass("hidden");
  $('#main').removeClass("hidden");
  var responses = state.questions[state.qIndicator].answers.map(function (answer, index){
    return ('<li> <button id="answer'+ index +'" class="answerBtn ">'+ answer +'</button></li>');
  });
  $('#question-number').html(state.qIndicator+1);
  $('#question-text').html(state.questions[state.qIndicator].qText);
  $('#responses').html(responses.join(""));
    if (state.answered){
        $("#isCorrect").html(state.progTracker[state.qIndicator]); 
    };
};

function eventHandlers(){
  $('#begin').click(function(event){
      displayQuestion(state);
  });
  $('#next-button').click(function(event){
      state.qIndicator += 1;
      displayQuestion(state);
  });
    $('#responses').on('click', '.answerBtn', function(event){
        state.answered = true;
        var correctAns = 'answer' + state.questions[state.qIndicator].correct
//        console.log(correctAns);
//        console.log($(this)[0].id);
        state.progTracker.push(correctAns === $(this)[0].id);
         $("#next-button").removeClass('disabled'); 
    })  
};


$(eventHandlers);
