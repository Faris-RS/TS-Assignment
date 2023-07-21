// Grades are computed using a weighted average. Suppose that the written test counts 70%, lab exams 20% and assignments 10%.

import * as readline from "readline";

const consoleInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateGrade() {
  let writtenTest: number = 0;
  let labExams: number = 0;
  let assignments: number = 0;
  consoleInput.question("Enter your score in written test: ", (test) => {
    writtenTest = parseFloat(test);
    consoleInput.question("Enter you score in lab exam: ", (lab) => {
      labExams = parseFloat(lab);
      consoleInput.question("Enter you assignment score: ", (assnmt) => {
        assignments = parseFloat(assnmt);
        const total: number =
          (writtenTest * 70) / 100 +
          (labExams * 20) / 100 +
          (assignments * 10) / 100;
        console.log(`Your overall grade is ${total}`);
        consoleInput.close();
      });
    });
  });
}
calculateGrade()