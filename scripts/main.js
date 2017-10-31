var $submitBtn = $(".submit-btn");
var $userGuesses = $(".user-guesses");
var $feedback = $(".feedback");
var $userGuide = $(".user-guide");
var $input = $('input');
var $newGameBtn = $('.new-game-btn');

// generate a random number between 1 and 100
var goldenNumber = Math.floor(Math.random() * 100) + 1;
console.log("goldenNumber: ", goldenNumber);

var roundNumber = 1;

$submitBtn.click(function (ev) {
	var guess = $input.val().trim();
	if (guess !== '') {
		// Clear the input
		$input.val('');

		// convert the input guess into a number
		// and push it into the previous guesses
		guess = Number(guess);
		if (isNaN(guess)) return;

		$userGuesses.show();
		$userGuesses.append(' ' + guess);
		
		if (guess === goldenNumber) {
			$feedback.show();
			$feedback.text('right! you win');
			$feedback.css('background-color', 'green');
			$input.prop('disabled', true);
			$submitBtn.prop('disabled', true);
			$newGameBtn.show();
		} else {
			$userGuide.show();
			$feedback.show();
			$feedback.text('Wrong answer');
			if (guess > goldenNumber) {
				$userGuide.text('Last guess was too high');
			} else {
				$userGuide.text('Last guess was too low');
			}
		}

		roundNumber += 1;
		if (roundNumber === 11) {
			$userGuide.hide();
			$feedback.text('GAME OVER YOU LOSE');
			$input.prop('disabled', true);
			$submitBtn.prop('disabled', true);
			$newGameBtn.show();
		}
		
	}
});

$newGameBtn.click(function () {
	location.reload();
});