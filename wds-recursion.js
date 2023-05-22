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

// sum range from 0 to n
function sumRangeRecursive(n, accum = 0) {
  if (n <= 0) {
    return accum;
  }
  return sumRangeRecursive(n - 1, accum + n);
}

// print all children from family tree
function printChildrenRecursive(t) {
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree);
