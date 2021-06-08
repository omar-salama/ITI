var i = 0;
var loop;
var imgs;
function animateLoop() {
    // document.getElementById("img" + i).src = "marble2.jpg";
    imgs = document.getElementsByTagName("img");
    imgs[i].src = "marble2.jpg";
    if (i != 0) {
        // document.getElementById("img" + (i - 1)).src = "marble1.jpg";
        imgs[i-1].src = "marble1.jpg";
    }
    i++;

    if (i == 5) { // reset looping
        i = 0;
    }
    if (i == 1) {
        // document.getElementById("img4").src = "marble1.jpg";
        lastImg = imgs.length - 1;
        imgs[lastImg].src = "marble1.jpg";
    }

    loop = setTimeout(animateLoop, 1000);
}

function stopAnimation() {
    clearTimeout(loop)
}

window.onload = function() {
    animateLoop()
};