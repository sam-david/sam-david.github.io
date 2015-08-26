var myFirebaseRef = new Firebase("https://portfolio-clicks.firebaseio.com/");

function fireLink(link) {
	currentDate = new Date().getTime();
	console.log(currentDate);
	myFirebaseRef.push({
	  date: currentDate,
	  link: link
	});
}