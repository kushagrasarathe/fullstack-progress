function DNAStrand(dna) {
    let letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
    let arr = [];
    for (let i=0; i < dna.length; i++) {
        arr[i] = letters[dna[i]];
    }
    return arr.join('');
}