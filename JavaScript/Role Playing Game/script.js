import { characterData } from './data.js'
import { getDiceRollArray } from './utils.js'
import Player from './character.js'


function attack() {
    // console.log('attack button working')
    // getDiceRollArray()
    hero1.getDiceHtml()
    hero2.getDiceHtml()

    hero1.takeDamage(hero2.currentDiceScore)
    hero2.takeDamage(hero1.currentDiceScore)
    render()

}

function render() {
    document.getElementById('hero1').innerHTML = hero1.getCharacterHtml()
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack)
const hero1 = new Player(characterData.player1)
const hero2 = new Player(characterData.player2)
render()