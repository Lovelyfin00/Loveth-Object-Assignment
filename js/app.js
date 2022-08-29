// Method 1
function calculate () {
  let multiply = 4 * 5;
  console.log(multiply)

  let divide = 14 / 2;
  console.log(divide)
}

calculate()


// Method 2
function calculator (a, b, operand){
  if (operand === '+' || operand === "addition") return a + b;
  if (operand === '-' || operand === "subtract") return a - b;
}

console.log(calculator(10, 10, "+"));
