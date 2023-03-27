const menuIcon = document.querySelector(".nav_menu_icon");
const darkLayer = document.querySelector(".nav_dark_layer");
const menu = document.querySelector(".nav_menu");
const arrow = document.querySelectorAll(".header_arrow");

menuIcon.addEventListener("click", (event) => {
    if(!menuIcon.getAttribute("src").includes("close")) {
        menuIcon.setAttribute("src", "images/icon-close-menu.svg");
        darkLayer.style.display = "block";
        menu.style.display = "grid";
    } else {
        menuIcon.setAttribute("src", "images/icon-menu.svg");
        darkLayer.style.display = "none";
        menu.style.display = "none";
    }
});


for(arr of arrow) {
    arr.addEventListener("click", changeArrow);
}
function changeArrow() {
    const list = this.parentNode.parentNode.children[1];
    if(this.getAttribute("src").includes("down")) {
        this.setAttribute("src", "images/icon-arrow-up.svg");
        list.style.display = "block";
        list.style.animation = "growDown .5s ease-in-out";

    } else {
        this.setAttribute("src", "images/icon-arrow-down.svg");
        list.style.animation = "growUp .5s ease-in-out";
    }
}