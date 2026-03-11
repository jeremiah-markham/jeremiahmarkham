var shaking = false;

function shake() {
    if (shaking) {return;}

    shaking = true;
    let id = null;
    const elem = document.getElementById("shake");
    let x = 0;
    let y = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    var i = 0;
    function frame() {
        if (i == 100) {
            clearInterval(id);
        }

        if (i % 2 == 0) {
            x -= 5;
        } else {
            x += 5;
        }
        elem.style.left = x + 'px';
        elem.style.right = x + 'px';
        i++;
    }
    shaking = false;
}