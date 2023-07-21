// Write a program to check whether a student has passed or failed in a subject after he or she enters their mark (pass mark for a subject is 50 out of 100).
// Program should accept an input from the user and output a message as “Passed” or “Failed”

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function checkPass() {
  let mark: number;
  consoleInput.question("Enter your mark: ", (input) => {
    mark = parseFloat(input);
    if (mark >= 50) {
      console.log("Congratulations, you have passed");
    } else console.log("Sorry, but you have failed in this subject");
    consoleInput.close();
  });
}
checkPass();
