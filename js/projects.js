$(document).ready(function() {

	console.log('project loaded');


	$("#tesla-top").mouseover(function() {
		mouseOverFadeIn('#tesla')
	});

	$("#tesla-top").mouseout(function() {
	  mouseOverFadeOut('#tesla')
	});

	$("#bike-top").mouseover(function() {
		mouseOverFadeIn('#bike')
	});

	$("#bike-top").mouseout(function() {
	  mouseOverFadeOut('#bike')
	});

	$("#coc-top").mouseover(function() {
		mouseOverFadeIn('#coc')
	});

	$("#coc-top").mouseout(function() {
	  mouseOverFadeOut('#coc')
	});

	$("#code-crush-top").mouseover(function() {
		mouseOverFadeIn('#code-crush')
	});

	$("#code-crush-top").mouseout(function() {
	  mouseOverFadeOut('#code-crush')
	});

	$("#who-to-follow-top").mouseover(function() {
		mouseOverFadeIn('#who-to-follow')
	});

	$("#who-to-follow-top").mouseout(function() {
	  mouseOverFadeOut('#who-to-follow')
	});


	function mouseOverFadeIn(imageID) {
		$(imageID + "-top").css('border-bottom','none');
	  $(imageID + "-bottom").fadeIn(100)
	}

	function mouseOverFadeOut(imageID) {
		$(imageID + "-top").css('border-bottom','solid #296B73 4px');
	  $(imageID + "-bottom").fadeOut(100);
	}

});