$(document).ready(function() {
	var amount
	
	function fizzBuzz() {
		for (var i = 1; i <= amount; i++) {
			// var userInput = prompt("#, Fizz, Buzz, or FizzBuzz", i);
			var anwser = '';
			if (i % 3 !== 0 && i % 5 !== 0) {
				anwser = i;
			}
			else if (i % 15 === 0) {
					anwser = 'FizzBuzz';
			}
			else if (i % 3 === 0) {
					anwser = 'Fizz';
			}
			else if (i % 5 === 0) {
				anwser = 'Buzz';
			}
			$('ul').append('<li>' + anwser + '</li>');
		}	
	}

	while (true) {
		amount = prompt('Input a number, please.')
		if (amount === 'stop') {
			break;
		}
		amount +parseInt(amount)
		if (amount % 1 === 0) {
			fizzBuzz()
		}
	}


	
});