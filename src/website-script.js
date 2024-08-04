let menuOpened = false;

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bars").addEventListener("click", showMenu);
});

function showMenu() {
    if (menuOpened) {
        document.querySelector(".menu-parent").style.display = "none";
        menuOpened = false;
    } else if (!menuOpened) {
        document.querySelector(".menu-parent").style.display = "block";
        menuOpened = true;
    }
}
