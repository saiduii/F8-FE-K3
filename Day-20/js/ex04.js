var data = [
  {
    image: "https://picsum.photos/200/300/?blur",
    title: "Javascript là bạn không phải kẻ thù ",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugiatillo quaerat suscipit? Placeat vel, at, quam recusandae nisi numquamnesciunt debitis adipisci quae beatae labore harum architecto reiciendisveniam aut ratione ullam dolores eius sunt ea molestias? Suscipit.",
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    title: "Hãy thấu hiểu Javascript",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugiatillo quaerat suscipit? Placeat vel, at, quam recusandae nisi numquamnesciunt debitis adipisci quae beatae labore harum architecto reiciendisveniam aut ratione ullam dolores eius sunt ea molestias? Suscipit.",
  },
  {
    image: "https://picsum.photos/200/300/?blur",
    title: "Bằng cách nói chuyện cùng Javascript nhiều hơn",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi fugiatillo quaerat suscipit? Placeat vel, at, quam recusandae nisi numquamnesciunt debitis adipisci quae beatae labore harum architecto reiciendisveniam aut ratione ullam dolores eius sunt ea molestias? Suscipit.",
  },
];

const item = document.getElementById("list-item");

const wrapper = data.map(
  (value) =>
    `<div class="item">
        <img src="${value.image}"> 
        <div class="content">
            <h2>${value.title}</h2> 
            <p>${value.content}</p>
        </div>
    </div>`
);

item.innerHTML = wrapper.join("");
