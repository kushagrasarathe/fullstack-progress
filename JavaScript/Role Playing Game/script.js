const player1_id = 'hero1';
const player1_name = 'Abbas';
const player1_position = 'Founder Anti Vanshika DAO';
const player1_avatar = 'https://pbs.twimg.com/profile_images/1477626278580785159/6Ht4K6yu_400x400.jpg';
const player1_health = '60' ;
const player1_score = 6 ;

const player2_id = 'hero2';
const player2_name = 'Vanshika';
const player2_position = 'Founder Anti Abbas DAO';
const player2_avatar = 'https://pbs.twimg.com/profile_images/1477626278580785159/6Ht4K6yu_400x400.jpg';
const player2_health = '60' ;
const player2_score = 6 ;

function renderCharacter( id, name, position, avatar, health, score ) {
    document.getElementById(`${id}`).innerHTML = `
    <div class="character-card">
        <h3 class="name"> ${name} </h3>
        <span class="designation">${position}</span>
        <img class="avatar" src="${avatar}" />
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container">
            <div class="dice"> ${score} </div>
        </div>
    </div>`;
}

renderCharacter( player1_id, player1_name, player1_position, player1_avatar, player1_health, player1_score);
renderCharacter( player2_id, player2_name, player2_position, player2_avatar, player2_health, player2_score);



