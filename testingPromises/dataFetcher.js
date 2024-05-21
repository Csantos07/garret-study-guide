
// dataFetcher.js
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I Did it"); // Simulated data retrieval
    }, 1000);
  });
}

module.exports = getData;
