Array.prototype.filter2 = function (callback) {
  var result = [];

  for (var i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var newArray = arr.filter2(function (value) {
  return value >= 3;
});
console.log(newArray);
// Dùng hàm filter để lọc ra các số >=3
