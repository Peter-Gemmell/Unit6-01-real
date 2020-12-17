var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess= prompt('Pick a Number any Number out of 6. Will you guess correctly to the Rdm Number Generator?');

if (parseInt(guess) == randomNumber ) {

  document.write('<p>That is Correct</p>');

} else {

  document.write('<p> Thats Incorrect, Twas '  + randomNumber + '</p>');

}