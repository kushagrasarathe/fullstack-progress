const item = document.querySelector(".add_item");
const add_btn = document.querySelector("#add_btn");
const display_btn = document.querySelector("#display_btn");
const search_input = document.querySelector(".user_input");
const list = document.querySelector(".list");
let data = [];
let newarr = [];

const addToList = () => {
  let newItem = item.value;
  data.push(newItem);
  console.log(data);
};

const displayData = () => {
  data.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
};

const search = () => {
  const userInputValue = search_input.value;
  const menu_list = document.getElementsByTagName("li");
  for (let i = 0; i < menu_list.length; i++) {
    if (menu_list[i].innerHTML.toLowerCase().includes(userInputValue)) {
      menu_list[i].style.display = "";
    } else {
      menu_list[i].style.display = "none";
    }
    console.log("test");
  }
};

search_input.addEventListener("keyup", search);
add_btn.addEventListener("click", addToList);
display_btn.addEventListener("click", displayData);
