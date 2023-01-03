
// declaring variable for passenger counts
let passengers = document.getElementById("count") ;
let count = 0 ;

let save_count = document.querySelector("#save");

let addBtn = document.getElementById('increment_btn')

function increase() {
    count += 1;
    passengers.innerText = count;
    // console.log(count) ;
}

function save() {
    let result = count + ' - ';
    // save_count.innerText += result; // innertext trims the space from result variable
    save_count.textContent += result;
    count = 0;
    passengers.innerText = count;
    console.log(count);
}



addBtn.addEventListener("click", increase)