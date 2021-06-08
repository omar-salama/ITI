var bandsList = document.getElementById("bands");
var namesList = document.getElementById("names");

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var bandsObj = JSON.parse(this.responseText);
        for (key in bandsObj) {
            var opt = document.createElement('option');
            opt.innerHTML = key;
            opt.value = key;
            bandsList.appendChild(opt)
        }
    }
}
xhttp.open('GET', "rockbands.json");
xhttp.send();

function getNames(bandName) {
    while (namesList.firstChild.nextElementSibling.nextElementSibling) {
        namesList.removeChild(namesList.lastChild);
      }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var bandsObj = JSON.parse(this.responseText);
            for (i = 0; i < bandsObj[bandName].length; i++) {
                    var opt = document.createElement('option');
                    opt.innerHTML = bandsObj[bandName][i].name;
                    opt.value = bandsObj[bandName][i].value;
                    namesList.appendChild(opt)
            }
        }
    }
    xhttp.open('GET', "rockbands.json");
    xhttp.send();
}

function visitWebSite(website) {
    window.open(website, '_blank', 'top=150,left=200,width=600,height=400');
}