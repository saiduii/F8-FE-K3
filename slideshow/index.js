// Tạo các element

var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = document.querySelector(".carousel-nav .next");
var prevBtn = document.querySelector(".carousel-nav .prev");
var dots = document.querySelector(".carousel-dots .active");
var buttons = document.querySelectorAll(".button-change-image");
//-> Lấy ra danh sách các items

var carouselItems = carouselInner.children;

// console.log(carouselItems);

//-> Tính chiều rộng của 1 item
var itemWidth = carouselInner.clientWidth; // Lấy chiều rộng của 1 element
// console.log(itemWidth);

//Tính tổng chiều rộng các items
var totalWidth = itemWidth * carouselItems.length;

console.log(totalWidth);

//-> Cập nhật CSS
carouselInner.style.width = `${totalWidth}px`;

//Xử lý chuyển slide
var position = 0;
nextBtn.addEventListener("click", function () {
  //chặn nếu chạy hết slide
  if (Math.abs(position) >= totalWidth - itemWidth) {
    return;
  }

  position -= itemWidth;
  //   console.log(position);
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
