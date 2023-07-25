// Program to calculate height

import * as readline from "readline";

function checkHeight(my_height: number): void {
  if (isNaN(my_height)) {
    throw new Error("notANumberError");
  } else if (my_height > 200) {
    throw new Error("HugeHeightError");
  } else if (my_height < 1) {
    throw new Error("TinyHeightError");
  } else {
    console.log(my_height);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(prompt: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input.trim());
    });
  });
}

async function main() {
  try {
    const inputHeight = parseFloat(await getUserInput("Enter the height: "));

    console.log("\nResult:");
    checkHeight(inputHeight);
  } catch (err) {
    console.log(err.message);
  } finally {
    rl.close();
  }
}

main();
