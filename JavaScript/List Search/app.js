const input =  document.querySelector('.input');
const add_btn = document.querySelector('.add_btn')
const item = document.querySelector('.add')
let data = [];

const addToList = () => {
    let newItem = item.value;
    data.push(newItem);
    console.log(data)
    console.log(newItem);
}

const search = () => {
    console.log('test');
}

input.addEventListener( 'keyup', search);
add_btn.addEventListener( "click", addToList);