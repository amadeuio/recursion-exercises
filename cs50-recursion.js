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

// write a recursive function collatz(n) that calculates
// how many steps it takes to get to 1 if you start from n
// and recurse as indicated by the conjecture

// first find collatz sequence with recursive function
function collatzSequence(n) {
  // log each step
  console.log(n);

  // base case
  if (n === 1) {
    return 1;
  }

  // two recursive cases
  if (n % 2 === 0) {
    // n is even
    return collatzSequence(n / 2);
  } else {
    // n is odd
    return collatzSequence(3 * n + 1);
  }
}

// count steps until we reach 1
function collatz(n) {
  // base case
  if (n === 1) {
    return 0;
  }

  // two recursive cases
  if (n % 2 === 0) {
    // n is even
    return 1 + collatz(n / 2);
  } else {
    // n is odd
    return 1 + collatz(3 * n + 1);
  }
}
