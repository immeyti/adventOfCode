const fs = require('fs');

const findUnique = (str) => {
    let uniq = "";
     
    for (let i = 0; i < str.length; i++) {
      if (uniq.includes(str[i]) === false) {
        uniq += str[i];
      }
    }

    return uniq;
}

const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz".split('');
const priorities = [...lowercaseAlphabet, ...lowercaseAlphabet.map(char => char.toUpperCase())]

fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
    if (err) {
      console.error(err);
      return;
    }
  
    const rucksacks = originalData.split("\n"); // Removing newlines 
    let prioritiesSum = 0

    rucksacks.map((rucksack) => {
        const strLength = rucksack.length;
        const halfLength = strLength / 2;
        const firstCompartment = findUnique(rucksack.substring(0, halfLength));
        const secondCompartment = findUnique(rucksack.substring(halfLength));
        let duplicated = ''
        firstCompartment.split('').forEach(char => {
            if (secondCompartment.includes(char)) {
                duplicated = char;
                return;
            }
        })

        prioritiesSum += priorities.indexOf(duplicated) + 1
       
    })

    console.log(prioritiesSum)
});