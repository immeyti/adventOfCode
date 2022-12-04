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
  
    let rucksacks = originalData.split("\n"); // Removing newlines 
    let prioritiesSum = 0;
    let groupedRucksacks = [];

    while (rucksacks.length > 0) {
      groupedRucksacks.push(rucksacks.slice(0, 3));
      rucksacks = rucksacks.slice(3);
    }

    groupedRucksacks.map((rucksacks) => {
        const strLength = rucksacks.length;
        const firstElvRucksack = findUnique(rucksacks[0]);
        const secondElvRucksack = findUnique(rucksacks[1]);
        const thirdElvRucksack = findUnique(rucksacks[2]);
        let duplicated = ''

        firstElvRucksack.split('').forEach(char => {
            if (secondElvRucksack.includes(char) && thirdElvRucksack.includes(char)) {
                duplicated = char;
                return;
            }
        })

        prioritiesSum += priorities.indexOf(duplicated) + 1;
       
    })

    console.log(prioritiesSum);
});