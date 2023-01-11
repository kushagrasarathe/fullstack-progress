let deckId;
// let result = "";
let computerScore = 0
let myScore = 0
const compScore = document.getElementById("computer-score");
const userScore = document.getElementById("user-score");
const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawBtn = document.getElementById("draw-cards");
const winner = document.getElementById("winner");
const remainingCards = document.getElementById("remaining");
const finalResult = document.getElementById("final-result");

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then((res) => res.json())
        .then((data) => {
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
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
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
            // console.log(data)
            cardsContainer.children[0].innerHTML = `
            <img class="card-img" src=${data.cards[0].image} />
            `;
            cardsContainer.children[1].innerHTML = `
            <img class="card-img" src=${data.cards[1].image} />
            `;
            chooseWinner(data.cards[0], data.cards[1]);
            if (data.remaining === 0) {
                drawBtn.disabled = true
                if( computerScore > myScore ) {
                    finalResult.textContent = "Computer won the game"
                } else if( myScore > computerScore ) {
                    finalResult.textContent = "You won the game"
                }
            }

        });
});

//  choose winner function

function chooseWinner(card1, card2) {
    let result;
    const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING", "ACE",
    ];

    const card1Index = cardValues.indexOf(card1.value);
    const card2Index = cardValues.indexOf(card2.value);

    if (card1Index > card2Index) {
        result = "Computer wins"
        computerScore++
        compScore.textContent = `Computer Score : ${computerScore}`
    } else if (card2Index > card1Index) {
        result = "User Wins"
        myScore++
        userScore.textContent = `My Score : ${myScore}`
    } else {
        result = "It's a tie"
    }

    winner.innerHTML = `
        <h2>${result}</h2>
    `;
    console.log(computerScore, myScore);
    return result;
}
