(function() {
  var questions = [
	["Find the most frequent integer in an array"],
	["Find the only element in an array that only occurs once."],
	["Check if String is a palindrome"],
	["Check if a String is composed of all unique characters"]   
];


function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
)();