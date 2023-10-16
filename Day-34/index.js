var lens = document.querySelector(".img-zoom-lens");
var original = document.querySelector(".img-original");
var result = document.querySelector(".img-zoom-result");
var pic = document.querySelector(".img-pic");
var copy = document.querySelector(".img-copy");

// result.style.width = pic.offsetWidth + "px";
// result.style.height = pic.offsetHeight + "px";

// Tính toán ảnh result
copy.style.width =
  (pic.offsetWidth / lens.offsetWidth) * result.offsetWidth + "px";
copy.style.height =
  (pic.offsetHeight / lens.offsetHeight) * result.offsetHeight + "px";
console.log(result.height, result.width);

pic.addEventListener("mousemove", function (e) {
  var x = e.clientX - pic.offsetLeft - lens.offsetWidth / 2;
  //   console.log(e.clientY - original.offsetTop);
  var y = e.clientY - pic.offsetTop - lens.offsetHeight / 2;
  //   console.log(x, y);
  //   console.log(pic.offsetTop);

  //Tính toán lens di chuyển trong khung ảnh
  if (y <= 0) {
    y = 0;
  } else if (y >= pic.offsetHeight - lens.offsetHeight) {
    y = pic.offsetHeight - lens.offsetHeight;
  }
  if (x <= 0) {
    x = 0;
  } else if (x >= pic.offsetWidth - lens.offsetWidth) {
    x = pic.offsetWidth - lens.offsetWidth;
  }

  lens.style.left = x + "px";

  lens.style.top = y + "px";

  // Tính phần trăm ảnh zoom của result

  var zoomX = (x / (pic.offsetWidth - lens.offsetWidth)) * 100;
  var zoomY = (y / (pic.offsetHeight - lens.offsetHeight)) * 100;
  console.log(zoomX, zoomY);

  copy.style.left = result.offsetWidth * zoomX + "%";
  copy.style.top = result.offsetHeight * zoomY + "%";
  console.log(zoomX);
});
// Đang bị lỗi zoom
