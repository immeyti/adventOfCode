const fs = require('fs');

const myShapes = [
    {
        name: "Rock",
        symbol: "X",
        score: 1,
        states: {
            win: "C",
            draw: "A",
            lose: "B"
        }
    },
    {
        name: "Paper",
        symbol: "Y",
        score: 2,
        states: {
            win: "A",
            draw: "B",
            lose: "C"
        }
    },
    {
        name: "Scissors",
        symbol: "Z",
        score: 3,
        states: {
            win: "B",
            draw: "C",
            lose: "A"
        }
    }
];

const winScore = 6;
const drawScore = 3;

const findResult = (oppShape, myShape) => {
    let state;
    switch (myShape) {
        case 'X':
            state = 'lose'
            break;
        case 'Y':
            state = 'draw'
            break;
        case 'Z':
            state = 'win'
            break;
        default:
            throw new Error('unknown shape')
    }

    const shape = myShapes.find((item) => {
        return item.states[state] === oppShape
    })

    return {
        shape,
        state
    }
}

const calculateScore = (result) => {
    let totalScore = 0;

    if (result.state === 'win') {
        totalScore += winScore + result.shape.score;
    } else if (result.state === 'draw') {
        totalScore += drawScore + result.shape.score;
    } else if (result.state === 'lose') {
        totalScore += result.shape.score;
    }

    return totalScore;
}

fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
    if (err) {
      console.error(err);
      return;
    }
  
    var data = originalData.split("\n"); // Removing newlines 
    const rounds = data.map((i) => i.split(" "));

    let totalScore = 0;

    rounds.forEach((round) => {
        const result = findResult(round[0], round[1]); 
        totalScore += calculateScore(result);
    })

    console.log(totalScore);
});