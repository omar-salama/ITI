
if (!cookieExists("visitsNo")) {
    setCookie("visitsNo", 1);
    var visitsCounter = parseInt(getCookie("visitsNo"));
} else {
    var visitsCounter = parseInt(getCookie("visitsNo"));
    visitsCounter = visitsCounter + 1;
    setCookie("visitsNo", visitsCounter);

}

var name = getCookie("name");
var age = getCookie("age");
var gender = getCookie("gender");
var favColor = getCookie("favColor");


var imgTag = document.getElementById("genderImg");
gender == 'male' ? genderImg = '1.jpg' : genderImg = '2.jpg';
imgTag.src = genderImg;

var nameSpan = document.getElementById("name");
nameSpan.style.color = favColor;
nameSpan.innerHTML = name;

var counter = document.getElementById("counter");
counter.style.color = favColor;
counter.innerHTML = visitsCounter;