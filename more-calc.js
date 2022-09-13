const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What would you like to calculate?", function (input) {
  const tokens = input.split(" ");

  const mathSymbol = tokens[0];
  const num1 = Number(tokens[1]);
  const num2 = Number(tokens[2]);

  console.log("mathSymbol", mathSymbol);
  console.log("num1", num1);
  console.log("num2", num2);
  //add numbers
  if (mathSymbol === "+") {
    console.log(num1 + num2);
  }
  //subtract numbers
  if (mathSymbol === "-") {
    console.log(num1 - num2);
  }
  //multiply numbers
  if (mathSymbol === "*") {
    console.log(num1 * num2);
  }
  //Divide numbers
  if (mathSymbol === "/") {
    console.log(num1 / num2);
  }
  //Square root numbers
  if (mathSymbol === "√") {
    console.log(Math.sqrt(num1));
    console.log(Math.sqrt(num2));
  }
  //Square numbers
  if (mathSymbol === "²"){
    console.log(Math.pow(num1, 2));
    console.log(Math.pow(num2, 2));
  }
  //Cube numbers
  if (mathSymbol === "³"){
    console.log(Math.pow(num1, 3));
    console.log(Math.pow(num2, 3));
  }
  // Remainder of two numbers
  if (mathSymbol === "%"){
    console.log(num1 % num2);
  }

  // This line closes the connection to the command line interface.
  reader.close();
});
