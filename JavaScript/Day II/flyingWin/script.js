var timer;
var win;

function createWin() {
    win = window.open("child.html","","width=200, height=150");
    timer = setInterval(function() {
        win.moveBy(5,5);
        win.focus();
    },50);

    setTimeout(function() {
        clearInterval(timer);
        timer = setInterval(function() {
        win.moveBy(-5,-5);
        win.focus();
        },50);

    }, 10000)
}

function stopWin() {
    clearInterval(timer);
    win.focus();
}