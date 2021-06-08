function buildTable(data) {
    var tbody = document.getElementsByTagName('tbody')[0];

    data.forEach(element => {
        var row = `<tr>
                        <td><img src='${element.avatar}' class='img-fluid'/></td>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.email}</td>
                  </tr>`
        tbody.innerHTML += row;

    });
}

function getUsersData(url) {
    new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    resolve(this.responseText);
                } else {
                    reject('Something went wrong!')
                }
            }
        }
        xhr.open('GET', url)
        xhr.send();
    }).then((usersObj) => {
        let usersData = JSON.parse(usersObj).data;
        buildTable(usersData);
    }).catch(console.log());
}

reqResAPI = 'https://reqres.in/api/users?page=2';
getUsersData(reqResAPI);