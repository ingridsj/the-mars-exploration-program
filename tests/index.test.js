const { exploringMars } = require("../index");

describe("checking the entries", () => {
  it("checking if it stops in the same place", () => {
    const input1 = [
      { x: 1, y: 1, initialDirection: "N", movements: ["R", "R", "R", "R"] },
    ];
    const input2 = { x: 1, y: 1 };
    const output = [[1, 1, "N"]];
    expect(exploringMars(input1, input2)).toEqual(output);
  });

  it("checking if it leaves the square", () => {
    const input1 = [
      { x: 1, y: 1, initialDirection: "N", movements: ["M", "M", "M", "M"] },
    ];
    const input2 = { x: 1, y: 1 };
    const output = [[1, 1, "N"]];
    expect(exploringMars(input1, input2)).toEqual(output);
  });

  it("making sure you take the picture at the right coordinates", () => {
    const input1 = [
      { x: 1, y: 1, initialDirection: "N", movements: ["M", "M", "M", "P"] },
    ];
    const input2 = { x: 1, y: 1 };
    const output = [[1, 1, "N"]];
    expect(exploringMars(input1, input2)).toEqual(output);
  });

  it("checking if it follows the command correctly", () => {
    const input1 = [
      {
        x: 1,
        y: 3,
        initialDirection: "W",
        movements: ["R", "R", "M", "R", "M", "M"]
      },
    ];
    const input2 = { x: 5, y: 5 };
    const output = [[2, 1, "S"]];
    expect(exploringMars(input1, input2)).toEqual(output);
  });
});
