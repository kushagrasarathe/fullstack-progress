function getDiceRollArray(diceCount) {
    // const dices = []

    return new Array(diceCount).fill(0).map(() => {
        return (Math.floor(Math.random() * 6 + 1))
    })

    // for ( let i =0; i < diceCount; i++){
    //     dices.push(Math.floor(Math.random() * 6 + 1))
    // }    
    // return dices
}

function getDicePlaceholderHtml(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return `<div class="placeholder-dice"></div>`
    }).join('')
}

export { getDiceRollArray, getDicePlaceholderHtml}