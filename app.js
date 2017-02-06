
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
    qIndicator = 0,
    
}


var splashTemplate = '<h1>Financial Literacy Quiz</h1>' + 
    '<h4> Terry and marcy have teamed up to test your financial literacy!</h4>'  +
    '<button>Let\'s go!</button>'


var responses = '<li> <button>' + state.questions[i].answers[j] + '</button></li>';

var quizTemplate = '<p>' +state.qIndicator+1 + '</p>' + 
                    '<h4>'+ state.questions[i].qText + '</h4>' +
                    '<ul>' + questionlist + '</ul>' + 
                    '<button> NEXT </button>';
