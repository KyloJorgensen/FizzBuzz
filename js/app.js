$(document).ready(function() {
	var fizz
	var buzz
	for (var i = 1; i <= 100; i++) {
		fizz = '';
		buzz = '';
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				$('ul').append('<li><p>FizzBuzz</p></li>')
			}
			else {
				$('ul').append('<li><p>Fizz</p></li>')
			}
		}
		else if (i % 5 === 0) {
			$('ul').append('<li><p>Buzz</p></li>')
		}
		else {
			$('ul').append('<li><p>' + i + '</p></li>')
		}
	}
});