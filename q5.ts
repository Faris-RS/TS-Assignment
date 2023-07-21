// Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// >=90 A, 80-89 B, 70-79 C, 60-69 D, 50-59 E, <50 Failed

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateGrade() {
  let mark: number;
  consoleInput.question("Please enter your mark: ", (input) => {
    mark = parseFloat(input);
    if (mark > 100) console.log("Please enter a valid mark");
    else if (mark >= 90)
      console.log("Congratulations, you have recieved an A Grade");
    else if (mark > 80 && mark < 89)
      console.log("You have recieved a B grade for this subject");
    else if (mark > 70 && mark < 79)
      console.log("You have recieved a C grade for this subject");
    else if (mark > 60 && mark < 69)
      console.log("You have recieved a D grade for this subject");
    else if (mark > 50 && mark < 59)
      console.log("You have recieved an E grade for this subject");
    else console.log("Sorry, but you have failed in this subject");
    consoleInput.close();
  });
}
calculateGrade();
