//rest Operator
const sum = (...arg) => arg.reduce((accu, curVa) => accu + curVa);

console.log(sum(1, 2, 3, 4, 5));   // verwachte uitkomst: 15

// spread operator
const sum2 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const nummers = [1, 2, 3, 4];
console.log(sum2(...nummers));    // verwachte uitkomst: 10


