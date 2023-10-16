var counter = document.querySelector(".counter");
var btn = document.querySelector(".btn");
var load = 0,
  start = 30,
  bool = false;
var handleCount = function (startTime) {
  if (start > 0) {
    window.requestAnimationFrame(handleCount);
  }
  if (load <= startTime) {
    start--;
    counter.innerText = start;
    load = startTime + 1000;
  }
  if (start === 0) {
    bool = true;
    btn.removeAttribute("disabled");
  }

  btn.addEventListener("click", function () {
    if (bool) {
      window.location.href =
        "https://www.youtube.com/watch?v=NHE_0o6wXYE&list=LL&index=1";
    }
  });
};
handleCount();
