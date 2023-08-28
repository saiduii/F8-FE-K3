var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];
var result = createCustomers(customers);

function createCustomers(customers) {
  var newCustomer = customers;
  newCustomer.sort(function (index, values) {
    return index.age - values.age;
  });
  newCustomer.forEach(function (total) {
    var fullName = total.name.split(" ");
    var shortName = fullName[0] + " " + fullName[fullName.length - 1];
    total.shortName = shortName;
  });
  return newCustomer;
}
console.log(result);
