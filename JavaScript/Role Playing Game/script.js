import {characterData} from './data.js'
import getDiceRollArray from './utils.js'
import Player from './character.js'

getDiceRollArray(5)

function render() {
    document.getElementById('hero1').innerHTML = hero1.getCharacterHtml()
    document.getElementById('hero2').innerHTML = hero2.getCharacterHtml()
}

const hero1 = new Player(characterData.player1)
const hero2 = new Player(characterData.player2)
render()