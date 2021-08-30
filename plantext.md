

// export const coinCounter = (dollarAmt, i = 0) => {
// const coins = [0.25, 0.1, 0.05, 0.01];
// if (dollarAmt > 0) {
//   if (dollarAmt >= coins[i]) {
//     let exchange = (dollarAmt -= coins[i]);
//     let changeTakenOutAmt = coins[i];

//   }
  
// }

// our function with parameters of dollar amount received, snf an empty coinArray to add our coins to a new object to keep track of them as we go along
// export const coinCounter = (dollarAmt, coinArray = []) => {

//   //defining each potential coin and their value in a map
//   const coins = [
//     {
//       name: 'quarter',
//       value: 25
//     },
//     {
//       name: 'dime',
//       value: 10
//     },
//     {
//       name: 'nickel',
//       value: 5
//     },
//     {
//       name: 'penny',
//       value: 1
//     }
//   ];
//   // changes dollarAmt to eliminate decimals in correlation to values defined for coins above
//   const newDollarAmt = dollarAmt * 100;
//   //our base case
//   if (newDollarAmt > 0) {
//     //if we can pay out way quarters we should do so and remove it from the total newDollarAmt
//     }
//       if (newDollarAmt % 25 === 0) {
//         let reducedDollarAmt = newDollarAmt - 25;
//         //after the newDollarAmt is reduced we add the name of the coin we deducted from the newDollarAmt to a newCoinArray to keep track of the coins
//         let newCoinArray = coinArray.concat("quarter");
//         return coinCounter(newDollarAmt, newCoinArray);
//       } else {
//         continue;
//       }
//       if (newDollarAmt % 10 === 0){
//         let reducedDollarAmt = newDollarAmt - 10;
//         let newCoinArray = coinArray.concat("dime");
//         return coinCounter(newDollarAmt, newCoinArray);
//       } else {
//         continue;
//       }
//       if (newDollarAmt % 5 === 0){
//         let reducedDollarAmt = newDollarAmt - 5;
//         let newCoinArray = coinArray.concat("nickel");
//         return coinCounter(newDollarAmt, newCoinArray);
//       } else {
//         let newCoinArray = coinArray.concat("penny" * newDollarAmt);
//         return coinCounter(newDollarAmt, newCoinArray);
//       }
//   }
// }





    // if (newDollarAmt % 25 === 0) {
    //   let reducedDollarAmt = newDollarAmt - 25;
    //   let newCoinArray = coinArray.concat("quarter");
    //   return `this would be ${newCoinArray[(i - 1)] + 1} `;
    // }
//   }
// }