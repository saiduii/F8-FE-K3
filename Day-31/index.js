var sortableList = document.querySelector(".sortable-list");
var items = sortableList.querySelectorAll(".item");
items.forEach(function (item) {
  item.addEventListener("dragstart", function () {
    // thêm một cờ dragging dùng để nhận biệt item nào đang được kéo thả
    setTimeout(function () {
      item.classList.add("dragging");
    }, 0);
  });
  // Xóa cờ dragging khi hoàn tất việc kéo thả
  item.addEventListener("dragend", function () {
    item.classList.remove("dragging");
  });
});
var initSortableList = function (e) {
  e.preventDefault();
  var draggingItem = document.querySelector(".dragging");
  // Lấy ra tất cả phần tử trừ phần tử đang được kéo thả
  var siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")]; // Tạo ra một list ảo giống list tương tự để thao tác với item

  //Tìm ra vị trí của item mới
  var nextSibling = siblings.find(function (sibling) {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });
  //Thêm item vào vị trí đó
  sortableList.insertBefore(draggingItem, nextSibling);
};
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", function (e) {
  e.preventDefault();
});
// hành động đổ bóng của item khi kéo thả
