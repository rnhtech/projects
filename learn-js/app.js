$(document).ready(function() {
	$('.scrollspy').scrollSpy();


	//Exercises buttons handlers
	$('#operators-exe-btn').click(function(){
		$('.operators-iframe').toggle('slow', function() {
			/*$('.operators-iframe').removeClass('hidden');*/
		});

	});

	$('#variables-exe-btn').click(function(){
		$('#variables-iframe').toggle('slow', function() {
		});
	});
});
