// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints

//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// Sample Output

// 3

// Pseudo:
// Go through Array
// Take each value and compare it to the next
// If the value i've taken is === to the next in the array
// Assign it to a variable

// Pseudo:
// Make a key of unique numbers
// Go through array
// Every time we hit a new number we'll add it to that numbers value
// Divided all the numbers by two and floor it to get the pairs
// Total all the pairs
function sockMerchant(size, sockArray) {
  // console.log("Size:", size);
  // console.log("Socks:", sockArray);
  // Get A Key Of Unique Numbers
  const uniqueArray = sockArray.filter((value, index, self) => self.indexOf(value) === index);
  const uniqueSockKey = {};

  // console.log(uniqueArray);
  for (let i = 0; i < uniqueArray.length; i++) {
    uniqueSockKey[uniqueArray[i]] = 0;
  }

  // We want to go through each socks and add one to the key
  sockArray.forEach(element => {
    uniqueSockKey[element] += 1;
  });

  let pairs = [];
  for (const key in uniqueSockKey) {
    pairs.push(Math.floor(uniqueSockKey[key] / 2));
  }

  const sumWithInitial = pairs.reduce((accumulator, currentValue) => accumulator + currentValue);

  console.log(sumWithInitial, " pairs");
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

