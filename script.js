// // Mobile navigation toggle
// const menuToggle = document.getElementById('menu-toggle');
// const mainNav = document.getElementById('main-nav');

// if (menuToggle && mainNav) {
//   menuToggle.addEventListener('click', () => {
//     const isOpen = mainNav.classList.toggle('open');
//     menuToggle.classList.toggle('open', isOpen);
//     menuToggle.setAttribute('aria-expanded', String(isOpen));
//   });

//   // Close menu when a nav link is clicked (mobile)
//   mainNav.querySelectorAll('a').forEach((link) => {
//     link.addEventListener('click', () => {
//       mainNav.classList.remove('open');
//       menuToggle.classList.remove('open');
//       menuToggle.setAttribute('aria-expanded', 'false');
//     });
//   });
// }
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
        if (window.innerWidth > 1024) {
            mainNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

}