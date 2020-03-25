function calculateSupply(age, amountperday) {
    let maxAge = 75;
    let totalNeeded = (amountperday * 365) * (maxAge - age);
    let message = 'You will need ' + totalNeeded + ' You will need NN to last you until the ripe old age of X" ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);