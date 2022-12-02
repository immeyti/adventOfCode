const fs = require('fs');

const bubbleSort = (array) => {
  let done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] < array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
  if (err) {
    console.error(err);
    return;
  }

  let data = originalData.split("\n\n"); // Removing newlines 
  let calories = [];

  data.forEach((item) => {
    const _ = item.split("\n"); // Grouping calories per Elf
    const sum = _.reduce((a, b) => Number(a) + Number(b), 0); // sum of the calories
    calories.push(sum)
  })

  const sortedCalories = bubbleSort(calories) // also we can use sort function
  console.log(calories[0] + calories[1] + calories[2]);
});