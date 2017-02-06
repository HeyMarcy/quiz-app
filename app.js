
var state = {
    questions: ["1. Which is considered an average credit score on the FICO scale?",
    "2. In order to avoid a penalty tax, distributions from an IRA must begin the year in which you attain the age of:",
    "3. If you check your credit reports once a year, how much will that typically cost?",
    "4. When do you pay taxes on the money you put into a traditional 401(k)?",
    "5. What is the biggest cause of personal bankruptcy in the United States?"
  ],
    answers: [["400", "630", "720", "1440"], ["55", "59 1/2", "65", "70 1/2"], ["$90", "$0", "$30", "$60"],
    ["When you withdraw the money", "Never, if you wait until retirement", "When you earn the money", "Every year, by April 15"],
    ["Job loss", "Medical bills", "Divorce", "Failure to stick to a budget"]]
    correctAnswers: [2,4,2,1,2], //Note that these are not by index at this point
    score: 0
}


var splashTemplate = '<h1>Financial Literacy Quiz</h1>' + 
    '<h4> Terry and marcy have teamed up to test your financial literacy!</h4>'  +
    '<button>Let\'s go!</button>'

var quizTemplate = '<p>' +qIndicator + '</p>' + 
                    '<h4>'+ currentQuestion + '</h4>' +
                    '<ul>'
