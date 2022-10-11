const player1 = {
    id: 'hero1',
    name: 'Abbas',
    position: 'Founder Anti Vanshika DAO',
    avatar: 'https://pbs.twimg.com/profile_images/1477626278580785159/6Ht4K6yu_400x400.jpg',
    health: 60,
    diceCount: 3
}

const player2 = {
    id: 'hero2',
    name: 'Vanshika',
    position: 'Founder Anti Abbas DAO',
    avatar: 'https://pbs.twimg.com/profile_images/1572132248140533760/6thFLwdb_400x400.jpg',
    health: 60,
    diceCount: 1
}

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}


function getDiceRollArray( diceCount ) {
    // const dices = []

    return new Array(diceCount).fill(0).map( () => {
        return( Math.floor(Math.random() * 6 + 1))
    })

    // for ( let i =0; i < diceCount; i++){
    //     dices.push(Math.floor(Math.random() * 6 + 1))
    // }    
    // return dices
}

getDiceRollArray(5)

function renderCharacter( data ) {
    
    const { id, name, position, avatar, health, diceCount } = data
    const diceHtml = getDiceHtml(diceCount)

    document.getElementById(id).innerHTML = `
    <div class="character-card">
        <h3 class="name"> ${name} </h3>
        <span class="designation">${position}</span>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
            ${diceHtml}
        </div>
    </div>`;
}

renderCharacter(player1);
renderCharacter(player2);



