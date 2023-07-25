// Reverse the string and give the type. Handle the error also

const readline = require("readline");

function reverseString(my_string) {
  try {
    const reversedString = my_string.split("").reverse().join("");
    console.log(`Reversed string is : ${reversedString}`);
  } catch (err) {
    console.log(`Error : ${err.message}`);
  } finally {
    console.log(`Type of my_string is : ${typeof my_string}`);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the string to reverse: ", (my_string) => {
  console.log("\nResult:");
  reverseString(my_string);
  rl.close();
});
