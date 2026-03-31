document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const topbarHeight = document.querySelector(".topbar").offsetHeight;

    window.addEventListener("scroll", () => {
        // Als we verder scrollen dan de topbar, maak de navbar sticky
        if (window.scrollY > topbarHeight) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    });
});
