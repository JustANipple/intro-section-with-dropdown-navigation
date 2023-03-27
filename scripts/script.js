const menuIcon = document.querySelector(".nav_menu_icon");
const darkLayer = document.querySelector(".nav_dark_layer");
const menu = document.querySelector(".nav_menu");
const listHeaders = document.querySelectorAll(".list_header");
const button = document.querySelector(".content_button");
const listElems = document.querySelectorAll("li");

menuIcon.addEventListener("click", (event) => {
    if(!menuIcon.getAttribute("src").includes("close")) {
        menuIcon.setAttribute("src", "images/icon-close-menu.svg");
        darkLayer.style.display = "block";
        menu.style.display = "block";
    } else {
        menuIcon.setAttribute("src", "images/icon-menu.svg");
        darkLayer.style.display = "none";
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

button.addEventListener("mouseover", (event) => {
    button.style.backgroundColor = "transparent";
    button.style.color = "black";
    button.style.transition = "all .5s ease-in-out";
});

button.addEventListener("mouseout", (event) => {
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.transition = "all .5s ease-in-out";
});

for(elem of listElems) {
    elem.addEventListener("mouseover", zoomElem);
    elem.addEventListener("mouseout", dezoomElem);
}

function zoomElem() {
    this.style.transform = "scale(1.1)";
    this.style.transition = "transform .5s ease-in-out";
}

function dezoomElem() {
    this.style.transform = "scale(1)";
    this.style.transition = "transform .5s ease-in-out";
}