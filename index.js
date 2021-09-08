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

function getAllSpaceProbe(line) {
  return line.filter((item, index) => {
    if (index > 0) {
      return item;
    }
  });
}

function getSeparateSpaceProbe(probes) {
  let results = [];

  while (probes.length) {
    results.push(probes.splice(0, 2));
  }
  return results.map((item) => {
    const coordinate = item[0].split(" ");
    return {
      x: Number(coordinate[0]),
      y: Number(coordinate[1]),
      initialDirection: coordinate[2].toUpperCase(),
      movements: item[1].toUpperCase().split(""),
    };
  });
}

function exploringMars(probes, rightCoordinate) {
  let directions = ["N", "W", "S", "E"];
  let prints = [];
  let finalCoordinate = [];
  let finalResults = [];

  probes.forEach((probe) => {
    let currentDirection = directions.indexOf(probe.initialDirection);

    for (i = 0; i < probe.movements.length; i++) {
      let move = probe.movements[i];
      let isNorthAndCoorYDiffRightCoorY = currentDirection === 0 && probe.y != rightCoordinate.y;
      let isWestAndCoorXGreaterThanZero = currentDirection === 1 && probe.x > 0;
      let isSouthAndCoorYGreaterThanZero = currentDirection === 2 && probe.y > 0;
      let isEastAndCoorXDiffRightCoorX = currentDirection === 3 && probe.x != rightCoordinate.x;

      switch (move) {
        case "L":
          currentDirection = (currentDirection + 1) % 4;
          break;
        case "R":
          currentDirection = (4 + currentDirection - 1) % 4;
          break;
        case "M":
          if (isNorthAndCoorYDiffRightCoorY) {
            probe.y++;
          } else if (isWestAndCoorXGreaterThanZero) {
            probe.x--;
          } else if (isSouthAndCoorYGreaterThanZero) {
            probe.y--;
          } else if (isEastAndCoorXDiffRightCoorX) {
            probe.x++;
          }
          break;
        case "P":
          prints.push({
            x: probe.x,
            y: probe.y,
            direction: directions[currentDirection],
          });
          break;
        default:
          break
      }
    }
    finalCoordinate.push(probe.x, probe.y, directions[currentDirection]);
    while (finalCoordinate.length) {
      finalResults.push(finalCoordinate.splice(0, 3));
    }
  });

  return finalResults;
}

function setOutputLines(fileName, movingSpaceProbe) {
  var file = fs.createWriteStream(fileName);
  file.on("error", function (err) {
    console.log(err);
  });
  movingSpaceProbe.forEach(function (probe) {
    file.write(probe.join(", ") + "\n");
  });
  file.end();
}

const inputLines = getInputLines("./inputs/input.txt");
const topRightCoordinate = getTopRightCoordinates(inputLines[0]);
const allSpaceProbe = getAllSpaceProbe(inputLines);
const separatedSpaceProbe = getSeparateSpaceProbe(allSpaceProbe);
const movingSpaceProbe = exploringMars(separatedSpaceProbe, topRightCoordinate);
const outputLines = setOutputLines("./outputs/output.txt", movingSpaceProbe);

module.exports = { exploringMars };