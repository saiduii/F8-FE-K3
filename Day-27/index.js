var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");
var dots = document.querySelector(".carousel-dots .active");
var buttons = document.querySelectorAll(".button-change-image");

var carouselItems = carouselInner.children;

var itemWidth = carouselInner.clientWidth;

var totalWidth = itemWidth * carouselItems.length;

console.log(totalWidth);

carouselInner.style.width = `${totalWidth}px`;

var position = 0;
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) >= totalWidth - itemWidth) {
    return;
  }
  position -= itemWidth;
  carouselInner.style.translate = `${position}px`;
});

prevBtn.addEventListener("click", function () {
  if (Math.abs(position) <= 0) {
    return;
  }
  position += itemWidth;
  carouselInner.style.translate = `${position}px`;
});

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    buttons.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
