var video = document.getElementById("video");
var playButton = document.getElementById("play-pause");
var skipBackward = document.getElementById("skip-backward");
var skipForward = document.getElementById("skip-forward");
var muteButton = document.getElementById("mute");
var fullScreenButton = document.getElementById("full-screen");
var seekBar = document.getElementById("seek-bar");
var volumeBar = document.getElementById("volume-bar");
var speedBar = document.getElementById("speed-bar");

// play/pause
playButton.addEventListener("click", function() {
    if (video.paused == true) {
        video.play();
        playButton.innerHTML = "Pause";
    } else {
        video.pause();
        playButton.innerHTML = "Play";
    }
});
// skip forward/backward
skipBackward.addEventListener("click", function() {
    video.currentTime -= 10;
});
skipForward.addEventListener("click", function() {
    video.currentTime += 10;
});
// mute
muteButton.addEventListener("click", function() {
    if (video.muted == false) {
        video.muted = true;
        volumeBar.value = 0;
        muteButton.innerHTML = "Unmute";
    } else {
        video.muted = false;
        volumeBar.value = video.volume;
        muteButton.innerHTML = "Mute";
    }
});
// move the slider while the video is being played
video.addEventListener("timeupdate", function() {
    var value = video.currentTime / (video.duration / 100);
    seekBar.value = value;
});
// seek bar
seekBar.addEventListener("change", function() {
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
});
// volume bar
volumeBar.addEventListener("change", function() {
    video.volume = volumeBar.value;
});
// playback speed
speedBar.addEventListener("change", function() {
    video.playbackRate = speedBar.value;
});