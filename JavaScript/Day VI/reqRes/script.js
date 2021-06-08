var myArr = [];

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td><img src='${data[i].avatar}'/></td>
                        <td>${data[i].first_name}</td>
                        <td>${data[i].last_name}</td>
                        <td>${data[i].email}</td>
                  </tr>`
        table.innerHTML += row;
    }
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var usersObj = JSON.parse(this.responseText);
        myArr = usersObj.data;
        // console.log(usersObj.data[1].first_name)
        buildTable(myArr);
    }
}

xhttp.open('GET', 'https://reqres.in/api/users');
xhttp.send();