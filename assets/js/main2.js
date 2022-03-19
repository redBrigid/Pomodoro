// //(function ($) {
// 	let x = document.querySelector('p').innerHTML;
// console.log('dsdsds')
// 	document.querySelector('start').addEventListener('click', startPomodoro);
// 	document.querySelector('break').addEventListener('click', startBreak);
// 	document.querySelector('pause').addEventListener('click', pause);
// 	document.querySelector('unpause').addEventListener('click', unpause);

// 	// let gw2data = fetch("https://api.guildwars2.com/v2/items/6?lang=en")//recipes/7319")
// 	// 	.then(res => res.json())
// 	// 	.then(data => {
// 	// 		document.querySelector('img').src = data.icon;
// 	// 		console.log(data)
// 	// 	});

// 	let seconds = -1;

// 	let clock;

// 	function pause() {
// 		clearInterval(clock);
// 	}

// 	function unpause(){
// 		countDown();
// 	}

// 	function startPomodoro() {
// 		seconds = 60 * 25;
// 		document.querySelector('title').innerHTML = "Pomodoro Session"
// 		countDown();
// 	}

// 	function startBreak() {
// 		seconds = 60 * 5;
// 		document.querySelector('title').innerHTML = "Break"
// 		countDown();
// 	}

// 	function countDown() {
// 		console.log('sdsdsd',clock)
// 		clearInterval(clock);
// 		document.querySelector('pomodoro').innerHTML =
// 			`${Math.floor(seconds / 60)}:${(seconds % 60 < 10) ? "0" + seconds % 60 : seconds % 60}`;
// 		clock = setInterval(() => {
// 			//secondsLeft = seconds;
// 			seconds--;
// 			seconds < 0
// 				? clearInterval(clock)
// 				: document.querySelector('p+p').innerHTML = `${Math.floor(seconds / 60)}:${(seconds % 60 < 10) ? "0" + seconds % 60 : seconds % 60}`;
// 		}, 1000);
// 	}

// //})();