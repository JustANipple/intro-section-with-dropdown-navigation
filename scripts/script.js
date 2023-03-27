const menuIcon = document.querySelector(".nav_menu_icon");
const darkLayer = document.querySelector(".nav_dark_layer");
const menu = document.querySelector(".nav_menu");
const listHeaders = document.querySelectorAll(".list_header");

menuIcon.addEventListener("click", (event) => {
    if(!menuIcon.getAttribute("src").includes("close")) {
        menuIcon.setAttribute("src", "images/icon-close-menu.svg");
        darkLayer.style.opacity = "80%";
        menu.style.display = "block";
    } else {
        menuIcon.setAttribute("src", "images/icon-menu.svg");
        darkLayer.style.opacity = "0";
        menu.style.display = "none";
    }
});


for(arr of listHeaders) {
    arr.addEventListener("click", changeArrow);
}
function changeArrow() {
    const list = this.parentNode.children[1];
    if(this.children[1].getAttribute("src").includes("down")) {
        this.children[1].setAttribute("src", "images/icon-arrow-up.svg");
        list.style.animation = "dropList .5s forwards";
        list.style.transition = "all .5s ease-in-out";

    } else {
        this.children[1].setAttribute("src", "images/icon-arrow-down.svg");
        list.style.animation = "collapseList .5s forwards";
        list.style.transition = "all .5s ease-in-out";
    }
}