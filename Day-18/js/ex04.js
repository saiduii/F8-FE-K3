var numbers = [5, 1, 9, 8, 10];
var element = 4;

function insertSorted(numbers, element) {
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    if (element <= numbers[i]) {
      numbers.splice(i, 0, element);
      break;
    }
  }
  return numbers;
}
console.log(insertSorted(numbers, element));
