function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) {
  ev.preventDefault();

  if (ev.target.hasChildNodes()) {
        return false;
    }
}

function dropHandler(ev) {
    ev.preventDefault();

    if (ev.target.hasChildNodes()) {
        return false;
    }
    
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



// const source = document.getElementById("source");
// const target = document.getElementById("target");

// // Create an image and use it for the drag image
// // Use the image URL that you desire
// // const img = new Image();
// // img.src = "/shared-assets/images/examples/favicon32.png";

// source.addEventListener("dragstart", (ev) => {
//     ev.preventDefault();
//   // Set the drag's format and data. Use the event target's id for the data
//   ev.dataTransfer.setData("text/plain", ev.target.id);
// //   ev.dataTransfer.setDragImage(img, 10, 10);
// });

// target.addEventListener("dragover", (ev) => {
//   ev.preventDefault();
// });

// target.addEventListener("drop", (ev) => {
//   ev.preventDefault();
//   // Get the data, which is the id of the drop target
//   const data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// });



// function mouseoverHandler(ev) {
//     document.body.style.cursor="grab";
// }

// function mouseleaveHandler(ev) {
//     if (document.body.style.cursor=="grab") {
//         document.body.style.cursor="auto";
//     }
// }

// function dragstartHandler(ev) {
//     ev.preventDefault();

//     var e = document.getElementById(ev.target.id);
//     ev.dataTransfer.setData("text", ev.target.id);
    
//     ev.dataTransfer.setDragImage(e, 0, 0);

//     document.body.style.cursor="grabbing";
// }

// function dragoverHandler(ev) {
//     ev.preventDefault();
// }

// function dropHandler(ev) {
//     ev.preventDefault();
//     const data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
//     document.getElementById(data).style.borderColor = "red";
//     document.body.style.cursor="auto";
// }