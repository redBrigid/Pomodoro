(function($) {
	let x=document.querySelector('p').innerHTML;
	
	document.querySelector('button').addEventListener('click',startPomodoro);
	document.querySelector('button+button').addEventListener('click',pausePomodoro);
	
	let gw2data = fetch("https://api.guildwars2.com/v2/items/6?lang=en")//recipes/7319")
	.then(res=>res.json())
	.then(data=>{
		document.querySelector('img').src=data.icon;
		console.log(data)
	});
	
	let seconds=-1;
	
	let clock;
	
	function pausePomodoro(){
		clearInterval(clock);
	}
		
	function startPomodoro(){
		if(seconds<=0) seconds=60*25;
		const timeout = 1000*seconds;
		clock = setInterval(()=>{
		 secondsLeft=seconds;
		 seconds--;
		 seconds<0
			?clearInterval(clock)
			:document.querySelector('p+p').innerHTML=`${Math.floor(seconds/60)}:${(seconds%60<10)?"0"+seconds%60:seconds%60}`;
			
	 },1000);
	
	
	
	}
	
})();