var menu = document.querySelector(".menu");
var btnFile = document.querySelector(".btn-file");
var fileName = document.querySelector(".file-name");
var contentBox = document.querySelector(".content");
var bold = document.querySelector(".bold");
var underline = document.querySelector(".underline");
var italic = document.querySelector(".italic");
var color = document.querySelector(".background");
var newFile = document.querySelector(".new-file");
var saveTxt = document.querySelector(".save-txt");
var savePdf = document.querySelector(".save-pdf");
// hiện menu
btnFile.addEventListener("click", function (e) {
  menu.classList.toggle("show");
});
// chỉnh sửa văn bản soạn thảo
bold.addEventListener("click", function (e) {
  if (contentBox.style.fontWeight === "bold") {
    contentBox.style.fontWeight = "normal";
  } else {
    contentBox.style.fontWeight = "bold";
  }
});
underline.addEventListener("click", function (e) {
  if (contentBox.style.textDecoration === "underline") {
    contentBox.style.textDecoration = "none";
  } else {
    contentBox.style.textDecoration = "underline";
  }
});
italic.addEventListener("click", function (e) {
  if (contentBox.style.fontStyle === "italic") {
    contentBox.style.fontStyle = "normal";
  } else {
    contentBox.style.fontStyle = "italic";
  }
});

color
  .addEventListener("input", function () {
    var newColor = color.value;
    document.execCommand("foreColor", false, newColor);
  })

  // Thêm một file mới
  .newFile.addEventListener("click", function () {
    fileName.value = "";
    contentBox.innerHTML = "";
  });

//Save file pdf
savePdf.addEventListener("click", function () {
  html2pdf().from(contentBox).save(fileName.value);
  // console.log("1111");
});
