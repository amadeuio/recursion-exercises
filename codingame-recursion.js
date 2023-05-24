// Codingame JS Interview Prep: Recursion

/* Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all
numbers from 1 up to the number passed in. */

function sumRange(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  // recursive case
  return n + sumRange(n - 1);
}

/* Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent
is 0, return 1. */
