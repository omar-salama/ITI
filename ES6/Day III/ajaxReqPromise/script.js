function buildTable(data) {
  var tbody = document.getElementsByTagName("tbody")[0];

  data.forEach((element) => {
    var row = `<tr>
                        <td><img src='${element.avatar}' class='img-fluid'/></td>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.email}</td>
                  </tr>`;
    tbody.innerHTML += row;
  });
}

function getUsersData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText).data;
        resolve(data);
      } else if (this.readyState == 4) {
        reject("Something went wrong!");
      }
    };
    xhr.open("GET", url);
    xhr.send();
  });
}

reqResAPI = "https://reqres.in/api/users?page=2";
getUsersData(reqResAPI)
  .then((data) => {
    buildTable(data);
  })
  .catch((err) => {
    console.log(err);
  });
