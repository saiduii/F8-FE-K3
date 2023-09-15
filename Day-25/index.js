var btnLogin = document.querySelector("#btnLogin");
var btnRegister = document.querySelector("#btnRegister");
var loginForm = document.querySelector("#loginForm");
var registerForm = document.querySelector("#registerForm");
var blockForm = document.querySelector("#blockForm");
var loginBlockBtn = document.querySelector("#loginBlockBtn");
var formLogin = document.querySelector("#formLogin");
var formRegister = document.querySelector("#formRegister");
var emailLoginErr = document.querySelector("#emailLoginErr");
var passLoginErr = document.querySelector("#passLoginErr");
var nameRegisterErr = document.querySelector("#nameRegisterErr");
var emailRegisterErr = document.querySelector("#emailRegisterErr");
var passwordRegisterErr = document.querySelector("#passwordRegisterErr");
var inputEmailLogin = document.querySelector("#inputEmailLogin");
var inputPasswordLogin = document.querySelector("#inputPasswordLogin");
var inputNameRegister = document.querySelector("#inputNameRegister");
var inputEmailRegister = document.querySelector("#inputEmailRegister");
var inputPasswordRegister = document.querySelector("#inputPasswordRegister");
var showPasswordLogin = document.querySelector("#showPasswordLogin");
var showPasswordRegister = document.querySelector("#showPasswordRegister");

var arrayInputLogin = [inputEmailLogin, inputPasswordLogin];
var arrayInputRegister = [
  inputNameRegister,
  inputEmailRegister,
  inputEmailRegister,
];
loginBlockBtn.addEventListener("click", function () {
  blockForm.classList.toggle("d-none");
});
btnLogin.addEventListener("click", function () {
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  registerForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});
btnRegister.addEventListener("click", function () {
  btnLogin.classList.remove("active");
  btnRegister.classList.add("active");
  registerForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
});
formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
});
formRegister.addEventListener("submit", function (e) {
  e.preventDefault();
});

arrayInputLogin.forEach(function (input) {
  console.log(input);
  input.addEventListener("blur", function () {
    if (!input.value) {
      emailLoginErr.innerText = "Vui lòng nhập thông tin";
      passLoginErr.innerText = "Vui lòng nhập thông tin";
    }
  });
});
showPasswordLogin.addEventListener("click", function () {
  if (inputPasswordLogin.type === "password") {
    inputPasswordLogin.type = "text";
    showPasswordLogin.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    inputPasswordLogin.type = "password";
    showPasswordLogin.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
});

arrayInputRegister.forEach(function (index) {
  console.log(index);
  index.addEventListener("blur", function () {
    if (!index.value) {
      nameRegisterErr.innerText = "Vui lòng nhập thông tin";
      emailRegisterErr.innerText = "Vui lòng nhập thông tin";
      passwordRegisterErr.innerText = "Vui lòng nhập thông tin";
    }
  });
});
showPasswordRegister.addEventListener("click", function () {
  if (inputPasswordRegister.type === "password") {
    inputPasswordRegister.type = "text";
    showPasswordRegister.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  } else {
    inputPasswordRegister.type = "password";
    showPasswordRegister.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  }
});
