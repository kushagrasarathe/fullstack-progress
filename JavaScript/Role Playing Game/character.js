import getDiceRollArray from './utils.js'

export default function Player(data) {
    // this.id = data.id
    // this.name = data.name
    // this.position = data.position
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount

    Object.assign(this, data)

    this.getDiceHtml = function (diceCount) {
        return getDiceRollArray(diceCount).map(function (num) {
            return `<div class="dice">${num}</div>`
        }).join('')
    }


    this.getCharacterHtml = function () {
        const { id, name, position, avatar, health, diceCount } = this
        let diceHtml = this.getDiceHtml(diceCount)

        return `
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
}
