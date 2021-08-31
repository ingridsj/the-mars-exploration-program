/* const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); */
const fs = require("fs");

function getInputLines(fileName) {
  let inputLines = null;

  try {
    const data = fs.readFileSync(fileName, "utf8");
    inputLines = data.split("\r\n");
  } catch (err) {
    console.log(err);
  }

  return inputLines;
}

function getTopRightCoordinates(firstLine) {
  const coordinate = firstLine.split(" ");

  return {
    x: Number(coordinate[0]),
    y: Number(coordinate[1]),
  };
}

function getSpaceProbe(startingPosition, commands) {
  const startingPositionValues = startingPosition.split(" ");

  return {
    x: startingPositionValues[0],
    y: startingPositionValues[1],
    initialDirection: startingPositionValues[2],
    movements: commands,
  };
}

const inputLines = getInputLines("./inputs/input.txt");
const topRightCoordinate = getTopRightCoordinates(inputLines[0]);
const spaceProbe = getSpaceProbe(inputLines[1], inputLines[2]);

console.log(spaceProbe);


const answers = [];

function exploreMars(answers) {
  const [topRightCorner, startingPosition, commands] = answers;

  let rightCornerCoordinateX = topRightCorner.split(" ")[0];
  let rightCornerCoordinateY = topRightCorner.split(" ")[1];

  let coordinateX = startingPosition.split(" ")[0];
  let coordinateY = startingPosition.split(" ")[1];
  let pointedDirection = startingPosition.split(" ")[2];

  let directions = ["N", "W", "S", "E"];
  let currentDirection = directions.indexOf(pointedDirection);

  let prints = [];
  let finalCoordinate = [];

  for (let i = 0; i < commands.length; i++) {
    let move = commands[i];

    if (move === "R") {
      currentDirection = (currentDirection + 1) % 4;
    } else if (move === "L") {
      currentDirection = (4 + currentDirection - 1) % 4;
    } else if (move === "M") {
      if (currentDirection === 0 && coordinateY != rightCornerCoordinateY) {
        coordinateY++;
      } else if (
        currentDirection === 1 &&
        coordinateX != rightCornerCoordinateX
      ) {
        coordinateX++;
      } else if (currentDirection === 2 && coordinateY > 0) {
        coordinateY--;
      } else if (currentDirection === 3 && coordinateX > 0) {
        coordinateX--;
      }
    } else {
      prints.push({
        x: coordinateX,
        y: coordinateY,
        direction: directions[currentDirection],
      });
    }
  }

  finalCoordinate.push(coordinateX, coordinateY, directions[currentDirection]);

  console.log({
    prints,
    finalCoordinate,
  });
}

/* rl.question(
  ">> Enter the coordinates of the upper right corner:  ",
  (answer) => {
    answers.push(answer);

    rl.question(
      ">> Enter the space probe's initial coordinate and its direction:  ",
      (answer) => {
        answers.push(answer);

        rl.question(">> Enter the commands that the space probe should follow:  ", (answer) => {
          answers.push(answer);
          exploreMars(answers);
        });
      }
    );
  }
);

module.exports = { exploreMars }; */

//TO DO LIST
// [x] pegar os dados inseridos pelo usuário
// [x] apontar a sonda para uma direção
// [x] andar com a sonda movida pra direção apontada
// [x] tirar foto na coordenada e direção apontada
// [x] limitar o planalto retangular com o valor de superior direito
// [] tratar o formato de saída (final coordinate)
// [] inserir a próxima sonda no código, permitindo que a próximas saia APENAS
// depois que a primeira terminou o trabalho