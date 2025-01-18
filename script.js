//your JS code here. If required.
let timer = document.getElementById('timer');
let CurrDate = new Date();
setInterval(
	function(){
		CurrDate = new Date();
		timer.innerHTML = CurrDate.toLocaleString();
	},1000
);