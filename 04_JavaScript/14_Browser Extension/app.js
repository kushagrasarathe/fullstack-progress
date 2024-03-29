const save_btn = document.querySelector(".input_btn");
const savetab_btn = document.querySelector(".save_btn");
const delete_btn = document.querySelector(".delete_btn");
const user_input = document.querySelector(".input_el");
const list = document.querySelector(".list");

let myLeads = [];


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

function saveTab() {

  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    console.log("tabs")
    let url = tabs[0].url;
    myLeads.push(url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads); 
  } )


}

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

console.log(leadsFromLocalStorage);

function save() {
  let newLead = user_input.value;
  myLeads.push(newLead);
  console.log("Button Clicked!!!", myLeads);
  user_input.value = "";
  list.textContent = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
}

function render(leads) {
  let listItems = "";

  for (i = 0; i < leads.length; i++) {
    listItems += `<li> 
        <a target="_blank" href=${leads[i]}> ${leads[i]}  </a> 
        </li>`;

    // console.log(leads[i]);

    //  using textContent renders as simple text
    // list.textContent += leads[i] + '\n';

    // using inner html to render in li
    // list.innerHTML += "<li>" + leads[i] + "</li>";

    //  using createElement to create a li tag
    // const li = document.createElement('li');
    // li.textContent = leads[i];
    // list.appendChild(li);
  }
  list.innerHTML = listItems;
}

delete_btn.addEventListener("dblclick", () => {
  // console.log('clicked');
  localStorage.clear();

  myLeads = [];
  render(myLeads);

  // or
  // list.textContent = '';
});

save_btn.addEventListener("click", save);
savetab_btn.addEventListener("click", saveTab);
