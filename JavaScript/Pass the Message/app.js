let msg = document.querySelector('#msg');
let delivered_msg = document.querySelector('.message');
let success = document.querySelector('.success');

function submit() {
    console.log(msg.value);
    if ( msg.value ) {
        delivered_msg.textContent = "Message Delivered";
    } else {
        delivered_msg.textContent = "Empty message, please enter mesasage above";
    }
    success.textContent = msg.value;
}

