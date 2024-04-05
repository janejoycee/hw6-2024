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
	document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
	// console.log("Current volume: " + (video.volume) + "%");
});

var pause_button = document.querySelector('#pause');

pause_button.addEventListener("click", function() {
	video.pause()
	console.log("Pause Video")
	console.log("Video is paused (true or false): " + video.paused)

});
// paused function works

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video")
	video.playbackRate *= 0.9;
	console.log("Speed is " + video.playbackRate)

});

document.querySelector('#faster').addEventListener("click", function () {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log('Speed is ' + video.playbackRate);
});

// need help on increasing the speed up rate


var skip_button = document.querySelector("#skip");
var current_time = video.currentTime; // current playback time in seconds

function advance_time() {
    if (video.ended) {
        video.currentTime = 10; 
        console.log('Skip ahead');
		console.log("Current time is " + video.currentTime);

    } else {
        video.currentTime += 10; 
        console.log('Skip ahead');
		console.log("Current time is " + video.currentTime);
    }
};

skip_button.addEventListener("click", advance_time);

var mute_button = document.querySelector("#mute");

function get_muted() {
    if (mute_button.innerHTML == "Mute") {
        video.muted = true;
        mute_button.innerHTML = "Unmute"; 
        console.log(video.muted);
    } else { 
		video.muted = false;
        mute_button.innerHTML = "Mute"; 
        console.log("The current volume is " + video.volume);
		console.log("Unmute");
		console.log(video.muted);
    }
};

mute_button.addEventListener("click", get_muted);

var slider = document.querySelector("#slider");
var vol_info = document.querySelector("#volume");

slider.addEventListener("change", function () {
	video.volume = slider.value / 100;
	console.log("The current value is " + video.volume);
	vol_info.innerHTML = Math.round(video.volume * 100) + "%";
});

// var vintage = document.querySelector('#vintage');

// vintage.addEventListener("click", function() {
// 	video.style.borderRadius = '20px';
// 	video.style.border = '4px solid lightgrey'; 
// 	video.style.filter = 'grayscale(100%)';
// 	video.style.padding = '0';
// });

// document.querySelector('#orig').addEventListener("click", function () {
// 	video.style.borderRadius = '';
// 	video.style.border = ''; 
// 	video.style.filter = '';
// 	video.style.padding = '';
// });

document.querySelector('#vintage').addEventListener("click", function() {
	document.querySelector('#vintage').classList.remove("oldSchool");
}
);






