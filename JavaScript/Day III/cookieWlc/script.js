function register() {
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    
    var gender = document.getElementsByName("gender");
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            selectedGender = gender[i].value;
        }
    }
    var favColor = document.getElementById("favColor");
    for (var i = 0; i < favColor.length; i++) {
        if (favColor[i].selected) {
            selectedFavColor = favColor[i].value;
        }
    }

    var oldUser = getCookie("name");
    setCookie("age", age);
    setCookie("gender", selectedGender);
    setCookie("favColor", selectedFavColor);
    if (oldUser != name) {
        eraseCookie("visitsNo");
        setCookie("name", name);
    }    
    window.location.assign("greetings.html");
}