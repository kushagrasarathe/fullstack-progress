function generateHashtag(str) {

    if (str.trim() === '') {
        return false;
    } else {
        const camelCase = str.split(' ').map(word => word.charAt(0).toUpperCase()+ word.slice(1) ).join('').trim();
        hash = `#${camelCase}`
        return hash.length > 140  ? false : hash 
    
    }    
    }