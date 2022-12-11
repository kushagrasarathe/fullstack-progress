let state = false;

let lightsOnn = document.getElementById("onn");
let lightsOff = document.getElementById("off");

lightsOff.src = "./off.jpg"

function toggle() {
    state = !state;

    if( state === true ) {
        lightsOnn.style.display = "block";
        lightsOff.style.display = "none";
    } else {
        lightsOnn.style.display = "none";
        lightsOff.style.display = "block";
    }

    console.log(state);
}