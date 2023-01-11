let deckId;
// let result = "";
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawBtn = document.getElementById("draw-cards");
const winner = document.getElementById("winner");

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            deckId = data.deck_id;
        });
}

newDeckBtn.addEventListener("click", handleClick);

drawBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then((res) => res.json())
        .then((data) => {
            // data.cards.map( (card) =>{
            //     const cardImg = card.image
            //     document.getElementById("cards").innerHTML += `<img src=${cardImg} />`
            // } )
            cardsContainer.children[0].innerHTML = `
            <img class="card-img" src=${data.cards[0].image} />
            `;
            cardsContainer.children[1].innerHTML = `
            <img class="card-img" src=${data.cards[1].image} />
            `;
            chooseWinner(data.cards[0], data.cards[1]);
        });
});

//  choose winner function

function chooseWinner(card1, card2) {
    let result;
    const cardValues = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "JACK",
        "QUEEN",
        "KING",
        "ACE",
    ];

    const card1Index = cardValues.indexOf(card1.value);
    const card2Index = cardValues.indexOf(card2.value);
    console.log("card 1:", card1Index);
    console.log("card 2:", card2Index);
    card1Index > card2Index
        ? (result = "Card-1 is winner")
        : card2Index > card1Index
            ? (result = "Card-2 is winner")
            : (result = "It's a tie");
    winner.innerHTML = `
        <h2>${result}</h2>
    `;
    return result;
}

// const card1Obj = {
//     value: "ACE"
// }
// const card2Obj = {
//     value: "KING"
// }
