const hamburger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
    const isOpened = hamburger.getAttribute('aria-expanded');
    if (isOpened === "false") {
        hamburger.setAttribute('aria-expanded', 'true');
        mobileMenu.classList.toggle('active');
    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('active');
    }
});
