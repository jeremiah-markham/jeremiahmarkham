function displayThanks(e) {
    e.preventDefault();

    document.getElementById("thanks").classList.add("active");
    setTimeout(
        () => {
            document.getElementById("thanks").classList.remove("active");
        },
        2000);
}