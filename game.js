// var userName = prompt('Hi! What\'s your name?');
// console.log('User input for userName: ' + userName);
// alert('Hello, ' + userName + '! Here\'s a page I made about me');
//
// var guess = prompt('Do I own a cat?');
// var counter = 0;
// console.log('User input for guess: ' + guess);
// if (guess.toUpperCase() === 'YES' || guess.toUpperCase() === 'Y') {
//   alert('That\'s right, ' + userName + '! But not just one!');
//   counter++;
// } else {
//   alert('Incorrect,' + userName + '!');
// }
//
// var gender = prompt('Am I a male?');
// console.log('User input for gender: ' + gender);
// if (gender.toUpperCase() === 'YES' || gender.toUpperCase() === 'Y') {
//   alert('Sorry, ' + userName + '! I am female, not male');
// } else {
//   alert('That\'s right ' + userName + '!');
//   counter++;
// }
//
// var baking = prompt('Do I enjoy baking?');
// console.log('User input for baking: ' + baking);
// if (baking.toUpperCase() === 'YES' || baking.toUpperCase() === 'Y') {
//   alert('Correct, ' + userName + '! I\'ll bake you something!');
//   counter++;
// } else {
//   alert('That\'s incorrect, ' + userName + '!');
// }
//
// var eyeColor = prompt('Do I have brown eyes?');
// console.log('User input for eyeColor: ' + eyeColor);
// if (eyeColor.toUpperCase() === 'YES' || eyeColor.toUpperCase() === 'Y') {
//   alert('You know me so well ' + userName + '! A little too well...');
//   counter++;
// } else {
//   alert('Wrong, ' + userName + '. You don\'t know me at all! But lets get to know each other!');
// }
//
// var talent = prompt('Can I beatbox?');
// console.log('User input for talent: ' + talent);
// if (talent.toUpperCase() === 'YES' || talent.toUpperCase() === 'Y') {
//   alert('I wish I was that cool ' + userName + '...');
// } else {
//   alert ('That is right, ' + userName + '! But it\'d be cool if I could!');
//   counter++;
// }
//
// var catsTotal = prompt ('How many cats do I have?'); //sixth question
// var guesses = 4;
// var guessLeft = 'You have ' + guesses + ' chances left';
// console.log('User input for catsTotal' + catsTotal);
//
// while (guesses > 0) {
//   if (parseInt(catsTotal) === 5) {
//     alert ('That is correct!');
//     counter++;
//     break;
//   } else if (parseInt(catsTotal) > 5) {
//     guesses--;
//     catsTotal = prompt('That is too many cats ' + guessLeft);
//   } else if (parseInt(catsTotal) < 5) {
//     guesses--;
//     catsTotal = prompt('That is too few cats! ' + guessLeft);
//   } else {
//     alert ('You didn\'t guess correctly! I have 5 cats total.');
//     break;
//   }
// }

var countries = ['PERU', 'MEXICO', 'CANADA', 'BOLIVIA'];
var visited = prompt('Which countries have I visited?');

for(i = 0; i < countries.length; i++) {
  if (visited.toUpperCase() === countries[i]) {
    alert('That is correct!');
    // counter++;
    break;
  } else {
    alert('I have not visited there yet!');
    break;
  }
}

alert('You got ' + counter + ' out of 7 questions right!');
