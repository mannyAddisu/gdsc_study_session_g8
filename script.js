//Online session
//functions
function factorial(num) {
  let fact = 1;
  for (let i = num; i >= 1; i--) {
    fact *= i;
  }
  return fact;
}
// console.log(factorial(5));
//today's task
function printOdd() {
  const end = prompt("Enter a number: ");
  for (let i = 0; i <= end; i++) {
    if (i % 2 !== 0) console.log(i + " ");
  }
}
printOdd();
