var i = 0;
var win;
var txt = 'Hello! A robot is typing this message!';

function openWin() {
    win = window.open("child.html", "", "width=600, height=250");
}

function typeWriter() {
    setInterval(function() {
        if (i < txt.length) {
            document.getElementById("typer").innerHTML += txt.charAt(i);
            i++;
        }
        if (i == txt.length) {
            setTimeout(function() { window.close() }, 700);
        }
    }, 50)
    
}

