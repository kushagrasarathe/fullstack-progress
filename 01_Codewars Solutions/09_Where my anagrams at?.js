function anagrams(word, words) {
    return words.filter( x => {
      return x.split('').sort().join('') === word.split('').sort('').join('')
    })
  }