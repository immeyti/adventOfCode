const fs = require('fs');

fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
    if (err) {
      console.error(err);
      return;
    }
  
    const pairsIdRang = originalData.split("\n"); // Removing newlines 
    let uniq = 0;

    pairsIdRang.forEach(pair => {
        const extractedPair = pair.split(',').reduce((accumulator, currentValue) => {
            const ids = currentValue.split('-');
            accumulator.push({ start: Number(ids[0]), end: Number(ids[1]) });
            return accumulator;
        }, []);
        
        const firsElv = extractedPair[0];
        const secondElv = extractedPair[1];
        if (firsElv.end < secondElv.start || secondElv.end < firsElv.start) {
            uniq += 1;
            console.log(extractedPair);
        }
    });

    console.log(uniq, pairsIdRang.length - uniq);
});