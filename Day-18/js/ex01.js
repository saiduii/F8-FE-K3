var numbers = [1, 3, 5, 7, 9];

var max = numbers[0];
var min = numbers[0];
var maxIndex = 0;
var minIndex = 0;

for (var i = 1; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    maxIndex = i;
  }

  if (min > numbers[1]) {
    min = numbers[i];
    minIndex = i;
  }
}
console.log(`So lon nhat:${max} -Vi tri:${maxIndex}`);
console.log(`So be nhat:${min} -Vi tri:${minIndex}`);
