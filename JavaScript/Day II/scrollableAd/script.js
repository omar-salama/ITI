var i = 0;
var win;
var txt = 'Hello! A robot is typing this message!';

function openWin() {
    win = window.open("ad.html", "", "width=800, height=250");
}

function autoScroll() {
    setTimeout(function(){
        setInterval(function() {
            scrollBy(0,1);
    }, 5)
    }, 1000)    
    
}

// window.onload = function() {
//     setTimeout(function(){
//         setInterval(function() {
//             scrollBy(0,1);
//     }, 5)
//     }, 1000)    
// };