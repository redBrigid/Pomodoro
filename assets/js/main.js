/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {

		breakpoints.on('>medium', function () {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function () {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header.
	if ($banner.length > 0
		&& $header.hasClass('alt')) {

		$window.on('resize', function () { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function () { $header.removeClass('alt'); },
			enter: function () { $header.addClass('alt'); },
			leave: function () { $header.removeClass('alt'); }
		});

	}


	// document.querySelector('#start').addEventListener('click',startPomodoro);
	// document.querySelector('#pause').addEventListener('click',pausePomodoro);

	// let seconds=-1;

	// let clock;

	/////////////
	let x = document.querySelector('p').innerHTML;
	console.log('dsdsds')
	document.querySelector('#start').addEventListener('click', startPomodoro);
	document.querySelector('#break').addEventListener('click', startBreak);
	document.querySelector('#pause').addEventListener('click', pause);

	// let gw2data = fetch("https://api.guildwars2.com/v2/items/6?lang=en")//recipes/7319")
	// 	.then(res => res.json())
	// 	.then(data => {
	// 		document.querySelector('img').src = data.icon;
	// 		console.log(data)
	// 	});

	let seconds = -1;

	let clock;

	function pause() {
		if (seconds > 0) {
			clearInterval(clock);
			document.querySelector('#pause').removeEventListener('click', pause);
			document.querySelector('#pause').addEventListener('click', unpause);
			document.querySelector('#pause').innerHTML = 'Unpause'
		}
	}

	function unpause() {
		document.querySelector('#pause').removeEventListener('click', unpause);
		document.querySelector('#pause').addEventListener('click', pause);
		document.querySelector('#pause').innerHTML = 'Pause'
		countDown();
	}

	function startPomodoro() {
		unpause();
		seconds = 60 * 25;
		document.querySelector('#title').innerHTML = "Pomodoro Session"
		countDown();
	}

	function startBreak() {
		unpause();
		seconds = 60 * 5;
		document.querySelector('#title').innerHTML = "Break"
		countDown();
	}

	function countDown() {
		console.log('sdsdsd', clock)
		clearInterval(clock);
		document.querySelector('#pomodoro').innerHTML =
			`${Math.floor(seconds / 60)}:${(seconds % 60 < 10) ? "0" + seconds % 60 : seconds % 60}`;
		clock = setInterval(() => {
			//secondsLeft = seconds;
			seconds--;
			seconds < 0
				? clearInterval(clock)
				: document.querySelector('#pomodoro').innerHTML = `${Math.floor(seconds / 60)}:${(seconds % 60 < 10) ? "0" + seconds % 60 : seconds % 60}`;
		}, 1000);
	}


	/////////


	// function pausePomodoro(){
	// 	clearInterval(clock);
	// }

	// function startPomodoro(){
	// 	if(seconds<=0) seconds=60*25;
	// 	const timeout = 1000*seconds;
	// 	clock = setInterval(()=>{
	// 	 secondsLeft=seconds;
	// 	 seconds--;
	// 	 seconds<0
	// 		?clearInterval(clock)
	// 		:document.querySelector('#pomodoro').innerHTML=`${Math.floor(seconds/60)}:${(seconds%60<10)?"0"+seconds%60:seconds%60}`;

	//  },1000);



	// }

})(jQuery);