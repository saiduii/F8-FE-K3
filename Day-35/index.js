var searchBox = document.querySelector(".search-box");
var btn = document.querySelector(".btn");
var action = document.querySelector(".action");
var result = document.createElement("div");
result.className = "result";

if ("webkitSpeechRecognition" in window) {
  var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "vi-VN";
  recognition.continuous = false;

  btn.addEventListener("click", function () {
    recognition.start();
    btn.textContent = "Listening...";
    action.innerHTML = "Hãy nói nội dung bạn muốn nói";
    result.remove();
  });

  recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript.replace(".", "");
    action.innerHTML = "Đã nói xong. Hy vọng kết quả như ý của bạn";
    result.innerText = `Đang thực hiện: ${transcript}`;
    searchBox.append(result);
    setTimeout(function () {
      if (handleVoice(transcript) === "Không thực hiện được yêu cầu") {
        result.innerText = `Không thực hiện được`;
      } else {
        result.innerText = `Đã thực hiện thành công`;
      }
    }, 1000);
  };

  recognition.onend = function () {
    btn.textContent = "Bấm vào đây để nói";
  };
  var handleVoice = function (text) {
    var txt = text.toLowerCase().trim();
    if (txt === "google") {
      window.open("https://google.com");
    } else if (txt === "facebook") {
      window.open("https://facebook.com");
    } else if (txt === "youtube") {
      window.open("https://youtube.com");
    } else if (txt === "google drive") {
      window.open("https://drive.google.com");
    } else if (txt === "google maps") {
      window.open("https://maps.google.com");
    } else if (
      txt.includes("chỉ đường") ||
      txt.includes("chỉ đường tới") ||
      txt.includes("đường tới") ||
      txt.includes("tới")
    ) {
      var map = txt
        .replace("chỉ đường", "")
        .replace("chỉ đường tới", "")
        .replace("đường tới", "")
        .replace("tới", "")
        .trim();
      window.open(`https://www.google.com/maps/search/${map}`);
    } else if (
      txt.includes("bài hát") ||
      txt.includes("mở bài hát") ||
      txt.includes("nghe bài hát")
    ) {
      var mp3 = txt
        .replace("bài hát", "")
        .replace("mở bài hát", "")
        .replace("nghe bài hát", "")
        .trim();
      window.open(`https://zingmp3.vn/tim-kiem/tat-ca?q=${mp3}`);
    } else if (
      txt.includes("video") ||
      txt.includes("mở video") ||
      txt.includes("xem video")
    ) {
      var videos = txt
        .replace("video", "")
        .replace("mở video", "")
        .replace("xem video", "")
        .trim();
      window.open(`https://www.youtube.com/results?search_query=${videos}`);
    } else {
      return "Không thực hiện được yêu cầu";
    }
  };
}
