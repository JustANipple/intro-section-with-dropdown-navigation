const menuIcon = document.querySelector(".menu_icon");
const darkLayer = document.querySelector(".menu_back_layer");
const menu = document.querySelector(".menu");

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
