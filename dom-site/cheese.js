var acc = document.getElementsByClassName("cheese");

function changeCheese(cheese) {
    for (var i = 0; i < acc.length; i++) {
        if (acc[i].id == cheese) {
            document.getElementById(cheese).classList.add("active");
            document.getElementsByName(cheese)[0].classList.add("active");
            document.getElementById("cheese-index").textContent = (i+1) + "/" + acc.length;
        } else {
            acc[i].classList.remove("active");
            document.getElementsByName(acc[i].id)[0].classList.remove("active");
        }
    }
}

function nextCheese() {
    var cheeseIdx = document.getElementById("cheese-index");
    var i = cheeseIdx.textContent.split("/")[0]-1;
    i++;
    if (i >= acc.length) {
        i = 0;
    }
    changeCheese(acc[i].id);
}

function validateCheese(event) {
    if (event.key != "Enter") {
        document.getElementById("input-response").classList.remove("visible");
        return;
    }

    var input = document.getElementById("cheese-input");
    // var cheese = acc.getElementsByClassName("active")[0];
    
    var cheese;
    for (var i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("active")) {
            cheese = acc[i].id;
            break;
        }
    }

    if (input.value.toLowerCase() == cheese) {
        nextCheese();
        document.getElementById("input-response").textContent = ["That's right!", "Correct!", "Exactly!", "Cheese connoisseur!"][Math.floor(Math.random() * 4)];
    }
    else {
        document.getElementById("input-response").textContent = ["That's not right.", "Incorrect.", "Not quite.", "Try again."][Math.floor(Math.random() * 4)];
    }
    input.value = "";
    document.getElementById("input-response").classList.add("visible");

    setTimeout(() => {
            document.getElementById("input-response").classList.remove("visible");
            
        }, 2000);
}