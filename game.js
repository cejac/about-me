var userName = prompt('Hi! What\'s your name?');
console.log('User input for userName: ' + userName);
alert('Hello, ' + userName + '! Here\'s a page I made about me');
var counter = 0;

function qOne(){
  var questions = [
    'Do I own a cat?',
    'Am I a male?',
    'Do I enjoy baking?',
    'Do I have brown eyes?',
    'Can I beatbox?'
  ];

  var ans = [
    'YES',
    'NO',
    'YES',
    'YES',
    'NO'
  ];

  var corrAns = [
    'That\'s right, ' + userName + '! But not just one!',
    'That\'s right ' + userName + '!',
    'Correct, ' + userName + '! I\'ll bake you something!',
    'You know me so well ' + userName + '! A little too well...',
    'That is right, ' + userName + '! But it\'d be cool if I could!'
  ];

  var notAns = [
    'Incorrect, ' + userName + '!',
    'Sorry, ' + userName + '! I am female, not male',
    'That\'s incorrect, ' + userName + '!',
    'Wrong, ' + userName + '. You don\'t know me at all! But lets get to know each other!',
    'I wish I was that cool ' + userName + '..'
  ];

  for (var i = 0; i < questions.length; i++) {
    var userInput = (prompt(questions[i])).toUpperCase();
    if (userInput === ans[i]) {
      counter++;
      alert(corrAns[i]);
    } else {
      alert(notAns[i]);
    }
  }
}

function qTwo(){
  var catsTotal = prompt('How many cats do I have between 1 and 100?'); //sixth question
  var guesses = 4;

  while (guesses > 0) {
    if (parseInt(catsTotal) === 5) {
      alert('That is correct!');
      counter++;
      break;
    } else if (parseInt(catsTotal) > 5) {
      catsTotal = prompt('That is too many cats! You have ' + guesses + ' chances left.');
      guesses--;
    } else if (parseInt(catsTotal) < 5) {
      catsTotal = prompt('That is too few cats! You have ' + guesses + ' chances left.');
      guesses--;
    }
  }

  if (guesses < 1) {
    alert('You didn\'t guess correctly! I have 5 cats total.');
  }
}

function qThree(){
  var countries = ['PERU', 'MEXICO', 'CANADA', 'BOLIVIA'];
  var visited = prompt('Guess a Country I have visited?');
  var found = false;

  for (var j = 0; j < countries.length; j++) {
    if (visited.toUpperCase() === countries[j]) {
      alert('That is correct! Here is a list of all of the countries I have visted:  ' + countries.toString());
      found = true;
      counter++;
    }
  }

  if (!found) {
    alert('That is not correct! Here are the countries I have visited: ' + countries.toString());
  }
}

qOne();
qTwo();
qThree();

alert('You got ' + counter + ' out of 7 questions right!');
