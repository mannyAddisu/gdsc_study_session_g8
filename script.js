//Online session
//functions
'use strict';
// function factorial(num) {
//   let fact = 1;
//   for (let i = num; i >= 1; i--) {
//     fact *= i;
//   }
//   return fact;
// }
// // console.log(factorial(5));
/******today's task******/
// function printOdd() {
//   const end = prompt('Enter a number: ');
//   for (let i = 0; i <= end; i++) {
//     if (i % 2 !== 0) console.log(i);
//   }
// }
// printOdd();

//Session 3
/*********Counter *********/
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let click = true;
let count = 0;
increase.addEventListener('click', function () {
  if (click) {
    count += 1;
    document.getElementById('count').innerHTML = count;
  }
});
decrease.addEventListener('click', function () {
  if (click) {
    count -= 1;
    document.getElementById('count').innerHTML = count;
  }
});
let num1, num2, result;
