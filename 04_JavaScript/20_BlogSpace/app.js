// const submitBtn = document.querySelector("#submit")
const postTitle = document.querySelector("#post_title");
const postBody = document.querySelector("#post_body");

let postArray = [];
const renderPost = function () {
  let html = "";
  for (let post of postArray) {
    html += `
      <div class="mt-4  ">

          <h2 class="text-lg font-semibold">${post.title}</h2>
          <p class="mt-2">${post.body}</p>
          <hr class="mt-3 border-gray-500 " />
          </div>
      `;
  }
  document.getElementById("blogs_el").innerHTML = html;
};

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    postArray = data.slice(0, 5);
    renderPost();

    // another approach
    // const posts = dataArr.map((post) => {
    //   return `<div>
    //         <h1>${post.title}</h1>
    //         <p>${post.body}</p>
    //     </div>`;
    // });
    // document.getElementById("blogs_el").innerHTML = posts;
  });

document.querySelector("#new_post").addEventListener("submit", (event) => {
  const data = {
    title: postTitle.value,
    body: postBody.value,
  };
  console.log(data);
  event.preventDefault();

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      postArray.unshift(data);
      renderPost();

      // reset form
      document.getElementById("new_post").reset()
      // or
      // postTitle.value = ""
      // postBody.value = ""
    });
});
