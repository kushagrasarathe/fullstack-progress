const saveVideo = document.querySelector(".save_tab");
const deleteAll = document.querySelector(".delete_all");
const getTimeFrame = document.querySelector(".time_frame");
const savedList = document.querySelector(".saved_list");

let myVideos = [];

const dataFromLS = JSON.parse(localStorage.getItem("myVideos"));

function saveTab() {
  let userInput = getTimeFrame.value;
  const arr = userInput.split(".");
  console.log(arr);

  //   chrome.tabs.query(
  //     {
  //       active: true,
  //       currentWindow: true,
  //     },
  //     function (tabs) {
  //       console.log("tabs");
  //       let url = tabs[0].url;
  //       myVideos.push(url);
  //       localStorage.setItem("myVideos", JSON.stringify(myVideos));
  //       render(myVideos);
  //     }
  //   );

  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    function (tabs) {
      let url;
      if (userInput) {
        if (arr.length == 3) {
          url = tabs[0].url
            .toString()
            .concat(`&t=${arr[0]}h${arr[1]}m${arr[2]}s`);
        } else if (arr.length == 2) {
          url = tabs[0].url.toString().concat(`&t=${arr[0]}m${arr[1]}s`);
        } else if (arr.length == 1) {
          url = tabs[0].url.toString().concat(`&t=${arr[0]}s`);
        } else {
          url = "INVALID TIMESTAMP ENTERED";
        }
      } else {
        url = tabs[0].url;
      }
      myVideos.push(url);
      localStorage.setItem("myVideos", JSON.stringify(myVideos));
      render(myVideos);
    }
  );
}

// function saveTab() {
//   chrome.tabs.query(
//     {
//       active: true,
//       currentWindow: true,
//     },
//     function (tabs) {
//       console.log("tabs");
//       let url = tabs[0].url;
//       myVideos.push(url);
//       localStorage.setItem("myVideos", JSON.stringify(myVideos));
//       render(myVideos);
//     }
//   );
// }

if (dataFromLS) {
  myVideos = dataFromLS;
  render(myVideos);
}

console.log(dataFromLS);

function render(videos) {
  let listItems = "";
  for (i = 0; i < videos.length; i++) {
    listItems += `<li> 
        <a target="_blank" href=${videos[i]}> ${videos[i]}  </a> 
        </li>`;
  }
  savedList.innerHTML = listItems;
}

saveVideo.addEventListener("click", saveTab);
