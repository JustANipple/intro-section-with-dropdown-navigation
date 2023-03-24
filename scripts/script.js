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
    if(this.getAttribute("src").includes("down")) {
        this.setAttribute("src", "images/icon-arrow-up.svg");
        this.parentNode.parentNode.children[1].style.display = "block";
    } else {
        this.setAttribute("src", "images/icon-arrow-down.svg");
        this.parentNode.parentNode.children[1].style.display = "none";
    }
}
