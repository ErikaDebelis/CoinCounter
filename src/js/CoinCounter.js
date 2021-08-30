export const coinCounter = (dollarAmt, i = 0, coinArray= []) => {
  const coins = [25, 10, 5, 1];
  console.log("whattttt amt", dollarAmt);
  let newDollarAmt = dollarAmt * 100;
  console.log("line 2 dollar amt", dollarAmt);
  console.log("line 4 new dollar amt", newDollarAmt);

  if (newDollarAmt > 0) {
    if (newDollarAmt >= coins[i]) {
      let updatedNewDollarAmt = (newDollarAmt -= coins[i]);
      let changeTakenOutAmt = coins[i];
      let newCoinArray = coinArray.concat(changeTakenOutAmt);
      console.log("is this working?", updatedNewDollarAmt);
      return coinCounter(updatedNewDollarAmt, i, newCoinArray);
    } else {
      return coinCounter(dollarAmt, i += 1, coinArray);
    }
  } else {
    let quarters = coinArray.filter(element => element === 25);
    let dimes = coinArray.filter(element => element === 10);
    let nickels = coinArray.filter(element => element === 5);
    let pennies = coinArray.filter(element => element === 1);

    return `This would be ${quarters.length} quarters, ${dimes.length} dimes, ${nickels.length} nickels, and ${pennies.length} pennies`;
  }
};


// coinCounter(updatedNewDollarAmt, i, newCoinArray);