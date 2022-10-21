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

    if(hero1.dead || hero2.dead){
        endGame();
    }

}

function endGame(){
    const endMessage = hero1.health === 0 && hero2.health === 0 ? 'Both players are dead' : hero1.health > 0 ? 'Hero1 wins' : 'Hero2 wins'
    // console.log("the Game is over !!!")
    console.log(endMessage)
}

function render() {
    document.getElementById('hero1').innerHTML = hero1.getCharacterHtml()
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
}

document.getElementById('attack-button').addEventListener('click', attack)
const hero1 = new Player(characterData.player1)
const hero2 = new Player(characterData.player2)
render()