const fs = require('fs');

fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
  if (err) {
    console.error(err);
    return;
  }

  let data = originalData.split("\n\n"); // Removing newlines 
  let max = 0;

  data.forEach((item) => {
    const _ = item.split("\n"); // Grouping calories per Elf
    const sum = _.reduce((a, b) => Number(a) + Number(b), 0); // sum of the calories
    max = sum > max ? sum : max; // Set as the maximum if it is
  })

  console.log(max);
});