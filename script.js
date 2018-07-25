function startTime(year, month, day) {
	var birthday = new Date(year, month, day);
	console.log(birthday)
	var today = new Date()
	var timeDiff = today.getTime() - birthday.getTime()
	var SecDiff = Math.ceil(timeDiff / (1000)); 
	console.log(SecDiff)
	document.getElementById('ole').innerHTML = SecDiff;
	
}
