const menuBtn = document.querySelector(".nav-btn");
const headerNav = document.querySelector(".header__nav");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("off");
  body.classList.toggle("no-scroll");
  if (headerNav.classList.contains("off")) {
    menuBtn.src = "./images/icon-hamburger.svg";
  } else {
    menuBtn.src = "./images/icon-close.svg";
  }
});
