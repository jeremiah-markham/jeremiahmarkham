// document.getElementById("save").toggleAttribute('onclick="createList(' + document.getElementById("name-field").textContent + ')"');

function createList() {
    var name = document.getElementById("name-field").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            window.location.replace("index.html");
        }
    };

    xhttp.open(
        "POST",
        "/todoapi/lists/",
        true
    );

    var myObj = {
        name: name
    };

    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(myObj));
}