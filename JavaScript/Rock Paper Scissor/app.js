const rock_btn = document.querySelector(".rock ");
const paper_btn = document.querySelector(".rock ");
const scissor_btn = document.querySelector(".rock ");

const computer_turn = () => {
    let choice = ['rock', 'paper', 'scissor'];
    let random_num = Math.floor( Math.random() * 3);
    return random_num;
}