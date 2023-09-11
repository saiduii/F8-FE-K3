var arr = function reverse(value) {
  return parseInt(value.toString().split("").reverse().join(""));
};
console.log(arr(12345));
