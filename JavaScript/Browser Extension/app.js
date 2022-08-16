const save_btn = document.querySelector(".input_btn");
const delete_btn = document.querySelector(".delete_btn");
const user_input = document.querySelector(".input_el");
const list = document.querySelector(".list");

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
  myLeads= leadsFromLocalStorage;
  renderLeads();
}

console.log(leadsFromLocalStorage);

function save() {
  let newLead = user_input.value;
  myLeads.push(newLead);
  console.log("Button Clicked!!!", myLeads);
  user_input.value = "";
  list.textContent = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
}

function renderLeads() {
  let listItems = "";

  for (i = 0; i < myLeads.length; i++) {
    //  using textContent renders as simple text
    // list.textContent += myLeads[i] + '\n';

    // using inner html to render in li
    // list.innerHTML += "<li>" + myLeads[i] + "</li>";

    //  using createElement to create a li tag
    // const li = document.createElement('li');
    // li.textContent = myLeads[i];
    // list.appendChild(li);

    listItems += `<li> 
        <a target="_blank" href=${myLeads[i]}> ${myLeads[i]}  </a> 
        </li>`;

    // console.log(myLeads[i]);
  }
  list.innerHTML = listItems;
}

delete_btn.addEventListener("dblclick", () => {
  // console.log('clicked');
  localStorage.clear();

  myLeads = []; 
  renderLeads(); 

  // or
  // list.textContent = '';

} )


save_btn.addEventListener("click", save);
