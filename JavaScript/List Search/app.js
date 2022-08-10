const input =  document.querySelector('.input');
const add_btn = document.querySelector('.add_btn')
const item = document.querySelector('.add')
const list = document.querySelector(".list");
let data = [];

const addToList = () => {
    let newItem = item.value;
    data.push(newItem);

      
    data.forEach((item)=>{
        let create_item = document.createElement("h1");
        create_item.innerText = item;
      list.appendChild(create_item);
    })  

    // create_item.appendChild(document.createTextNode(newItem));
    // list.appendChild(create_item);
    // console.log(data)
    // console.log(newItem);
}

const search = () => {
    console.log('test');
}

input.addEventListener( 'keyup', search);
add_btn.addEventListener( "click", addToList);