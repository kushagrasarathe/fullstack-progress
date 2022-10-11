const player1 = {
    id: 'hero1',
    name: 'Abbas',
    position: 'Founder Anti Vanshika DAO',
    avatar: 'https://pbs.twimg.com/profile_images/1477626278580785159/6Ht4K6yu_400x400.jpg',
    health: 60,
    score: [3 ,1 ,4 ],
    diceCount: 3
}

const player2 = {
    id: 'hero2',
    name: 'Vanshika',
    position: 'Founder Anti Abbas DAO',
    avatar: 'https://pbs.twimg.com/profile_images/1572132248140533760/6thFLwdb_400x400.jpg',
    health: 60,
    score: [ 2],
    diceCount: 1
}




function renderCharacter( data ) {
    
    const { id, name, position, avatar, health, score, diceCount } = data
    
    let diceHtml = ''

    for ( let i = 0 ; i < diceCount ; i++ ) {
        diceHtml += `<div class="dice">${score[i]}</div>`
    }

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



