var myDataRef = new Firebase('https://co2-sciences.firebaseio.com/');
      

function submitContact () {
	console.log("ok");
	var contact = $('#email').val();
	myDataRef.push(contact);
	$('#email').val("");
      alertify.alert("Thank you for your interest");
      // alertify.log("Thank you for your interest");
}

      // $('#submit').keypress(function (e) {
      //   if (e.keyCode == 13) {
      //     var name = $('#nameInput').val();
      //     var text = $('#messageInput').val();
      //     myDataRef.set('User ' + name + ' says ' + text);
      //     $('#messageInput').val('');
      //   }
      // });