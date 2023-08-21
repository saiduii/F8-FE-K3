var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var newArr = [[], [], []];

var results = arr.forEach(function (value) {
  value.forEach(function (index) {
    if (typeof index === "string") {
      newArr[0].push(index);
    } else if (typeof index === "number") {
      newArr[1].push(index);
    } else if (typeof index === "boolean") {
      newArr[2].push(index);
    }
  });
});
console.log(`Kết quả:[${newArr}]`);

// Kết quả nó vẫn chưa giống yêu cầu lắm ạ
