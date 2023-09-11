function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var color = randomColor();
console.log(color);
