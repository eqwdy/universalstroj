const popup = document.getElementById("popup");
const popupInner = document.getElementById("popupInner");
const popupClose = document.getElementById("popupClose");
function openPopup() {
  popup.setAttribute("aria-hidden", "false");
}
function closePopup() {
  popup.setAttribute("aria-hidden", "true");
}
function togglePopup() {
  openPopup();
  setTimeout(closePopup, 3000);
}

function redactPopup(text) {
  popupInner.textContent = text;
}

popupClose.addEventListener("click", closePopup);
