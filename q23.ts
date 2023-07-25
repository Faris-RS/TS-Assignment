// Read a 2D array from user and display it

import * as readline from "readline";

class TwoDArray {
  private numRows: number;
  private numCols: number;
  private array: number[][];

  constructor(numRows: number, numCols: number) {
    this.numRows = numRows;
    this.numCols = numCols;
    this.array = [];
  }

  async getArrayValues(rl: readline.Interface): Promise<void> {
    console.log("Enter the array values seperated by space:");
    for (let i = 0; i < this.numRows; i++) {
      const rowValues = await this.getInput(rl);
      const parsedRow = rowValues
        .split(/\s+/)
        .map((value) => parseInt(value, 10));
      this.array.push(parsedRow);
    }
  }

  displayArray(): void {
    console.log("Array elements are:");
    for (let i = 0; i < this.numRows; i++) {
      console.log(this.array[i].join("\t"));
    }
  }

  private getInput(rl: readline.Interface): Promise<string> {
    return new Promise((resolve) => {
      rl.on("line", (input) => {
        resolve(input);
      });
    });
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Enter the size of array (rows and columns):");
  const numRows = parseInt(await getInput(rl), 10);
  const numCols = parseInt(await getInput(rl), 10);

  const arrayObj = new TwoDArray(numRows, numCols);
  await arrayObj.getArrayValues(rl);
  arrayObj.displayArray();

  rl.close();
}

async function getInput(rl: readline.Interface): Promise<string> {
  return new Promise((resolve) => {
    rl.on("line", (input) => {
      resolve(input);
    });
  });
}

main();
