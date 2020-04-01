//rest Operator
const sum = (...arg) => arg.reduce((accu, curVa) => accu + curVa);

console.log(sum(3, 5, 7, 2, 9));

// spread operator
const sum2 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

const nummers = [4, 7, 8, 9];
console.log(sum2(...nummers));


