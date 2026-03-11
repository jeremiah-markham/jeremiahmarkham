createTable();

// function getPrevious() {
//     start = start - page;
//     if (start < 1) start = 0;
//     createTable(start);
// }

// function getNext() {
//     if (
//         document.getElementById("lists-table") &&
//         document.getElementById("lists-table").rows.length - 1 === page
//     )
//         start = start + page;
//     createTable(start);
// }

// function getId() {
//     var theLists = document.getElementsByName("selectedRow");
//     var i = theLists.length;
//     while (i--) {
//         if (theLists[i].checked) return theLists[i].value;
//     }
// }

function getList(listId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(
        "GET",
        "/todoapi/lists/" + listId,
        true
    )
    xhttp.send();
}

function deleteList(listId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(
        "DELETE",
        "/todoapi/lists/" + listId,
        true
    )
    xhttp.send();

    document.location.reload();
}

function createTable() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var myObj = JSON.parse(this.responseText).lists;
            var tableHTML =
                '<tr class="header"><th>List Name</th><th>Actions</th></tr>';
            for (var i = 0; i < myObj.length; i++) {
                var list = myObj[i];
                tableHTML += '<tr><td><a href="list-update.html?listId='+list.id+'">' + 
                    list.name + '</a></td><td><button onclick="deleteList(' + 
                    list.id + ')">Delete</button></td></tr>';
            }
            document.getElementById("lists-table").innerHTML = tableHTML;
        }
    };
    xhttp.open(
        "GET",
        "/todoapi/lists/",
        true
    );
    xhttp.send();
}