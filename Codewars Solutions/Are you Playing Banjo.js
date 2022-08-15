function areYouPlayingBanjo(name) {
    let arr = name.split('');
    let first_letter = arr[0];
    
    return( first_letter.toLowerCase() === 'r' ? name + " plays banjo" : name + " does not play banjo" )
   
    
  }