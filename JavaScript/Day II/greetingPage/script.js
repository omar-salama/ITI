var queryStr = location.search;
var urlParams = new URLSearchParams(queryStr);

var title = urlParams.get('title');
var name = urlParams.get('name');
var email = urlParams.get('email');
var mobile = urlParams.get('mobile');
var addr = urlParams.get('addr');
var gender = urlParams.get('gender');

var welcome = document.getElementById("welcome");
var welcomeTxt = document.createTextNode("Welcome, " + title + " " + name);
welcome.appendChild(welcomeTxt);

document.write("<br>Email: " + email);
document.write("<br>Mobile number: " + mobile);
document.write("<br>Address: " + addr);
document.write("<br>Gender: " + gender);
