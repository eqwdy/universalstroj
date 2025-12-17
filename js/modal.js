const overlay = document.getElementById("overlay");
const form = document.getElementById("form");
function openOverlay() {
  overlay.setAttribute("aria-hidden", "false");
  form.focus();
}
function closeOverlay() {
  overlay.setAttribute("aria-hidden", "true");
}

function smartOpenOverlay(btn) {
  openOverlay();
  btn.setAttribute("aria-expanded", "true");
}
function smartCloseOverlay(btn) {
  closeOverlay();
  btn.setAttribute("aria-expanded", "false");
  btn.focus();
}
const openBtns = document.querySelectorAll('[aria-controls="overlay"]');
let openedBtn = null;
openBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    openedBtn = btn;
    smartOpenOverlay(openedBtn);
  });
});

const formClose = document.getElementById("formClose");
formClose.addEventListener("click", (e) => {
  if (openedBtn) {
    smartCloseOverlay(openedBtn);
  } else {
    closeOverlay();
  }
});

overlay.addEventListener("keydown", (e) => {
  // focus trap
  if (e.key === "Tab") {
    const focusableElements = form.querySelectorAll(
      'button, textarea, input, [tabindex]:not([tabindex="-1"])'
    );
    console.log(focusableElements);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift+Tab → если на первом элементе, прыгнуть на последний
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab → если на последнем элементе, прыгнуть на первый
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  if (e.key === "Escape") {
    if (openedBtn) {
      smartCloseOverlay(openedBtn);
    } else {
      closeOverlay();
    }
  }
});

const validator = new JustValidate("#form");
validator
  .addField("#formName", [
    {
      rule: "required",
      errorMessage: "Введите ваше имя!",
    },
  ])
  .addField("#formTel", [
    {
      rule: "required",
      errorMessage: "Введите ваш телефон!",
    },
  ])
  .onSuccess((e) => {
    e.preventDefault();

    const form = e.target;
    form.reset();
    console.log("Сработало!");
    togglePopup();
    if (openedBtn) {
      smartCloseOverlay(openedBtn);
    } else {
      closeOverlay();
    }
  });
