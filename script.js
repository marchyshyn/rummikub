function rummikub() {
	var $currentTime = $('.current-time'),
	time = 1,
	alertSound = jQuery('.alert')[0],
	tomeOffSound = jQuery('.time-off')[0],
	$buttonRestart = $('.restart'),
	$buttonStart = $('.start');

	$buttonRestart.on('click', function() {

	})

		$buttonStart.on('click', function() {
		var count = setInterval(function(){
			$currentTime.text(time);
			time += 1;
			if( time == 45){
				alertSound.play();
			}
			if(time > 60){
				tomeOffSound.play();
				clearInterval(count);
			}
	}, 1000)
	})
}

$(window).ready(function(){
	rummikub();
})