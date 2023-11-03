// fake api
async function fetchData(limit, offset) {
  const response = await fetch(`https://glht6v-8080.csb.app/posts`);
  const data = await response.json();
  // response api trả vể
  // data có dạng array nên forEach lấy ra từng phần tử trong array đấy
  data.forEach((item) => {
    container.innerHTML += ` <div class="blog">
        <div class="title"><a href="#">${item.title}</a></div>
        <center><img src="${item.img}"></center>
        <div class="content">${item.content}</div>
      </div>`;
  });
}
// Chạy 5 data trên 1 trang
fetchData(5, 1);
var container = document.querySelector("#container");
console.log("aa");

document.addEventListener("scroll", (event) => {
  console.log("aa");
});
