const save_btn = document.querySelector('.input_btn');
const user_input = document.querySelector('.input_el');

let myLeads = [];

function save() {
    let newLead = user_input.value;
    myLeads.push(newLead)
    console.log('Button Clicked!!!', myLeads)
}

for ( i=0; i < myLeads.length; i++) {
    console.log(myLeads[i]);
}

save_btn.addEventListener("click", save);
