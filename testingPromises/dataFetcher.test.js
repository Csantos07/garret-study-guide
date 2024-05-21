const getData = require('./dataFetcher');
const axios = require('')

let mockData = {

}

test('getData function returns the correct data', async () => {
  const data = await getData();
  expect(data).toBe('Mock data');
});

test('getData function returns a Promise', async () => {
  await expect(getData()).resolves.toBe('Mock data');
});

test('getData function handles errors correctly', async () => {
  // Simulate a rejected promise
  const mockError = new Error('Data retrieval failed');
  const getDataWithError = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(mockError); // Simulated error
      }, 1000);
    });
  };

  await expect(getDataWithError()).rejects.toThrow('Data retrieval failed');
});
