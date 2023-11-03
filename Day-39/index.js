async function fetchData(limit, offset) {
  const response = await fetch(`https://glht6v-8080.csb.app/posts`);
  const data = await response.json();
  //   if (data.code === 200) {
  data.forEach((item) => {
    container.innerHTML += ` <div class="blog">
        <div class="title"><a href="#">${item.title}</a></div>
        <center><img src="${item.img}"></center>
        <div class="content">${item.content}</div>
      </div>`;
  });
  //   }
}

fetchData(5, 1);
var container = document.querySelector("#container");
