
var state = {
    questions: [
      {qText: "Which is considered an average credit score on the FICO scale?",
      answers: ["400", "630", "720", "1440"],
      correct: 1,
      explanation: "A FICO credit score of 630 to 689 is average; a score of 720 or higher is considered excellent. Most lenders use the FICO scale when deciding whether to give you a loan or a credit card and what interest rate you’ll pay if you are approved. FICO credit scores, developed by Fair Isaac Corp., range from 300 to 850."},
      {qText: "In order to avoid a penalty tax, distributions from an IRA must begin the year in which you attain the age of:",
      answers: ["55", "59 1/2", "65", "70 1/2"],
      correct: 3,
      explanation: "Most respondents knew that the IRS requires taxpayers to withdraw a minimum amount, known as a required minimum distribution, from their retirement accounts annually starting the year in which they turn 70½."},
      {qText: "If you check your credit reports once a year, how much will that typically cost?",
      answers: ["$90", "$0", "$30", "$60"],
      correct: 1,
      explanation: "Federal law guarantees you access to a free credit report once a year from each of the three major credit rating companies, Experian, TransUnion and Equifax."},
      {qText: "When do you pay taxes on the money you put into a traditional 401(k)?",
      answers: ["When you withdraw the money", "Never, if you wait until retirement", "When you earn the money", "Every year, by April 15"],
      correct: 0,
      explanation: "Taxes are deferred on earnings diverted to a 401(k) savings plan. You’ll pay regular income taxes at the time you withdraw the money, and you’ll pay a 10% penalty on top of your taxes for any withdrawals made before age 59½."},
      {qText: "What is the biggest cause of personal bankruptcy in the United States?",
      answers: ["Job loss", "Medical bills", "Divorce", "Failure to stick to a budget"],
      correct: 1,
      explanation: "Studies by NerdWallet Health and Harvard University have found that a majority of all personal bankruptcies in the U.S. are caused by medical expenses. Filers in most of those bankruptcy cases can’t pay their medical debts despite having health insurance."}],
    score: 0,
    qIndicator : 0,
    progTracker : [],
    answered: false, //We may not need this based on how we've solved the problem
    pageStatus: "splash",  /// splash, main or end are the three possible screens
}

function displayQuestion(state) {
    var responses = state.questions[state.qIndicator].answers.map(function (answer, index) {
        return ('<li> <button id="answer' + index + '" class="answerBtn ">' + answer + '</button></li>');
    });
    $('#question-number').html(state.qIndicator + 1);
    $('#question-text').html(state.questions[state.qIndicator].qText);
    $('#responses').html(responses.join(""));
    if (state.answered) {
        $('.answerBtn').prop('disabled', true);
        $("#next-button").prop('disabled', false);
        if (state.progTracker[state.qIndicator]) {
            $('#isCorrect').html("Correct!");;
        }
        else if (state.progTracker[state.qIndicator] == false) {
            $('#isCorrect').html("Incorrect");
        };
    } else {
        $('.answerBtn').prop('disabled', false);
        $("#next-button").prop('disabled', true);  
    }
};
    

function displayTracker(state) {
    var trackerArr = state.questions.map(function (question, index) {
        var token = index + 1;
        return ('<li>' + token + '</li>');
    });
    $('#tracker > ul').html(trackerArr.join(""));
}

function display(state){
    switch (state.pageStatus){
        case "splash":
            $('#splash').show();
            $('#end').hide();
            $('#main').hide();
            $('#tracker').hide();
            break;
        case "main":
            $('#splash').hide();
            $('#end').hide();
            $('#main').show();
            $('#tracker').show();
            displayQuestion(state);
            break;
        case "end":
            $('#splash').hide();
            $('#end').show();
            $('#main').hide();
            $('#tracker').show();
            break;
    }
    displayTracker(state);
    $('#correctCount').html(state.score);
    $('#totalCount').html(state.questions.length);

}

function eventHandlers() {
    display(state);
    $('#begin').click(function (event) {
        state.pageStatus = "main";
        display(state);
    });

  $('#next-button').click(function (event) {
      state.qIndicator += 1;
      if (state.questions[state.qIndicator] == undefined) {
          state.pageStatus = "end";
      }
      else {
          $("#next-button").prop('disabled', true);
          $('#isCorrect').html("");
      };
      state.answered = false;
      display(state);
  });

  $('#responses').on('click', '.answerBtn', function(event){
    state.answered = true;
    var correctAns = 'answer' + state.questions[state.qIndicator].correct
    state.progTracker.push(correctAns === $(this)[0].id);

    if (correctAns === $(this)[0].id){
      state.score ++;
    };
    display(state);

      
  });

  $('#goToStart').click(function(event){
    state.pageStatus = "splash";
    state.qIndicator = 0;
    state.score = 0;
    state.answered = false;
    state.progTracker = [];
    $('#isCorrect').html("");
    display(state);
  });
};

$(eventHandlers);
