const menuIcon = document.querySelector(".nav_menu_icon");
const darkLayer = document.querySelector(".nav_dark_layer");
const menu = document.querySelector(".nav_menu");
const arrow = document.querySelector(".header_arrow");

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

arrow.addEventListener("click", (event) => {
    if(arrow.getAttribute("src").includes("down")) {
        arrow.setAttribute("src", "images/icon-arrow-up.svg");
    } else {
        arrow.setAttribute("src", "images/icon-arrow-down.svg");
    }
});