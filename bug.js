const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate an unexpected error
      throw new Error('Something went wrong!');
    } else {
      res.send('Hello from Express!');
    }
  }, 1000); 
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});