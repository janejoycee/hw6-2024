var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

var video = document.querySelector('.video');
var play_button = document.querySelector('#play');


play_button.addEventListener("click", function() {
	video.play();
	console.log("Play Video")
	// what does it mean by update the volume information
});

var pause_button = document.querySelector('#pause');

pause_button.addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
	console.log("Video is paused (true or false): " + video.paused)

});

var slow_button = document.querySelector("#slower");
var video = document.querySelector('.video');
var count = 0

function slow_down() {
    video.playbackRate *= 0.9;
    var percentage = video.playbackRate * 100; 
	count += 1;
    console.log('Slowed down speed:', Math.round(percentage) + "%");
};

slow_button.addEventListener("click", slow_down);

var speed_button = document.querySelector('#faster');

function speed_up() {
	var current_rate = video.playbackRate;
	console.log("Current rate: " + current_rate);

	var increase = count * 0.1;
	console.log("INC BY: " + increase);

	var new_rate = current_rate + increase;
	var percentage = new_rate * 100; 

	console.log('Speed up speed:', Math.round(percentage) + "%");
};

speed_button.addEventListener("click", speed_up);

var skip_button = document.querySelector("#skip")







