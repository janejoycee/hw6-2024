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
	video.volume
	console.log("Current volume: " + (video.volume * 100) + "%");

	// Video volume [ after ] play is not displaying correctly. Do you have the correct number? Did you remember the % sign?
});

var pause_button = document.querySelector('#pause');

pause_button.addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
	console.log("Video is paused (true or false): " + video.paused)

});
// paused function works

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
// slow down function works

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
// this is not speeding up the correct amount

var skip_button = document.querySelector("#skip")
var current_time = video.currentTime // current playback time in seconds

function advance_time() {
    if (video.ended) {
        video.currentTime = 10; 
        console.log('Restarted the video');
		console.log("Current time is " + Math.round(video.currentTime) + " seconds");

    } else {
        video.currentTime += 10; 
        console.log('Advanced playback time by 10 seconds')
		console.log("Current time is " + Math.round(video.currentTime) + " seconds");
    }
};

skip_button.addEventListener("click", advance_time);

var mute_button = document.querySelector("#mute");
function get_muted() {
    var current_vol = video.volume;
    if (mute_button.innerHTML == "Mute") {
        video.volume = 0.0;
        mute_button.innerHTML = "Unmute"; 
        console.log("The current volume is " + video.volume);
    } else {
        video.volume = current_vol;
        mute_button.innerHTML = "Mute"; 
        console.log("The current volume is " + video.volume);
    }
}

mute_button.addEventListener("click", get_muted);

var slider = document.querySelector("#slider");









