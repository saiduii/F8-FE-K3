var getTotal = function (...number) {
  var total = 0;
  for (var value of number) {
    if (typeof value !== "number") {
      return "Dữ liệu không đúng";
    }
    total += value;
  }
  return total;
};
var result = getTotal(1, 2, 3, 4, 5);
console.log(result);
