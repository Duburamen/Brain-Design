const hamburger = document.querySelector(".header__hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu__link");

hamburger.addEventListener("click", () => {
  const isOpened = hamburger.getAttribute("aria-expanded");
  if (isOpened === "false") {
    hamburger.setAttribute("aria-expanded", "true");
    mobileMenu.classList.toggle("active");
  } else {
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("active");
  }
});

mobileLinks.forEach((mobileLink) => {
  mobileLink.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("active");
    }
  });
});
