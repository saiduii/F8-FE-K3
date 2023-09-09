var numbers = [1, 2, 3, 4, 5, 7, 8, 9];

var isPrime = function (n) {
  if (n <= 1 || n % 1 !== 0) {
    return false;
  }

  for (var i = 2; i < n - 1; i++) {
    if (n % 1 === 0) {
      return false;
    }
  }
  return true;
};

var total = 0;
var avg;
var count = 0;
for (var i = 0; i < numbers.length; i++) {
  if (isPrime(numbers[i])) {
    // console.log(numbers[i]);
    total += number[i];
    count++;
  }
}

if (count > 0) {
  avg = total / count;
  console.log(`Trung bình cộng ${count} số nguyên tố là: ${avg}`);
} else {
  console.log("Không có số nguyên tố");
}
