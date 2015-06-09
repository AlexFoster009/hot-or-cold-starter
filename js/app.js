
$(document).ready(function(){


	var secretNumber = 0;
	var userGuess = 0;
	var guessCount = 0;
	var finish = false;


	/* Generate Random Number */

	function numberGenerator(){

		secretNumber = (Math.floor(Math.random()*100));

		console.log('secret number = ' + secretNumber);
	}

	numberGenerator();


	/* Evaluate Positive subtraction */ 

	function positiveAmount() {

		if (userGuess / secretNumber === 1) { 

			setFeedback('You Win!');
			finish = true; 

			} else if ((secretNumber - userGuess) > 60.5){

				setFeedback("You're Freezing Cold!");

			} else if ( (secretNumber - userGuess) > 55.5) {

				setFeedback("Burrrr, it's super cold in here!");

			} else if ((secretNumber - userGuess) > 50.5) {

				setFeedback("Man its cold in here breh!");

			} else if ((secretNumber - userGuess) > 40.5){

				setFeedback('Yep its Cold...');

			} else if ((secretNumber - userGuess) > 30.5) {

				setFeedback('Oooo, its getting warm around here!');

			} else if ((secretNumber - userGuess) > 20.5){

				setFeedback('Phew its getting very warm...');

			} else if((secretNumber - userGuess) > 15.5) {

				setFeedback('Its almost to0 warm up in here!');

			} else if ((secretNumber - userGuess) > 7.5){

				setFeedback('Ouch! Its getting hot!');

			} else if ((secretNumber - userGuess) > 5.5) {

				setFeedback('Oh man its getting really hottt...');

			} else if ((secretNumber - userGuess) > 1.5) {

				setFeedback('Burning hot in here brah.');

			} else if ((secretNumber - userGuess) > 0.5) {

				setFeedback('It/s Getting so hot I gotta take my clothes off');
			}else {

			}


				

	}
		/* Evaluate Negative Subtraction */ 

	function negativeAmount() {

			if (userGuess / secretNumber === 1) { 

			setFeedback('You Win!');
			finish = true; 

			} else if ((secretNumber - userGuess) > 60.5){

				setFeedback("You're Freezing Cold!");

			} else if ( (secretNumber - userGuess) > 55.5) {

				setFeedback("Burrrr, it's super cold in here!");

			} else if ((secretNumber - userGuess) > 50.5) {

				setFeedback("Man its cold in here breh!");

			} else if ((secretNumber - userGuess) > 40.5){

				setFeedback('Yep its Cold...');

			} else if ((secretNumber - userGuess) > 30.5) {

				setFeedback('Oooo, its getting warm around here!');

			} else if ((secretNumber - userGuess) > 20.5){

				setFeedback('Phew its getting very warm...');

			} else if((secretNumber - userGuess) > 15.5) {

				setFeedback('Its almost to0 warm up in here!');

			} else if ((secretNumber - userGuess) > 7.5){

				setFeedback('Ouch! Its getting hot!');

			} else if ((secretNumber - userGuess) > 5.5) {

				setFeedback('Oh man its getting really hottt...');

			} else if ((secretNumber - userGuess) > 1.5) {

				setFeedback('Burning hot in here brah.');

			} else if ((secretNumber - userGuess) > 0.5) {

				setFeedback('Its Getting so hot I gotta take my clothes off');
			}else {

			}


	}


	/* compare difference of positive and negative */ 

	function compareAmount() {

		if (userGuess - secretNumber > 0)

			{ negativeAmount(); } else { positiveAmount(); }
	}


	/* Send message to user */ 

	function setFeedback(feedback) { 

		$('#feedback').text(feedback); 

	}


		/* Count user attempts */

		function setCount(count) {

			$('#count').text(guessCount);
		}


	/* Reset Game Function */ 

	function newGame() {

		guessCount = 0;
		finish = false;
		$('#userGuess').val('');
		$('#count').text(guessCount);
		$('#guessList li').remove();

		secretNumber = (Math.floor(Math.random()*100));
		setFeedback('Make a Guess!');

		console.log(' its working! the new number is ' + secretNumber);


	}




	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


  	/* start new game */ 

  	$('.new').click(function(){

  		newGame();
  	});



  	function checkInput() {

  		if(isNaN(userGuess)) {

  			alert(' please enter a number between 1 and 100');

  		} else if (userGuess === ' ') {

  			alert('well... you kinda need t0 enter a number.');

  		} else if (userGuess < 0 || userGuess > 100) {

  			alert('please enter a nubmer between 1 -100');
  		} else {

  			compareAmount();
  			console.log('User guess =' + userGuess);
  			$('#userGuess').val('');
  			guessCount++;
  			setCount(guessCount);

  			$('ul#guessList').append('<li>' + userGuess + '</li>');
  		}


  	}

  	/* get user input */ 


  	$('form').submit(function(event){

  		event.preventDefault();
  		//dont allow user to continue if game is finished!

  		if (!finish) {

  			userGuess = $('#userGuess').val();
  			checkInput();
  		} else {

  			setFeedback(' You have Already Won! Start a new game!')
  		}
  	});




});


