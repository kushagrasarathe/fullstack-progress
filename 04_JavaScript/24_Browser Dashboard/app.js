// function fetchImage() {
fetch(
  `https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature`,
  { method: "GET" }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.background = `url(${data.urls.full})`;
    document.body.style.backgroundSize = `100%`;
    document.getElementById(
      "author"
    ).innerHTML = `<a style="color: white" href=${data.user.links.html} target="_blank">By: ${data.user.name}</a>`;
  })
  .catch((err) => {
    // console.log(err)
    document.body.style.background = `url(https://images.unsplash.com/photo-1462400362591-9ca55235346a?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM3OTc3MzY&ixlib=rb-4.0.3&q=80)`;
    document.body.style.backgroundSize = `100%`;
    document.getElementById(
        "author"
      ).innerHTML = `<a style="color: white" href="https://unsplash.com/@cjoudrey" target="_blank">By: Christian Joudrey</a>`;
  });
// }

// fetchImage();
