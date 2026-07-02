const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        menuToggle.setAttribute(
            "aria-expanded",
            mainNav.classList.contains("open")
        );
    });

    document.querySelectorAll(".main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

}