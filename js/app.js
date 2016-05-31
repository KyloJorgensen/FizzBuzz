$(document).ready(function() {
	var fizz
	var buzz
	for (var i = 1; i <= 100; i++) {
		fizz = '';
		buzz = '';
		var userInput = prompt("#, Fizz, Buzz, or FizzBuzz", i);
		var anwser = ''
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				anwser = 'FizzBuzz';
			}
			else {
				anwser = 'Fizz';
			}
		}
		else if (i % 5 === 0) {
			anwser = 'Buzz';
		}
		else {
			anwser = i ;
		}

		if (anwser == userInput) {
			$('ul').append('<li><p>' + anwser + '--> Great Job</p></li>');
			if (i == 100) {
				$('ul').append('<li><p>YOU WIN!!!</p></li>');
			}
		}
		else {
			$('ul').append('<li><p>--> YOU LOSE!! correct anwser --> ' + anwser + '</p></li>');
			i = 100;
		}
	}
});