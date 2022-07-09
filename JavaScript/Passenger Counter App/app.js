
// declaring variable for passenger counts
let count = 0 ;

let passengers = document.getElementById("count") ;
let addBtn = document.getElementById('increment_btn')

function increase() {
    count += 1;
    passengers.innerHTML = count;
    console.log(count) ;
}

addBtn.addEventListener("click", increase)