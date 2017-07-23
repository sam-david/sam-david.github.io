var myFirebaseRef = new Firebase("https://portfolio-clicks.firebaseio.com/");

function sendToFirebase(link) {
  // console.log(this);
	currentDate = new Date().getTime();
	myFirebaseRef.push({
	  date: currentDate,
	  link: link
	});
}

function bindFireLinks() {
  $('.fire-link').click(function(e) {
    e.preventDefault();
    sendToFirebase(this.id);
    if (this.target == "_blank") {
      window.open(this.href);
    } else {
      window.location.href = this.href;
    }
  })
}

$(document).ready(function() {
  bindFireLinks();
})
