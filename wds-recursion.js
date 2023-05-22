// Web Dev Simplified recursion exercises

// count down from n and console log each step
function countDownRecursive(n) {
  if (n <= 0) {
    console.log("Hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
