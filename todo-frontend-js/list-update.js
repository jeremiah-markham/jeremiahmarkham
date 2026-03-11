createTable();

function deleteItem(itemId) {
    var listId = document.location.search.split("=")[1];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.location.reload();
        }
    };
    xhttp.open(
        "DELETE",
        "/todoapi/lists/" + listId + "/items/" + itemId,
        true
    );
    xhttp.send();
    // document.location.reload();
}

function saveList() {
    var listId = document.location.search.split("=")[1];

    var listName = document.getElementById("name-field").value;

    var listData = {
        name: listName
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open(
        "PUT",
        "/todoapi/lists/" + listId,
        true
    );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(listData));
}

function addItem() {
    var listId = document.location.search.split("=")[1];

    var itemName = document.getElementById("new-item-name").value;
    var itemDesc = document.getElementById("new-item-desc").value;
    var itemState = document.getElementById("new-item-state").value;
    var itemData = {
        name: itemName,
        description: itemDesc,
        state: itemState
    };

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 201) {
            document.location.reload();
        }
    };
    xhttp.open(
        "POST",
        "/todoapi/lists/" + listId + "/items/",
        true
    );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(itemData));

    //document.location.reload();
}

function saveItem(itemId) {
    var listId = document.location.search.split("=")[1];
    var itemName = document.getElementById(itemId+"name").value;
    var itemDesc = document.getElementById(itemId+"desc").value;
    // var itemState = document.getElementById(itemId+"state");
    var itemState = document.getElementById(itemId+"state").value;

    var itemData = {
        id: itemId,
        name: itemName,
        description: itemDesc,
        state: itemState
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open(
        "PUT",
        "/todoapi/lists/" + listId + "/items/" + itemId,
        true
    );
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(itemData));
}

function createTable() {
    // var listIdRegEx = RegExp("listId=*");
    // var listId = listIdRegEx.exec(document.location.search)[0].split("=")[1];
    var listId = document.location.search.split("=")[1];

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("name-field").value = myObj.list.name;
            // document.getElementById("name-field").style.color = "red";
        }
    };
    xhttp.open(
        "GET",
        "/todoapi/lists/" + listId,
        true
    );
    xhttp.send();

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText).items;
            var tableHTML =
                '<tr class="header"><th>Complete</th><th>Name</th><th>Description</th><th>State</th><th>Actions</th></tr>';
            for (var i = 0; i < myObj.length; i++) {
                var item = myObj[i];
                tableHTML += '<tr><td><input type="checkbox"></td><td><input id="'+item.id+'name" type="text" value="'+
                    item.name+'"></td><td><input id="'+item.id+'desc" type="text" value="'+item.description+'"></td><td>\
                    <select id="'+item.id+'state"><option value="in-progress">in-progress</option>\
                    <option value="complete">complete</option><option value="canceled">canceled</option></select></td>\
                    <td><button onclick="saveItem(\'' + 
                    item.id + '\')">Save</button><button onclick="deleteItem(\'' + 
                    item.id + '\')">Delete</button></td></tr>';
            }
            tableHTML += '<tr><td><input type="checkbox"></td><td><input type="text" id="new-item-name"></td><td>\
                            <input type="text" id="new-item-desc"></td><td><select id="new-item-state">\
                            <option value="in-progress">in-progress</option><option value="complete">complete</option>\
                            <option value="canceled">canceled</option></select></td><td>\
                            <button onclick="addItem()">Add</button></td></tr>';
            document.getElementById("item-table").innerHTML = tableHTML;
            for (var i = 0; i < myObj.length; i++) {
                var item = myObj[i];
                document.getElementById(item.id+"state").value = item.state;
            }
        }
    };
    xhttp.open(
        "GET",
        "/todoapi/lists/" + listId + "/items",
        true
    );
    xhttp.send();
}