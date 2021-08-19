/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2023/01/09 08:50:56') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	$(this).html('This offer has expired!')
		.parent().addClass('disabled');
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);

$(".move-area").mousemove(function(event) {
	var eye = $(".eye");
	var x = (eye.offset().left) + (eye.width() / 2);
	var y = (eye.offset().top) + (eye.height() / 2);
	var rad = Math.atan2(event.pageX - x, event.pageY - y);
	var rot = (rad * (180 / Math.PI) * -1) + 180;
	eye.css({
	  '-webkit-transform': 'rotate(' + rot + 'deg)',
	  '-moz-transform': 'rotate(' + rot + 'deg)',
	  '-ms-transform': 'rotate(' + rot + 'deg)',
	  'transform': 'rotate(' + rot + 'deg)'
	});
  });