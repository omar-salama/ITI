var i = 0;
var imgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
function next() {
    if (i < imgs.length - 1) {
        i++;
        document.getElementById("myImg").src = imgs[i];
    }
}

// var currSource = document.getElementById("myImg").src;
// len = currSource.length;
// imgNum = currSource.charAt(len - 5);
// i = imgNum;

function previous() {
    if (i != 0) {
        i--;
        document.getElementById("myImg").src = imgs[i];
    }
}

var timer;

function swapImages() { 
    clearInterval(timer);
    next();
    if (i == imgs.length - 1) {
        i = 0;
    }
    timer = setTimeout(swapImages,1500); 
}

function stop() {
    clearTimeout(timer);
}