$(document).ready(function() {
	var amount
	
	function fizzBuzz() { // loops though the until inputed number.
		for (var i = 1; i <= amount; i++) {

			function appends(anwser) { // adds new words or numbers to the page.
				$('ul').append('<li>' + anwser + '</li>');
			}
			// decides what to print. 
			i % 3 !== 0 && i % 5 !== 0 ? appends(i) : false;
			i % 15 === 0 ? appends('FizzBuzz'): false;
			i % 3 === 0 ? appends('Fizz') : false;
			i % 5 === 0 ? appends('Buzz') : false;
		}	
	}

	while (true) { // loops prompt until an correct input is entered.
		amount = prompt('Input a number, please.')
		if (amount === 'stop') { //stops while loop if needed.
			break;
		}
		amount +parseInt(amount)
		if (amount % 1 === 0) {
			fizzBuzz()
			break;
		}
	}


	
});