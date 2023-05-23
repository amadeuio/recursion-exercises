// CS50 recursion examples

// factorial
function factorial(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  // recursive case
  return n * factorial(n - 1);
}

/* factorial(5)
  5 * facotorial(4)
    4 * facotorial(3)
      ... */

// fibonacci sequence
function fibonacci(n) {
  // two base cases
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}
