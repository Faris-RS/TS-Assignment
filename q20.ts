// Write a program to print the following pattern using for loop
// 1
// 2	3
// 4	5	6
// 7	8	9	10

let num: number = 0;
for (let i = 0; i < 4; i++) {
  let pattern: string = "";
  for (let j = 0; j <= i; j++) {
    pattern += num + 1 + " ";
    num++
  }
  console.log(pattern);
}
