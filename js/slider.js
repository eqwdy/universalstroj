const slider = document.querySelector(".slider__images");
const slides = document.querySelectorAll(".slider__images img");
const prevBtn = document.querySelectorAll(".slider__button")[0];
const nextBtn = document.querySelectorAll(".slider__button")[1];

let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));
