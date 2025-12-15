const burger = document.getElementById("burger");
const burgerBtn = document.getElementById("burgerBtn");
const burgerInner = document.getElementById("burgerInner");
const burgerClose = document.getElementById("burgerClose");
function openBurger() {
  burgerBtn.setAttribute("aria-expanded", "true");
}
function closeBurger() {
  burgerBtn.setAttribute("aria-expanded", "false");
}

burgerBtn.addEventListener("click", openBurger);
burgerClose.addEventListener("click", closeBurger);

const mediaQuery = window.matchMedia("(max-width: 767px)");
function handleScreenChange(e) {
  if (e.matches) {
    burger.setAttribute("aria-hidden", "false");
    burgerBtn.disabled = false;
  } else {
    burger.setAttribute("aria-hidden", "true");
    burgerBtn.disabled = true;
  }
}

handleScreenChange(mediaQuery);
mediaQuery.addEventListener("change", handleScreenChange);
