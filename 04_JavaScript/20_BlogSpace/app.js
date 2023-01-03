// const submitBtn = document.querySelector("#submit")
const postTitle = document.querySelector("#post_title");
const postBody = document.querySelector("#post_body");

fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
  .then((res) => res.json())
  .then((data) => {
    const dataArr = data.slice(0, 5);
    // const posts = dataArr.map((post) => {
    //   return `<div>
    //         <h1>${post.title}</h1>
    //         <p>${post.body}</p>
    //     </div>`;
    // });

    let html = "";
    for (let post of dataArr) {
      html += `
        <div class="mt-4  ">

            <h2 class="text-lg font-semibold">${post.title}</h2>
            <p class="mt-2">${post.body}</p>
            <hr class="mt-3 border-gray-500 " />
            </div>
        `;
    }
    // document.getElementById("blogs_el").innerHTML = posts;
    document.getElementById("blogs_el").innerHTML = html;
  });

document.querySelector("#new_post").addEventListener("submit", (event) => {
  const newPostObj = {
    title: postTitle.value,
    body: postBody.value,
  };
  console.log(newPostObj);
  event.preventDefault();
});
