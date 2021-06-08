document.getElementById("img").style.float = "right";
document.getElementById("nav").style.clear = "both";
document.getElementById("nav").style.listStylePosition = "inside";

document.getElementById("nav").style.listStyleType = "circle";

var newImg = document.createElement("img");
newImg.src = "dom.jpg";
newImg.id = "newImg";
document.getElementById("navigation").appendChild(newImg);
document.getElementById("newImg").style.float = "left";
