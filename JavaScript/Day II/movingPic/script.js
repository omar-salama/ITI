var leftImg = document.getElementById("leftImg");
var rightImg = document.getElementById("rightImg");
var bottomImg = document.getElementById("bottomImg");

var i = 0;
var finished = false;
var looper;

function animateImgs() {
    clearInterval(looper);
    if (i < 455 && !finished) {
        i++;
    } else {
        finished = true;
        i--;
        if (i == 0) {
            finished = false;
        }
    }
    leftImg.style.left = i + "px";
    rightImg.style.right = i + "px";
    bottomImg.style.bottom = i + "px";

    looper = setTimeout(animateImgs, 1); // is it infinite loop?
}

function stopAnimation() {
    clearInterval(looper);
}