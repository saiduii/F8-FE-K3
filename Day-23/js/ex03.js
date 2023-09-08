Array.prototype.push2 = function (...number) {
  for (var i = 0; i < number.length; i++) {
    this[this.length] = number[i];
  }
  return this.length;
};

var newArray = [1, 3, 5];
var result = newArray.push2(7, 9, 11);
console.log(newArray);
// Thêm các phần tử vào mảng cho sẵn
