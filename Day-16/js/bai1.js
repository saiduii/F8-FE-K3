var km = 20;
var price1 = 15000;
var price2 = 13500;
var price3 = 11000;
var discount = 10;

var cost;

if (km <= 1) {
  cost = km * price1;
} else {
  if (km <= 5) {
    cost = 1 * price1 + (km - 1) * price2;
  } else {
    cost = 1 * price1 + (5 - 1) * price2 + (km - 5) * price3;
  }
}
