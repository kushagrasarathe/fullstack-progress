import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

export default function Player(data) {
    // this.id = data.id
    // this.name = data.name
    // this.position = data.position
    // this.avatar = data.avatar
    // this.health = data.health
    // this.diceCount = data.diceCount

    Object.assign(this, data)

    this.getDiceHtml = function (diceCount) {
        this.currentDiceScore= getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map( (num) => {
            return `<div class="dice">${num}</div>`
        }).join('')
    } 
    
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.takeDamage = function(attackScoreArray) {
        const totalAttackScore = attackScoreArray.reduce( function(total, next) {
            return total + next
        } ) 

        this.health -= totalAttackScore

        // this.health <= 0 ? this.health = 0 : this.health
        if (this.health <= 0){
            this.dead = true   
            this.health = 0
        } 
        // console.log(`${totalAttackScore} `)
        // console.log(`${this.name}: ${attackScoreArray} `)
    }

    this.getCharacterHtml = function () {
        const { id, name, position, avatar, health, diceCount, diceArray } = this
        let diceHtml = this.getDiceHtml(diceCount)

        return `
            <div class="character-card">
            <h3 class="name"> ${name} </h3>
            <span class="designation">${position}</span>
                <img class="avatar" src="${avatar}" />
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`;
    }



}
