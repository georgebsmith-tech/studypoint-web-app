const toggle_nav = document.querySelector("#toggle-nav");
const mainNav = document.querySelector("#main-nav");

toggle_nav.addEventListener("click", function () {
    mainNav.classList.toggle("nav-open");
    mainNav.classList.toggle("nav-close")

})