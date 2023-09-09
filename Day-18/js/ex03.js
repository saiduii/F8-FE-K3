var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 3];
var newArr = [];
for (var i = 0; i < numbers.length; i++) {
  if (newArr.includes(numbers[i])) {
    continue;
  }
  newArr[newArr.length] = numbers[i];
}
console.log(newArr);
