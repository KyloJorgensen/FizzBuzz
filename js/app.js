$(document).ready(function() {
	var amount
	
	function fizzBuzz() {
		for (var i = 1; i <= amount; i++) {

			function appends(anwser) {
				$('ul').append('<li>' + anwser + '</li>');
			}

			i % 3 !== 0 && i % 5 !== 0 ? appends(i) : false;
			i % 15 === 0 ? appends('FizzBuzz'): false;
			i % 3 === 0 ? appends('Fizz') : false;
			i % 5 === 0 ? appends('Buzz') : false;
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