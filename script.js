function startTime(year, month, day, id) {
	var birthday = new Date(year, month, day);
	var today = new Date();
	var timeDiff = today.getTime() - birthday.getTime()
	var SecDiff = Math.abs(Math.ceil(timeDiff / (1000*60*60*24))); 
	document.getElementById(id).innerHTML = SecDiff;
	
}
