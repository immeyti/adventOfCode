const fs = require('fs');

const opponentRock = "A";
const opponentPaper = "B";
const opponentScissors = "C";

const myRock = "X";
const myPaper = "Y";
const myScissors = "Z";

const rockScore = 1;
const paperScore = 2;
const scissorsScore = 3;

const winScore = 6;
const drawScore = 3;


fs.readFile('./inputs.txt', 'utf8', (err, originalData) => { // Reading the inputs
    if (err) {
      console.error(err);
      return;
    }
  
    var data = originalData.split("\n"); // Removing newlines 
    const rounds = data.map((i) => i.split(" "));

    let totalScore = 0;

    rounds.forEach((round) => {
        let state; 
        let shapeScore = 0;
        if (round[0] === opponentRock && round[1] === myScissors || 
            round[0] === opponentPaper && round[1] === myRock || 
            round[0] === opponentScissors && round[1] === myPaper) 
        {
            state = 'lose';
        } else if (round[0] === opponentRock && round[1] === myRock ||
            round[0] === opponentPaper && round[1] === myPaper ||
            round[0] === opponentScissors && round[1] === myScissors) 
        {
            state = 'draw';
        } else {
            state = 'win';
        }
        
        if (round[1] === myRock) {
            shapeScore = rockScore;
        } else if (round[1] === myPaper) {
            shapeScore = paperScore;
        } else if (round[1] === myScissors) {
            shapeScore = scissorsScore;
        }

        if (state === 'win') {
            totalScore += winScore + shapeScore
        } else if (state === 'draw') {
            totalScore += drawScore + shapeScore
        } else if (state === 'lose') {
            totalScore += shapeScore
        }
    })

    console.log(totalScore);
});