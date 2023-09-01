var numbers = [1, 2, 3, 4, 5];
//Tính tổng của dãy số trên
Array.prototype.reduce2 = function (callback, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (i; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};
var result = numbers.reduce2((prev, value) => {
  return prev + value;
});
console.log(result);
