var running = false;

var dir = 1;
var speed = 0.1;

function move() {
    if (running) {return;}

    running = true;
    let id = null;
    const elem = document.getElementById("move");
    let pos = 30;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        pos += dir * speed;
        if (pos > 70) {
            dir = -1;
        } else if (pos < 30) {
            dir = 1;
        }
        elem.style.left = pos + '%';
    }
}
