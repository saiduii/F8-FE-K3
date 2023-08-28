var data = [];
var dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
var dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
// var dataLogin = handleLogin("Nguyen Van B", "1234567");

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thông tin của bạn chưa đầy đủ. Vui lòng nhập lại. ");
    return;
  }
  var newData = {
    name: name,
    email: email,
    pass: password,
    role: "user",
  };
  data.push(newData);
  console.log("Đăng ký tài khoản thành công", newData);
}
console.log("Tài khoản đã đăng kí:", data);

//Em còn thiếu hàm login và điều kiện ạ
