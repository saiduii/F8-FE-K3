var price = 12000;

Number.prototype.getCurrency = function (currency) {
  return this.toLocaleString() + " " + currency;
};
console.log(price.getCurrency("đ"));
